import React from 'react';
import Footer from '../Footer/Footer';
import ReviewSection from '../ReviewSection/ReviewSection';



const Home = () => {
    return (
        <div>
            <div className='container'>
                <h1>This is home page</h1>
                <ReviewSection />
            </div>
            <Footer />
        </div>
    );
};

export default Home;