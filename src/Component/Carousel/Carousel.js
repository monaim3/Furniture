import React from 'react';
import './Carousel.css';
import slider1 from '../Images/slider-2-1.jpg'
import slider2 from '../Images/slider-2-2.jpg'
import Circles from '../Circles/Circles';
const Carousel = () => {
  return (
    <>
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade carousel-dark relative"
      data-bs-ride="carousel"
    >

      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="1"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="2"
          aria-label="Slide 1"
        ></button>
      </div>

      <div className="carousel-inner relative w-full overflow-hidden">

        <div className="carousel-item active relative float-left w-full">
          <img
            src={slider1}
            className="block w-full"
            alt="Motorbike Smoke"
          />
            <div className="md:mt-0 carousel-caption text-white  absolute text-center ">
            <h5 className="text-2xl font-semibold">New Products</h5>
            <h3 className='text-5xl font-bold mt-4'>Flexible Chair</h3>
            <p className='font-semibold lg:mt-4 hidden md:block'>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do <br></br>eiusmo tempor incididunt ut labore et dolore magna</p>
            <div className="flex space-x-2 justify-center mt-4">
              <button type="button" className="inline-block px-8 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-600 hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out">Shop Now</button>
            </div>
          </div>
        </div>


        <div className="carousel-item relative float-left w-full">
          <img
            src={slider2}
            className="block w-full"
            alt="Mountaintop"
          />
           <div className="carousel-caption text-white absolute text-center">
            <h5 className="text-2xl font-semibold">Best Seller</h5>
            <h3 className='text-5xl font-bold mt-4'>Creative Sofa</h3>
            <p className='font-semibold mt-4 hidden md:block'>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do <br></br>eiusmo tempor incididunt ut labore et dolore magna</p>
            <div className="flex space-x-2 justify-center mt-4">
              <button type="button" className="inline-block px-8 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-600 hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out">Shop Now</button>
            </div>
          </div>
        </div>


        <div className="carousel-item relative float-left w-full">
          <img
            src={slider1}
            className="block w-full"
            alt="Woman Reading a Book"
          />
          <div className="carousel-caption text-white  absolute text-center">
            <h5 className="text-2xl font-semibold">New Products</h5>
            <h3 className='text-5xl font-bold mt-4'>Flexible Chair</h3>
            <p className='font-semibold mt-4 hidden md:block'>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do <br></br>eiusmo tempor incididunt ut labore et dolore magna</p>
            <div className="flex space-x-2 justify-center mt-4">
              <button type="button" className="inline-block px-8 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-600 hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out">Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );
};

export default Carousel;