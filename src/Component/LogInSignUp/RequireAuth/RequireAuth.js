import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Auth from '../../../Firebase/Firebase.init';
import LoadingPage from '../../LoadingPage/LoadingPage'

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(Auth);
    const location = useLocation()
    if (loading) {
        return <LoadingPage />
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children
};

export default RequireAuth;