import React from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';

const Intro = () => {
    return (
        <section className='flex  justify-center items-center'>
            <div className='flex-1'>
                <div>
                    <img src="https://i.ibb.co/LhY9zxn/handyman-about-intro.png" alt="handyman" />
                </div>
            </div>
            <div className='flex-1'>
                <h1 className='text-4xl font-bold'>We Provide Cost-Effective <br /> Solution for You</h1>
                <p className='py-6'>Exponent is a full service company offering handyman solutions and repair home services from start to finish. Our staff has been experience and operating for ten years from Newyork City.</p>
                <p>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form. </p>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 capitalize'>
                        <div className="lg:max-w-lg bg-base-100 ">
                            <div className="pt-6 space-y-4 ">
                                <div className='flex items-center'>
                                    <span className='text-secondary pr-2'><BsArrowUpRightCircle/></span>
                                    <p className=""> Expert</p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary pr-2'><BsArrowUpRightCircle/></span>
                                    <p className=""> Best Branding</p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary pr-2'><BsArrowUpRightCircle/></span>
                                    <p className=""> Great Technology</p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary pr-2'><BsArrowUpRightCircle/></span>
                                    <p className=""> Qualified Agents</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:max-w-lg bg-base-100 ">
                            <div className="pt-6 space-y-4 ">
                                <div className='flex items-center'>
                                    <span className='text-secondary pr-2'><BsArrowUpRightCircle/></span>
                                    <p className=""> High Quality Work</p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary pr-2'><BsArrowUpRightCircle/></span>
                                    <p className=""> Delivery On Time</p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary pr-2'><BsArrowUpRightCircle/></span>
                                    <p className=""> Quality Supports </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary pr-2'><BsArrowUpRightCircle/></span>
                                    <p className=""> Best Offers</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:max-w-lg bg-base-100 ">
                            <div className="pt-6 space-y-4 ">
                                <div className='flex items-center'>
                                    <span className='text-secondary pr-2'><BsArrowUpRightCircle/></span>
                                    <p className=""> Certified Engineer</p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary pr-2'><BsArrowUpRightCircle/></span>
                                    <p className=""> Satisfaction Moto</p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary pr-2'><BsArrowUpRightCircle/></span>
                                    <p className=""> Experience Team</p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary pr-2'><BsArrowUpRightCircle/></span>
                                    <p className=""> Best branding</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;