import React from 'react';

const Intro = () => {
    return (
        <section className='flex  '>
            <div className='flex-1'>
                <div>
                    <img src="https://i.ibb.co/LhY9zxn/handyman-about-intro.png" alt="handyman" />
                </div>
            </div>
            <div className='flex-1 lg:pt-12'>
                <h1 className='text-4xl font-bold'>We Provide Cost-Effective <br /> Solution for You</h1>
                <p className='py-6'>Exponent is a full service company offering handyman solutions and repair home services from start to finish. Our staff has been experience and operating for ten years from Newyork City.</p>
                <p>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
        </section>
    );
};

export default Intro;