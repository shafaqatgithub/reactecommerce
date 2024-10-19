import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";

const Header = () => {
  return (
    <header className='bg-orange-500 text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col'>
          <div className='flex justify-between items-center py-2  text-sm'>
            <div>
                <ul className='flex items-center justify-center gap-4'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Follow Us On </Link></li>
                    
                    <ul className='flex justify-center gap-2'>
                        <li>
                        <a href='www.instagram.com'>
                            <IoLogoInstagram />
                        </a>
                        </li>
                        <li>
                        <a href='www.facebook.com'>
                        <FaFacebookSquare />
                        </a>
                        </li>

                    </ul>
                </ul>

            </div>
            <div>
                <ul className='flex gap-4'>
                    <li>Help?</li>
                    <li><Link to='signup'> SignUp</Link></li>
                    
                    <li><Link to='login'> Login </Link></li>
                </ul>


            </div>
          </div>

          <div className='mt-4'>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
