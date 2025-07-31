import React from "react";
import deliveryBoy from "../assets/delivery-boy.png";
import leaves from "../assets/leaves.png";
import chili from "../assets/chili.png";
import burger from "../assets/burger.png";
import pizza from "../assets/pizza.png";
import strawberry from "../assets/strawberry.png";

const FoodShowcase = () => {
  return (
    <section className="relative py-16 px-6 md:px-20 bg-amber-50 overflow-hidden">
      <img 
        src={leaves} 
        alt="Decorative leaves" 
        className="absolute top-0 left-0 w-32 opacity-70"
      />
      <img 
        src={chili} 
        alt="Decorative chili" 
        className="absolute bottom-10 right-10 w-24 rotate-12 opacity-70"
      />
      <img 
        src={strawberry} 
        alt="Decorative strawberry" 
        className="absolute top-1/4 right-20 w-16 -rotate-12 opacity-70"
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">
              Fast <span className="text-orange-600">Delivery</span> to Your Door
            </h2>
            <p className="text-lg text-amber-800 mb-6">
              Get your freshly prepared meals delivered in minutes with our speedy service.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-amber-800">4.8 (2k+ reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <img 
              src={deliveryBoy} 
              alt="Delivery boy on scooter" 
              className="w-full max-w-md mx-auto animate-float"
            />
            {/* Food items floating around */}
            <img 
              src={burger} 
              alt="Burger" 
              className="absolute -top-8 left-0 w-20 animate-float delay-100"
            />
            <img 
              src={pizza} 
              alt="Pizza" 
              className="absolute bottom-0 right-0 w-24 animate-float delay-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;