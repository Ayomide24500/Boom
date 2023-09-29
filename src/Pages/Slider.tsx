import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import img1 from "../Assets/boom1.webp";

const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  margin-top: 27px;
  height: 408px;
  gap: 23px;
  margin-top: 20px;

  img {
    width: 100%;
    border-radius: 8px;
  }
`;

const BoomplaySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    "../Assets/boom1.webp",
    "../Assets/boom2.webp",
    "../Assets/boom1.webp",
    "../Assets/boom2.webp",
    "../Assets/boom3.webp",
    "../Assets/boom2.webp",
    // Add more image URLs as needed
  ];

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <SlideItem key={idx}>
            <img src={img} alt={`Slide ${idx + 1}`} />
          </SlideItem>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default BoomplaySlider;
