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
    <div className="container mt-3">
      <h2 className="text-center text-primary my-4">Manage Items</h2>
      <Table responsive>
        <thead className="mx-4">
          <tr className="text-center">
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Supplier</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <>
              <tr className="text-center" key={product._id}>
                <td>{product?.name}</td>
                <td>${product?.price}</td>
                <td>{product?.quantity}</td>
                <td>{product?.supplier}</td>
                <button className="btn m-2">Delete</button>
                <button className="btn">Update</button>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageInventories;
