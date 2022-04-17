import React, {useState, useEffect} from 'react';
import Service from '../Service/Service';
import Items from '../../../service/services.json'

const Services = () => {

  const [services, setServices] = useState([]);
    console.log(Items)
  useEffect(()=>{
     setServices(Items)
  },[]);

    return (
        <div id='services'>
            <div>
                <h1 className='fw-bold text-danger mt-4'>My Services</h1>
        </div>
            <div className='service-layout container'>
              
              {
               services.map(service => <Service key={service.id} service={service}></Service> )
              }
          </div>
        </div>
    );
};

export default Services;