import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/google.png';
import Loading from '../Loading/Loading';

const GoogleLogin = () => {
    let errorWarn;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorWarn = <p className='text-red-500 font-medium'>Error Occured: {error?.message}</p>
    }

    return (
        <div>
            <p className='mt-2 font-bold'>Or,</p>

            <button onClick={() => signInWithGoogle()} className='mt-4 w-50 rounded px-4 py-2 text-white bg-blue-400'>
                <img className='inline mr-2' width="30px" src={google} alt="" /> Google Sign In
            </button>
            {errorWarn}
        </div>
    );
};

export default GoogleLogin;