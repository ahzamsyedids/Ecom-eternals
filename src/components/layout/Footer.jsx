import React from 'react';
import bg from "../../assets/images/footer-bg.png";
import logo from '../../assets/images/footer-logo.png';


const Footer = () => {
  return (
    <footer className="text-white pt-24 pb-12 px-4 md:px-0">
      <div className="max-w-[1280px] rounded-[2rem] py-12 px-6 md:px-16 mx-auto relative overflow-hidden" 
           style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative z-10">
          
          {/* Logo & Info */}
          <div className="flex flex-col gap-6">
            <img src={logo} alt="Ecom Eternals Logo" className="w-48 mb-2" />
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Trusted by ambitious entrepreneurs launching and scaling automated ecommerce businesses across Amazon, Shopify, TikTok Shop, and leading marketplaces worldwide.
            </p>
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:border-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:border-white transition-colors">
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* TikTok */}
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:border-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.09-.27-.19-.4-.29-.02 2.37-.01 4.74-.02 7.11-.01 2.3-.39 4.67-1.77 6.44-1.2 1.51-2.99 2.51-4.88 2.71-1.92.21-3.95-.14-5.59-1.21-1.74-1.12-2.91-3.11-3.03-5.18-.15-2.07.72-4.18 2.3-5.52 1.64-1.39 3.86-1.93 5.96-1.55v4.1c-1.11-.27-2.31-.13-3.32.41-.86.47-1.49 1.34-1.63 2.3-.17 1.12.3 2.33 1.2 3.03.95.73 2.27.87 3.39.42 1.1-.42 1.88-1.5 1.95-2.67l.03-12.06z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider">QUICK LINK</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About Us', 'Services', 'Packages', 'Contact Us'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider">Our Services</h4>
            <ul className="flex flex-col gap-4">
              {['Amazon', 'Walmart', 'Shopify', 'Youtube', 'Tiktok', 'Other'].map(service => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact US */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider">Contact US</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4 text-gray-300">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-sm">000 000 0000</span>
              </li>
              <li className="flex items-center gap-4 text-gray-300">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-sm">youremail@gmail.com</span>
              </li>
              <li className="flex items-center gap-4 text-gray-300 text-left">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-sm">Lorem api sum , CA 94080</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ecom Eternals LLC. All rights reserved.
          </p>
          <div className="flex gap-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Term and condition</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;