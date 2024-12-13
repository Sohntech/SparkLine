import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#2e3192] to-[#1a1b4b]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-float">
            <Sparkles className="h-16 w-16 text-[#f36b22] mb-6" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            Digital Solutions for
            <span className="text-[#f36b22]"> Real World </span>
            Problems
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mb-12 animate-fadeIn delay-200">
            Transform your business with cutting-edge digital solutions and expert masterclasses. 
            Let's innovate together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fadeIn delay-300">
            <button className="px-8 py-4 bg-[#f36b22] text-white rounded-full flex items-center gap-2 hover:bg-[#e25b12] transition-all transform hover:scale-105">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#2e3192] transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" /> */}
    </div>
  );
};

export default Hero;