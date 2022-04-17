import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }


    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    return (
        <div className='px-5 md:px-80 py-10 container w-full h-full mx-auto'>
            <form onSubmit={handleSubmit} className='grid grid-rows-4 gap-4'>
                <h2 className='text-primary text-center mt-2 text-xl font-medium'>Please Login</h2>
                <input className="p-2 mb-3 border-2 border-gray-400 rounded" ref={emailRef} type="email" placeholder='Enter Your Email' required />
                <input className="p-2 mb-3 border-2 border-gray-400 rounded" ref={passwordRef} type="password" placeholder='Enter Your Password' required />
                <button className="bg-blue-400 text-white px-5 py-2 rounded hover:bg-blue-800 duration-500 w-32 mb-2" type="submit">Login</button>
            </form>
            <p className='mt-1 mb-1'>New Here? <a className='text-red-500 font-medium' href="/register">Register</a></p>
            <p>Forget Password? <button className='text-red-500 font-medium' onClick={resetPassword}>Reset Password</button> </p>
            <ToastContainer />
            {errorElement}
        </div>
    );
};

export default Login;