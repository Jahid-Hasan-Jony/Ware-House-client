import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Auth from '../../../firebase/firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import LoadingPage from '../../LoadingPage/LoadingPage';
import { toast } from 'react-toastify';


const LogIn = () => {
    // for getting input value
    const emailRf = useRef('')
    const passwordRf = useRef('')

    // using react router hook for sign in with email and pass
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(Auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(Auth);

    // for storing error massage
    let errorElement;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    // if user have
    if (user) {
        navigate(from, { replace: true })
    }
    if (loading) {
        return <LoadingPage />
    }
    // if any Error happening
    if (error) {
        errorElement = <p className='py-3 text-danger'>
            Error : {error?.message}
        </p>
    }
    // while submit login form
    const handleLogin = (event) => {
        event.preventDefault();
        let email = emailRf.current.value;
        let password = passwordRf.current.value;
        signInWithEmailAndPassword(email, password);
    }
    // for reset password
    const resetPassword = async () => {
        let email = emailRf.current.value;
        await sendPasswordResetEmail(email)
        if (email) { toast("Send Email") }
        else { alert("PLease Enter Email") }
    }
    return (
        <section>
            <div className="container py-5">
                <h1 className='text-center py-3'>Please Sign In</h1>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={(event) => { handleLogin(event) }}>
                            <div className="mb-4">
                                <label className='text-danger bold'> Don't have an account?</label> <Link to="/signup">Please Sign Up</Link>
                            </div>
                            <div className="form-outline mb-4">
                                <input type="email" ref={emailRf} className="form-control form-control-lg" required />
                                <label className="form-label" htmlfor="form1Example13">Email address</label>
                            </div>


                            <div className="form-outline mb-4">
                                <input type="password"
                                    ref={passwordRf} className="form-control form-control-lg" required />
                                <label className="form-label" htmlfor="form1Example23">Password</label>
                            </div>
                            {errorElement}
                            <button type="submit" className="btn btn-primary btn-lg w-100 btn-block">Sign in</button>
                            <p className='pt-3'>Forget Password?
                                <Link onClick={resetPassword} to='/login'> Reset Now</Link></p>
                            <SocialLogIn />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogIn;