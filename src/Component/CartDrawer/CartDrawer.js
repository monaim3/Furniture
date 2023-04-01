import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext, CountContext } from '../Main/Main';
import CartDrawerDeatils from '../CartDrawerDeatils/CartDrawerDeatils';
import { addToDb, removeFromDb } from '../FakeDb/FakeDb';
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, useLocation } from 'react-router-dom';
import './CartDrawer.css'
const CartDrawer = () => {
  const [count, setCount] = useContext(CountContext)
  const location = useLocation();
  console.log('location pathname ki',location.pathname);
  const [cart, setCart] = useContext(CartContext)
  console.log('count', count)
  let total = 0
  for (const cartItem of cart) {

    total = total + cartItem.price * cartItem.quantity
  }

  const handleIncrease = (pd) => {
    let newCart = []
    const exits = cart.find((ele => ele.id === pd.id))

    // if(!exits){
    //     pd.quantity=1;
    //     newCart=[...cart, pd];
    // }

    const restItem = cart.filter(ele => ele.id !== pd.id)
    exits.quantity = exits.quantity + 1
    newCart = [...restItem, exits]

    setCart(newCart)
    addToDb(pd.id)
  }
  const handleDecrease = (pd) => {
    let newCart = []
    const exits = cart.find((ele => ele.id === pd.id))

    // if(!exits){
    //     pd.quantity=1;
    //     newCart=[...cart, pd];
    // }

    const restItem = cart.filter(ele => ele.id !== pd.id)
    if( exits.quantity>1){
      exits.quantity = exits.quantity - 1
     
    }
    newCart = [...restItem, exits]

    setCart(newCart)
    addToDb(pd.id)
  }

  const handleDelte = (id) => {
    const remainItem = cart.filter(item => item.id !== id)
    setCart(remainItem)
    removeFromDb(id)
    toast.warning('Product Removed!', { autoClose: 500 })
  }

  return (
    <>
      <ToastContainer position='top-center'></ToastContainer>
      <div className="cartdrawer	offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 font-semibold text-2xl border-none w-96" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header flex items-center justify-between p-4">
          <h5 className="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasRightLabel">Cart</h5>
          <button type="button" className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"><FontAwesomeIcon className="text-2xl" icon={faXmark} /></button>
        </div>
        <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
          {cart.length < 1 && <h2 className='text-orange-400'>Cart Is Empty.Add Product!</h2>}

          {cart.map((item) => <CartDrawerDeatils handleDecrease={handleDecrease} handleDelte={handleDelte} count={count} item={item} key={item.id} handleIncrease={handleIncrease}></CartDrawerDeatils>)}

        </div>
        <Link to="/cartDeatils">
          <div className="view-cart flex justify-between rounded-sm bg-orange-400 text-white p-4">
            <h3><FontAwesomeIcon icon={faCartShopping} /> View Cart</h3>
            <button>${total}</button>
          </div>
        </Link>
      </div>

    </>
  );
};

export default CartDrawer;