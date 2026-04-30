import React from 'react';
import amazon from '../../assets/images/amazon.png';
import shopify from '../../assets/images/shopify.png';
import logos from '../../assets/images/hero2.png';

const Hero = () => {
  return (
    <div
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #CDD9FE, #FFFFFF)" }}
    >

      {/* Shopify Logo - Floating Right */}
      <div className="absolute hidden lg:block right-8 md:right-16 lg:right-24 top-1/4  animate-float">
        <img
          src={shopify}
          alt="Shopify"
          className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl opacity-80"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">

        <h1 className="text-5xl md:text-7xl font-extrabold text-[#1a1a2e] tracking-tight mb-8 leading-tight max-w-6xl mx-auto">
          Build a <span className="gradient-text">Profitable</span> Ecommerce Store Without Doing the <span className="gradient-text">Hard Work</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
          We build, manage, and scale fully automated ecommerce stores for investors and entrepreneurs. Your passive income machine starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openConsultationModal'))}
            className="text-white py-3 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 bg-[linear-gradient(to_right,#8B5CF6,#0066CC)] shadow-[0_4px_20px_rgba(99,102,241,0.4)] font-syne text-sm whitespace-nowrap"
          >
            Book a Free Strategy Call
          </button>
        </div>

        {/* Hero bottom section */}


      </div>
      <div className="mt-16 relative flex justify-center items-end">

        {/* Amazon coin — left, aligned with bottom of center image */}
        {/* Amazon Coin - Floating Left */}
        <div className="absolute hidden lg:block left-8 md:left-16 lg:left-24 top-1/3  animate-float-delayed">
          <img
            src={amazon}
            alt="Amazon"
            className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl opacity-80 z-20"
          />
        </div>
      </div>
      <div className="relative  mx-auto flex flex-col max-w-[120%] items-center justify-center">
        {/* Arc shape */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full z-0">
          <div className="w-[120%] -ml-[10%] h-full rounded-t-[50%] bg-gradient-to-b from-[#c7d4f8] via-[#dce4fc] to-transparent opacity-60" />
        </div>

        <img
          src={logos}
          alt="Ecommerce platforms"
          className="relative w-80 md:w-[500px] lg:w-[780px] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;