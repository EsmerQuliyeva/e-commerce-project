import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ShopIntroduction.css";
import shop from "../../../assets/shop.png";
import { IoIosArrowForward } from "react-icons/io";

const ShopIntroduction = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="container">
      <div className="shop-introduction">
        <div className="shop-picture">
          <img src={shop} alt="shop" />
        </div>
        <div className="shop-content">
          <h1>Shop</h1>
          <p>
            <Link
              to="/"
              onClick={() => {
                setMenu("/");
              }}
              className={menu === "Home" ? "active-link" : ""}
            >
              Home
            </Link>

            <IoIosArrowForward style={{ fontSize:"12px"}} />
            <Link
              to="/shop"
              onClick={() => {
                setMenu("/shop");
              }}
              className={menu === "Shop" ? "active-link" : ""}
            >
              Shop
            </Link>

            {/* nece edim navbarda deyissin */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopIntroduction;
