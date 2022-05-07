import React from 'react';
import useLoadItemsData from '../../hooks/useLoadItemsData';
import Categories from './Categories/Categories';
import Footer from './Footer/Footer';
import ChooseUsSection from './ChooseUsSection/ChooseUsSection';
import Banner from './Banner/Banner';
import HomeItems from './HomeItems';


const Home = () => {
    const [items] = useLoadItemsData('FakeData.json')
    return (
        <div>
            <div className='container'>
                <Banner />
                <Categories />
                <h1 className='py-4 text-center'>Our Products</h1>
                <div className='row g-3'>
                    {items.slice(0, 6).map(item =>
                        <HomeItems key={item.name} item={item} />
                    )}
                </div>
                <ChooseUsSection />
            </div>
            <Footer />
        </div>
    );
};

export default Home;