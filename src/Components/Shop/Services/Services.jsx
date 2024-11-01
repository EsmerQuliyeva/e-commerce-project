import React from "react";
import "./Services.css";
import serviceFirst from "../../../assets/services/service1.png";
import serviceSecond from "../../../assets/services/service2.png";
import serviceThird from "../../../assets/services/service3.png";
import serviceFourth from "../../../assets/services/service4.png";

const Services = () => {
  return (
    <div className="service-container">
      <div className="service">
        <img src={serviceFirst} alt="trophy" />
        <div className="service-content">
          <p>High Quality</p>
          <span>crafted from top materials</span>
        </div>
      </div>
      <div className="service">
        <img src={serviceSecond} alt="warranty" />
        <div className="service-content">
          <p>Warranty Protection</p>
          <span>Over 2 years</span>
        </div>
      </div>
      <div className="service">
        <img src={serviceThird} alt="shipping" />
        <div className="service-content">
          <p>Free Shipping</p>
          <span>Order over 150$</span>
        </div>
      </div>
      <div className="service">
        <img src={serviceFourth} alt="support" />
        <div className="service-content">
          <p>24/7 Support</p>
          <span>Dedicated support</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
