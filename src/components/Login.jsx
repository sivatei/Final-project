import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { useLocation } from "react-router-dom";


const Login = () => {
  const location = useLocation();
  const [showMessage, setShowMessage] = useState(false);

    const handleLogin = () => {
    setShowMessage(true); // show the message
    setTimeout(() => setShowMessage(false), 1000); // hide after 3 seconds
  };

  return (
    <div>
      {/* Toast message */}
        {showMessage && (
          <div
            className={`fixed top-16 right-5 bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-500 ease-out
              ${showMessage ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            Login successful! Welcome back.
          </div>
        )}

       <div className='w-full h-dvh bg-orange-100 flex justify-center pt-5'>
          <div className='bg-white w-[55%] h-[75%] shadow-2xl flex rounded-2xl mt-15'>
            <div className='w-[50%] h-full'>
                <div className=' w-full h-full'>
                    <img className='w-full h-full object-cover rounded-l-2xl' src="https://i.pinimg.com/736x/0e/c2/89/0ec289492947872976c5c52215280faa.jpg" alt="" />
                </div>
            </div>
            <div className=' w-[50%] h-full'>
             
                 <div className=' m-12 text-2xl font-bold  '>
                    <h1 className='text-center text-orange-600'>WELCOME TO FOOD RECIPE</h1>
                    <h1 className='text-center mt-5 text-xl'> LOGIN </h1></div>

    <div className="relative w-72 mx-7 my-4">
  <input type="text"id="email"placeholder=" "className="peer w-full h-10  border-b-2 px-3 outline-none "/>
  <label
    htmlFor="email"
    className="absolute left-3 top-2 text-gray-500 transition-all  px-1
      peer-focus:-top-2 peer-focus:text-sm
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm"
  >
    Email
  </label>
</div>
 <div className="relative w-72 mx-7 my-4">
  <input type="text"id="email"placeholder=" "className="peer w-full h-10  border-b-2 px-3 outline-none "
  />
  <label
    htmlFor="email"
    className="absolute left-3 top-2 text-gray-500 transition-all  px-1
      peer-focus:-top-2 peer-focus:text-sm
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm"
  >
    Password
  </label>
</div>

<div className='flex mx-7 my-2  gap-4'>
    <input className=' cursor-pointer' type="checkbox" />
    <p>Remember me</p>
    </div  >
      <div className='flex justify-center gap-4 text-3xl my-2 text-orange-500   '>
        <FaFacebook className='transition-all  hover:scale-105' />
    <FaSquareXTwitter className='transition-all  hover:scale-105' />
    <FaInstagramSquare className='transition-all  hover:scale-105' />
</div>
    <div >
      <NavLink to="/" state={{ loginSuccess: true }}><button onClick={handleLogin} className=' w-70 h-10  border-2 bg-orange-400 mt-2 ml-7 rounded-2xl font-bold text-orange-50 transition-all  
      hover:scale-105 hover:bg-orange-500'>Login</button></NavLink>
    <div className='text-center m-4 text-sm '><p className=''>Don't have acount? <NavLink className='text-blue-700 '>Sign up</NavLink></p></div>
    </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Login
