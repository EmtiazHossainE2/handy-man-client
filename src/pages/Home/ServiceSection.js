import React from 'react';
import { Link } from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';
import './ServiceSection.css'

const ServiceSection = ({ service }) => {
    const { img, name, des } = service
    return (
        <div className="lg:max-w-lg bg-base-100 cart-container">
            <figure><img className='w-full' src={img} alt="serviceMan" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{des}</p>
                <div className="card-actions pt-3 ">
                    <Link to='/' className='flex btn btn-outline-primary items-center'>
                        <p className='pr-3'> See More</p>
                        <span ><FaGreaterThan /></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;