import React from 'react';
import error from '../../images/error.png';
const Error = () => {
    return (
        <div>
            <div className='px-64 flex flex-col justify-center align-middle m-5'>
             <img src={error} alt="" />
            </div>
            <p className='text-bold text-4xl text-center p-6 font-serif text-red-500 mb-10'>Sorry Nothing Found!</p>
        </div>
    );
};

export default Error;