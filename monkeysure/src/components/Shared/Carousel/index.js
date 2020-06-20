import React from "react";
import Slider from "react-slick";
import leftIcon from '../../../assets/images/chevron-left.png';
import rightIcon from '../../../assets/images/chevron-right.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";

const SampleNextArrow = (props) => {
  const { className, style, onClick, aritcleArrowClassNext } = props;
  return (
    <div
      className={`${className} ${aritcleArrowClassNext} slick-arrow-wrapper`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img className="carousel-arrows" src={rightIcon} alt="next" />
    </div>
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick, aritcleArrowClassPrev } = props;
  return (
    <div
      className={`${className} ${aritcleArrowClassPrev} slick-arrow-wrapper`}
      style={{ ...style, display: "block" }} onClick={onClick}
    >
      <img className="carousel-arrows" src={leftIcon} alt="next" />
    </div>
  );
}

const Carousel = ({ settings: settingsProps = {}, children, aritcleArrowClassNext, aritcleArrowClassPrev }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow aritcleArrowClassNext={aritcleArrowClassNext} />,
    prevArrow: <SamplePrevArrow aritcleArrowClassPrev={aritcleArrowClassPrev} />,
    ...settingsProps
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
}

export default Carousel;