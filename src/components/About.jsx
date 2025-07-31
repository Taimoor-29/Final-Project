import React from "react";
import demoVideo from "../assets/demo.mp4";

const About = () => {
  return (
    <div className="bg-[#fff5f7] min-h-screen text-[#6b2c3d] px-6 md:px-20 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#c59d5f] font-serif">
        About RecipeRemedy
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Left: Video */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <video
            className="w-full h-auto"
            src={demoVideo}
            controls
            autoPlay
            loop
            muted
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-lg leading-relaxed text-[#5e2d3c] space-y-6">
          <p>
            RecipeRemedy is your AI-powered cooking assistant. Whether you're low on groceries or bursting with fresh ingredients, our platform helps you transform whatever you have into a mouthwatering recipe.
          </p>

          <h2 className="text-2xl font-semibold text-[#a86b4c] mt-6">How it works</h2>
          <ul className="list-disc list-inside space-y-2 text-[#722f40]">
            <li><strong>Enter Ingredients:</strong> Just type in what you have at home — from produce to pantry staples.</li>
            <li><strong>Generate Recipes:</strong> Our AI crafts custom cooking instructions tailored to your inputs.</li>
            <li><strong>Cook & Enjoy:</strong> Follow easy, step-by-step directions and enjoy a fresh, personalized meal.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#a86b4c] mt-6">Save & Share</h2>
          <p>
            After generating a recipe, you can <strong>download it as a beautifully formatted PDF</strong> — perfect for printing, saving offline, or sharing with friends and family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
