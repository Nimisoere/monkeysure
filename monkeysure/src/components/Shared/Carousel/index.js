import React from "react";
import Slider from "react-slick";
import leftIcon from '../../../assets/images/chevron-left.png';
import rightIcon from '../../../assets/images/chevron-right.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";

const Carousel = ({ settings: settingsProps = {}, children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div><img className="carousel-arrows" src={rightIcon} alt="next" /></div>,
    prevArrow: <div><img className="carousel-arrows" src={leftIcon} alt="next" /></div>,
    ...settingsProps
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
}

export default Carousel;