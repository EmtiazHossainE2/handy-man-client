import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class=" bg-base-200 bg-[url('https://i.ibb.co/1sXW9qc/Hero-Section-bg.jpg')]">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div >
                        <img src="https://i.ibb.co/GHxx4BD/handyman-hero-img.png" className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='man' />
                    </div>
                    <div className='lg:px-8 font-bold text-white'>
                        <h1 class="text-6xl ">Experience Handyman </h1>
                        <h1 class="text-6xl ">Quality Services </h1>
                        <p class="py-6 text-lg ">If you're looking for the best handyman service to help you out around the house, look no further than Exponent.</p>
                        <button class="btn btn-primary px-8">request service</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;