import { useRef, useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { recipeData } from './RecipeD';

export default function Recipe() {
const [isOpen, setIsOpen] = useState(false); 
const [activeCategory, setActiveCategory] = useState(null);
const sectionRefs = useRef({});
const [highlightedCategory, setHighlightedCategory] = useState(null);

  const recipes = {
    'Breakfast': [
      'Fluffy Pancakes',
      'Avocado Toast',
      'Scrambled Eggs',
      'French Toast',
      'Breakfast Burrito',
      'Oatmeal Bowl'
    ],
    'Desserts': [
      'Chocolate Chip Cookies',
      'Tiramisu',
      'Apple Pie',
      'Cheesecake',
      'Brownies',
      'Crème Brûlée'
    ],
    'Vegetarian': [
      'Veggie Stir Fry',
      'Caprese Salad',
      'Mushroom Risotto',
      'Vegetable Curry',
      'Margherita Pizza',
      'Greek Salad'
    ],
    'Quick & Easy': [
      'Pasta Aglio e Olio',
      '15-Minute Tacos',
      'Grilled Cheese',
      'Quesadilla',
      'Fried Rice',
      'Tomato Soup'
    ],
    'Healthy': [
      'Quinoa Bowl',
      'Grilled Salmon',
      'Buddha Bowl',
      'Chicken Salad',
      'Smoothie Bowl',
      'Zucchini Noodles'
    ]
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setActiveCategory(null);
  };

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-100 to-orange-100 p-8">
      <div className="flex flex-row">
        <NavLink to="/">
          <button className="w-10 h-10 bg-orange-50 text-2xl rounded-full shadow-lg mx-2 hover:scale-105 transition">
            <IoMdArrowRoundBack className="mx-2" />
          </button>
        </NavLink>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-900 ml-100">Recipe Collection</h1>
        </div>
      </div>

      <div className="relative inline-block mt-10 ml-7">
          <button
            onClick={toggleMenu}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-orange-400 transition-colors flex mr-15"
          >
            Browse Recipes {isOpen ? <FaAngleDown className='mt-1.5 ml-2'/> : <FaAngleRight className='mt-1.5 ml-2'/>}
          </button>

          {isOpen && (
            <div className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 min-w-64 z-50">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                <span className="font-semibold text-gray-700">Categories</span>
                <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 text-xl">
                  ×
                </button>
              </div>
              
              {Object.entries(recipes).map(([category, items]) => (
                <div key={category}>
                  <div
                      onClick={() => {
                        toggleCategory(category);
                        sectionRefs.current[category]?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                        setHighlightedCategory(category);
                        setTimeout(() => setHighlightedCategory(null), 2000);
                      }}
                    className="px-4 py-3 hover:bg-orange-50 cursor-pointer flex items-center justify-between border-b border-gray-100"
                  >
                    <span className="font-medium text-gray-700">{category}</span>
                    <span className={`text-gray-400 transition-transform ${
                      activeCategory === category ? 'rotate-90' : ''
                    }`}>
                      <FaAngleRight />
                    </span>
                  </div>

                  {activeCategory === category && (
                    <div className="bg-orange-50 border-l-4 border-orange-600">
                      {items.map((recipe) => (
                        <div
                          key={recipe}
                          className="px-8 py-2 hover:bg-orange-100 cursor-pointer text-gray-700 hover:text-orange-700 transition-colors"
                        >
                          {recipe}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>      

      <div className="p-6">
      {Object.entries(recipeData).map(([category, items]) => (
        <div key={category} ref={(el) => (sectionRefs.current[category] = el)} 
          className={`mb-10 transition-all duration-500 ${
          highlightedCategory === category
          ? 'ring-4 ring-orange-400 bg-orange-50 rounded-xl p-4' : ''}`}>
          <h1 className="text-orange-700 font-bold text-2xl mt-8">{category}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {items.map((recipe, index) => (
              <div
                key={index}
                className="h-20 bg-linear-to-l from-orange-400 to-orange-500 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200 flex cursor-pointer"
              >
                <div className="w-[45%] h-full">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full rounded-l-xl object-cover"
                  />
                </div>
                <div className="w-[55%] h-full flex items-center">
                  <h2 className="mx-5 font-bold text-lg text-orange-100">
                    {recipe.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    </div>
  );
}
