import React, { useEffect, useState } from 'react';

const ServicesSection = () => {
    const [services,setServices] = useState([])
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])


    return (
        <div className='lg:px-12 bg-slate-100 py-20'>
            <div className='text-center space-y-4'>
                <h2 className='text-4xl font-bold'>Our Services {services.length}</h2>
                <div>
                    <p className='text-lg'>Do you wish you had more free time? We can make it happen!</p>
                    <p className='text-lg'>Aliquam malesuada bibendum elementum curabitur.</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;