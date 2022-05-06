import React, { useEffect, useState } from "react";
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
      <h2 className="fw-bold text-center">Our Latest Products</h2>
      <div className="row g-4">
        {products &&
          products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
      </div>
    </div>
  );
};

export default Products;
