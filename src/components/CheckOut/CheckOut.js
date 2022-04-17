import React from 'react';
import checkout from '../../images/checkout.png';
import './CheckOut.css'

const CheckOut = () => {
    return (
        <div className='checkout'>
            <h1 className='service-title mt-4 mb-4'> Happy Learning</h1>
            <img className='w-75 checkout-img' src={checkout} alt="" />
        </div>
    );
};

export default CheckOut;