import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    return (
        <div className='px-5 md:px-80 py-10 container w-full h-full mx-auto'>
            <form className='grid grid-rows-4 gap-4'>
                <h2 className='text-primary text-center mt-2 text-xl font-medium'>Please Login</h2>
                <input className="p-2 mb-3 border-2 border-gray-400 rounded" type="email" name="" id="" placeholder='Enter Your Email' required />
                <input className="p-2 mb-3 border-2 border-gray-400 rounded" type="password" name="" id="" placeholder='Enter Your Password' required />
                <button className="bg-blue-400 text-white px-5 py-2 rounded hover:bg-blue-800 duration-500 w-32 mb-2" type="submit">Login</button>
            </form>
            <p className='mt-1 mb-1'>New Here? <a className='text-red-500 font-medium' href="/register">Register</a></p>
            <p>Forget Password? <button className='text-red-500 font-medium'>Reset Password</button> </p>
        </div>
    );
};

export default Login;