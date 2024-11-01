import React, { useContext } from "react";
import "./AboutIntroduction.css";
import { IoIosArrowForward } from "react-icons/io";
// import all_products from "../../../assets/all_products.json";
import { useParams } from "react-router-dom";
import { dataContext } from "../../../Pages/Context";

const AboutIntroduction = () => {
  const { id } = useParams();
  const { products } = useContext(dataContext);
  const product = products.find((item) => item.id === parseInt(id));
  return (
    <div className="about-introduction">
      <span>
        Home <IoIosArrowForward className="about-icon" />
        Shop <IoIosArrowForward className="about-icon" />
        {product.name}
      </span>
    </div>
    // nece edim klik edende gelsin hemin ad
  );
};

export default AboutIntroduction;
