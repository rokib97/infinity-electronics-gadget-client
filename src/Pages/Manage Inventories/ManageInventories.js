import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Shared/Loading/Loading";
import "./ManageInventory.css";
const ManageInventories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      `https://infinity-electronics-gadget-server.vercel.app/products?name=${"inventory"}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
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
        const url = `https://infinity-electronics-gadget-server.vercel.app/product/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  if (products.length === 0) {
    return <Loading />;
  }
  return (
    <div className="container mt-3 manage-inventory">
      <h2 className="text-center text-primary my-4">Manage Items</h2>
      <div className="row">
        <div className="col-lg-10 col-md-12 col-12 mx-auto">
          <Table responsive="sm">
            <thead className="">
              <tr className="text-center">
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr className="text-center" key={product._id}>
                  <td className="">{product?.name}</td>
                  <td>${product?.price}</td>
                  <td className="">{product?.quantity}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn text-white"
                      style={{ backgroundColor: "red" }}
                    >
                      Delete
                    </button>
                  </td>
                  {/* update button optional  */}
                  {/* <td>
                    <Link to={`/product/${product._id}`}>
                      <button
                        className="btn text-white"
                        style={{ backgroundColor: "blue" }}
                      >
                        Update
                      </button>
                    </Link>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="text-center">
            <Link to="/addItem">
              <button className="btn btn-primary">Add New Item</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInventories;
