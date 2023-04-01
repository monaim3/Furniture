import React from 'react';
import Products from '../Products/Products';
import './Circle.css'
const Circle = ({ele}) => {
    const {name,img}=ele
    return (
      
           <>
            <div className="c1 mt-12 hovicon effect-1 sub-a"  data-aos="fade-down-right" data-aos-duration="1000">
                <img src={img} alt="" />
                <h2>{name}</h2>
            </div>
          
        </>
    );
};

export default Circle;