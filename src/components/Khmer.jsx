import React from 'react'
import { MdStarRate } from "react-icons/md";
import { PiChefHat } from "react-icons/pi";
import { LuClock } from "react-icons/lu";
import { khmerFoodData } from './KhmerFoodData';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { PListData } from './PListData';

const Khmer = () => {
  return (
    <div>
        <div className='w-full h-410 bg-orange-100'>
            <div className='flex gap-100'>
                <Link to="/"><button className='w-10 h-10 bg-orange-50 text-2xl rounded-full shadow-lg my-8 mx-10 hover:scale-105 transition'><IoMdArrowRoundBack className='mx-2'/></button></Link>
                <div className='text-center'>
                <h1 className='text-4xl font-bold py-8 text-orange-900'>Khmer Recipes</h1>
                </div>
            </div>
            <div className='flex flex-wrap gap-8 justify-center'>
                {khmerFoodData.map((KHF, index) => (
                    <div key={KHF.id} className='w-70 h-112 bg-orange-50 rounded-2xl shadow-lg mt-5'>
                        <img src={KHF.image} alt="" className='w-full h-[50%] object-cover rounded-t-2xl'/>
                        <p className='text-xl mt-2 px-4 font-bold text-orange-900'>{KHF.title}</p>
                        <p className='px-4 mt-2 '>{KHF.description}</p>
                        <div className='flex'>
                            <PiChefHat className='text-lg ml-3 mt-3.5 text-gray-600'/>
                            <p className='mt-3.5 px-2 text-gray-600 text-sm'>{KHF.difficulty}</p>
                            <LuClock className='ml-3 mt-4 text-gray-600'/>
                            <p className='mt-3.5 px-2 text-gray-600 text-sm'>{KHF.time}</p>
                            <MdStarRate className='text-yellow-400 text-xl ml-3 mt-3'/>
                            <p className='mt-3.5 px-2 text-gray-600 text-sm'>{KHF.rating}</p>
                        </div>
                        <div className='text-center mt-4'>
                            <Link to={index === 0 ? `/amok` : `/plan`}><button className='w-[90%] h-10 border-2 border-orange-800 rounded-xl text-orange-800 text-sm hover:bg-orange-800 hover:text-white transition duration-250'>VIEW RECIPE</button></Link>    
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Khmer
