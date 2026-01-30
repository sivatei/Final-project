import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { BiSolidBookBookmark } from "react-icons/bi";
import { RiListSettingsFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import Logo from '../assets/image/logo.png'
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const [showMessage, setShowMessage] = useState(false);
 
    useEffect(() => {
    // check if loginSuccess is true in the state
    if (location.state?.loginSuccess) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000); // hide after 3 seconds
    }
  }, [location.state]);

  return (
    <div>
      {showMessage && (
        <div className="fixed top-16 right-5 bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg z-50 transition-all">
          Login successful! Welcome back.
        </div>
      )}

      <div className='w-full h-16 bg-linear-to-r from-orange-500 to-orange-600 flex justify-between items-center'>
        <div className='font-bold text-2xl gap-2 px-3 text-white flex'>
            <img src={Logo} alt="Logo" className='w-15 h-15 py-2 mt-1 object-contain filter invert'/>
            <h1 className='my-5'>FOOD RECIPE</h1>
        </div>
        <div className='flex gap-10'>
            <ul className='flex gap-10 justify-center ml-25 mt-1'>
                <li><NavLink to="/"><a href="#" className='font-bold text-white'>Home</a></NavLink></li>
                <li><NavLink to="/recipes"><a href="#" className='font-bold text-white'>Recipes</a></NavLink></li>
                <li><NavLink to="/about"><a href="#" className='font-bold text-white'>About</a></NavLink></li>
                <li><a href="#" className='font-bold text-white'>Contest</a></li>
                <li><a href="#" className='font-bold text-white'>Blogs</a></li>
            </ul>
            <div className='flex items-center gap-2 bg-gray-200 px-2 py-1 rounded-2xl'>
                <input type="text" placeholder='search' className=' bg-gray-200 rounded-xl px-3 text-gray'/>
                <IoSearch className='text-gray-500 mr-2 text-xl'/>
            </div>
        </div>
        <div className='flex gap-5 mr-13 text-white'>
            <NavLink to="/login" onClick={() => window.scrollTo(0, 0)}><a href="" className='text-2xl'><MdAccountCircle /></a></NavLink>
            <a href="" className='text-2xl'><BiSolidBookBookmark /></a>
            <a href="" className='text-2xl'><RiListSettingsFill/></a>
        </div>
      </div>
    </div>
  )
}

export default Header
