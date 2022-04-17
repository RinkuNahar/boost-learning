import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Items from '../../service/services.json'
const ServiceDetail = () => {

    const {serviceId} = useParams();
    const [info, setInfo] = useState({});

    useEffect(()=>{
        const course= Items.find(item => item.id === parseInt(serviceId)) 
        // console.log(course);
        // console.log(Items,serviceId);
        setInfo(course)
    },[serviceId]);


    
    return (
        <div className='service w-50 mx-auto mt-4'>
            <h2 className='mt-4 service-title'>Course Name: {info.name}</h2>
            <img className='img-fluid service-img' src={info.img} alt="" />
            <h3>Course-Fee : {info.price}</h3>
            <p className='p-2'>{info.description}</p>


            <Link to='/checkout'>
                    <button className='btn btn-primary mb-4'>Proceed Checkout</button>
            </Link>

        </div>
    );
};

export default ServiceDetail;