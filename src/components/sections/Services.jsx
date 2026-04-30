import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { services, tabs } from '../../data/services';

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 group h-full"
      style={{ background: 'linear-gradient(135deg, #2a2a4a, #1a1a2e)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/services/${service.id}`)}
    >
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Glass Content Box */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 transition-all duration-300">

          {/* Tag */}


          {/* Title */}
          <h3 className="text-white text-lg font-semibold leading-tight">
            {service.title}
          </h3>

          {/* Hover Content */}
          <div
            className={`transition-all duration-500 overflow-hidden ${hovered ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
          >
            <p className="text-gray-200 text-[13px] leading-relaxed mb-4">
              {service.desc}
            </p>

            <div className="flex items-center justify-between">
              <button className="bg-[#0f172a] text-white text-[11px] font-medium px-4 py-2 rounded-lg hover:bg-black transition-all duration-300">
                Learn More
              </button>

              <div className="text-white/80">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-45">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('Amazon');

  const filteredServices =
    activeTab === 'Amazon'
      ? services
      : services.filter((s) => s.type === activeTab);

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[2.75rem] font-semibold text-[#1a1a2e] leading-tight">
            Ecommerce Services Designed To{' '}
            <span className="gradient-text">Build, Launch,</span> And{' '}
            <span className="gradient-text">Scale</span> Your Business
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            From store creation to full automation, our services are built to help you succeed across the world’s leading ecommerce platforms — without the stress of managing everything yourself.</p>

          {/* Tabs */}
          <div className="mt-8 p-1.5 bg-white rounded-full border border-gray-200 shadow-sm w-full max-w-fit mx-auto overflow-x-auto no-scrollbar">
            <div className="flex flex-nowrap items-center min-w-max px-2 gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap font-syne ${activeTab === tab
                    ? 'bg-[#6C5CE7] text-white shadow-md scale-105'
                    : 'text-gray-500 hover:text-[#1a1a2e] hover:bg-gray-100'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2  auto-rows-[400px]">
          {filteredServices.map((service, i) => (
            <div key={i} className="h-full">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Button */}

        <div className="flex mt-12 md:mt-16 text-center justify-center items-center">
          <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultationModal'))} className="text-white py-3 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 bg-[linear-gradient(to_right,#8B5CF6,#0066CC)] shadow-[0_4px_20px_rgba(99,102,241,0.4)] font-syne text-sm whitespace-nowrap"
          >
            Book a Free Strategy Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;