import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineCheckCircle } from "react-icons/md";

const Subscription = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-170 bg-orange-100'>
        <div className='flex gap-90'>
              <Link onClick={() => navigate(-1)}><button className='w-10 h-10 bg-orange-50 text-2xl rounded-full shadow-lg my-8 mx-10 hover:scale-105 transition'><IoMdArrowRoundBack className='mx-2'/></button></Link>
              <div className='text-center'>
              <h1 className='text-4xl font-bold py-8 text-orange-900'>Subscription Plan</h1>
              </div>
        </div>
        <div className='flex gap-7 justify-center items-center mt-10'>
            {/* card1 */}
            <div className='w-70 h-105 bg-white flex justify-center items-center rounded-2xl shadow-lg'>
              <div className='w-[87%] h-[90%]'>
                <p className='font-bold text-gray-500'>Basic Plan</p>
                <div className='flex gap-1 mt-3'>
                  <p className='text-4xl font-bold'>10$</p>
                  <p className='mt-4 text-gray-500'>per month</p>
                </div>
                <p className='mt-3 text-gray-500'>basic feature for up to 10 user</p>
                <div className='mt-5 flex justify-center'>
                  <button className='w-50 h-9 shadow-lg bg-gray-200 text-gray-500 text-sm rounded-xl hover:scale-105 hover:bg-amber-600 hover:text-white transition transform'>Get started</button>
                </div>
                <div className='w-full h-0.5 bg-gray-300 mt-7'></div>
                <p className='font-bold text-lg mt-2 text-gray-500'>Features</p>
                <p className='text-gray-400 text-sm'>everything in free plan plus...</p>
                <ul className=''>
                  <li>
                    <div className='mt-2 flex gap-2'><MdOutlineCheckCircle className='mt-1'/><p className='text-sm'>Full access to all recipes</p></div>
                    <div className='mt-2 flex gap-2'><MdOutlineCheckCircle className='mt-1'/><p className='text-sm'>No ads</p></div>
                    <div className='mt-2 flex gap-2'><MdOutlineCheckCircle className='mt-1'/><p className='text-sm'>Save unlimited recipess</p></div>
                    <div className='mt-2 flex gap-2'><MdOutlineCheckCircle className='mt-1'/><p className='text-sm'>Basic nutrition info</p></div>
                  </li>
                </ul>
              </div>
            </div>

            {/* card2 */}
            <div className='w-70 h-115 bg-orange-300 flex justify-center items-center rounded-2xl shadow-lg'>
              <div className='w-[87%] h-[90%]'>
                <p className='font-bold text-black'>Pro Plan</p>
                <div className='flex gap-1 mt-3'>
                  <p className='text-4xl font-bold'>25$</p>
                  <p className='mt-4'>per month</p>
                </div>
                <p className='mt-3 text-white'>basic feature for up to 10 user</p>
                <div className='mt-5 flex justify-center'>
                  <Link to="/payment"><button className='w-50 h-9 shadow-lg bg-gray-200 text-gray-500 text-sm rounded-xl hover:scale-105 hover:bg-white hover:text-amber-600 transition transform'>Get started</button></Link>
                </div>
                <div className='w-full h-0.5 bg-black mt-7'></div>
                <p className='font-bold text-lg mt-2'>Features</p>
                <p className='text-white text-sm'>everything in Basic plan plus...</p>
                <ul className=''>
                  <li>
                    <div className='mt-2 flex gap-2'><MdOutlineCheckCircle className='mt-1'/><p className='text-sm'>Video tutorials</p></div>
                    <div className='mt-2 flex gap-2'><MdOutlineCheckCircle className='mt-1'/><p className='text-sm'>Advanced search & filters</p></div>
                    <div className='mt-2 flex gap-2'><MdOutlineCheckCircle className='mt-1'/><p className='text-sm'>Weekly meal planner</p></div>
                    <div className='mt-2 flex gap-2'><MdOutlineCheckCircle className='mt-1'/><p className='text-sm'>Shopping list generator</p></div>
                  </li>
                </ul>
              </div>
            </div>

            {/* card3 */}
            <div className='w-70 h-105 bg-white flex justify-center items-center rounded-2xl shadow-lg'>
              <div className='w-[87%] h-[90%]'>
                <p className='font-bold text-gray-500'>Enterprise Plan</p>
                <div className='flex gap-1 mt-3'>
                  <p className='text-4xl font-bold'>40$</p>
                  <p className='mt-4 text-gray-500'>per month</p>
                </div>
                <p className='mt-3 text-gray-500'>basic feature for up to 10 user</p>
                <div className='mt-5 flex justify-center'>
                  <button className='w-50 h-9 shadow-lg bg-gray-200 text-gray-500 text-sm rounded-xl hover:scale-105 hover:bg-amber-600 hover:text-white transition transform'>Get started</button>
                </div>
                <div className='w-full h-0.5 bg-gray-300 mt-7'></div>
                <p className='font-bold text-lg mt-2 text-gray-500'>Features</p>
                <p className='text-gray-400 text-sm'>everything in Pro plan plus...</p>
                <ul className=''>
                  <li>
                    <div className='mt-2 flex gap-2'><MdOutlineCheckCircle className='mt-1'/><p className='text-sm'>Exclusive chef recipes</p></div>
                    <div className='mt-2 flex gap-2'><MdOutlineCheckCircle className='mt-1'/><p className='text-sm'>Personalized recommendations</p></div>
                    <div className='mt-2 flex gap-2'><MdOutlineCheckCircle className='mt-1'/><p className='text-sm'>Custom meal plans (diet-based)</p></div>
                    <div className='mt-2 flex gap-2'><MdOutlineCheckCircle className='mt-1'/><p className='text-sm'>Early access to new features</p></div>
                  </li>
                </ul>
              </div>
            </div>


        </div>
    </div>
  )
}

export default Subscription
