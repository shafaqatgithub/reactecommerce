import React from 'react'
import { FiMenu } from "react-icons/fi";
import { FaShoppingBag } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { getSidebarStatus, setSidebarOn, setSidebarOff } from '../store/sidebarSlice';
import { useSelector, useDispatch } from 'react-redux';


const Navbar = () => {

  const dispatch = useDispatch();
  const temp = useSelector(getSidebarStatus)
  console.log(temp);
  const isSidebarOn = useSelector(getSidebarStatus)

  const toggleSidebar = () => {
    dispatch(isSidebarOn ? setSidebarOff() : setSidebarOn());
  };

  return (
    

    <nav>
      <div className='container mx-auto flex items-center justify-between py-2'>
        <div className='flex items-center'>
          <button 
            type="button" 
            className='text-white' 
            onClick={toggleSidebar}
          >
            < FiMenu />
          </button>
          <Link to="/" className='flex items-center ml-2'>
            <span className='text-xl'>
            <FaShoppingBag />
            </span>
            <span className='ml-2 font-bold'>SnapUp.</span>
          </Link>
        </div>

        <div className='flex flex-grow mx-4'>
          <div className='bg-white flex items-center w-full rounded'>
            <input 
              type="text" 
              className='form-control p-2 w-full rounded-l focus:outline-none' 
              placeholder='Search your preferred items here' 
              
            />
            <Link to='' className=' text-black p-2 rounded-r flex items-center justify-center'>
            <FaMagnifyingGlass />
            </Link>
          </div>

         
        </div>

        <div className='flex items-center'>
          <Link to="/cart" className='relative flex items-center text-white '>
          <FaShoppingCart />
            <div className='absolute -top-2 -right-2 bg-white text-red text-xs rounded-full w-4 h-4 flex items-center justify-center'>
            
            </div>
           
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar