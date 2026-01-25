import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


const Login = () => {
  return (
    <div>
       <div className='w-full h-dvh bg-orange-100 flex justify-center pt-5'>
          <div className='bg-orange-50 w-[55%] h-[75%] shadow-2xl flex rounded-2xl mt-15'>
            <div className='w-[50%] h-full'>
                <div className=' w-full h-full'>
                    <img className='w-full h-full object-cover rounded-l-2xl' src="https://i.pinimg.com/736x/4f/cf/09/4fcf09964e51777bce60375114117236.jpg" alt="" />
                </div>
            </div>
            <div className=' w-[50%] h-full'>
             
                 <div className=' m-12 text-2xl font-bold  '>
                    <h1 className='text-center text-orange-900'>WELCOME TO FOOD RECIPE</h1>
                    <h1 className='text-center mt-5 text-xl'> LOGIN </h1></div>

    <div className="relative w-72 mx-7 my-4">
  <input type="text"id="email"placeholder=" "className="peer w-full h-10  border-b-2 px-3 outline-none "/>
  <label
    htmlFor="email"
    className="absolute left-3 top-2 text-sm transition-all 
               peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base
               peer-focus:-top-2 peer-focus:text-sm  px-1"
  >
    Email
  </label>
</div>
 <div className="relative w-72 mx-7 my-4">
  <input type="text"id="email"placeholder=" "className="peer w-full h-10  border-b-2 px-3 outline-none "
  />
  <label
    htmlFor="email"
    className="absolute left-3 top-2 text-sm transition-all 
               peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base
               peer-focus:-top-2 peer-focus:text-sm  px-1"
  >
    Password
  </label>
</div>

<div className='flex mx-7 my-2  gap-4'>
    <input className=' cursor-pointer' type="checkbox" />
    <p>Remember me</p>
    </div  >
      <div className='flex justify-center gap-4 text-3xl my-2 text-amber-900   '>
        <FaFacebook className='transition-all  hover:scale-105' />
    <FaSquareXTwitter className='transition-all  hover:scale-105' />
    <FaInstagramSquare className='transition-all  hover:scale-105' />
</div>
    <div >
        <NavLink to="/" onClick={() => window.scrollTo(0, 0)}><button className=' w-70 h-10  border-2 bg-orange-900 mt-2 ml-7 rounded-2xl font-bold text-orange-50 transition-all  
                    hover:scale-105 hover:bg-orange-700'>Login</button></NavLink>
    <div className='text-center m-4 text-sm '><p className=''>Don't have acount? <NavLink className='text-blue-700 '>Sign up</NavLink></p></div>
    </div>
  

            </div>
          </div>
       </div>
    </div>
  )
}

export default Login
