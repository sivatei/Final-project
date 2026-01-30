import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();
  return (
    <div className='w-full h-170 bg-orange-50'>
        <div className='flex gap-80'>
              <Link onClick={() => navigate(-1)}><button className='w-10 h-10 bg-orange-100 text-2xl rounded-full shadow-lg my-8 mx-10 hover:scale-105 transition'><IoMdArrowRoundBack className='mx-2'/></button></Link>
              <div className='text-center'>
              <h1 className='text-4xl font-bold py-8 text-orange-900'>Subscription Payment</h1>
              </div>
        </div>
        <div className='w-[50%] h-[60%] bg-white ml-78 mt-10 shadow-lg rounded-xl flex'>
            <div className='w-[50%] h-full flex justify-center items-center'>
                <div className='w-[90%] h-[90%] bg-white'>
                    <p className='text-2xl font-bold'>Payment</p>
                    <p className='mt-5 text-sm text-gray-500'>Pro plan subscription payment.</p>
                    <div className='flex justify-between mt-10'>
                        <p>Amount : </p>
                        <p className='font-bold'>$25</p>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <p>Tax : </p>
                        <p className='font-bold'>$1.5</p>
                    </div>
                    <div className='w-full h-0.5 bg-gray-300 mt-6'></div>
                    <div className='flex justify-between mt-3'>
                        <p className='mt-1'>Amount to pay : </p>
                        <p className='font-bold text-lg'>$26.5</p>
                    </div>
                    <div className='flex mt-15 gap-2'>
                        <input className=' cursor-pointer' type="checkbox" />
                        <p className='text-sm'>Remember bank card</p>
                    </div>
                </div>
            </div>
            <div className='w-[50%] h-full flex justify-center items-center rounded-r-xl bg-linear-to-r from-orange-200 to-orange-300'>
                <div className='w-[90%] h-[90%] bg-white rounded-xl'>
                    <p className='text-lg font-bold text-center mt-2'>Card Detail</p>
                        <div className="relative w-[90%] ml-4 mt-10">
                        <input type="text"id="email"placeholder=" "className="peer w-full h-10  border-b-2 px-3 outline-none "
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-3 top-2 text-gray-500 transition-all px-1
                                        peer-focus:-top-2 peer-focus:text-sm
                                        peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm"
                        >
                            Cardholder's Name
                        </label>
                        </div>
                        <div className="relative w-[90%] ml-4 mt-5">
                        <input type="text"id="email"placeholder=" "className="peer w-full h-10  border-b-2 px-3 outline-none "
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-3 top-2 text-gray-500 transition-all px-1
                                        peer-focus:-top-2 peer-focus:text-sm
                                        peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm"
                        >
                            Card Number
                        </label>
                        </div>

                            <div className="grid grid-cols-2 mt-6 ml-4">
                            <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Expiry Date
                            </label>
                            <input
                                type="text"
                                placeholder="MM/YY"
                                maxLength="5"
                                className="w-[70%] px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            />
                            </div>

                            <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                CVV
                            </label>
                            <input
                                type="text"
                                placeholder="123"
                                maxLength="3"
                                className="w-[70%] px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            />
                            </div>
                        </div>
                    <div className='flex justify-center mt-8'>
                        <button className='w-50 h-10 bg-linear-to-r from-orange-400 to-orange-300 rounded-2xl shadow-lg hover:bg-linear-l hover:text-white hover:scale-105 transition transform'>Pay now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment
