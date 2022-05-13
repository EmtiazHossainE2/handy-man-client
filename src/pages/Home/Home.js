import React from 'react';
import Badges from './Badges';
import Banner from './Banner';
import Intro from './Intro';

const Home = () => {
    return (
        <div className='mb-48'>
            <Banner />
            <div className='lg:px-12'>
                <Badges />
                <Intro/>
            </div>
        </div>
    );
};

export default Home;