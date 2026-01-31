import React, { useState } from 'react';
import { Search, Filter, Grid, List, Clock, Users, ChefHat, Flame, Heart, Share2, BookmarkPlus, Star, TrendingUp, Award } from 'lucide-react';

export default function ExploreMore() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [likedRecipes, setLikedRecipes] = useState([]);

  const categories = [
    { id: 'all', name: 'All Recipes', count: 328 },
    { id: 'breakfast', name: 'Breakfast', count: 54 },
    { id: 'lunch', name: 'Lunch', count: 89 },
    { id: 'dinner', name: 'Dinner', count: 112 },
    { id: 'desserts', name: 'Desserts', count: 43 },
    { id: 'snacks', name: 'Snacks', count: 30 }
  ];


  const recipes = [
    {
      id: 1,
      category: 'breakfast',
      title: 'Fluffy Buttermilk Pancakes',
      description: 'Light and airy pancakes with a golden crisp exterior, perfect for a weekend morning',
      chef: 'Emily Rodriguez',
      prepTime: '10 min',
      cookTime: '15 min',
      servings: 4,
      difficulty: 'Easy',
      rating: 4.9,
      reviews: 342,
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
      tags: ['Quick', 'Family-Friendly', 'Vegetarian'],
      trending: true,
      calories: 285
    },
    {
      id: 2,
      category: 'lunch',
      title: 'Mediterranean Quinoa Bowl',
      description: 'Nutrient-packed bowl with roasted vegetables, feta cheese, and lemon tahini dressing',
      chef: 'Marco Santos',
      prepTime: '15 min',
      cookTime: '20 min',
      servings: 2,
      difficulty: 'Easy',
      rating: 4.7,
      reviews: 218,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
      tags: ['Healthy', 'Vegetarian', 'Gluten-Free'],
      trending: false,
      calories: 420
    },
    {
      id: 3,
      category: 'dinner',
      title: 'Herb-Crusted Salmon',
      description: 'Perfectly crispy salmon fillet with a delicious herb and garlic crust',
      chef: 'Chef Isabella',
      prepTime: '10 min',
      cookTime: '18 min',
      servings: 4,
      difficulty: 'Medium',
      rating: 4.8,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
      tags: ['Protein-Rich', 'Low-Carb', 'Omega-3'],
      trending: true,
      calories: 340
    },
    {
      id: 4,
      category: 'desserts',
      title: 'Chocolate Lava Cake',
      description: 'Decadent individual cakes with a molten chocolate center that flows like lava',
      chef: 'Pastry Chef Andre',
      prepTime: '20 min',
      cookTime: '12 min',
      servings: 6,
      difficulty: 'Hard',
      rating: 5.0,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80',
      tags: ['Indulgent', 'Date Night', 'Restaurant-Quality'],
      trending: true,
      calories: 580
    },
    {
      id: 5,
      category: 'dinner',
      title: 'Thai Green Curry',
      description: 'Aromatic and creamy coconut curry with vegetables and fresh basil',
      chef: 'Chef Sopa',
      prepTime: '15 min',
      cookTime: '25 min',
      servings: 4,
      difficulty: 'Medium',
      rating: 4.6,
      reviews: 267,
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80',
      tags: ['Spicy', 'Asian', 'Comfort Food'],
      trending: false,
      calories: 450
    },
    {
      id: 6,
      category: 'lunch',
      title: 'Classic Caesar Salad',
      description: 'Crisp romaine lettuce with homemade dressing, parmesan, and croutons',
      chef: 'Chef Marcus',
      prepTime: '15 min',
      cookTime: '0 min',
      servings: 2,
      difficulty: 'Easy',
      rating: 4.5,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&q=80',
      tags: ['Fresh', 'Quick', 'Light'],
      trending: false,
      calories: 320
    },
    {
      id: 7,
      category: 'breakfast',
      title: 'Avocado Toast Deluxe',
      description: 'Creamy avocado on sourdough with poached eggs, cherry tomatoes, and microgreens',
      chef: 'Chef Olivia',
      prepTime: '8 min',
      cookTime: '5 min',
      servings: 2,
      difficulty: 'Easy',
      rating: 4.7,
      reviews: 534,
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=80',
      tags: ['Trendy', 'Healthy', 'Instagram-Worthy'],
      trending: true,
      calories: 380
    },
    {
      id: 8,
      category: 'snacks',
      title: 'Crispy Spring Rolls',
      description: 'Golden-fried spring rolls filled with fresh vegetables and served with sweet chili sauce',
      chef: 'Chef Lin',
      prepTime: '25 min',
      cookTime: '15 min',
      servings: 6,
      difficulty: 'Medium',
      rating: 4.8,
      reviews: 423,
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80',
      tags: ['Party Food', 'Asian', 'Crispy'],
      trending: false,
      calories: 180
    },
    {
      id: 9,
      category: 'desserts',
      title: 'Tiramisu Classic',
      description: 'Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone',
      chef: 'Chef Giovanni',
      prepTime: '30 min',
      cookTime: '0 min',
      servings: 8,
      difficulty: 'Medium',
      rating: 4.9,
      reviews: 678,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
      tags: ['Italian', 'No-Bake', 'Classic'],
      trending: false,
      calories: 520
    }
  ];

  const filteredRecipes = selectedCategory === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === selectedCategory);

  const toggleSave = (id) => {
    setSavedRecipes(prev => 
      prev.includes(id) ? prev.filter(recipeId => recipeId !== id) : [...prev, id]
    );
  };

  const toggleLike = (id) => {
    setLikedRecipes(prev => 
      prev.includes(id) ? prev.filter(recipeId => recipeId !== id) : [...prev, id]
    );
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-600 bg-green-50';
      case 'Medium': return 'text-orange-600 bg-orange-50';
      case 'Hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-orange-50">

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-72 space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border-2 border-orange-100">
              <h3 className="text-sm font-bold text-orange-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <ChefHat className="w-4 h-4" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map(cat => {
        
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-3 rounded-2xl transition-all flex items-center justify-between group
                        ${selectedCategory === cat.id 
                          ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200' 
                          : 'hover:bg-orange-50'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-semibold">{cat.name}</span>
                      </div>
                      <span className={`text-sm font-bold ${selectedCategory === cat.id ? 'text-orange-100' : 'text-orange-400'}`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Filters */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border-2 border-orange-100">
              <h3 className="text-sm font-bold text-orange-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Flame className="w-4 h-4" />
                Quick Filters
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded accent-orange-500" />
                  <div className="flex items-center gap-2 text-sm text-orange-900">
                    <TrendingUp className="w-4 h-4 text-orange-500" />
                    <span className="group-hover:text-orange-600 transition-colors font-medium">Trending Now</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded accent-orange-500" />
                  <div className="flex items-center gap-2 text-sm text-orange-900">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="group-hover:text-orange-600 transition-colors font-medium">Under 30 Minutes</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded accent-orange-500" />
                  <div className="flex items-center gap-2 text-sm text-orange-900">
                    <Award className="w-4 h-4 text-orange-500" />
                    <span className="group-hover:text-orange-600 transition-colors font-medium">Award Winning</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded accent-orange-500" />
                  <div className="flex items-center gap-2 text-sm text-orange-900">
                    <Star className="w-4 h-4 text-orange-500" />
                    <span className="group-hover:text-orange-600 transition-colors font-medium">5 Stars Only</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Saved Recipes Counter */}
            <div className="bg-linear-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white shadow-lg border-2 border-orange-400">
              <BookmarkPlus className="w-10 h-10 mb-3 opacity-90" />
              <h3 className="text-3xl font-black mb-1">{savedRecipes.length}</h3>
              <p className="text-orange-100 text-sm font-medium">Saved Recipes</p>
              <button className="mt-4 w-full py-2 bg-white/20 hover:bg-white/30 rounded-xl text-sm font-semibold transition-all backdrop-blur">
                View Collection
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-black text-orange-900 mb-1">
                  {selectedCategory === 'all' ? 'All Recipes' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-orange-600 font-medium">
                  {filteredRecipes.length} delicious {filteredRecipes.length === 1 ? 'recipe' : 'recipes'} to try
                </p>
              </div>
              <select className="px-5 py-3 bg-white border-2 border-orange-100 rounded-2xl focus:outline-none focus:border-orange-300 text-orange-900 font-medium cursor-pointer">
                <option>Most Popular</option>
                <option>Highest Rated</option>
                <option>Newest First</option>
                <option>Quick & Easy</option>
                <option>Chef's Choice</option>
              </select>
            </div>

            {/* Content Grid/List */}
            <div className={viewMode === 'grid' 
              ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6' 
              : 'space-y-6'}>
              {filteredRecipes.map((recipe, index) => (
                <article 
                  key={recipe.id}
                  className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 cursor-pointer
                    ${viewMode === 'list' ? 'flex' : ''}`}
                  style={{ animation: `fadeInUp 0.4s ease-out ${index * 0.05}s backwards` }}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64' : 'aspect-4/3'}`}>
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    
                    {recipe.trending && (
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-lg">
                        <Flame className="w-3.5 h-3.5" />
                        Trending
                      </div>
                    )}

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur rounded-full flex items-center gap-1.5 shadow-lg">
                      <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                      <span className="text-sm font-bold text-orange-900">{recipe.rating}</span>
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(recipe.id);
                        }}
                        className={`p-2.5 rounded-full backdrop-blur-xl transition-all shadow-lg ${
                          likedRecipes.includes(recipe.id)
                            ? 'bg-orange-500 text-white'
                            : 'bg-white/95 text-orange-900 hover:bg-white'
                        }`}>
                        <Heart className="w-4 h-4" fill={likedRecipes.includes(recipe.id) ? 'currentColor' : 'none'} />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSave(recipe.id);
                        }}
                        className={`p-2.5 rounded-full backdrop-blur-xl transition-all shadow-lg ${
                          savedRecipes.includes(recipe.id)
                            ? 'bg-orange-500 text-white'
                            : 'bg-white/95 text-orange-900 hover:bg-white'
                        }`}>
                        <BookmarkPlus className="w-4 h-4" fill={savedRecipes.includes(recipe.id) ? 'currentColor' : 'none'} />
                      </button>
                      <button className="p-2.5 bg-white/95 backdrop-blur-xl rounded-full hover:bg-white transition-all text-orange-900 shadow-lg">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Difficulty Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur ${getDifficultyColor(recipe.difficulty)}`}>
                        {recipe.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {recipe.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-semibold rounded-lg border border-orange-200">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-orange-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {recipe.title}
                    </h3>
                    <p className="text-orange-700 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {recipe.description}
                    </p>

                    {/* Quick Info */}
                    <div className="grid grid-cols-3 gap-3 mb-4 py-3 border-y border-orange-100">
                      <div className="text-center">
                        <Clock className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                        <p className="text-xs font-semibold text-orange-900">{recipe.prepTime}</p>
                        <p className="text-xs text-orange-600">Prep</p>
                      </div>
                      <div className="text-center">
                        <Flame className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                        <p className="text-xs font-semibold text-orange-900">{recipe.cookTime}</p>
                        <p className="text-xs text-orange-600">Cook</p>
                      </div>
                      <div className="text-center">
                        <Users className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                        <p className="text-xs font-semibold text-orange-900">{recipe.servings}</p>
                        <p className="text-xs text-orange-600">Servings</p>
                      </div>
                    </div>

                    {/* Chef Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                          <ChefHat className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-sm">
                          <p className="font-bold text-orange-900">{recipe.chef}</p>
                          <p className="text-xs text-orange-600">{recipe.reviews} reviews</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-orange-600">Calories</p>
                        <p className="text-sm font-bold text-orange-900">{recipe.calories}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="px-10 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-300 hover:scale-105 transition-all">
                Load More Recipes
              </button>
              <p className="mt-4 text-orange-600 text-sm">Showing {filteredRecipes.length} of {recipes.length} recipes</p>
            </div>
          </main>
        </div>
      </div>

    </div>
  );
}