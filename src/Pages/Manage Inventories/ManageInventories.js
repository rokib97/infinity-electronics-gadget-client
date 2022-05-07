import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageInventories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products?name=${"inventory"}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container mt-5">
      <Table size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Supplier</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product?.name}</td>
              <td>{product?.price}</td>
              <td>{product?.quantity}</td>
              <td>{product?.supplier}</td>
              <button
                className="btn"
                style={{ backgroundColor: "red", color: "white" }}
              >
                Delete
              </button>
              <button
                className="btn"
                style={{ backgroundColor: "green", color: "white" }}
              >
                Update
              </button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageInventories;
