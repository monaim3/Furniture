import './App.css';
import Main from './Component/Main/Main';
import Products from './Component/Products/Products';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Contact from './Component/Contact/Contact';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import Circles from './Component/Circles/Circles';
import Home from './Component/Home/Home';
import HomeFurniture from './Component/HomeFurniture/HomeFurniture';
import OfficeFurniture from './Component/OfficeFurniture/OfficeFurniture';
import { getLocalToCart } from './Component/Utilites/GetLocalToCart';
import Cart from './Component/Cart/Cart';
import CheckOut from './Component/CheckOut/CheckOut';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Login from './Component/UserInfo/Login/Login';
import Regiser from './Component/UserInfo/Register/Regiser';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage></ErrorPage>,
      element:<Main></Main>,
      
      loader:getLocalToCart,
      children:[
    
      {
        path:"/",
        element:<Home></Home>
        
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/homefurniture',
        element:<HomeFurniture></HomeFurniture>
      },
      {
        path:'/officefurniture',
        element:<OfficeFurniture></OfficeFurniture>
      },
      {
        path:'/cartDeatils',
        element:<PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Regiser></Regiser>
      }
    ]
    },
    {
      path:"checkout",
      element:<CheckOut></CheckOut>
    }
  ])
  return (
    <RouterProvider router={router} />
    );
};

export default App;
