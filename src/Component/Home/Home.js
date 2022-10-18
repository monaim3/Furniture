import React from 'react';
import Blog from '../Blog/Blog';
import Carousel from '../Carousel/Carousel';
import Circles from '../Circles/Circles';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Circles></Circles>
            <Products></Products>
            <Blog></Blog>
        </div>
    );
};

export default Home;