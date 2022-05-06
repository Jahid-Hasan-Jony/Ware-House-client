import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import LoadingPage from '../../LoadingPage/LoadingPage';
import Auth from '../../../Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const SignUp = () => {
    // using firebase-hooks for create user
    //varify email
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(Auth, { sendEmailVerification: true });

    const navigate = useNavigate()

    // if user have
    if (user) {
        navigate('/home')
    }
    if (loading) {
        return <LoadingPage></LoadingPage>
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        let email = event.target.email.value
        let password = event.target.password.value
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <section>
            <div className="container py-5 h-100">
                <h1 className='text-center py-3'>Please Sign Up</h1>
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={(event) => { handleSignUp(event) }}>
                            <div className="form-outline mb-4">
                                <input type="email" name='email' className="form-control form-control-lg" required />
                                <label className="form-label" htmlfor="form1Example13">Email address</label>
                            </div>


                            <div className="form-outline mb-4">
                                <input type="password" name='password' className="form-control form-control-lg" required />
                                <label className="form-label" htmlfor="form1Example23">Password</label>
                            </div>

                            <div className="mb-4">
                                Already have an account? <Link to="/login">Please Sign In</Link>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg w-100 btn-block">Sign Up</button>
                            <SocialLogIn />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;