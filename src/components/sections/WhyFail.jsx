import React from 'react';
import bg from '../../assets/images/bg2.png'

const WhyFail = () => {
  const reasons = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <polyline points="11 8 11 11 13 11"></polyline>
        </svg>
      ),
      title: "Product research that doesn't convert"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
          <path d="M16 8l-8 8"></path>
        </svg>
      ),
      title: "High ad costs with no results"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      title: "Store setup mistakes"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      title: "Poor supplier management"
    }
  ];

  return (
    <div className="py-24" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold md:text-[2.75rem]  text-[#1a1a2e] leading-tight">
              Most People Fail In Ecommerce For <span className="gradient-text">One Simple Reason</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-gray-500 text-lg leading-relaxed">
              Most ecommerce businesses fail because they rely on guesswork instead of proven systems, strategy, and consistent execution.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#6C5CE7]/10 hover:border-[#6C5CE7]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {r.icon}
              </div>
              <h4 className="text-xl font-bold text-[#1a1a2e] leading-tight">{r.title}</h4>
            </div>
          ))}
        </div>

        {/* Centered Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openConsultationModal'))}
            className="text-white py-3 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 bg-[linear-gradient(to_right,#8B5CF6,#0066CC)] shadow-[0_4px_20px_rgba(99,102,241,0.4)] font-syne text-sm whitespace-nowrap"
          >
            Book a Free Strategy Call
          </button>
        </div>

      </div>
    </div>
  );
};

export default WhyFail;