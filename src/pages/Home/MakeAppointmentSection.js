import React from 'react';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import makeBg from '../../assets/images/appointment-handyman-bg.jpg'
import man from '../../assets/images/handyman-hero-img.png'

const MakeAppointmentSection = () => {

    return (
        <section style={{background: `url(${makeBg})`}} className="flex flex-col lg:flex-row justify-start items-center bg-cover  px-8">
            <div className='flex-1  lg:block flex flex-end'>
                <img className='lg:ml-28 lg:mr-0 rounded-lg lg:max-w-sm ' src={man} alt="Doctor" />
            </div>
            <div className='flex-1 space-y-8 '>
                <h3 className='text-white text-4xl font-bold mt-5 lg:mt-0'>Have Any Housing Problems?</h3>
                <p className='text-white text-justify text-lg'>Our experts will solve them in no time, Make an Appointment.</p>
                <div className='flex flex-col lg:flex-row space-x-6 py-5 '>
                    <button className=' btn btn-primary mx-2 px-0 lg:px-12 mb-5'>
                        <span className='text-secondary pr-2 text-xl pt-1'><BsFillTelephoneForwardFill /></span>
                        <Link to='/' className="text-lg">(+880) 174-8658702</Link>
                    </button>
                    <button className=' btn btn-outline text-white mx-2 lg:px-12'>
                        <Link to='/contact' className="text-lg">contact with us</Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointmentSection;