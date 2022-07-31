import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {

    const {id, name, img, price, description} =service;
    const navigate = useNavigate()
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
      
             <h2 className='mt-4 service-title'>{name}</h2>
            <img className='img-fluid service-img' src={img} alt="" />
            <h3>Course-Fee : {price}</h3>
            <p className='p-2'>{description}</p>
            <button onClick={()=>navigateToServiceDetail(id)} className='mb-2 btn-primary btn'>Detail Information</button>
        </div>
    );
};

export default Service;