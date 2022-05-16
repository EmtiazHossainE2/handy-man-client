import React from 'react';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import makeBg from '../../assets/images/appointment-handyman-bg.jpg'
import man from '../../assets/images/handyman-hero-img.png'

const HowOld = () => {

    return (
        <section style={{ background: `url(${makeBg})` }} className="flex flex-col lg:flex-row justify-start items-center bg-cover  px-8">
            <div className='flex-1  lg:block flex flex-end'>
                <h2 className='text-2xl'>$ <span className='5xl'>50</span>Million </h2>
                <p>Compensation that we have got for our clients.</p>
            </div>
            <div className='flex-1 space-y-8 '>
                <h3 className='text-white text-5xl font-bold mt-5 lg:mt-0'>Leave the sleepless nights to us</h3>
                <p className='text-white text-justify text-lg'>We recognize that the breakdown of a relationship or marriage is one of the most stressful and traumatic events in a person's life.</p>
                <button className=' btn btn-primary  mx-2 lg:px-12'>
                    <Link to='/contact' className="text-lg">make an appointment</Link>
                </button>
            </div>
        </section>
    );
};

export default HowOld;