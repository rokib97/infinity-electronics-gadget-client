import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-hamlet-05909.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  if (products.length === 0) {
    return <Loading />;
  }
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center my-5">Best Selling Products</h2>
      <div className="row g-4">
        {products &&
          products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
      </div>
      <div className="text-center">
        <Link to="/manageInventory">
          <button className="btn btn-primary mt-5 text-center">
            Manage Inventories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
