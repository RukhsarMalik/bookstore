import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: 'url("/hero/hero.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to FictionFlux</h1>
        <p className="text-lg mb-6">
          Explore the best collection of fiction, non-fiction, academic books, and more. Discover new worlds through books.
        </p>
        <button className="bg-[#D96846] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#b85f3b] transition duration-300">
        Shop Now
        </button>
        
      </div>
    </section>
  );
};

export default HeroSection;
