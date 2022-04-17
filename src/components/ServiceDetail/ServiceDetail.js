import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Items from '../../service/services.json'
const ServiceDetail = () => {

    const {serviceId} = useParams();
    const [info, setInfo] = useState({});

    useEffect(()=>{
        const course= Items.find(item => item.id === parseInt(serviceId)) 
        console.log(course);
        console.log(Items,serviceId);
        setInfo(course)
    },[serviceId]);

    // useEffect(()=>{
    //     fetch('services.json')
    //     .then(res=> res.json())
    //     .then(data=> {
    //   console.log(data)});
    // },[]);

    
    return (
        <div>
            <h2>this is for service : {serviceId}</h2>
            <p>Course Name: {info.name}</p>
            <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>

        </div>
    );
};

export default ServiceDetail;