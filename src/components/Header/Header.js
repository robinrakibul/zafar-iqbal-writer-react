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
                <ul>
                    <Link className='pr-5' to="/home">Home</Link>
                    <Link className='pr-5' to="/home#services">Services</Link>
                    <Link className='pr-5' to="/home#experts">Experts</Link>
                    <Link className='pr-5' to="/about">About</Link>
                </ul>
            </div>
        </nav>
    );
};

export default Header;