import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const NotFound = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="min-h-screen bg-white flex flex-col font-syne selection:bg-purple-100">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Subtle Background Accents */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>

        <div className="text-center relative z-10 max-w-2xl mx-auto">
          {/* Large 404 text with subtle color */}
          <div className="relative mb-8">
            <h1 className="text-[120px] md:text-[220px] font-black leading-none tracking-tighter text-gray-100/80 font-bricolage select-none">
              404
            </h1>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-purple-600 mb-2">
                Lost in Space
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-[#1a1a2e] tracking-tight">
                Page Not Found
              </h2>
            </div>
          </div>

          <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed max-w-md mx-auto">
            The link you followed might be broken, or the page may have been moved to a new destination.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#0066CC] text-white font-semibold rounded-2xl shadow-[0_10px_40px_rgba(99,102,241,0.2)] hover:shadow-[0_15px_50px_rgba(99,102,241,0.4)] transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center group"
            >
              <svg className="mr-2 w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return Home
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-gray-50 text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
