import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='row'>
            <div className='col-md-6 py-3 d-flex align-items-center justify-content-center'>
                <div>
                    <h4 className='text-success'>Welcome to our Glaxy Grocery Store</h4>
                    <h2 className='fs-1 fw-bold'>Shop  Online  For</h2>
                    <h2 className='fs-1 fw-bold'>Fresh  Groceries</h2>
                    <h6 className='py-3'>Now All Preference in One Place.<br />
                        <span className='text-danger fw-bold'>Get Free Delivery on your Friday Orders.</span></h6>
                    <button className='btn btn-success btn-lg me-2'>Shop Now</button>
                    <button className='btn btn-danger btn-lg ms-2'>Read More</button>
                </div>
            </div>
            <div className='col-md-6 py-3 d-flex align-items-center justify-content-center'>
                <img className='w-100' src='https://i.ibb.co/S3zHtp6/food-13647.png' alt='' />
            </div>
        </div>
    );
};

export default Banner;