import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div id='quote' className="font-[poppins] text-xl text-blue-600 text-center mt-10 mb-4">Services</div>
            <div className="services-container">
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;