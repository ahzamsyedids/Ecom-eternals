import React from 'react';
import store from '../../assets/icons/Store.svg';
import product from '../../assets/icons/Product research.svg';
import supplier from '../../assets/icons/Supplier.svg';
import ad from '../../assets/icons/Ad.svg';

const WeDoEverything = () => {
  const steps = [
    { icon: store, title: 'Store Creation & Optimization', desc: 'High-converting design tailored to your exact niche.' },
    { icon: product, title: 'Product Research & Validation', desc: 'Data-driven selection of winning, profitable products.' },
    { icon: supplier, title: 'Supplier Sourcing & Logistics', desc: 'Reliable partners with fast shipping & quality control.' },
    { icon: ad, title: 'Ad Setup & Campaigns', desc: 'Profitable scaling via Facebook, TikTok & Google Ads.' }
  ];

  return (
    <div className="py-24 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-[2.75rem] font-semibold text-[#131926] mb-5 max-w-6xl mx-auto leading-tight">
          We Do Everything For You From <span className="gradient-text">Setup To Scaling</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
          Our team builds fully managed ecommerce stores designed for performance, profit, and scalability.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 text-left group">
              <div className="text-4xl bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6  transition-colors">
                <img src={step.icon} alt="icon" />
              </div>
              <h4 className="text-xl font-bold text-[#131926] mb-3">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-12 md:mt-16">
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

export default WeDoEverything;