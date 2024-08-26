import React from "react";
import Logo1 from "../asset/Logos/angular.jpg";
import Logo2 from "../asset/Logos/icon-tailwind.jpg";
import Logo3 from "../asset/Logos/sketch.jpg";
import Logo4 from "../asset/Logos/vue.jpg";
// import Logo5 from "../asset/Logos/bootstrap5.jpg";
import Logo6 from "../asset/Logos/java.png"
import Logo7 from "../asset/Logos/react.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const logos = [Logo1, Logo2, Logo4, Logo3,Logo6,Logo7];

const settings = {
  infinite: true,
  slidesToShow: 5, // Number of logos visible at once
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000, // Speed of sliding
  arrows: false,
  pauseOnHover: true,
};

const Technologo = () => {
  return (
    <div>
      <div className="logo-slider-container">
        <div className="heading-container">
          <h6>
             Building the Future with Top Tech Innovators
          </h6>
        </div>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide">
              <img src={logo} id="logo-img" alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Technologo;
