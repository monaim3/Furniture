import React from 'react';
import { Link } from 'react-router-dom';
import confirmorder from '../Images/confirmorder.jpg'
const CheckOut = () => {
    return (
        <div className='w-50 mx-auto mt-6 flex justify-evenly items-center'>
            <img className='' src={confirmorder} alt="" />
            <Link to='/'><button className="btn bg-orange-400">Buy More</button>
            </Link>
        </div>
    );
};

export default CheckOut;