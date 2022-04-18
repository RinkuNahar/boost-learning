import React from 'react';
import rinku from '../../images/myself/rinku.jpg'
import './About.css'

const About = () => {
    return (
        <div className='service about mx-auto mt-4'>
            <h2 className='about-title'>Myself</h2>
            <img className='myself-img img-fluid' src={rinku}  alt="" />
            <h2 className='mt-4 service-title'>Rinku Nahar Hossan</h2>

            <p className='p-2'>Hi, I am Rinku Nahar Hossan. I live in Bangladesh. Currently I have completed by B.Sc. in Computer Science and Engineering from Daffodil International University. I am also a wev developer. It is my first priority. And then I love to teach. </p>
            <h4 className='about-title'>My Goal</h4>
            <p>My goal is to be a Full Stack web developer. Also I want to go abroad for my higher study. And my dream to be a very successful, kind and most loveable person to everyone.</p>
        </div>
    );
};

export default About;