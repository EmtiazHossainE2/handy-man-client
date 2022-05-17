import React, { useEffect, useState } from 'react';
import ServiceSection from './ServiceSection';
import useServices from '../../hooks/useServices'

const ServicesSection = () => {
    const [services,setServices] = useServices()


    return (
        <div className='lg:px-12 bg-slate-100 pt-20 pb-8'>
            <div className='text-center space-y-4'>
                <h2 className='text-4xl font-bold'>Our Services </h2>
                <div>
                    <p className='text-lg px-2 lg:px-0 lg:text-xl'>Do you wish you had more free time? We can make it happen! </p>
                    <p className='hidden lg:block text-xl'>Aliquam malesuada bibendum elementum curabitur. </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 my-12 px-4'>
                {
                    services.map(service => <ServiceSection
                    key={service._id}
                    service={service}
                    ></ServiceSection>)
                }
            </div>
        </div>
    );
};

export default ServicesSection;