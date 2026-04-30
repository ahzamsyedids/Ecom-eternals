import React, { useState, useEffect } from 'react';

const ConsultationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: hook up to your backend / email service
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '', consent: false });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-3xl p-[2px] animate-modalIn shadow-2xl"
        style={{ background: 'linear-gradient(90.3deg, rgba(255,255,255,0.6) 0.26%, rgba(255,255,255,0.6) 101.24%)' }}
      >
        <div className="relative bg-white/20 backdrop-blur-2xl rounded-[22px] overflow-hidden border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors z-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="pt-10 pb-4 px-8 text-center">
            <h2 className="text-4xl font-semibold text-[#1a1a2e] font-syne">Get Free Consultation</h2>
            <p className="text-[#1a1a2e] text-sm mt-2">Discuss detail with our ecommerce experts</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/10 transition-all"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/10 transition-all"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/10 transition-all"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/10 transition-all resize-none"
            />

            {/* Consent */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 rounded border-gray-300 text-[#6C5CE7] focus:ring-[#6C5CE7] shrink-0"
              />
              <span className="text-[11px] text-[#1a1a2e] leading-relaxed">
                I agree to receive text messages from Ecom Eternals about my inquiry. I also agree to the Terms of Use and Privacy Policy linked below. I understand that my consent to be contacted is not a requirement to purchase any product or service. You may opt out by replying STOP or ask for more information by replying HELP. Message frequency varies. Message and data rates may apply. You may review our Privacy Policy to learn how your data is used
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-semibold text-base bg-[linear-gradient(to_right,#8B5CF6,#0066CC)] hover:bg-[linear-gradient(to_right,#7a4de0,#0055b3)] shadow-[0_4px_20px_rgba(99,102,241,0.4)] transition-all duration-200 hover:-translate-y-0.5 font-syne"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
