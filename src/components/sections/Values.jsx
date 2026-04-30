import React from 'react';

const coreValues = [
  {
    title: "Radical Transparency",
    desc: "We provide real-time reporting and open communication, so you're always in control of your business.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: "Data-Driven Execution",
    desc: "Decisions are based on market analytics and historical performance, not guesswork or gut feelings.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Sustainable Growth",
    desc: "We focus on long-term profitability and brand equity rather than short-lived trends.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Entrepreneurial Spirit",
    desc: "We treat your business as if it were our own, with the same dedication and passion for success.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

const Values = () => {
  return (
    <section className="py-24 bg-white font-syne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6 font-bricolage">Our Core Values</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">The principles that guide our team and define the success of our partners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, i) => (
            <div key={i} className="group p-8 rounded-[32px] bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 border border-transparent hover:border-purple-100">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-[#8B5CF6] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-4 font-bricolage">{value.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
