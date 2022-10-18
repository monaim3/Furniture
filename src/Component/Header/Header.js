import React, { useContext } from 'react';
import './Header.css'
import logo from '../Images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import CartDrawer from '../CartDrawer/CartDrawer';
import { CartContext } from '../Main/Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContex } from '../Context/UserContext';


const Header = () => {
  const [cart,setCart]=useContext(CartContext)
  const {user,logOut}=useContext(AuthContex)
  const handlelogout=()=>{
     logOut()
     toast.success(`User Logout Succesfully`, { autoClose: 500 })
  }
  return (
    <>
      <ToastContainer position='top-center'></ToastContainer>
      <div className="navbar bg-base-100 pl-12 pr-12">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl"> <img src={logo} alt="" /></Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">

            <button className='searchIcon '>   <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />  </button>
      
          
            {/* CartDrawer */}
            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <label  className="btn btn-ghost btn-circle">

              <div className="indicator">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">{cart.length}</span>

              </div>
            </label>
            </button>
         
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-6 rounded-full">
              {/* {user.email?<img src={user.photoURL}> </img> */}
              <FontAwesomeIcon icon={faUser} size="lg" />

              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                   {user?.displayName?user.displayName:user?.email}
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li onClick={handlelogout}><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
       <CartDrawer></CartDrawer>
    </>
  );
};

export default Header;