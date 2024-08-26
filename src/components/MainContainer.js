import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../asset/images/banner-right-web.webp";
import Img2 from "../asset/images/banner_v1.avif";

const MainContainer = () => {

  return (
    <div className="main-container">
      
      <div className="main-container-middle ">
        <div className="main-container-middle-content">
          <h1>1000+</h1>
          <h6>Successful Students</h6>
        </div>

        <div className="main-container-middle-content">
          <h1>30+</h1>
          <h6> Countries Reached</h6>
        </div>

        <div className="main-container-middle-content">
          <h1>5</h1>
          <h6>Industry Awards</h6>
        </div>
      </div>

      <div className="main-container-bottom">
      <Carousel>
          <Carousel.Item>
            <img className="block" src={Img1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="block" src={Img2} alt="First slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="block" src={Img1} alt="First slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="block" src={Img2} alt="First slide" />
            <Carousel.Caption>
              <h3>forth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="block" src={Img1} alt="First slide" />
            <Carousel.Caption>
              <h3>Fifth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="block" src={Img2} alt="First slide" />
            <Carousel.Caption>
              <h3>Sixth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default MainContainer;
