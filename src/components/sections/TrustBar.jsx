import React from 'react';
import XIcon from '../../assets/icons/xicon.png'

const TrustBar = () => {
  return (
    <div className="w-full   py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            "8000+ Stores Built",
            "50+ In-House Brands Managed",
            "Global Ecommerce Team",
            "End-to-End Automation System"
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-3">
              <img src={XIcon} alt="XIcon" className="w-6 h-6" />
              <span className="font-[400] text-gray-700 text-sm md:text-base text-center md:text-left">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;