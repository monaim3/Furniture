import React from 'react';
import Blog from '../Blog/Blog';
import Slider from '../Carousel/Slider';
import Circles from '../Circles/Circles';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Circles></Circles>
            <Products></Products>
            <Blog></Blog>
        </div>
    );
};

export default Home;