import React from 'react';
import './Blog.css'
import  blog1 from '../Images/sidekix-media-8qNuR1lIv_k-unsplash.jpg'
import  blog2 from '../Images/sidekix-media-EoTUCbv9Jrs-unsplash.jpg'
import  blog3 from '../Images/fred-kleber-4WEKYSM9MTE-unsplash.jpg'
const Blog = () => {
    return (
      <>
      <h3 className='text-4xl text-center mt-14 font-semibold'>Latest News
            </h3>
            <h5 className='text-xl text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do <br />eiusmo tempor incididunt ut labore

            </h5>
     
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" data-aos="zoom-out-up" data-aos-duration="1000">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src={blog3}
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  traveling
                </a>
                <span className="text-gray-600">— 28 Dec 2020</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Eiumod tempor incididunt labore
              </a>
              <p className="mb-2 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <button className={
                    "inline-block px-8 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-slate-400 hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out inline-block px-8 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out"
                } >Read More
                </button>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm" data-aos="zoom-out-down" data-aos-duration="1000">
            <img
              src={blog1}
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 ">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  traveling
                </a>
                <span className="text-gray-600">— 28 Dec 2020</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Simple is better"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
              Ut enim adminim veniam
              </a>
              <p className="mb-2 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <button className={
                    "inline-block px-8 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-slate-400 hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out inline-block px-8 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out"
                } >Read More
                </button>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm" data-aos="zoom-out-up" data-aos-duration="1000">
            <img
              src={blog2}
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 ">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  traveling
                </a>
                <span className="text-gray-600">— 28 Dec 2020</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Film It!"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
              Spatialize with that the furns
              </a>
              <p className="mb-2 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <button className={
                    "inline-block px-8 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-slate-400 hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out inline-block px-8 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out"
                } >Read More
                </button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
};

export default Blog;