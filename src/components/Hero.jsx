import React from "react";
import heroBg from "../assets/hero-texture.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-[90vh] w-full flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(230, 255, 241, 0.9), rgba(230, 255, 241, 0.9)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-transparent z-0"></div>

      <div className="relative z-10 px-6 md:px-20 max-w-6xl mx-auto w-full">
        <div className="max-w-2xl ml-0 md:ml-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-green-900 leading-tight font-sans tracking-tight">
            <span className="block text-green-600 font-light">Healing</span>
            <span className="block font-medium">Hunger With a </span>
            <span className="block font-extrabold">Recipe At a Time.</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-green-800 font-normal max-w-lg leading-relaxed">
            Let AI be your chef—generate healthy, flavorful recipes from whatever’s in your kitchen.
          </p>
          <div className="flex space-x-4">
            {/* Add buttons later if needed */}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 opacity-20">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 0C44.77 0 0 44.77 0 100C0 155.23 44.77 200 100 200C155.23 200 200 155.23 200 100C200 44.77 155.23 0 100 0ZM100 180C55.92 180 20 144.08 20 100C20 55.92 55.92 20 100 20C144.08 20 180 55.92 180 100C180 144.08 144.08 180 100 180Z"
            fill="#047857" // tailwind's emerald-700
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
