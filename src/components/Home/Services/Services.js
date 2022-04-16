import React, {useState, useEffect} from 'react';
import Service from '../Service/Service';

const Services = () => {

  const [services, setServices] = useState([]);

  useEffect(()=>{
      fetch('services.json')
      .then(res=> res.json())
      .then(data=> setServices(data));
  },[]);

    return (
        <div>
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