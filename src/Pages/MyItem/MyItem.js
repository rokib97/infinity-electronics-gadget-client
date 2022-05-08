import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import SingleItem from "../SingleItem/SingleItem";
import "./MyItem.css";

const MyItem = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = `https://afternoon-hamlet-05909.herokuapp.com/items?email=${user?.email}`;

    try {
      fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setItems(data));
    } catch (error) {
      if (error.response.status === 403 || error.response.status === 403) {
        signOut(auth);
        navigate("/login");
      }
    }
  }, [user.email, items.at, navigate]);

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
        const url = `https://afternoon-hamlet-05909.herokuapp.com/product/${id}`;
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
    <div className="container mt-5 my-item">
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
