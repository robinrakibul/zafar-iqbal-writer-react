import React from 'react';

const Service = ({ service }) => {
    const { title, price, description, image, category } = service;
    return (
        <div className='service'>
            <div className='w-64 p-2'>
                <h2 className='text-blue-900 font-sans pb-2'>Name: {title}</h2>
                <img className='w-100 object-cover rounded border border-gray-400 shadow' src={image} alt="" />
                <p><small><span className='text-blue-600'>Category: </span>{category}</small></p>
                <p className='m-3'><small>{description.slice(0, 250)}...</small></p>
                <p className='p-2 font-bold font-mono text-xl'>Price: {price}</p>
                <button className='my-3 mb-10 text-xl font-mono font-medium py-1 px-4 bg-blue-600 rounded hover:bg-blue-800'>Buy Now</button>
            </div>
        </div>
    );
};
export default Service;