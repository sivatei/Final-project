import React from 'react'
import { cuisineData } from './CuisineData'
import { Link } from 'react-router-dom'


const Cuisine = () => {
  return (
    <div>
        <div className='w-full h-175 bg-orange-100 flex-col justify-center'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold py-12 text-orange-900'>EXPLORE CUISINES</h1>
            </div>
            <div className='flex flex-wrap gap-10 justify-center'>
                {cuisineData.map(cuisine => (
                    <Link key={cuisineData.id} to="/khmer" onClick={() => window.scrollTo(0, 0)}>
                    <div key={cuisine.id} className='w-40 h-50 bg-orange-900 rounded-xl overflow-hidden shadow-lg hover:scale-110 transition mt-6'>
                    <img src={cuisine.image} alt={cuisine.name} className='w-full h-[75%] rounded-t-xl object-cover' />
                    <h2 className='text-xl font-bold text-center px-4 mt-2.5 text-orange-100'>{cuisine.name}</h2>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Cuisine
