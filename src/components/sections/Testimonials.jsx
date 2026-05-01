import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { testimonials } from '../../data/testimonials';
import bg from '../../assets/images/bg4.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StarIcon = () => (
  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

const Testimonials = () => {
  return (
    <div className="py-24 relative overflow-hidden" style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      {/* Background Blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-20"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full blur-[100px] opacity-40 pointer-events-none"
           style={{ background: 'linear-gradient(102.72deg, rgba(102, 208, 227, 0.5) 9%, rgba(212, 179, 255, 0.5) 77.66%)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-[2.75rem] font-semibold text-[#1a1a2e] leading-tight">
            Trusted By <span className="gradient-text">Entrepreneurs</span> Building <span className="gradient-text">Profitable </span> Ecommerce Businesses
          </h2>
          <p className="text-gray-500 text-lg mt-6">See how our clients are launching, scaling, and automating their ecommerce stores with confidence.</p>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-20">
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: '.swiper-prev',
              nextEl: '.swiper-next',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                centeredSlides: true,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.2,
                centeredSlides: true,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 50,
              },
            }}
            className="testimonial-swiper !pb-20 xl:px-16 2xl:px-0"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="py-10">
                {({ isActive }) => (
                  <div className={`transition-all duration-700 h-full ${isActive ? 'scale-100 md:scale-110 opacity-100 z-10' : 'scale-90 opacity-40'}`}>
                    <div className={`p-[1.5px] rounded-[2.5rem] h-full transition-all duration-500 
                      ${isActive ? 'bg-gradient-to-br from-[#66D0E3] via-[#6366F1] to-[#6D6FC5] shadow-2xl shadow-purple-500/20' : 'bg-gray-200'}`}>
                      
                      <div className="bg-white p-8 md:p-10 rounded-[2.5rem] h-full relative">
                        {/* User Header */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#1a1a2e] flex items-center justify-center text-white font-semibold text-xl shadow-md overflow-hidden">
                            {t.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h4 className="font-bold text-[#1a1a2e] text-lg">{t.name}</h4>
                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest">{t.role}</p>
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                          <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                        </div>

                        {/* Quote */}
                        <p className="text-[#1a1a2e] text-lg leading-relaxed font-medium italic">
                          "{t.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows - Responsively Positioned */}
          {/* Left Arrow */}
          <div className="hidden xl:block absolute top-[45%] -translate-y-1/2 z-20 
            xl:left-2 2xl:-left-20">
            <button className="swiper-prev w-12 h-12 rounded-full border border-gray-200 bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-[#6C5CE7] hover:border-[#6C5CE7] shadow-xl transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
          </div>

          {/* Right Arrow */}
          <div className="hidden xl:block absolute top-[45%] -translate-y-1/2 z-20 
            xl:right-2 2xl:-right-20">
            <button className="swiper-next w-12 h-12 rounded-full border border-gray-200 bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-[#6C5CE7] hover:border-[#6C5CE7] shadow-xl transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .testimonial-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #6C5CE7 !important;
          width: 24px;
          border-radius: 5px;
        }
        /* Ensure arrows don't cause layout shift and stay on top */
        .swiper-prev, .swiper-next {
          cursor: pointer;
          pointer-events: auto;
        }
      ` }} />
    </div>
  );
};

export default Testimonials;
