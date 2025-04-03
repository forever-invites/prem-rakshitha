import React from "react";
import "../styles/ThreeDSlider.css";

const ThreeDSlider = () => {
  const slides = [
    { id: 1, image: require("../images/threeDSliderImages/3d5.jpeg") },
    { id: 2, image: require("../images/threeDSliderImages/3d4.jpeg") },
    { id: 3, image: require("../images/threeDSliderImages/3d3.jpeg") },
    { id: 4, image: require("../images/threeDSliderImages/3d2.jpeg") },
    { id: 5, image: require("../images/threeDSliderImages/3d1.jpeg") },
  ];

  return (
    <div className="three-d-slider-section">
      <h1 className="three-d-slider-heading">
        Cherished Moments, <br></br> Captured Forever
      </h1>
      <div className="three-d-slider">
        <div className="slider-wrapper">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="slider-card"
              style={{
                "--i": index,
              }}
            >
              <img src={slide.image} alt={`Slide ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeDSlider;
