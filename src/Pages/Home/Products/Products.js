import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center my-5">Our Latest Products</h2>
      <div className="row g-4">
        {products &&
          products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
      </div>
      <div className="text-center">
        <Link to="/manageInventory">
          <button className="btn btn-primary mt-4 text-center">
            Manage Inventories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
