import React from 'react';
import nothinghere from '../../../images/under-construction.png'
const Checkout = () => {
    return (
        <div>
            <h1 className='text-center text-3xl mt-5 mb-5 font-bold'> Checkout</h1>
            <div className='flex justify-center mb-5'>
            <button className='bg-green-400 text-white px-5 py-2 rounded hover:bg-blue-800 duration-500'>Proceed Checkout?</button>
            </div>
            <div  className='flex justify-center'>
             <img className='rounded mb-10' src={nothinghere} alt="" />
            </div>
            
        </div>
    );
};

export default Checkout;