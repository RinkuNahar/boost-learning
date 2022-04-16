import React from 'react';
import './Service.css'
const Service = ({service}) => {
    const {name, img, price, description} =service;
    return (
        <div className='service'>
      
             <h2 className='mt-4 service-title'>{name}</h2>
            <img className='img-fluid service-img' src={img} alt="" />
            <h3>Course-Fee : {price}</h3>
            <p className='p-2'>{description}</p>
            <button className='mb-2 btn-primary btn'>Checkout</button>
        </div>
    );
};

export default Service;