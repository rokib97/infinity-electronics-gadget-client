import React from "react";
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./FeatureProduct.css";

const FeatureProduct = ({ product }) => {
  const { catagory, name, price, quantity, ratings, img } = product || {};
  const number = parseInt(ratings);
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Card data-aos="zoom-in-up" className="p-2 card-details text-center">
        <Card.Img className="rounded-circle" variant="top" src={img} />
        <Card.Body className="card-body p-3 mt-4 text-dark rounded">
          <p className="text-primary">{catagory}</p>
          <Card.Title>{name}</Card.Title>
          <h6>Available: {quantity}</h6>
          <h6>Price: ${price}</h6>
          {[...Array(number)].map(() => {
            return (
              <FaStar key={Math.random()} className="text-warning"></FaStar>
            );
          })}
          <p className="text-dark fw-bold">{ratings}.00/5.00</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FeatureProduct;
