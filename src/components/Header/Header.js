import React from 'react';

const Header = () => {
    return (
        <nav className='shadow-md w-full fixed top-0 left-0'>
            <div className='bg-white py-4'>
                <div className='container px-4 cursor-pointer'>
                    <h2 className='text-xl font-thin font-[poppins]'>Zafar Iqbal</h2>
                </div>
            </div>
        </nav>
    );
};

export default Header;