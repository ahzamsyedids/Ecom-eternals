import React, { useState } from 'react';
import { platforms, packagesData } from '../../data/packages';
import tick from "../../assets/icons/tick.png";

const PackageCard = ({ pkg, activeTab }) => {
  return (
    <div className="relative bg-white rounded-[2.5rem] p-10 border border-purple-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] flex flex-col h-full transition-all duration-300 hover:shadow-[0_20px_50px_-20px_rgba(99,102,241,0.15)] group">
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-[2.5rem] p-[2px] bg-gradient-to-b from-purple-400/30 via-blue-400/30 to-transparent -z-10 opacity-60 group-hover:opacity-100 transition-opacity">
        <div className="w-full h-full bg-white rounded-[2.4rem]"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-3xl font-bold text-[#1a1a2e] mb-10 font-bricolage tracking-tight">
          {pkg.name}
        </h3>

        {/* Features List */}
        <ul className="space-y-4 mb-12 flex-grow">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <img src={tick} alt="tick" className="h-4 w-4 object-contain" />
              </div>
              <span className="text-gray-600 text-[14px] leading-snug font-medium">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="mt-auto">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal', {
              detail: { message: `I'm interested in the ${pkg.name} for ${activeTab}.` }
            }))}
            className="w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 bg-[linear-gradient(to_right,#8B5CF6,#1D4ED8)] shadow-[0_10px_25px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(59,130,246,0.6)] hover:-translate-y-1 active:scale-[0.98] font-syne text-[15px] uppercase tracking-wide"
          >
            {pkg.buttonText}
          </button>

          <p className="text-center mt-5 text-[11px] text-gray-400 font-semibold tracking-tight">
            {pkg.terms}
          </p>
        </div>
      </div>
    </div>
  );
};

const PackagesGrid = () => {
  const [activeTab, setActiveTab] = useState('Amazon');

  const activePackages = packagesData[activeTab] || [];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-[3.5rem] font-bold text-[#1a1a2e] mb-6 font-bricolage tracking-tight leading-tight">
            Choose Your <span className="text-[#6366F1]">Automation Packages</span>
          </h2>
          <p className="text-gray-500 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Our automation packages are designed to fit every stage of your business, offering the right mix of design, features, and support to help you grow online.
          </p>

          {/* Tabs */}
          <div className="mt-12 inline-flex p-1.5 bg-white rounded-full border border-gray-200 shadow-sm overflow-hidden max-w-full">
            <div className="flex flex-nowrap overflow-x-auto no-scrollbar px-1 py-1 gap-1">
              {platforms.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-10 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap font-syne ${activeTab === tab
                      ? 'bg-[linear-gradient(to_right,#8B5CF6,#1D4ED8)] text-white shadow-lg shadow-blue-500/30 scale-[1.02]'
                      : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activePackages.map((pkg, i) => (
            <PackageCard key={i} pkg={pkg} activeTab={activeTab} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesGrid;
