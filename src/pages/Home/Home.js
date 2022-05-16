import React from 'react';
import Badges from './Badges';
import Banner from './Banner';
import Chooseus from './Chooseus';
import HowOld from './HowOld';
import Intro from './Intro';
import MakeAppointmentSection from './MakeAppointmentSection';
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
            <MakeAppointmentSection/>
            <Chooseus/>
            <HowOld/>
        </div>
    );
};

export default Home;