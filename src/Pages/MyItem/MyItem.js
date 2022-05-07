import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import SingleItem from "../SingleItem/SingleItem";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/items?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user.email, items]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = items.filter((product) => product._id !== id);
            setItems(remaining);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-primary text-center my-5">
        My Items Product
      </h2>
      <div className="row g-4">
        {items.map((item) => (
          <SingleItem key={item._id} item={item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default MyItem;