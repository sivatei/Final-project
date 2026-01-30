import React from 'react'
import { FaStar } from "react-icons/fa";
import { MdAvTimer } from "react-icons/md";
import { PiBowlFoodBold } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { PListData } from './PListData';

const PList = () => {
  return (
    <div className=' w-full h-300 bg-[url("https://i.pinimg.com/1200x/9c/7c/64/9c7c6435b8e5f01d44c0334a1e8d1200.jpg")] bg-cover bg-center'>
         <div className='flex justify-center items-center'>
              <div className='flex mt-13 mb-6 gap-3'> 
                <PiBowlFoodBold className='text-4xl text-orange-100 font-bold' />
                <h1 className='text-center text-3xl font-bold text-orange-100'>POPULAR</h1>
              </div>
            </div>
             <div className='grid grid-cols-4 justify-center item-center'>
                {PListData.map((p)=>( 
                  <div className='bg-orange-50 shadow-2xl w-65 h-105 rounded-3xl ml-7 mt-13 flex flex-col'>
        <div className='card w-full h-full'>
            <div className=' w-full h-55'>
                <img className='w-full h-full object-cover p-2 rounded-3xl' 
                src={p.image} alt="" />
            </div>
            <div className='card-body w-full flex flex-col flex-1'>
             <div className='mx-3 mt-1'><h1 className=' text-center text-lg font-bold text-amber-900' >{p.title}</h1>
             <p className="text-sm line-clamp-3 mt-2" >{p.description}</p></div>
              
              <div className='mt-1'>
                 <div className='flex justify-around m-2'>
                  <div className='flex gap-1 '> 
                     
                       <MdAvTimer className='text-2xl text-amber-400' />
                     <p>{p.time}</p></div>
                  <div className='flex gap-1'> 
                    <FaStar className='text-2xl text-amber-400' />
                     <p>{p.rating}</p></div>
               
                 </div>
                   <div className='w-full h-10  mt-3   ' >
                    <NavLink className=' w-full h-full flex justify-center  text-amber-900' to={`/detail/${p.id}`} onClick={() => window.scrollTo(0, 0)}> <button  className='w-[90%] h-full  border-amber-500  border-2 rounded-2xl hover:bg-linear-to-r from-orange-500 to-orange-600 hover:text-orange-50'>VIEW DETAIL</button> </NavLink>
                  </div>               
              </div>
            </div>
        </div>
        </div>))}     
        </div>
    </div>
  )
}

export default PList
