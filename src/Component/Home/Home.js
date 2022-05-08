import React from 'react';
import useLoadItemsData from '../../hooks/useLoadItemsData';
import Categories from './Categories/Categories';
import Footer from './Footer/Footer';
import ChooseUsSection from './ChooseUsSection/ChooseUsSection';
import Banner from './Banner/Banner';
import HomeItems from './HomeItems';
import { Link } from 'react-router-dom';


const Home = () => {
    const [items] = useLoadItemsData('https://pacific-refuge-31160.herokuapp.com/foods')
    return (
        <div>
            <div className='container'>
                <Banner />
                <Categories />
                <h1 className='py-4 text-center'>Our Products</h1>
                <div className='row g-3'>
                    {items.slice(0, 6).map(item =>
                        <HomeItems key={item._id} item={item} />
                    )}
                    <Link className='btn btn-outline-success text-center btn-lg my-5' to='/manage-inventories'>Manage Inventories</Link>
                </div>
                <ChooseUsSection />
            </div>
            <Footer />
        </div>
    );
};

export default Home;