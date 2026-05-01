import React from 'react';
import { packages } from '../../data/packages';

const MegaMenuPackages = () => {
  return (
    <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[750px] bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease-out transform translate-y-4 group-hover:translate-y-0 overflow-hidden">
      <div className="p-6 grid grid-cols-3 gap-6">
        {packages.map((pkg, i) => (
          <div key={i} className={`p-6 rounded-2xl shadow-lg border ${pkg.popular ? 'border-[#6C5CE7] bg-purple-50/30 relative shadow-md' : 'border-white/20 bg-white/20 hover:bg-white/40'} transition-all`}>
            {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6C5CE7] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-sm">Most Popular</span>}
            <div className="text-4xl mb-4">{pkg.icon}</div>
            <h4 className="font-bold text-[#1a1a2e] text-lg">{pkg.name}</h4>
            <div className="text-2xl font-extrabold text-[#6C5CE7] my-2">{pkg.price}</div>
            <p className="text-sm text-gray-500 mb-4">{pkg.desc}</p>
            <button className={`w-full py-2 rounded-xl text-sm font-bold transition-colors ${pkg.popular ? 'bg-[#6C5CE7] text-white hover:bg-[#5a4bd1]' : 'bg-gray-100 text-[#1a1a2e] hover:bg-gray-200'}`}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenuPackages;