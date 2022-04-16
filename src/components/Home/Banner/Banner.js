import React from 'react';
import { Carousel } from 'react-bootstrap';
import One from '../../../images/slide/one.jpg';
import './Banner.css'
const Banner = () => {
    return (
        <div>
           <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100  carousel-img"
      src={One}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 carousel-img"
      src="https://img.freepik.com/free-photo/studio-shot-good-looking-young-businesswoman-posing-against-pink-wall-with-glasses_273609-20864.jpg?t=st=1650131024~exp=1650131624~hmac=098fdf6b50687c16997700c0339b282c00697339d6320098f7945a52c74066dd&w=996"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100  carousel-img"
      src="https://img.freepik.com/free-photo/tutor-with-litthe-girl-studying-home_1157-33817.jpg?t=st=1650128087~exp=1650128687~hmac=475a2666699750950a030dddf5ebe4b921a09b3bcc68a84bfe98906e14e7683f&w=996"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;