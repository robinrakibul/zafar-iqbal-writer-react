import React from 'react';

const Service = ({service}) => {
    const { title, price, description, image, category } = service;
    return (
        <div className='service'>
            <h2>{title}</h2>
            <img className='w-100' src={image} alt="" />
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <p><small>{category}</small></p>
            {/* wrapping with arrow function */}
            <button className='btn btn-primary'>Buy Now</button>
        </div>
    );
};
export default Service;