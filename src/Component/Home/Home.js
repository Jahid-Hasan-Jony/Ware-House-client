import React from 'react';
import Footer from '../Footer/Footer';
import LoadingPage from '../LoadingPage/LoadingPage';


const Home = () => {
    return (
        <div>
            <div className='container'>
                <h1>This is home page</h1>
                <LoadingPage />
            </div>
            <Footer />
        </div>
    );
};

export default Home;