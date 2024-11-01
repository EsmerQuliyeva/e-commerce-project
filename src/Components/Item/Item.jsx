import React from "react";
import "./Item.css";

const Item = ({ image, name, detail, newPrice, oldPrice, percent }) => {
  return (
    <div className="item">
      <img src={image} alt="item" className="item-image" />
      <div className="details">
        <p className="item-name">{name}</p>
        <p className="detail">{detail}</p>
        <div className="item-prices">
          <div className="item-price-new">{newPrice ? `${newPrice}$` : ""}</div>
          <div className="item-price-old">{oldPrice ? `${oldPrice}$` : ""}</div>
        </div>
      </div>
      <div className="item-percent-detail">
        {percent ? (
          <span>
            {percent}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Item;
// suallarim
// sifirlar itir
// sekiller
