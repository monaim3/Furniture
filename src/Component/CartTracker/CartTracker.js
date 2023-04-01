import React, { useContext } from 'react';
import CartDrawer from '../CartDrawer/CartDrawer';
import { CartContext } from '../Main/Main';
import './CartTracker.css'
const CartTracker = () => {
    const [cart,setCart]=useContext(CartContext)

    let Total = 0;
    for (const getItem of cart) {
        Total = Total + getItem.price * getItem.quantity
       
    }
    const handleShow=()=>{

    }
    return (
        <>
        <button id='cart__tracker' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">

      <span>
        <svg stroke='#059669' fill='currentColor' strokeWidth='0' viewBox='0 0 512 512' height='50px' width='50px' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32'
            d='M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32'
          ></path>
          <path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16'></path>
        </svg>
        <p>{cart.length}</p>
      </span>
      <h6>${Total}</h6>
 
    </button>
    <CartDrawer></CartDrawer>
    </>
    );
};

export default CartTracker;