import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='shadow-md w-full fixed top-0 left-0'>
            <div className='bg-white py-5 px-5 flex font-[poppins] font-thin justify-between'>
                <div className='container cursor-pointer'>
                    <h2 className='text-xl'>
                       Muhammed Zafar Iqbal</h2>
                </div>
                <ul className='flex'>
                    <Link className='my-1 pr-5' to="/home">Home</Link>
                    <Link className='my-1 pr-5' to="/home#services">Services</Link>
                    <Link className='my-1 pr-5' to="/home#experts">Experts</Link>
                    <Link className='my-1 pr-5' to="/about">About</Link>
                    <button className='break-words bg-blue-400 text-white font-[poppins] py-1 px-5 mr-5 rounded hover:bg-blue-800 duration-500'>Get&nbsp;Started</button>
                </ul>
            </div>
        </nav>
    );
};

export default Header;