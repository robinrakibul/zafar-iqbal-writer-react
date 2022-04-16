import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='shadow-md w-full top-0 left-0 sticky'>
            <div className='bg-white py-5 px-5 flex font-[poppins] font-thin justify-between'>
                <div className='container cursor-pointer'>
                    <span>
                        <img className='inline' width="40px" src="logo.svg" alt="" /><h2 className='text-xl inline'>
                            Zafar Iqbal</h2>
                    </span>
                </div>
                <ul className='flex flex-wrap md:flex-nowrap'>
                    <Link className='my-1 ml-2 md:ml-0 mb-2 md:mb-0 pr-5 hover:text-blue-400' to="/home">Home</Link>
                    <Link className='my-1 ml-2 md:ml-0 md:mb-0 pr-5 hover:text-blue-400' to="/home#services">Services</Link>
                    <Link className='my-1 ml-2 md:ml-0 md:mb-0 pr-5 hover:text-blue-400' to="/home#banner">Banner</Link>
                    <Link className='my-1 ml-2 md:ml-0 mb-3 md:mb-0 pr-5 hover:text-blue-400' to="/about">About</Link>
                    <button className='break-words bg-blue-400 text-white font-[poppins] py-1 px-5 mr-5 rounded hover:bg-blue-800 duration-500'>Get&nbsp;Started</button>
                </ul>
            </div>
        </header>
    );
};

export default Header;