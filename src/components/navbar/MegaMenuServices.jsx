import React from 'react';
import { Link } from 'react-router-dom';

const MegaMenuServices = () => {
  const getSlug = (item) => item.toLowerCase().replace(/ /g, '-');

  return (
    <div
      className="mega-glass absolute top-[100%] left-1/2 -translate-x-1/2 
        w-[90vw] max-w-[1100px] rounded-3xl
        opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto 
        transition-all duration-500 ease-out translate-y-4 group-hover:translate-y-0 
        z-[9999] mt-2 overflow-hidden border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
    >

      {/* Content */}
      <div
        className="relative z-10 px-10 py-10 grid grid-cols-5 gap-8 h-full bg-white/5"
      >

        {/* Column 1: Amazon */}
        <div>
          <h3 className="text-lg font-bold mb-5 text-[#8B5CF6]">Amazon</h3>
          <ul className="space-y-3">
            {[
              "Amazon Store Creation",
              "Amazon FBA Automation",
              "Amazon Private Labelled",
              "Amazon A+ Content",
              "Amazon PPC",
            ].map((item, idx) => (
              <li key={idx}>
                <Link to={`/services/${getSlug(item)}`}
                  className="text-sm text-gray-800 hover:text-[#8B5CF6] transition-all duration-200 block hover:translate-x-1">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Walmart */}
        <div>
          <h3 className="text-lg font-bold mb-5 text-[#8B5CF6]">Walmart</h3>
          <ul className="space-y-3">
            {[
              "Walmart Store Creation",
              "Walmart Dropshipping",
              "Walmart Private Labelled",
              "Walmart Product Hunting",
              "Walmart WFS",
            ].map((item, idx) => (
              <li key={idx}>
                <Link to={`/services/${getSlug(item)}`}
                  className="text-sm text-gray-800 hover:text-[#8B5CF6] transition-all duration-200 block hover:translate-x-1">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Shopify */}
        <div>
          <h3 className="text-lg font-bold mb-5 text-[#8B5CF6]">Shopify</h3>
          <ul className="space-y-3">
            {[
              "Shopify Store Creation",
              "Shopify Automation",
              "Shopify Store Optimization",
              "Shopify Product Hunting",
              "Shopify Store Marketing",
            ].map((item, idx) => (
              <li key={idx}>
                <Link to={`/services/${getSlug(item)}`}
                  className="text-sm text-gray-800 hover:text-[#8B5CF6] transition-all duration-200 block hover:translate-x-1">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Youtube + Tiktok */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-5 text-[#8B5CF6]">Youtube</h3>
            <ul className="space-y-3">
              {[
                "Youtube Automation",
                "Youtube Monetization",
                "Youtube Video Editing",
                "Youtube Marketing",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link to={`/services/${getSlug(item)}`}
                    className="text-sm text-gray-800 hover:text-[#8B5CF6] transition-all duration-200 block hover:translate-x-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-5 text-[#8B5CF6]">Tiktok</h3>
            <ul className="space-y-3">
              {["Tiktok Shop Automation"].map((item, idx) => (
                <li key={idx}>
                  <Link to={`/services/${getSlug(item)}`}
                    className="text-sm text-gray-800 hover:text-[#8B5CF6] transition-all duration-200 block hover:translate-x-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 5: Others */}
        <div>
          <h3 className="text-lg font-bold mb-5 text-[#8B5CF6]">Others</h3>
          <ul className="space-y-3">
            {[
              "Virtual Assistant",
              "Account Management",
              "Ecommerce Store Creation",
              "Ecommerce Store Marketing",
              "Ecommerce Store Product Hunting",
            ].map((item, idx) => (
              <li key={idx}>
                <Link to={`/services/${getSlug(item)}`}
                  className="text-sm text-gray-800 hover:text-[#8B5CF6] transition-all duration-200 block hover:translate-x-1">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MegaMenuServices;