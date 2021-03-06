import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://independent-service-server.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div  id='services'>
            <div className="font-[poppins] font-bold text-3xl text-blue-600 text-center mt-10 mb-4">Services</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-10">
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;