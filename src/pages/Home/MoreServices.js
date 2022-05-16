import React from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const MoreServices = () => {
    return (
        <div className='lg:px-12'>
            <div className='py-20 ms-8 px-4 lg:px-0'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className='md:col-span-1 md:pb-8 lg:pr-12 lg:mr-12'>
                        <h2 className='text-4xl font-bold '>More Services</h2>
                        <p className='pt-5 pb-10 text-lg text-slate-500'>What can our professional workers do for you?</p>
                        <button className='btn btn-outline btn-secondary text-md uppercase'>download brochure</button>
                    </div>
                    <div className='md:col-span-1 lg:col-span-2 md:pb-8 '>
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  capitalize'>
                            <div className="lg:max-w-lg bg-base-100 pb-5 lg:pb-0">
                                <div className="pt-6 space-y-4 ">
                                    <div className='flex items-center'>
                                        <span className='text-secondary pr-2'><BsArrowUpRightCircle /></span>
                                        <Link to='/' className=""> Expert & Professional</Link>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary pr-2'><BsArrowUpRightCircle /></span>
                                        <Link to='/' className=""> Best Branding</Link>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary pr-2'><BsArrowUpRightCircle /></span>
                                        <Link to='/' className="">Great Technology </Link>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary pr-2'><BsArrowUpRightCircle /></span>
                                        <Link to='/' className=""> Countertop Repair</Link>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary pr-2'><BsArrowUpRightCircle /></span>
                                        <Link to='/' className=""> Kitchen Repair</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:max-w-lg bg-base-100  pb-5 lg:pb-0">
                                <div className="pt-6 space-y-4 ">
                                    <div className='flex items-center'>
                                        <span className='text-secondary pr-2'><BsArrowUpRightCircle /></span>
                                        <Link to='/' className="">High Quality Work </Link>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary pr-2'><BsArrowUpRightCircle /></span>
                                        <Link to='/' className="">Deliver On Time </Link>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary pr-2'><BsArrowUpRightCircle /></span>
                                        <Link to='/' className="">Quality Support </Link>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary pr-2'><BsArrowUpRightCircle /></span>
                                        <Link to='/' className="">Flooring Repair </Link>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary pr-2'><BsArrowUpRightCircle /></span>
                                        <Link to='/' className="">Faucet Repair </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:max-w-lg bg-base-100  pb-5 lg:pb-0">
                                <div className="pt-6 space-y-4 ">

                                    <div className='flex items-center'>
                                        <span className='text-secondary pr-2'><BsArrowUpRightCircle /></span>
                                        <Link to='/' className="">Certified Engineers </Link>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary pr-2'><BsArrowUpRightCircle /></span>
                                        <Link to='/' className="">Satisfaction Moto </Link>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary pr-2'><BsArrowUpRightCircle /></span>
                                        <Link to='/' className="">Experience Team </Link>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary pr-2'><BsArrowUpRightCircle /></span>
                                        <Link to='/' className="">Handrail Repair </Link>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary pr-2'><BsArrowUpRightCircle /></span>
                                        <Link to='/' className=""> Garage Door Repair </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MoreServices;