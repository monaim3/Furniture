import React, { useEffect, useState } from 'react';
import Circle from '../Circle/Circle';
import './Circles.css';
const Circles = () => {
    const [circle,setCircle]=useState([])
    useEffect(()=>{
       fetch('./Circle.json')
       .then(res=>res.json())
       .then(data=>setCircle(data))
    },[])
    return (
        <div className='grid grid-cols-2 items-center justify-center circle-wrapper lg:flex justify-around  lg:gap-5  md:grid md:grid-cols-3'>
           {circle.map(ele=> <Circle ele={ele} key={ele.id}></Circle> )}
        </div>
    );
};

export default Circles;