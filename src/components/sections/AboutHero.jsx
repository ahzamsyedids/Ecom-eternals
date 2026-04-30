import React from 'react';
import amazon from '../../assets/images/amazon.png';
import shopify from '../../assets/images/shopify.png';

const AboutHero = () => {
    return (
        <section className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-b from-[#CDD9FE] via-white to-[#D4B3FF21]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-5xl md:text-6xl font-bricolage font-extrabold mb-6 leading-tight text-gray-900">
                    We Build <span className="bg-[linear-gradient(90.3deg,#8B5CF6_0.26%,#0066CC_101.24%)] bg-clip-text text-transparent">Digital Empires</span> <br className="hidden md:block" /> That Last.
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Ecom Eternals is a full-service ecommerce growth agency dedicated to launching, managing, and scaling high-performance digital businesses for global entrepreneurs.
                </p>
            </div>

            <div className="mt-16 relative flex justify-center items-end">
                <div className="absolute hidden lg:block left-8 md:left-16 lg:left-24 bottom-1/3 animate-float-delayed">
                    <img
                        src={amazon}
                        alt="Amazon"
                        className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl opacity-80"
                    />
                </div>
            </div>
            <div className="absolute hidden lg:block right-8 md:right-16 lg:right-24 top-1/4 animate-float">
                <img
                    src={shopify}
                    alt="Shopify"
                    className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl opacity-80"
                />
            </div>
        </section>
    );
};

export default AboutHero;
