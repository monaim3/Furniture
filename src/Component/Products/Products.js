import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { addToDb } from '../FakeDb/FakeDb';
import { CartContext } from '../Main/Main';
import Product from '../Product/Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Products.css'
const Products = () => {
    const [products, setProduct] = useState([])
    const [Data, setData] = useState([])
    const [active,setActive]=useState('all')
    const [cart,setCart]=useContext(CartContext)
 
    useEffect(() => {
        fetch('./fakeDb.json')
            .then(res => res.json())
            .then(data =>{
                setProduct(data)
                setData(data)
            })
    }, [])
    
    const filterItem = (item) => {
  
        const filter = Data.filter(ele => item === ele.category)
        setProduct(filter)
        setActive(item)
      
    }
    const Allhandle=(allitem)=>{
        if(allitem=="all"){
           setProduct(Data)
           setActive(allitem)

        }
      
    }
    const handleCartAdd=(pd)=>{
        let newCart=[]
        const exits=cart.find(ele=>ele.id===pd.id)
       
        if(!exits){
            pd.quantity=1;
            newCart=[...cart, pd];
        }
        else{
            const restItem=cart.filter(ele=>ele.id!==pd.id)
            exits.quantity=exits.quantity+1
            newCart=[...restItem,exits]
        }
      
        setCart(newCart)
        addToDb(pd.id)
        toast.success('Info: Product Added!', { autoClose: 500 })
    }
    console.log(active)
    return (

        <div>
            <ToastContainer position='top-center'></ToastContainer>
            <h3 className='text-4xl text-center mt-14 font-semibold'>Our Products
            </h3>
            <h5 className='text-xl text-center mt-4 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do <br />eiusmo tempor incididunt ut labore

            </h5>
            <div className="flex justify-around w-24	 lg:mx-auto lg:flex justify-content-evenly my-2 mt-10 sortBtn lg:flex-wrap">
         
            <button className={active==='all'?"inline-block px-8 py-3.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out":"inline-block px-8 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out"} onClick={() =>{
                 Allhandle('all')
                 
                 }}>All
                </button>
            
                <button className={active==='arrival'?"inline-block px-8 py-3.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out":
                "inline-block px-8 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition  ease-in-out"} onClick={()=> {filterItem('arrival')}}>New Arrival
                </button>
                <button className={`${active==='featured'?"inline-block px-8 py-3.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out":"inline-block px-8 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out"}`} onClick={() => filterItem('featured')}>Featured
                </button>
                <button className={`${active==='onsale'?"inline-block px-8 py-3.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out":"inline-block px-8 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out"}`} onClick={() => filterItem('onsale')}>On sale
                </button>
                <button className={
                    `${active==='Trending'?"inline-block px-8 py-3.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out":"inline-block px-8 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out"}`
                } onClick={() => filterItem('Trending')}>Trending
                </button>
            </div>
            <div className="products-menu grid grid-cols-2 gap-1 md:grid md:grid-cols-2 md:gap-1 lg:grid lg:grid-cols-4 lg:gap-5 lg:p-10">
                {
                    products.map((pd)=><Product pd={pd} key={pd.id} handleCartAdd={handleCartAdd}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;