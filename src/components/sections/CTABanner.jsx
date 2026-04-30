import React from 'react';
import bg from '../../assets/images/cta-bg.png';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <div className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute -bottom-32 -left-20 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{ background: 'linear-gradient(102.72deg, rgba(102, 208, 227, 0.4) 9%, rgba(212, 179, 255, 0.4) 77.66%)' }}></div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className=" rounded-2xl p-12 md:p-[2rem] text-center border-2 overflow-hidden" style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

          <h2 className="text-4xl md:text-[2.75rem] font-extrabold text-[#131926] mb-8 relative z-10 leading-tight">
            Ready To Start Your <br /> <span className='text-[#8B5CF6]'>Ecommerce Business?</span>
          </h2>
          <p className="text-[#131926] mb-12 max-w-2xl mx-auto text-xl relative z-10 leading-relaxed">
            Let’s build a fully managed eCommerce store built for growth, automation, and consistent sales. From setup to design and product research, everything is handled for you with a performance-driven approach that creates a scalable, revenue-focused system.</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openConsultationModal'))}
              className="text-white py-3 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 bg-[linear-gradient(to_right,#8B5CF6,#0066CC)] shadow-[0_4px_20px_rgba(99,102,241,0.4)] font-syne text-sm whitespace-nowrap"
            >
              Book a Free Strategy Call
            </button>

            <Link to="/services" className="relative text-[#8B5CF6]  py-3 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5
    bg-[linear-gradient(to_right,#ffffff,#ffffff)]
    hover:bg-[linear-gradient(to_right,#f0f0f0,#f0f0f0)]
    shadow-[0_4px_20px_rgba(99,102,241,0.4)]
    before:content-[''] before:absolute before:inset-0 before:rounded-xl before:p-[2px]
    before:bg-[linear-gradient(to_bottom,#f9f9f9,#e6e6e6)]
    before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
    before:[mask-composite:exclude] before:-z-10 before:pointer-events-none
    font-syne">See Our Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;