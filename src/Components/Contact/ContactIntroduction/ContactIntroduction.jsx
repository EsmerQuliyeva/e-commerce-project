import React from "react";
import { Link } from "react-router-dom";
import "./ContactIntroduction.css";
import shop from "../../../assets/shop.png";
import { IoIosArrowForward } from "react-icons/io";

const ContactIntroduction = () => {
  return (
    <div className="container">
      <div className="shop-introduction">
        <div className="shop-picture">
          <img src={shop} alt="shop" />
        </div>
        <div className="shop-content">
          <h1>Contact</h1>
          <p>
            <Link to="/">Home</Link>
            <IoIosArrowForward style={{ fontSize:"12px"}}/>
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactIntroduction;
