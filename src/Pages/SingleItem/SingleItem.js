import React from "react";

const SingleItem = ({ item, handleDelete }) => {
  const { _id, catagory, name, supplier, price, quantity, desc, img } =
    item || {};

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="single-product py-4">
        <img className="w-100 mx-auto rounded-4 p-4" src={img} alt="" />
        <div className="text-start p-4">
          <h5>
            <span className="text-primary">Category</span>: {catagory}
          </h5>
          <p>Product Name: {name}</p>
          <p>
            Description:
            <small>
              {desc?.length > 50 ? desc.slice(0, 50) + "..." : desc}
            </small>
          </p>
          <p>Supplier: {supplier}</p>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-danger rounded-pill"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
