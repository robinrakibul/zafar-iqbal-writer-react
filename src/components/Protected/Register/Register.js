import React from 'react';
const Register = () => {
    return (
        <div className='px-80 py-10 container w-full h-full mx-auto'>
            <form className='grid grid-rows-4 gap-4'>
                <h2 className='text-primary text-center mt-2 text-xl font-medium'>Please Register</h2>
                <input className="p-2 mb-3 border-2 border-gray-400 rounded" type="text" name="" id="" placeholder='Enter Your Name' required />
                <input className="p-2 mb-3 border-2 border-gray-400 rounded" type="email" name="" id="" placeholder='Enter Your Email' required />
                <input className="p-2 mb-3 border-2 border-gray-400 rounded" type="password" name="" id="" placeholder='Enter Your Password' required />
                <button className="bg-blue-400 text-white px-5 py-2 rounded hover:bg-blue-800 duration-500 w-32 mb-2" type="submit">Register</button>
            </form>
            <p>Already have an account? <a href="/login" className='text-red-500 font-medium'>Please Login Here</a> </p>
        </div>
    );
};

export default Register;