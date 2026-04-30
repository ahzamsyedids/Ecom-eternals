import React from 'react';

const DropdownAbout = () => {
  return (
    <div className="absolute top-[26px] left-0 w-56 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
      <a href="#story" className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-white/40 hover:text-[#6C5CE7] transition-colors">Our Story</a>
      <a href="#team" className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-white/40 hover:text-[#6C5CE7] transition-colors">Our Team</a>
      <a href="#results" className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-white/40 hover:text-[#6C5CE7] transition-colors">Results & Case Studies</a>
    </div>
  );
};

export default DropdownAbout;