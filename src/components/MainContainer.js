import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../asset/images/cor2.jpg";
import Img2 from "../asset/images/digital.avif";
import Img4 from "../asset/images/cor1.jpg"
import Img3 from "../asset/images/cor3.jpg"

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
            <img className="block" src={Img1} alt="Web Development" />
            <Carousel.Caption>
              <h3>Web Development</h3>
              <p>Master front-end and back-end technologies to build full-stack applications.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="block" src={Img2} alt="Data Science" />
            <Carousel.Caption>
              <h3>Data Science</h3>
              <p>Unlock the potential of data with courses in statistics, machine learning, and AI.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="block" src={Img3} alt="Digital Marketing" />
            <Carousel.Caption>
              <h3>Digital Marketing</h3>
              <p>Boost your brand's visibility with cutting-edge marketing strategies.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="block" src={Img4} alt="Cybersecurity" />
            <Carousel.Caption>
              <h3>Cybersecurity</h3>
              <p>Learn to protect and defend against cyber threats with our comprehensive courses.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="block" src={Img3} alt="AI & Machine Learning" />
            <Carousel.Caption>
              <h3>AI & Machine Learning</h3>
              <p>Dive into the world of AI and machine learning with hands-on projects and expert guidance.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="block" src={Img2} alt="Cloud Computing" />
            <Carousel.Caption>
              <h3>Cloud Computing</h3>
              <p>Master cloud platforms and services to architect scalable and reliable applications.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default MainContainer;
