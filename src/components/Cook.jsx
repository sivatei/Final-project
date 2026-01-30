import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from 'react-router-dom'

const Cook = () => {
  return (
    <div>
      <div className='w-full h-200 bg-orange-50 flex-col justify-center items-center'>
            <div className='flex gap-105 bg-orange-50'>
                <NavLink to="/khmer"><button className='w-10 h-10 bg-orange-100 text-2xl rounded-full shadow-lg my-8 mx-10 hover:scale-105 transition'><IoMdArrowRoundBack className='mx-2'/></button></NavLink>
                <div className='text-center'>
                <h1 className='text-3xl font-bold py-8 text-orange-900'>Amok Recipe</h1>
                </div>
            </div>
        <div className='w-[90%] h-[80%] flex shadow-2xl bg-white ml-15'>
            <div className='w-[50%] h-full '>
                <div className='w-full h-[70%]  flex justify-center items-center '> 
                    <iframe  className='w-[90%]  h-[90%]' src="https://www.youtube.com/embed/xLCtu-KpGJ0?si=dS5I_rY-JGT3PEaG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                <div className='w-full h-[29%]  flex gap-20 px-5'>
                    <div className='  w-50 h-full '>
                        <ul className='list-disc pl-5 '>
                            <h3 className='text-center font-bold  p-2  text-amber-800'>Tips</h3>
                            <li  > Do not boil! amok is steamed</li>
                                <li>Texture should be soft like custard</li>
                                <li>Chicken or tofu can replace fish</li>
                            
                        </ul>

                        
                        
                        </div>
                        <div className='w-50 h-50 '>
                            <h3 className='font-bold p-2 text-amber-800'>How to make</h3>
                            <p>Amok is made by mixing fish with kroeung paste, coconut milk, and eggs, then steaming it until soft and creamy.</p>
                        </div>
                </div>
                 </div>
            <div className='w-[50%] h-full '>
                <div className='w-full h-[70%] p-5'>
                    <div><h1 className='text-center text-2xl font-bold p-5 text-amber-800'> INGREDIANTS</h1></div>
                    <div>
                        <ul className='list-disc pl-5'>
                            <h3 className='font-bold text-amber-800'>Main ingredients</h3>
                            <li>Fish (freshwater fish like snakehead or catfish)</li>
                            <li>Coconut milk</li>
                            <li>Eggs</li>
                            <li>Kroeung paste (traditional Khmer curry paste)</li>
                        </ul>
                    </div>
                    <div className='flex gap-10 '>
                       <div> <ul className='list-disc pl-5 '>
                                <h3 className='font-bold text-amber-800'>Kroeung paste ingredients</h3>
                            <li>Lemongrass</li>
                            <li>Galangal</li>
                            <li>Kaffir lime zest or leaves</li>
                            <li>Garlic</li>
                            <li>Shallots</li>
                            <li>Fingerroot (optional)</li>
                            <li>Chili (optional, mild)</li> 
                            
                            
                            </ul></div>
                            <div>
                                <ul className='list-disc pl-5 '>
                                    <h3 className='font-bold text-amber-800'>Other ingredients</h3>
                                    <li>Prahok (fermented fish paste) _ optional</li>
                                    <li>Fish sauce</li>
                                    <li>Sugar (palm sugar preferred)</li>
                                    <li>salt</li>

                                </ul>
                            </div>
                    </div>
                 </div>
                 <div className='w-full h-[30%] flex justify-center items-center
                 '>
                    <div className='w-[90%] h-[90%] grid grid-cols-4 gap-1 py-3 text-center font-bold  text-amber-800 '>


                   <div className='bg-orange-200 rounded-3xl w-20  h-[95%] shadow-2xl  '>  
                        <div className=' w-full h-[50%]  pt-5  '> <p>250-350</p>

                        </div>
                        <div className=' w-full h-[50%] rounded-2xl  bg-orange-100 py-5 '><p>Calories</p> </div>
                    </div>
                    <div className='bg-orange-200 rounded-3xl w-20  h-[95%]  shadow-2xl  '>  
                        <div className=' w-full h-[50%] '><p className=' text-center pt-5  '>20-25</p> </div>
                        <div className=' w-full h-[50%] rounded-2xl  bg-orange-100 pt-5'><p >Protein</p> </div>
                    </div>
                    <div className='bg-orange-200 rounded-3xl w-20  h-[95%]  shadow-2xl '>  
                        <div className=' w-full h-[50%] pt-5'><p>18-25</p> </div>
                        <div className=' w-full h-[50%] rounded-2xl  bg-orange-100  pt-5'><p>Fat</p> </div>
                    </div>
                    <div className='bg-orange-200 rounded-3xl w-20  h-[95%] shadow-2xl '>  
                        <div className=' w-full h-[50%] pt-5 '><p> 8-12</p> </div>
                        <div className=' w-full h-[50%] rounded-2xl  bg-orange-100  pt-5'><p>Carbs</p> </div>
                    </div>


                    
                    </div>
                 </div>
                 </div>
            </div> 
        </div>
    </div>
  )
}

export default Cook
