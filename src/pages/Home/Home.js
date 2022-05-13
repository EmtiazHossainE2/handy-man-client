import React from 'react';
import Badges from './Badges';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='mb-48'>
            <Banner />
            <Badges/>
        </div>
    );
};

export default Home;