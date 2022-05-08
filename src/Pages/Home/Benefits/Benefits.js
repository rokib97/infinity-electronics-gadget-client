import React from "react";
import communication from "../../../Images/communication.png";
import delivery from "../../../Images/delivery.png";
import discount from "../../../Images/discount.png";
import "./Benifits.css";
const Benefits = () => {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center my-5">
        Why Choose Infinity Electronics?
      </h2>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="text-center communication-details">
            <img src={communication} alt="" />
            <h3>Communictions</h3>
            <p>
              We always try to communicate our beloved customers.We beleive that
              communication is the key to success for any brand or company .We
              ensure every details of our product to our customers.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 ">
          <div className="text-center delivery-details">
            <img src={delivery} alt="" />
            <h3>Delivery</h3>
            <p>
              We always confirm the the delivery as soon as possible to our
              customers so that they can be happy at us. Also we provide as fast
              as possible delivery and quality is super of our every products.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 ">
          <div className="text-center discount-details">
            <img src={discount} alt="" />
            <h3>Discount</h3>
            <p>
              We offer occationally discount in festivals for our customers.By
              giving them offer we are very connected to them . We make sure the
              best quality products and make it available by giving offer to our
              customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
