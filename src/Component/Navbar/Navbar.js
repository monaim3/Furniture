import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
    <div className="navbar bg-slate-900	text-white font-semibold">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" bg-slate-600 menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li tabIndex={0}>
          <Link to="/" className="justify-between">
          Home Furniture
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </Link>
          <ul className="p-2 bg-slate-400">
            <li><a>Bedroom</a></li>
            <li><a>Dining</a></li>
            <li><a>Living</a></li>
          </ul>
        </li>

         <li tabIndex={0}>
          <Link to="/" className="justify-between">
          Office Furniture
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </Link>
          <ul className="p-2 bg-slate-400">
            <li><a>Bedroom</a></li>
            <li><a>Dining</a></li>
            <li><a>Living</a></li>
          </ul>
        </li> 
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex lg:justify-center">
    <ul className="menu menu-horizontal p-0  ">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li tabIndex={0} className="z-10">
       <Link to="/homefurniture">
        Home Furniture

          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </Link>
        <ul className="p-2 bg-slate-400">
        <li><a>Bedroom</a></li>
            <li><a>Dining</a></li>
            <li><a>Living</a></li>
        </ul>
      </li>

      <li tabIndex={0} className="z-10">
       <Link to="/officefurniture">
        Office Furniture

          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </Link>
        <ul className="p-2 bg-slate-400">
        <li><a>Bedroom</a></li>
            <li><a>Dining</a></li>
            <li><a>Living</a></li>
        </ul>
      </li>

      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/register'>Register</Link></li>
    </ul>
  </div>

</div>
      
    );
};

export default Navbar;