import React from 'react';
import Badges from './Badges';
import Banner from './Banner';
import Intro from './Intro';
import MoreServices from './MoreServices';
import ServicesSection from './ServicesSection';

const Home = () => {
    return (
        <div >
            <Banner />
            <div className='lg:px-12'>
                <Badges />
                <Intro/>
            </div>
            <ServicesSection/>
            <MoreServices/>
        </div>
    );
};

export default Home;