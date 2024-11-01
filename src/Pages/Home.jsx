import React from "react";
import Introduction from "../Components/Home/Introduction/Introduction";
import Range from "./Range/Range";
import DisplayProducts from "../Components/DisplayProducts"
// import OurProducts from "../Components/Home/OurProducts/OurProducts";
import Slider from "./Slider2/Slider2"
// import Swiper from "../ImageSlider.jsx";
import Footer from "../Components/Footer/Footer"


const Home = () => {
  return (
    <main>
      <Introduction />
      <Range />
      <DisplayProducts/>
      {/* <OurProducts /> */}
      <Slider />
      {/* <Swiper /> */}
      <Footer/>
    </main>
  );
};

export default Home;
