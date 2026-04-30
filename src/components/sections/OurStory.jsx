import React from 'react';
import storyImage from '../../assets/images/contact.png';
const OurStory = () => {
  return (
    <section className="py-24 bg-gray-50/50 font-syne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-10">
              <img src={storyImage} alt="Our Story" className="w-full h-full object-cover aspect-square md:aspect-video lg:aspect-square" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 to-transparent"></div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#8B5CF6] to-[#0066CC] rounded-3xl -z-10 animate-float"></div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] tracking-tight font-bricolage">
                The Journey of <span className="text-[#8B5CF6]">Ecom Eternals</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2020, Ecom Eternals started with a single vision: to simplify the complex world of ecommerce for everyday people. We realized that while the opportunities in Amazon FBA, Shopify, and TikTok Shop were massive, the barriers to entry—logistics, sourcing, and marketing—were too high for most.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our team of experts came together to build a robust system that handles the heavy lifting. Today, we manage a portfolio of multi-million dollar stores, helping our partners achieve financial freedom through passive, automated ecommerce income.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#1a1a2e] mb-2 font-bricolage">Our Mission</h4>
                <p className="text-sm text-gray-500">To provide scalable and sustainable ecommerce solutions that empower global entrepreneurs.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#1a1a2e] mb-2 font-bricolage">Our Vision</h4>
                <p className="text-sm text-gray-500">To be the worldwide standard for automated ecommerce management and business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
