import React from "react";
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firstSlider from "../../assets/sliders/slider1.png";
import secondSlider from "../../assets/sliders/slider2.png";
import ThirdSlider from "../../assets/product1.png"
import FourthSlider from "../../assets/product2.png"
import FifthSlider from "../../assets/product3.png"

const Slider2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="container">
      <div className="slider-container">
        <Slider {...settings} className="sliders">
          <img src={firstSlider} alt="Slide 1" className="slide" />
          <img src={secondSlider} alt="Slide 2" className="slide" />
          <img src={ThirdSlider} alt="Slide 3" className="slide" />
          <img src={FourthSlider} alt="Slide 3" className="slide" />
          <img src={FifthSlider} alt="Slide 3" className="slide" />
        </Slider>
      </div>
    </div>
  );
};

export default Slider2;
