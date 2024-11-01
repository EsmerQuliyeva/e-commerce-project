import React, { useContext } from "react";
import "./AboutProduct.css";
import { useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { dataContext } from "../../../Pages/Context";

const AboutProduct = () => {
  const { id } = useParams();
  const { products, addToCart, addToFav } = useContext(dataContext);
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>məhsul tapilamdi!</div>;
  }

  return (
    <div className="container">
      <div className="about-product">
        <div className="about-product-right">
          <img
            src={require(`../../../assets/${product.image}`)}
            className="product-image"
            alt={product.name}
          />
        </div>
        <div className="about-product-left">
          <h3>{product.name}</h3>
          <p className="product-price">Price: {product.newPrice} $</p>
          <div className="review">
            <div className="stars">
              <ul className="stars-list">
                {[...Array(5)].map((_, index) => (
                  <li key={index}>
                    <CiStar className="star" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="customer-review">
              <span>5 customer review</span>
            </div>
          </div>
          <p className="product-info">{product.info}</p>
          <div className="sizes">
            <span>Size</span>
            <ul>
              {product.sizes.map((size, index) => (
                <li className="size" key={index}>
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <div className="colors">
            <ul>
              {product.colors.map((color, index) => (
                <li
                  className="color"
                  key={index}
                  style={{ backgroundColor: color }}
                ></li>
              ))}
            </ul>
          </div>
          <div className="other-details">
            <input type="number" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
                console.log(product);
              }}
            >
              Add to Cart
            </button>
            <button
              onClick={(e) => {
                addToFav(product);
              }}
            >
              Add to Fav
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
