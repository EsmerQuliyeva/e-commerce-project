import React from "react";
import "./Introduction.css";
import background from "../../../assets/interrior-background.png";
const Introduction = () => {
  return (
    <section>
      <div className="container">
        <div className="introduction">
          <div className="background">
            <img src={background} alt="interrior" className="background-img" />
          </div>
          <div className="discover-part">
            <span>New Arrival</span>
            <h1>Discover Our New Collection</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              libero ipsa molestiae expedita asperiores voluptas beatae nulla
              eius! Eaque, quaerat.
            </p>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
