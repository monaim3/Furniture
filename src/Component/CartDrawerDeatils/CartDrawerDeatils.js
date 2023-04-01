import React, { useContext, useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CountContext } from '../Main/Main';
const CartDrawerDeatils = ({ item ,handleIncrease,count,handleDelte,handleDecrease}) => {
  
    return (
        <>
            <div className="cart-wrapper">
                <div className="singleItem border-b-2 mb-2	 flex justify-between items-start">
                    <img className='w-16 mb-12 h-32' src={item.img} alt="" />

                    <div className="text-area ">
                        <p className='text-base'>{item.name.slice(0, 16)}</p>
                        <p className='text-base mt-2'>${item.price}</p>
                        <div className="increase w-24 p-1 border rounded-md mt-2 flex justify-around items-center	">
                            <FontAwesomeIcon icon={faPlus} onClick={()=>handleIncrease(item)} />
                            {item.quantity}
                            <FontAwesomeIcon icon={faMinus}  onClick={()=>handleDecrease(item)}/>
                        </div>
                    </div>

                    <button className='text-orange-400'><FontAwesomeIcon icon={faTrash} onClick={()=>handleDelte(item.id)}/></button>
                </div>


            </div>
           
        </>
    );
};

export default CartDrawerDeatils;