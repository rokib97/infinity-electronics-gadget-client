import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMobile,
  FaSearchLocation,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../../Images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer-details">
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="d-flex justify-content-center align-items-center mt-5">
            <NavLink to="/" className="me-2">
              <img width={60} src={logo} alt="" />
            </NavLink>
            <h3 className="fw-bold header-title">Infinity Electronics</h3>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <NavLink className="link" to={"/"}>
              Home
            </NavLink>
            <NavLink className="link" to={"/blogs"}>
              Blogs
            </NavLink>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <NavLink className="link" to={"/manageInventory"}>
              Inventory
            </NavLink>
            <NavLink className="link" to={"/login"}>
              Login
            </NavLink>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="mt-5 d-flex justify-content-center align-items-center">
            <FaSearchLocation className="me-3 text-primary" size={30} />
            <h5>Dhaka,Bangladesh</h5>
          </div>
          <div className="mt-4 d-flex justify-content-center align-items-center">
            <FaMobile className="me-3 text-primary" size={30} />
            <h5>+8801613963635</h5>
          </div>
          <div className="mt-4 mb-5 d-flex justify-content-center align-items-center">
            <FaMailBulk className="me-3 text-primary" size={30} />
            <h5>infinity@gmail.com</h5>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="mt-5 text-center">
            <h3 className="fw-bold header-title">About Infinity Electronics</h3>
            <p>
              Infinity Electronics is the best place to get all the premium and
              qualityful products.We also make sure the quality and fast
              delivery of products to our customers.
            </p>
            <FaFacebook className="me-3 text-primary" size={30} />
            <FaInstagram className="me-3 text-primary" size={30} />
            <FaTwitter className="me-3 text-primary" size={30} />
            <FaLinkedin className="me-3 text-primary" size={30} />
            <FaYoutube className="me-3 text-primary" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
