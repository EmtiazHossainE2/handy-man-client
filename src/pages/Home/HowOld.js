import React from 'react';
import { Link } from 'react-router-dom';

const HowOld = () => {

    return (
        <section className="flex flex-col lg:flex-row justify-center items-center bg-[url('https://i.ibb.co/YRrxdGN/appointment-handyman-bg.jpg')] bg-cover py-20">
            <div className='flex-1'>
                <div className='text-center text-white space-y-8 border-2 rounded-lg px-8 py-8 lg:mx-16'>
                    <h2 className='text-4xl '>$ <span className='text-8xl'>50</span> Million</h2>
                    <p className='text-xl'>Compensation that we have got <br /> for our clients.</p>
                </div>
            </div>
            <div className='flex-1 px-6 space-y-8'>
                <h2 className='text-2xl lg:text-5xl text-white my-3 pt-5 lg:pr-44'>Leave the sleepless nights to us</h2>
                <p className='text-white  text-md lg:text-lg'>We recognize that the breakdown of a relationship or marriage is one of the most stressful and traumatic events in a person's life.</p>
                <div className="my-5">
                    <button className='btn btn-primary'>
                    <Link to='/contact' className="text-lg">make an appointment</Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowOld;