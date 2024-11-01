import React from "react";
import "./ContactContent.css";

const ContactContent = () => {
  return (
    <div className="container">
      <div className="contact-content">
        <h3 style={{marginBottom:"40px"}}>Billing Details</h3>
        <div className="names-contact">
          <label htmlFor="" style={{ marginRight: "20px" }}>
            First Name
          </label>
          <input type="text" />
          <label htmlFor="" style={{ marginRight: "20px", marginLeft: "20px" }}>
            Last Name
          </label>
          <input type="text" />
        </div>
        <label htmlFor="">Company Name(Optional)</label>
        <input type="text" />
        <label htmlFor="">Country/Region</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Street Adress</label>
        <input type="text" />
        <label htmlFor="">Town/City</label>
        <input type="text" />
        <label htmlFor="">Province</label>
        <input type="text" />
        <label htmlFor="">ZIP code</label>
        <input type="number" />
        <label htmlFor="">Phone</label>
        <input type="number" name="" id="" />
        <label htmlFor="">Email Adress</label>
        <input type="email" />
        <textarea
          name=""
          id=""
          placeholder="Additional Information"
          className="add-info"
        ></textarea>
      </div>
    </div>
  );
};

export default ContactContent;
