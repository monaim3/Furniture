import React from 'react';
import abou1 from '../Images/about1.jfif'
import abou2 from '../Images/about2.jfif'
const About = () => {
    return (
        <div className='about p-16 text-center '>
            <h2 className='text-2xl font-semibold text-black'>Furns is a global furniture destination for somethings. We sell cutting-edge <br></br>furniture and offer a wide variety of fashion-related content.
                <div className=" text-start about-us lg:flex lg:justify-between lg:gap-4 mt-6">
                    <div className="left_side">
                        <img className='h-[62%]' src={abou1} alt="" />
                        <h2 className='mt-6 text-1xl font-semibold'>OUR STORES</h2>
                        <p className='text-base'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="right_side mt-2 md:mt-2">
                        <img className='w-full' src={abou2} alt="" />
                        <h3 className='mt-12 text-1xl font-semibold'>OUR MISSION
                        </h3>
                        <p className='text-base'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
            </h2>
        </div>
    );
};

export default About;