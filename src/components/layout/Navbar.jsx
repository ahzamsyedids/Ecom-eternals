import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MegaMenuServices from '../navbar/MegaMenuServices';
import ConsultationModal from '../modals/ConsultationModal';
import QuoteModal from '../modals/QuoteModal';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import logo from '../../assets/images/Ecom-Eternals.png';

const ChevronDownIcon = ({ open }) => (
  <svg
    className={`w-4 h-4 ml-1 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    fill="none" stroke="currentColor" viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
  </svg>
);

const mobileServices = [
  { category: "Amazon", items: ["Amazon Store Creation", "Amazon FBA Automation", "Amazon Private Labelled", "Amazon A+ Content", "Amazon PPC"] },
  { category: "Walmart", items: ["Wallmart Store Creation", "Walmart Dropshipping", "Wallmart Private Labelled", "Walmart product Hunting", "Walmart WFS"] },
  { category: "Shopify", items: ["Shopify Store Creation", "Shopify Automation", "Shopify Store Optimization", "Shopify product Hunting", "Shopify Store Marketing"] },
  { category: "Youtube", items: ["Youtube Automation", "Youtube Monetization", "Youtube Video Editing", "Youtube Marketing"] },
  { category: "Tiktok", items: ["Tiktok Shop Automation"] },
  { category: "Others", items: ["Virtual Assitant", "Account Management", "Ecommerce Store Creation", "Ecommerce Store Marketing", "Ecommerce Store Product Hunting"] },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteMessage, setQuoteMessage] = useState('');
  const navRef = useOutsideClick(() => setMobileMenuOpen(false));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleOpenModal = () => setModalOpen(true);
    const handleOpenQuoteModal = (e) => {
      if (e.detail && e.detail.message) {
        setQuoteMessage(e.detail.message);
      }
      setQuoteModalOpen(true);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('openConsultationModal', handleOpenModal);
    window.addEventListener('openQuoteModal', handleOpenQuoteModal);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openConsultationModal', handleOpenModal);
      window.removeEventListener('openQuoteModal', handleOpenQuoteModal);
    };
  }, []);

  const getSlug = (item) => item.toLowerCase().replace(/ /g, '-');

  return (
    <>
      <nav
        ref={navRef}
        // overflow-visible yahan zaroori hai
        className={`fixed w-full z-[999] transition-all duration-500 overflow-visible ${scrolled ? 'py-2' : 'py-6'}`}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-8 transition-all duration-500 overflow-visible ${scrolled ? 'bg-white/90 shadow-lg rounded-full border border-white/20' : ''}`}>
          {/* min-h-20 aur py-2 se button ko upar jane ki jagah mil gayi */}
          <div className="flex justify-between items-center min-h-20 py-2 overflow-visible">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer pl-2">
              <Link to="/">
                <img src={logo} alt="logo" className="w-32 md:w-36 lg:w-40" />
              </Link>
            </div>

            {/* Desktop Pill Links */}
            <div className={`hidden lg:flex items-center space-x-1 transition-all duration-500 ${!scrolled ? 'bg-white/80 border border-white px-6 py-1 rounded-full' : ''}`}>
              <Link to="/" className="px-4 py-2 text-gray-600 hover:text-[#6C5CE7] font-medium transition-colors text-sm whitespace-nowrap">Home</Link>
              <Link to="/about" className="px-4 py-2 text-gray-600 hover:text-[#6C5CE7] font-medium transition-colors text-sm whitespace-nowrap">About Us</Link>

              <div className="relative group pb-8 -mb-8">
                <button className="flex items-center text-gray-600 group-hover:text-[#6C5CE7] font-medium transition-colors py-2 text-sm whitespace-nowrap">
                  <div className="flex items-center text-gray-600 group-hover:text-[#6C5CE7] font-medium transition-colors px-4 py-2 text-sm whitespace-nowrap">Services <ChevronDownIcon /></div>
                </button>
                <MegaMenuServices />
              </div>

              <Link to='/packages' className="flex items-center text-gray-600 group-hover:text-[#6C5CE7] font-medium transition-colors px-4 py-2 text-sm whitespace-nowrap">Packages</Link>
              <Link to="/contact" className="px-4 py-2 text-gray-600 hover:text-[#6C5CE7] font-medium transition-colors text-sm whitespace-nowrap">Contact Us</Link>
            </div>

            {/* CTA Button (desktop) - Fixed Wrapper */}
            <div className="hidden lg:flex pr-2 py-1 relative z-[1001] overflow-visible">
              <button
                onClick={() => setModalOpen(true)}
                className="text-white py-3 px-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95 bg-[linear-gradient(to_right,#8B5CF6,#0066CC)] shadow-[0_4px_20px_rgba(99,102,241,0.4)] font-syne text-sm whitespace-nowrap"
              >
                Book a Free Strategy Call
              </button>
            </div>

            {/* Hamburger */}
            <div className="lg:hidden flex items-center pr-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-[#1a1a2e] p-2 rounded-lg bg-gray-50/80 backdrop-blur-sm shadow-sm border border-gray-100"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  }
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute w-[calc(100%-2rem)] left-4 mt-2 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden max-h-[85vh] overflow-y-auto">
            <div className="px-4 py-6 space-y-1">

              <Link to="/" className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-[#6C5CE7] hover:bg-white/40 rounded-xl transition-all" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-[#6C5CE7] hover:bg-white/40 rounded-xl transition-all" onClick={() => setMobileMenuOpen(false)}>About Us</Link>

              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-gray-700 hover:text-[#6C5CE7] hover:bg-white/40 rounded-xl transition-all"
                >
                  <span className="font-semibold">Services</span>
                  <ChevronDownIcon open={mobileServicesOpen} />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 pb-3 grid grid-cols-2 gap-6 pt-3">
                    {mobileServices.map((cat, i) => (
                      <div key={i}>
                        <h4 className="text-xs font-bold text-[#6C5CE7] uppercase tracking-wider mb-2">{cat.category}</h4>
                        <ul className="space-y-1.5">
                          {cat.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={`/services/${getSlug(item)}`}
                                className="text-xs text-gray-500 hover:text-[#6C5CE7] transition-colors block"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/packages" className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-[#6C5CE7] hover:bg-white/40 rounded-xl transition-all" onClick={() => setMobileMenuOpen(false)}>Packages</Link>
              <Link to="/contact" className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-[#6C5CE7] hover:bg-white/40 rounded-xl transition-all" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>

              <div className="pt-4">
                <button
                  onClick={() => { setModalOpen(true); setMobileMenuOpen(false); }}
                  className="w-full text-white py-4 font-semibold shadow-lg rounded-xl transition-all duration-300 hover:-translate-y-1 bg-[linear-gradient(to_right,#8B5CF6,#0066CC)] shadow-[0_4px_20px_rgba(99,102,241,0.4)] font-syne"
                >
                  Book a Free Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => {
          setQuoteModalOpen(false);
          setQuoteMessage('');
        }}
        preFilledMessage={quoteMessage}
      />
    </>
  );
};

export default Navbar;