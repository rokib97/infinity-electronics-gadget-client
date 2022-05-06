import React from "react";
import "./Product.css";
const Product = ({ product }) => {
  console.log(product);
  const { catagory, name, supplier, price, quantity, desc, img } = product;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="single-product p-3">
        <img className="w-100 h-100 mx-auto rounded-4 p-4" src={img} alt="" />
        <h5>Catagory: {catagory}</h5>
        <p>Product Name: {name}</p>
        <p>Description: {desc.slice(0, 100)}</p>
        <p>Supplier: {supplier}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default Product;
