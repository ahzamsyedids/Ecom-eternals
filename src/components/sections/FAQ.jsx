import React, { useState } from 'react';
import { faqs } from '../../data/faqs';

const ChevronDownIcon = () => (
  <svg className="w-4 h-4 ml-1 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[2.75rem] font-extrabold text-[#1a1a2e] mb-6 leading-tight">
            Everything You Need To Know <br /><span className="gradient-text">Before You Get Started</span>
          </h2>
          <p className="text-gray-600 text-lg">We believe in complete transparency. Here are answers to the most common questions about our ecommerce automation services, process, and expectations.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`border ${open === i ? 'border-[#6C5CE7] bg-purple-50/30 shadow-lg' : 'border-gray-200 bg-white shadow-sm'} rounded-2xl overflow-hidden transition-all duration-300`}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none group"
              >
                <span className={`font-semibold text-lg pr-4 transition-colors ${open === i ? 'text-[#6C5CE7]' : 'text-[#1a1a2e] group-hover:text-[#6C5CE7]'}`}>{faq.q}</span>
                <span className={`transform transition-transform duration-300 flex-shrink-0 w-10 h-10 flex items-center justify-center ${open === i ? 'text-[#6C5CE7] rotate-180' : 'text-gray-400 group-hover:text-[#6C5CE7]'}`}>
                  <ChevronDownIcon />
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${open === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed text-base">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex align-center justify-center mt-12 md:mt-16">
          <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultationModal'))} className="text-white py-3 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 bg-[linear-gradient(to_right,#8B5CF6,#0066CC)] shadow-[0_4px_20px_rgba(99,102,241,0.4)] font-syne text-sm whitespace-nowrap"
          >
            Book a Free Strategy Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;