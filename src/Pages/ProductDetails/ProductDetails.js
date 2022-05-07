import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { _id, catagory, name, supplier, price, quantity, desc, img } =
    product || {};
  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);
  console.log(product);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <img src={img} alt="" />
        </div>
        <div className="col-lg-4 text-start">
          <h5>
            <span className="text-primary">Category</span> :{" "}
            <small>{catagory}</small>
          </h5>
          <p>Id: {_id}</p>
          <p>Product Name: {name}</p>
          <p>Description: {desc}</p>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
          <p>Supplier Name: {supplier}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
