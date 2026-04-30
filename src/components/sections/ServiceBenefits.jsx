import React from 'react';

const benefitIcons = [
  (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      <polyline points="11 8 11 11 13 11"></polyline>
    </svg>
  ),
  (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="16"></line>
      <line x1="8" y1="12" x2="16" y2="12"></line>
      <path d="M16 8l-8 8"></path>
    </svg>
  ),
  (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  ),
  (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  )
];

const ServiceBenefits = ({ data }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bricolage font-extrabold mb-6 text-gray-900">
          {data.benefits.title.split(',')[0]}, <br />
          <span className="gradient-text">{data.benefits.title.split(',')[1]}</span>
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          {data.benefits.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.benefits.cards.map((card, index) => (
            <div key={index} className="p-5 sm:p-6 rounded-lg border border-indigo-100 bg-white flex flex-col items-start justify-center hover:border-indigo-300 hover:shadow-md transition-all duration-200 text-left min-h-[140px]">
              <div className="mb-4 text-gray-700">
                {benefitIcons[index % benefitIcons.length]}
              </div>
              <span className="font-bricolage font-bold text-[15px] sm:text-base text-gray-900 leading-tight">{card.title}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openConsultationModal'))}
            className="ext-white py-3 px-6 rounded-xl transition-all duration-200 text-white hover:-translate-y-0.5 bg-[linear-gradient(to_right,#8B5CF6,#0066CC)] shadow-[0_4px_20px_rgba(99,102,241,0.4)] font-syne text-sm whitespace-nowrap"
          >
            Book a Free Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
