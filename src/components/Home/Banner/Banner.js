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
      <h3 className='text-dark fw-bold'>Understand Your Interest</h3>
      <p className='text-dark fs-4 fw-bolder'>The more that you read, the more things you will know. The more that you learn, the more places you'll go.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 carousel-img"
      src="https://img.freepik.com/free-photo/studio-shot-good-looking-young-businesswoman-posing-against-pink-wall-with-glasses_273609-20864.jpg?t=st=1650131024~exp=1650131624~hmac=098fdf6b50687c16997700c0339b282c00697339d6320098f7945a52c74066dd&w=996"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className='fw-bold'>Happy Learning</h3>
      <p className='fs-4 fw-bolder'>Play is the form of learning that is fun</p>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100  carousel-img"
      src="https://img.freepik.com/free-photo/smiley-teenage-girl-helping-little-sister-during-online-school-with-tablet_23-2148827468.jpg?t=st=1650131024~exp=1650131624~hmac=309333501b957a199bc7f03992d9fe4f2afe33aa5249aec53e45a52e425a2e02&w=996"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className='fw-bold text-dark'>children's Learning</h3>
      <p className='text-dark fs-4 fw-bolder'>Teach children with Love and Practically</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;