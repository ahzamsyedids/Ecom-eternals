import React from 'react';
import bg from '../../assets/images/steps-bg.png';

const ServiceProcess = ({ data, serviceName }) => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bricolage font-extrabold leading-tight text-gray-900">
              {data.process.title.split(serviceName)[0]} <br />
              <span className="gradient-text">{serviceName}</span>
            </h2>
          </div>
          <div className="lg:pl-10">
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.process.subtitle}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.process.steps.map((step, index) => (
            <div key={index} className="backdrop-blur-sm p-8 rounded-2xl border border-[#485BFF]/20 shadow-sm relative overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.3)' }}>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bricolage font-bold text-gray-900 pr-8">{step.title}</h3>
                <span className="text-7xl font-bricolage font-black gradient-text2 leading-none absolute top-6 right-6">
                  {step.number}
                </span>
              </div>
              <p className="text-gray-600 relative z-10 mt-12">{step.desc}</p>
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

export default ServiceProcess;
