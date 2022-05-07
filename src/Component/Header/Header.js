import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Auth from '../../Firebase/Firebase.init';
import CustomLink from './CustomLink/CustomLink'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(Auth);
    const handleLogOut = () => {
        signOut(Auth)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/home"><span className='text-light'>Glaxy Glo</span><span style={{ color: 'yellow' }}>cery Store</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CustomLink className="nav-link" aria-current="page" to="/">Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/blogs">Blogs</CustomLink>
                        </li>
                        <li className="nav-item">
                            {user ? <button className='btn logOutBtn' onClick={handleLogOut}>Log Out</button> :
                                <CustomLink className="nav-link" to="/login">Log In</CustomLink>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;