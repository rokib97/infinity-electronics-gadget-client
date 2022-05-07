import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const valueRef = useRef(0);
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { _id, catagory, name, supplier, price, quantity, desc, img } = product;
  const updatedQuantity = parseInt(quantity) || 0;
  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, product]);
  const handleDelivered = () => {
    const data = updatedQuantity - 1;
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        quantity: data,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        toast.success("Delivery SuccessFull!");
      });
  };
  const handleReStock = () => {
    const value = parseInt(valueRef.current.value) + updatedQuantity;
    const url = `http://localhost:5000/product/${productId}`;
    if (value) {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          quantity: value,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);

          toast.success("Restock Successfull!");
        });
    }
  };
  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img className="w-75" src={img} alt="" />
        </div>
        <div className="col-lg-6">
          <h3>
            <span className="text-primary">Category: </span>
            <small>{catagory}</small>
          </h3>
          <p>Id: {_id}</p>
          <p>Product Name: {name}</p>
          <p>Description: {desc}</p>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity <= 0 ? "Sold Out" : quantity}</p>
          <p>Supplier Name: {supplier}</p>
          <button
            disabled={updatedQuantity <= 0 && true}
            onClick={handleDelivered}
            className="btn btn-primary mb-2"
          >
            Delivered
          </button>
          <br />
          <input
            required
            type="number"
            ref={valueRef}
            name="number"
            id=""
            className="w-25 mx-auto me-2 rounded-3 border-0 p-1"
          />

          <button
            onClick={handleReStock}
            className="btn btn-danger my-2 me-2 rounded-pill"
          >
            Restock
          </button>
          <br />
          <Link to="/manageInventory">
            <button className="btn btn-primary">Manage Inventories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
