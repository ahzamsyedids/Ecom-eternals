import React from 'react';
import bg from '../../assets/images/bg3.png'
import video from '../../assets/images/video.png'

const VideoProcess = () => {
  const steps = [
    {
      num: '1',
      title: 'Strategy & Planning',
      desc: 'We start with a detailed consultation to understand your goals, budget, and target market. Our team maps out a tailored ecommerce strategy designed for long-term profitability and scalability.'
    },
    {
      num: '2',
      title: 'Build & Launch',
      desc: 'We create your fully optimized store on Amazon, Shopify, TikTok Shop, or Daraz from scratch. From product research to supplier sourcing and store design, everything is handled for a smooth and powerful launch.'
    },
    {
      num: '3',
      title: 'Scale & Manage',
      desc: 'We continuously manage, optimize, and scale your store using data-driven marketing and proven systems. From ads to daily operations, we focus on maximizing revenue while keeping your business running efficiently.'
    }
  ];

  return (
    <div className="py-12 " style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative p-[1.5px] rounded-[2.5rem] bg-gradient-to-r from-[#66D0E3] via-[#6366F1] to-[#6D6FC5]">
          <div className="bg-white p-6 md:p-10 rounded-[2.5rem] relative z-10">

            {/* Video Player */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-video mb-16 shadow-2xl group cursor-pointer">
              <img
                src={video}
                alt="Process Video Thumbnail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#1a1a2e] ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#4a3f9e] flex items-center justify-center text-white  font-semibold text-xl flex-shrink-0 ">
                      {step.num}
                    </div>
                    <h4 className="text-xl lg:text-2xl font-semibold text-[#1a1a2e]">{step.title}</h4>
                  </div>
                  <p className="text-gray-500 text-sm lg:text-base leading-relaxed pl-16 md:pl-0">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoProcess;