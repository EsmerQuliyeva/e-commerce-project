import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="container-footer">
      <div className="footer">
        <div className="first-footer">
          <h3>Funiro</h3>
          <p>
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA
          </p>
        </div>
        <div className="second-footer">
          <h4>Links</h4>
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => {
                  setMenu("/");
                }}
                className={menu === "Home" ? "active-link" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/shop"
                onClick={() => {
                  setMenu("/shop");
                }}
                className={menu === "Shop" ? "active-link" : ""}
              >
                Shop
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/contact"
                onClick={() => {
                  setMenu("/contact");
                }}
                className={menu === "Contact" ? "active-link" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="third-footer">
          <h4>Help</h4>
          <ul>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="fourth-footer">
          <h4 className="newsletter">Newsletter</h4>
          <input
            type="text"
            placeholder="Enter Your Email Adress"
            className="email-input"
          />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
