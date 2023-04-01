import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css'
import Modalinfor from '../Modalinfor/Modalinfor';
const Product = ({ pd,handleCartAdd }) => {
    const { id, category, name, price, img } = pd
    
    return (
        <>
            <div className={`card w-70  bg-base-100 shadow-xl mt-6 `} data-aos="fade-right" data-aos-duration="1000">
                <figure className=''><img src={img} alt="Shoes" className='relative' /></figure>
                
                <label htmlFor={`my-modal-${id}`}><FontAwesomeIcon icon={faEye} title="Deatils" className="faeyes absolute top-8 right-3" /></label>
                
                <div className="card-body">
                    <h2 className="card-title">
                        {name.slice(0, 10)}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='text-xl '>Price: ${price}</p>
                    <div className="card-actions justify-start mt-4 cursor-pointer">
                        <div onClick={()=>handleCartAdd(pd)} className="inline-block px-8 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-600 hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out">Add to Cart</div>

                    </div>
                </div>
            </div>
            <Modalinfor pd={pd}></Modalinfor>
        </>
    );
};

export default Product;