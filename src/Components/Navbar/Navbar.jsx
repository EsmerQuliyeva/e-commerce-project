import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
// import "../../index.css"
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { dataContext } from "../../Pages/Context";
import { MdDelete } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleFav, setIsVisibleFav] = useState(false);
  const [menu, setMenu] = useState("Home");
  // const { addToCart } = useContext(dataContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsVisible(true);
  };
  const handleClose = () => {
    setIsVisible(false); // hide the div
  };
  const handletoAddFav = (e) => {
    e.stopPropagation();
    setIsVisibleFav(true);
  };
  const handleCloseFav = () => {
    setIsVisibleFav(false); // hide the div
  };
  const {
    cart,
    fav,
    getTotalPrice,
    removeFromCart,
    removeFromFav,
    clearCart,
    clearFav,
  } = useContext(dataContext);
  return (
    <div className="container">
      <nav>
        <div className="navbar-container">
          <div className="nav-image">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </div>
          <div className="nav-links-container">
            <ul className={`nav-links ${isMenuOpen ? "show-menu" : ""}`}>
              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    setMenu("/");
                  }}
                  className="nav-link"
                >
                  Home
                  {menu === "/home" ? <hr /> : <></>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  onClick={() => {
                    setMenu("/shop");
                  }}
                  className="nav-link"
                >
                  Shop
                  {menu === "/shop" ? <hr /> : <></>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => {
                    setMenu("/contact");
                  }}
                  className="nav-link"
                >
                  Contact
                  {menu === "/contact" ? <hr /> : <></>}
                </NavLink>
              </li>
            </ul>
            <button className="menu-btn" onClick={handleMenuToggle}>
              <CiMenuBurger />
            </button>
          </div>
          <div className="additionals">
            <button className="icon-btn">
              <FaRegUser className="addition-icon" />
            </button>
            <button className="icon-btn">
              <IoSearchOutline className="addition-icon" />
            </button>
            <button className="icon-btn">
              <CiHeart className="addition-icon" onClick={handletoAddFav} />
            </button>
            <div
              className="show-fav"
              style={{
                visibility: isVisibleFav ? "visible" : "hidden",
                opacity: isVisibleFav ? 1 : 0,
              }}
            >
              <h3>MY FAVORITES</h3>
              {fav.length === 0 ? (
                <p style={{ marginTop: "10px" }}>
                  {" "}
                  There is no favorite product
                </p>
              ) : (
                <>
                  <ul>
                    {fav.map((product, index) => (
                      <li
                        key={index}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          src={require(`../../assets/${product.image}`)}
                          alt={product.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                            borderRadius: "5px",
                            marginTop: "20px",
                          }}
                        />
                        <span style={{ fontSize: "20px", marginLeft: "5px" }}>
                          {product.name}
                        </span>{" "}
                        - <span>{product.newPrice}$</span>
                        <button
                          onClick={() => removeFromFav(product.id)}
                          style={{
                            marginLeft: "10px",
                            background: "transparent",
                            border: "none",
                            fontSize: "25px",
                            cursor: "pointer",
                            textAlign: "center",
                          }}
                        >
                          <MdDelete />
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={clearFav}
                    style={{
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      padding: "10px 20px",
                      fontSize: "14px",
                      borderRadius: "14px",
                      cursor: "pointer",
                      marginTop: "20px",
                    }}
                  >
                    Clean the favorites
                  </button>
                </>
              )}
              <IoIosCloseCircle
                style={{
                  position: "absolute",
                  right: "0px",
                  top: "27px",
                  fontSize: "19px",
                  cursor: "pointer",
                }}
                onClick={handleClose}
              />
              <IoIosCloseCircle
                style={{
                  position: "absolute",
                  right: "0px",
                  top: "27px",
                  fontSize: "19px",
                  cursor: "pointer",
                }}
                onClick={handleCloseFav}
              />
              {/* Səbətlə bağlı digər məlumatlar */}
            </div>
            <button
              className="icon-btn"
              onClick={handleAddToCart}
              // onClick={(e) => {
              //   e.stopPropagation();
              //   addToCart();
              // }}
            >
              <MdOutlineShoppingCart className="addition-icon" />
            </button>
            <div
              className="show"
              style={{
                visibility: isVisible ? "visible" : "hidden",
                opacity: isVisible ? 1 : 0,
              }}
            >
              <h3>CART LIST</h3>
              {cart.length === 0 ? (
                <p style={{ marginTop: "10px" }}>
                  {" "}
                  There is any product in your basket
                </p>
              ) : (
                <>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          src={require(`../../assets/${product.image}`)}
                          alt={product.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                            borderRadius: "5px",
                            marginTop: "20px",
                          }}
                        />
                        <span style={{ fontSize: "20px", marginLeft: "5px" }}>
                          {product.name}
                        </span>{" "}
                        - <span>{product.newPrice}$</span>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          style={{
                            marginLeft: "10px",
                            background: "transparent",
                            border: "none",
                            fontSize: "25px",
                            cursor: "pointer",
                            textAlign: "center",
                          }}
                        >
                          <MdDelete />
                        </button>
                      </li>
                    ))}
                  </ul>
                  <h2 style={{ marginTop: "20px" }}>
                    Total: {getTotalPrice()}$
                  </h2>
                  <button
                    onClick={clearCart}
                    style={{
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      padding: "10px 20px",
                      fontSize: "14px",
                      borderRadius: "14px",
                      cursor: "pointer",
                    }}
                  >
                    Clean the cart
                  </button>
                </>
              )}
              <IoIosCloseCircle
                style={{
                  position: "absolute",
                  right: "0px",
                  top: "27px",
                  fontSize: "19px",
                  cursor: "pointer",
                }}
                onClick={handleClose}
              />
              {/* Səbətlə bağlı digər məlumatlar */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
