import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='px-5 md:px-80 py-10 container h-full mx-auto'>
            <form onSubmit={handleRegister} className='grid grid-rows-4 gap-4'>
                <h2 className='text-primary text-center mt-2 text-xl font-medium'>Please Register</h2>
                <input className="p-2 mb-3 border-2 border-gray-400 rounded" type="text" name="name" id="" placeholder='Enter Your Name' required />
                <input className="p-2 mb-3 border-2 border-gray-400 rounded" type="email" name="email" id="" placeholder='Enter Your Email' required />
                <input className="p-2 mb-3 border-2 border-gray-400 rounded" type="password" name="password" id="" placeholder='Enter Your Password' required />
                <input type="submit" value="Register" className='bg-blue-400 text-white px-5 py-2 rounded hover:bg-blue-800 duration-500 w-32 mb-2' />
            </form>
            <p>Already have an account? <a href="/login" className='text-red-500 font-medium'>Please Login Here</a> </p>
        </div>
    );
};

export default Register;