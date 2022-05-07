import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";
const Product = ({ product }) => {
  const navigate = useNavigate();
  const { _id, catagory, name, supplier, price, quantity, desc, img } =
    product || {};
  const handleUseNavigate = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="single-product p-2">
        <img className="w-100 mx-auto rounded-4 p-4" src={img} alt="" />
        <div className="text-start p-4">
          <h5>
            <span className="text-primary">Category</span>: {catagory}
          </h5>
          <p>Product Name: {name}</p>
          <p>
            Description:
            <small>
              {desc.length > 100 ? desc.slice(0, 100) + "..." : desc}
            </small>
          </p>
          <p>Supplier: {supplier}</p>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
          <button
            onClick={() => handleUseNavigate(_id)}
            className="btn btn-primary rounded-pill"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
