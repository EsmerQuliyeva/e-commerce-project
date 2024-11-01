import React from "react";
import AboutIntroduction from "../Components/About/AboutIntroduction/AboutIntroduction";
import AboutProduct from "../Components/About/AboutProduct/AboutProduct";
import Additional from "../Components/About/Additional/Additional";
import DisplayProducts from "../Components/DisplayProducts";
import Footer from "../Components/Footer/Footer";

const About = () => {
  return (
    <div>
      <AboutIntroduction />
      <AboutProduct />
      <Additional />
      <DisplayProducts />
      <Footer />
    </div>
  );
};

export default About;
