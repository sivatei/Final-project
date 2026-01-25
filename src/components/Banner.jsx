import React from 'react'

const Banner = () => {
  return (
    <div>
        <div className='w-full h-150.5 bg-[url("https://i.pinimg.com/1200x/0d/84/11/0d841169388c9e46ab8fbb8af1bb553a.jpg")] bg-cover bg-center'>
            <div className='w-150 h-50 py-55 mx-20'>
                <h1 className='text-5xl text-white font-bold'>Discover Delicious Recipes From Every Culture</h1>
                <p className='text-white mt-3'>Easy recipes, helpful cooking tips, and delicious meals made for every taste.</p>
                <button className='w-35 h-11 mt-4 pb-1 font-bold rounded-lg bg-orange-800 text-white hover:bg-orange-700 hover:scale-108 transition'>Explore more</button>
            </div>
        </div>
    </div>
  )
}

export default Banner
