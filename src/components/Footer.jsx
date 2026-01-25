import React from 'react'

const Footer = () => {
  return (
    <div className=" bg-amber-100">
      <footer className="bg-orange-900 text-amber-50 px-6 py-12 pt-15">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-orange-400 text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
              Bringing you delicious recipes from around the world. Cook with love, eat with joy!
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-9 h-9 bg-orange-400 text-emerald-900 rounded-full flex items-center justify-center font-bold hover:bg-orange-500 transition">f</a>
              <a href="#" className="w-9 h-9 bg-orange-400 text-emerald-900 rounded-full flex items-center justify-center font-bold hover:bg-orange-500 transition">i</a>
              <a href="#" className="w-9 h-9 bg-orange-400 text-emerald-900 rounded-full flex items-center justify-center font-bold hover:bg-orange-500 transition">p</a>
              <a href="#" className="w-9 h-9 bg-orange-400 text-emerald-900 rounded-full flex items-center justify-center font-bold hover:bg-orange-500 transition">t</a>
            </div>
          </div>

          <div>
            <h3 className="text-orange-400 text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-50 hover:text-orange-400 transition">Home</a></li>
              <li><a href="#" className="text-amber-50 hover:text-orange-400 transition">All Recipes</a></li>
              <li><a href="#" className="text-amber-50 hover:text-orange-400 transition">Categories</a></li>
              <li><a href="#" className="text-amber-50 hover:text-orange-400 transition">Submit Recipe</a></li>
              <li><a href="#" className="text-amber-50 hover:text-orange-400 transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-orange-400 text-lg font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-50 hover:text-orange-400 transition">Breakfast</a></li>
              <li><a href="#" className="text-amber-50 hover:text-orange-400 transition">Desserts</a></li>
              <li><a href="#" className="text-amber-50 hover:text-orange-400 transition">Vegetarian</a></li>
              <li><a href="#" className="text-amber-50 hover:text-orange-400 transition">Quick & Easy</a></li>
              <li><a href="#" className="text-amber-50 hover:text-orange-400 transition">Healthy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-orange-400 text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-50 hover:text-orange-400 transition">Cooking Tips</a></li>
              <li><a href="#" className="text-amber-50 hover:text-orange-400 transition">Kitchen Tools</a></li>
              <li><a href="#" className="text-amber-50 hover:text-orange-400 transition">Meal Planning</a></li>
              <li><a href="#" className="text-amber-50 hover:text-orange-400 transition">About Us</a></li>
              <li><a href="#" className="text-amber-50 hover:text-orange-400 transition">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-6 border-t border-emerald-800 text-gray-300 text-sm">
          <p>&copy; 2026 Recipe Haven. All rights reserved. | <a href="#" className="text-orange-400 hover:text-orange-500">Privacy Policy</a> | <a href="#" className="text-orange-400 hover:text-orange-500">Terms of Service</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
