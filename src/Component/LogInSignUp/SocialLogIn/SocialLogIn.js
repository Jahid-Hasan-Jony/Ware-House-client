import React from 'react';
import Auth from '../../../Firebase/Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import LoadingPage from '../../LoadingPage/LoadingPage';
import { useNavigate } from 'react-router-dom';

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(Auth);
    const navigate = useNavigate();
    if (loading) {
        return <LoadingPage />
    }
    if (user) {
        return (
            navigate('/home')
        );
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='p-3'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <a onClick={() => signInWithGoogle()} className="btn btn-success w-100 mx-auto btn-lg btn-block" style={{ backgroundColor: '#3b5998' }} href="#!"
                role="button">
                <i className="fab fa-google me-2"></i>Continue with Google
            </a>
        </div>
    );
};

export default SocialLogIn;