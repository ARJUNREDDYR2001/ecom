import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./assets/image1.jpg"
                alt="First slide"
                height={500}
               
              />
              <Carousel.Caption>
                <h5 className="fs-1 text fw-lighter">Discover endless possibilities</h5>
                <p className="fs-5 d-none d-sm-block">
                  From fashion to tech, home decor to gifts, find everything you need and more at Arjun's Emporium. 
                Explore our curated collection and let your imagination roam free. Start creating your story today!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./assets/image2.jpeg"
                alt="Second slide"
                height={500}
              />
              <Carousel.Caption>
                <h5 className="fs-1 text fw-lighter">Discover endless possibilities</h5>
                <p className="fs-5 d-none d-sm-block">
                  From fashion to tech, home decor to gifts, find everything you need and more at Arjun's Emporium. 
                Explore our curated collection and let your imagination roam free. Start creating your story today!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./assets/image3.jpg"
                alt="Third slide"
                height={500}
              />
              <Carousel.Caption>
                <h5 className="fs-1 text fw-lighter">Discover endless possibilities</h5>
                <p className="fs-5 d-none d-sm-block">
                  From fashion to tech, home decor to gifts, find everything you need and more at Arjun's Emporium. 
                Explore our curated collection and let your imagination roam free. Start creating your story today!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./assets/image4.jpg"
                alt="four slide"
                height={500}
              />
              <Carousel.Caption>
                <h5 className="fs-1 text fw-lighter">Discover endless possibilities</h5>
                <p className="fs-5 d-none d-sm-block">
                  From fashion to tech, home decor to gifts, find everything you need and more at Arjun's Emporium. 
                Explore our curated collection and let your imagination roam free. Start creating your story today!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./assets/image5.jpg"
                alt="five slide"
                height={500}
              />
              <Carousel.Caption>
                <h5 className="fs-1 text fw-lighter">Discover endless possibilities</h5>
                <p className="fs-5 d-none d-sm-block">
                  From fashion to tech, home decor to gifts, find everything you need and more at Arjun's Emporium. 
                Explore our curated collection and let your imagination roam free. Start creating your story today!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./assets/image6.jpg"
                alt="six slide"
                height={500}
              />
              <Carousel.Caption>
                <h5 className="fs-1 text fw-lighter">Discover endless possibilities</h5>
                <p className="fs-5 d-none d-sm-block">
                From fashion to tech, home decor to gifts, find everything you need and more at Arjun's Emporium. 
                Explore our curated collection and let your imagination roam free. Start creating your story today!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;
