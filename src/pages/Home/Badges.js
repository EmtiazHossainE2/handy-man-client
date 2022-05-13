import React from 'react';
import Badge from './Badge';

const Badges = () => {
    const badges = [
        {
            _id: 1,
            name: 'Certified Professional Handyman',
            info: 'We are a company providing a wide range of maintenance and many other services.',
            img: 'https://i.ibb.co/tP7Cp8n/handyman-badge-icon.png'
        },
        {
            _id: 2,
            name: 'Large Number of Services Provided',
            info: 'We are a company providing a wide range of maintenance and many other services.',
            img: "https://i.ibb.co/Vw2wRdj/handyman-tools-icon.png"
        },
        {
            _id: 3,
            name: '25 Years of Professional Experience',
            info: 'We are a company providing a wide range of maintenance and many other services.',
            img: 'https://i.ibb.co/0F4N8h9/handyman-plumber-icon.png'
        },
    ]
    return (
        <div className='mt-[-130px] grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 space-x-8 lg:px-12 mb-12'>
            {
                badges.map(badge => <Badge
                key={badge._id}
                badge={badge}
                ></Badge>)
            }
        </div>
    );
};

export default Badges;