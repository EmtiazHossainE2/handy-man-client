import React from 'react';
import { BsAward ,BsGift,BsPeople, BsFillTelephoneForwardFill,BsCurrencyDollar } from 'react-icons/bs';
import { AiOutlineContacts } from 'react-icons/ai';

const Chooseus = () => {
    return (
        <div className='pt-20 lg:px-20'>
            <div className='flex flex-col lg:flex-row'>
                <div className='basis-3/4 flex items-center justify-center'>
                    <div>
                        <div className='space-y-4'>
                            <p className='uppercase text-secondary text-md'>why choose us</p>
                            <h2 className='text-4xl font-bold'>Why Exponent Handyman Services</h2>
                            <p>Courtesy may not be the first thing people think of when it comes to plumbing, but for us, it's one of the most important tools we carry. Nothing wears on homeowners like the idea of handling plumbing problems. Services</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-5 capitalize'>
                            <div className="lg:max-w-lg bg-base-100 pb-5 lg:pb-0">
                                <div className="pt-6 space-y-12 ">
                                    <div className='flex items-center'>
                                        <span className='text-secondary text-4xl mr-3 border-2 rounded-full p-3  '><AiOutlineContacts /></span>
                                        <div className='space-y-2 '>
                                            <h4 className="text-xl ">Friendly Support </h4>
                                            <p className="text-[14px]">We care about your house and we’re not satisfied. </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary text-4xl mr-3 border-2 rounded-full p-3  '><BsAward /></span>
                                        <div className='space-y-2 '>
                                            <h4 className="text-xl ">Award Winning </h4>
                                            <p className="text-[14px]">Our experts will solve them in no time </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary text-4xl mr-3 border-2 rounded-full p-3  '><BsGift /></span>
                                        <div className='space-y-2 '>
                                            <h4 className="text-xl ">Best Offers</h4>
                                            <p className="text-[14px]">We care about your house and we’re not satisfied.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:max-w-lg bg-base-100  pb-5 lg:pb-0">
                                <div className="pt-6 space-y-12 ">
                                    <div className='flex items-center'>
                                        <span className='text-secondary text-4xl mr-3 border-2 rounded-full p-3  '><BsFillTelephoneForwardFill /></span>
                                        <div className='space-y-2'>
                                            <h4 className="text-xl ">Friendly Support </h4>
                                            <p className="text-[14px]">Our experts will solve them in no time </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary text-4xl mr-3 border-2 rounded-full p-3  '><BsPeople /></span>
                                        <div className='space-y-2'>
                                            <h4 className="text-xl ">Experience Team </h4>
                                            <p className="text-[14px]"> Nothing wears on homeowners like the idea of handling </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-secondary text-4xl mr-3 border-2 rounded-full p-3  '><BsCurrencyDollar /></span>
                                        <div className='space-y-2'>
                                            <h4 className="text-xl ">Affordable Price</h4>
                                            <p className="text-[14px]"> it’s one of the most important tools we carry </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='basis-1/3'>
                    <div>
                        <img className='lg:max-w-md' src="https://i.ibb.co/rtyYStt/services-handyman.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chooseus;