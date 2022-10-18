import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import CartTracker from '../CartTracker/CartTracker';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

export const ProductContext = createContext([])
export const CartContext = createContext([])
export const CountContext = createContext(0)
export const DeleteContext = createContext(0)
const Main = () => {
    const { product, initalCart } = useLoaderData()
    const [cart, setCart] = useState(initalCart)
    const [count, setCount] = useState([])
   
    return (
        <div>
            <ProductContext.Provider value={product}>
                <CartContext.Provider value={[cart, setCart]}>
                    <CountContext.Provider value={[count,setCount]}>
                        <Header></Header>
                        <Navbar></Navbar>
                        <CartTracker></CartTracker>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </CountContext.Provider>
                </CartContext.Provider>
            </ProductContext.Provider>
        </div>
    );
};

export default Main;