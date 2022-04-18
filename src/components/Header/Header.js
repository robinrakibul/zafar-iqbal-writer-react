import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        console.log('signout clicked');
    }
    return (
        <header className='shadow-md w-full top-0 left-0 sticky-top'>
            <div className='bg-white py-5 px-5 flex font-[poppins] font-thin justify-between'>
                <div className='container cursor-pointer'>
                    <span>
                        <img className='inline' width="40px" src="logo.svg" alt="" /><h2 className='text-xl inline'>
                            Zafar Iqbal</h2>
                    </span>
                </div>
                <ul className='flex flex-wrap md:flex-nowrap'>
                    <Link className='my-1 ml-2 md:ml-0 mb-2 md:mb-0 pr-5 hover:text-blue-400' to="/home">Home</Link>
                    <HashLink className='my-1 ml-2 md:ml-0 md:mb-0 pr-5 hover:text-blue-400' smooth to="home#awards">Awards</HashLink>
                    <HashLink className='my-1 ml-2 md:ml-0 md:mb-0 pr-5 hover:text-blue-400' smooth to="home#services">Services</HashLink>
                    <Link className='my-1 ml-2 md:ml-0 mb-3 md:mb-0 pr-5 hover:text-blue-400' to="/about">About&nbsp;Me</Link>
                    <Link className='my-1 ml-2 md:ml-0 mb-2 md:mb-0 pr-5 hover:text-blue-400' to="/blogs">Blogs</Link>
                    {
                        user ? <button className='bg-blue-400 text-white px-5 py-2 rounded hover:bg-blue-800 duration-500'
                            onClick={() => logout()}>Sign&nbsp;out</button> 
                            :
                            <Link className='bg-blue-400 text-white px-5 py-2 rounded hover:bg-blue-800 duration-500' 
                            to="/login">Login</Link>
                    }
                </ul>
            </div>
        </header>
    );
};

export default Header;