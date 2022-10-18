import React, { useContext, useState } from 'react';
import CartTable from '../CartTable/CartTable';
import { CartContext } from '../Main/Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'
import { deleteShoppingCart, removeFromDb } from '../FakeDb/FakeDb';
import { Link } from 'react-router-dom';
const Cart = () => {
    const [cart, setCart] = useContext(CartContext)
    const handelete = (id) => {
        const remainItem = cart.filter(item => item.id !== id)
        setCart(remainItem)
        removeFromDb(id)
        toast.warning('Product Removed!', { autoClose: 500 })
    }
    let Total = 0;
    for (const getItem of cart) {
        Total = Total + getItem.price * getItem.quantity
    }
     const handleClearCart=()=>{
        setCart([])
        deleteShoppingCart()
        toast.warning('Cart Clear!', { autoClose: 500 })
     }
    return (
        <>
            <div className="overflow-x-auto mt-10">
                <table className="table table-auto w-full md:table-fixed">

                    <thead className=''>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>SubTotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {cart.map((item) => <CartTable handelete={handelete} item={item} key={item.id}></CartTable>)}
                    </tbody>
                </table>
            </div>
            <div className="grandTotal flex justify-end pr-16">
                <h3 className='text-xl text-orange-400 font-semibold'>Grand Total: <span className='text-black'>${Total}</span></h3>
            </div>
            <div className="checkOut lg:flex lg:justify-between grid grid-cols-1 justify-items-center gap-y-4  md:grid  md:grid-cols-2 md:gap-x-32 mb-4 lg:p-4">
                <div className="form-control">
                  
                    <label className="input-group">
                        <input type="text" placeholder="Enter your Coupon" className="input input-bordered" />
                        <span className='bg-orange-400 text-white font-semibold'>Apply Coupon</span>
                    </label>
                </div>
                <div className="clearCart">
                <button className="btn bg-orange-400" onClick={handleClearCart}>Clear Cart</button>
                </div>
                <div className="proccedToCheckout">
                <Link to="/checkout"><button onClick={handleClearCart} className="btn bg-orange-400">PROCEED TO CHECKOUT</button></Link>
                </div>
            </div>
        </>
    );
};

export default Cart;