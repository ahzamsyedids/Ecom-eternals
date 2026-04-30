import React from 'react';

const ServiceIntro = ({ data, serviceName }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bricolage font-extrabold mb-6 text-gray-900">
            {data.intro.title.split(serviceName)[0]}
            <span className="gradient-text">{serviceName}</span>
            {data.intro.title.split(serviceName)[1]}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {data.intro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {data.intro.cards.map((card, index) => (
            <div key={index} className="p-10 rounded-[2rem] border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <img src={card.icon} alt={card.title} className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bricolage font-bold mb-4 text-gray-900">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
