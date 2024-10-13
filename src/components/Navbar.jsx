// import React, { useEffect , useState} from 'react'
// import { FiMenu } from "react-icons/fi";
// import { FaShoppingBag } from "react-icons/fa";
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import { getSidebarStatus, setSidebarOn, setSidebarOff } from '../store/sidebarSlice';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllCategories } from '../store/categorySlice';
// import { getCartItemsCount, getAllCarts, getCartTotal } from '../store/cartSlice';
// import CartPage from '../pages/CartPage';
// import CartModel from './CartModel';
// // import { getCartStatus,setCartOff, setCartOn } from '../store/cartSlice';


// const Navbar = () => {


//   const dispatch = useDispatch();
//   const temp = useSelector(getSidebarStatus)
//   console.log(temp);
//   const isSidebarOn = useSelector(getSidebarStatus)
//   const categories = useSelector(getAllCategories)
//    const itemsCount = useSelector(getCartItemsCount);
//   const carts = useSelector(getAllCarts)
//  // console.log(itemsCount);

//   //const    isCartOn = useSelector(getCartStatus)



//   useEffect(() => {
//      dispatch(getCartTotal())
//   },[carts])
//   // console.log(categories)

//   const toggleSidebar = () => {
//     dispatch(isSidebarOn ? setSidebarOff() : setSidebarOn());
//   };

//   // const toggleCart = () => {
//   //   dispatch(isCartOn ? setCartOff() : setCartOn());
//   // };

//   const [isCartModelVisible, setCartModelVisible] = useState(false);

//   const toggleCart = () => {
//     setCartModelVisible(!isCartModelVisible);
//   };

//   return (
//     <nav className='flex flex-col'>
//       <div className='flex items-center justify-between py-2'>
//         <div className='flex items-center'>
//           <button 
//             type="button" 
//             className='text-white' 
//             onClick={toggleSidebar}
//           >
//             <FiMenu />
//           </button>
//           <Link to="/" className='flex items-center ml-2'>
//             <span className='text-xl'>
//               <FaShoppingBag />
//             </span>
//             <span className='ml-2 font-bold'>SnapUp.</span>
//           </Link>
//         </div>
  
//         <div className='flex-grow mx-4'>
//           <div className='bg-white flex items-center w-full rounded'>
//             <input 
//               type="text" 
//               className='form-control p-2 w-full rounded-l focus:outline-none' 
//               placeholder='Search your preferred items here' 
//             />
//             <Link to='' className='text-black p-2 rounded-r flex items-center justify-center'>
//               <FaMagnifyingGlass />
//             </Link>
//           </div>
//         </div>
  
//         <div className='flex items-center'>
//           <Link to="/cart" className='relative flex items-center text-white'>
//             <button type='button'  onClick={toggleCart}>
//             <FaShoppingCart/>
//             </button>
//             <div className='absolute -top-2 -right-2 bg-white text-red text-xs rounded-full w-4 h-4 flex items-center justify-center'>
//   {itemsCount}
// </div>

           
//             {isCartModelVisible && <CartModel carts={carts} />}
//           </Link>
//         </div>
//       </div>
  
     
//       <ul className='flex items-center gap-6 justify-center space-x-4 ml-4 mt-2 py-2 '>
//         {
//           categories.slice(0, 10).map((category, idx) => (
//             <li key={idx} className='no-wrap'>
//               <Link to={`category/${category}`} className='text-white'> {category} </Link>
//             </li>
//           ))
//         }
//       </ul>
//     </nav>
//   );
  
  

// }

// export default Navbar

import React, { useEffect, useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { FaShoppingBag } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { getSidebarStatus, setSidebarOn, setSidebarOff } from '../store/sidebarSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../store/categorySlice';
import { getCartItemsCount, getAllCarts, getCartTotal } from '../store/cartSlice';
import CartModel from './CartModel';

const Navbar = () => {
  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);
  const categories = useSelector(getAllCategories);
  const itemsCount = useSelector(getCartItemsCount);
  const carts = useSelector(getAllCarts);
  
  const [isCartModelVisible, setCartModelVisible] = useState(false);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);

  const toggleSidebar = () => {
    dispatch(isSidebarOn ? setSidebarOff() : setSidebarOn());
  };

  const handleMouseEnter = () => {
    setCartModelVisible(true);
  };

  const handleMouseLeave = () => {
    setCartModelVisible(false);
  };

  return (
    <nav className='flex flex-col'>
      <div className='flex items-center justify-between py-2'>
        <div className='flex items-center'>
          <button 
            type="button" 
            className='text-white' 
            onClick={toggleSidebar}
          >
            <FiMenu />
          </button>
          <Link to="/" className='flex items-center ml-2'>
            <span className='text-xl'>
              <FaShoppingBag />
            </span>
            <span className='ml-2 font-bold'>SnapUp.</span>
          </Link>
        </div>

        <div className='flex-grow mx-4'>
          <div className='bg-white flex items-center w-full rounded'>
            <input 
              type="text" 
              className='form-control p-2 w-full rounded-l focus:outline-none' 
              placeholder='Search your preferred items here' 
            />
            <Link to='' className='text-black p-2 rounded-r flex items-center justify-center'>
              <FaMagnifyingGlass />
            </Link>
          </div>
        </div>

        <div className='flex items-center'>
          <div 
            className='relative flex items-center text-white'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
            <div className='absolute -top-2 -right-2 bg-white text-red text-xs rounded-full w-4 h-4 flex items-center justify-center'>
              {itemsCount}
            </div>
            {isCartModelVisible && <CartModel carts={carts} />}
          </div>
        </div>
      </div>

      <ul className='flex items-center gap-6 justify-center space-x-4 ml-4 mt-2 py-2'>
        {categories.slice(0, 10).map((category, idx) => (
          <li key={idx} className='no-wrap'>
            <Link to={`category/${category}`} className='text-white'>{category}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
