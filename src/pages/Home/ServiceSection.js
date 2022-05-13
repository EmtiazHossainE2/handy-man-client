import React from 'react';
import { Link } from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';


const ServiceSection = ({ service }) => {
    const { img, name, des } = service
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-lg">
            <figure><img className='w-full' src={img} alt="serviceMan" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{des}</p>
                <div class="card-actions pt-3 ">
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