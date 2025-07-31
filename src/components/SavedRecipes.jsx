import React, { useState } from "react";
import recipe1 from "../assets/recipe1.jpg";
import recipe2 from "../assets/recipe2.jpg";
import recipe3 from "../assets/recipe3.jpg";

const SavedRecipes = () => {
  const curatedRecipes = [
    {
      id: "static-1",
      title: "Garlic Herb Roasted Chicken",
      image: recipe1,
      time: "40 mins",
      rating: 4.9,
      difficulty: "Intermediate",
      lastViewed: "2 days ago",
      content: `Ingredients:
- Whole chicken
- Garlic cloves
- Rosemary, thyme, parsley
- Olive oil
- Lemon
- Salt and pepper

Instructions:
1. Preheat oven to 400°F (200°C).
2. Mix minced garlic with olive oil and chopped herbs.
3. Rub mixture all over the chicken and under the skin.
4. Stuff the chicken with lemon halves.
5. Roast for 40–50 minutes until skin is crispy and juices run clear.
6. Let rest before carving. Serve with roasted veggies.`
    },
    {
      id: "static-2",
      title: "Creamy Mushroom Risotto",
      image: recipe2,
      time: "55 mins",
      rating: 4.7,
      difficulty: "Advanced",
      lastViewed: "1 week ago",
      content: `Ingredients:
- Arborio rice
- Mushrooms (button or cremini)
- Onion
- Garlic
- Vegetable broth
- Parmesan
- Cream (optional)

Instructions:
1. Sauté onions and garlic in butter until translucent.
2. Add mushrooms and cook until golden.
3. Stir in Arborio rice and toast slightly.
4. Gradually add warm broth, stirring constantly until absorbed.
5. Finish with Parmesan and a splash of cream. Serve hot.`
    },
    {
      id: "static-3",
      title: "Avocado & Quinoa Salad",
      image: recipe3,
      time: "20 mins",
      rating: 4.5,
      difficulty: "Easy",
      lastViewed: "3 days ago",
      content: `Ingredients:
- Cooked quinoa
- Avocado
- Cucumber
- Cherry tomatoes
- Red onion
- Olive oil, lemon juice, herbs

Instructions:
1. Mix all chopped veggies with cooked quinoa.
2. Drizzle with lemon juice and olive oil.
3. Season with salt, pepper, and chopped parsley.
4. Chill before serving.`
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRecipeId, setExpandedRecipeId] = useState(null);

  const toggleRecipe = (id) => {
    setExpandedRecipeId(prev => prev === id ? null : id);
  };

  const filterRecipes = (recipes) =>
    recipes.filter(recipe =>
      recipe.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.recipe?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.content?.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <section className="py-16 px-6 md:px-20 bg-culinary-parchment bg-opacity-20 min-h-screen">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-culinary-spice font-serif">Curated Recipes</h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">Discover handpicked culinary delights just for you</p>
        </div>

        {/* Search Box */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search curated recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 bg-amber-50 text-amber-900"
              />
              <svg className="absolute left-4 top-3.5 h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              className="px-6 py-3 rounded-lg bg-culinary-zest hover:bg-culinary-spice text-white font-medium transition"
            >
              Search
            </button>
          </div>
        </div>

        {/* Curated Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterRecipes(curatedRecipes).map(recipe => (
            <div key={recipe.id} className="bg-white rounded-2xl shadow border border-amber-100 hover:shadow-culinary transition">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-culinary-spice font-serif mb-2">{recipe.title}</h3>
                <p className="text-sm text-amber-700 mb-1">{recipe.time} • {recipe.difficulty}</p>
                <p className="text-xs text-amber-500 mb-2">Viewed {recipe.lastViewed}</p>
                <button
                  onClick={() => toggleRecipe(recipe.id)}
                  className="w-full bg-culinary-zest hover:bg-culinary-spice text-white py-2 rounded-lg font-medium transition"
                >
                  {expandedRecipeId === recipe.id ? "Hide Recipe" : "View Recipe"}
                </button>
                {expandedRecipeId === recipe.id && (
                  <div className="mt-4 p-4 border border-amber-100 bg-amber-50 rounded-lg text-sm whitespace-pre-wrap text-amber-900">
                    {recipe.content}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SavedRecipes;
