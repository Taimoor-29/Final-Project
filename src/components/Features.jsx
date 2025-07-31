import React from "react";
import ingredientIcon from "../assets/ingredient-icon.svg";
import magicIcon from "../assets/magic-icon.svg";
import plateIcon from "../assets/plate-icon.svg";

const Features = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-emerald-700 bg-opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-emerald-700 bg-opacity-10 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-lime-300 font-serif">How RecipeRemedy Works</h2>
          <p className="text-lg text-emerald-200 max-w-2xl mx-auto">
            Transform raw ingredients into magic — guided by our culinary AI wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[{
            icon: ingredientIcon,
            title: "List Ingredients",
            description: "Type in what you have — pantry, fridge, or garden — our AI understands it all."
          }, {
            icon: magicIcon,
            title: "AI Recipe Creation",
            description: "We match flavors, techniques, and nutrition to craft recipes that truly inspire."
          }, {
            icon: plateIcon,
            title: "Cook & Enjoy",
            description: "Follow steps tailored to your skill. Present beautifully. Eat happily."
          }].map((step, idx) => (
            <div
              key={idx}
              className="bg-emerald-800 bg-opacity-30 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-emerald-700 text-center"
            >
              <div className="bg-lime-200 bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src={step.icon} alt={step.title} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-lime-200">{step.title}</h3>
              <p className="text-emerald-100 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
