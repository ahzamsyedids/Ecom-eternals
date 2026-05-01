import React, { useState, useEffect } from 'react';

const ConsultationModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessStage: '',
    revenue: '',
    platform: '',
    capital: '',
    name: '',
    email: '',
    phone: '',
    consent: false,
  });

  const totalSteps = 5;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep(1); // Reset to first step when opened
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

  const selectOption = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (step < totalSteps) {
      setTimeout(() => setStep(step + 1), 300); // Slight delay for better feel
    }
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final Form Data:', formData);
    alert('Application Submitted Successfully!');
    onClose();
  };

  if (!isOpen) return null;

  const progress = (step / totalSteps) * 100;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-[32px] p-[1px] overflow-hidden animate-modalIn shadow-2xl bg-gradient-to-br from-white to-gray-100 border border-white/20">
        <div className="relative bg-white/95 backdrop-blur-2xl rounded-[31px] overflow-hidden">
          
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100">
            <div 
              className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#0066CC] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all z-10 border border-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content Container */}
          <div className="px-8 pt-12 pb-8">
            
            {/* Step 1: Business Stage */}
            {step === 1 && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-semibold text-[#1a1a2e] font-syne mb-2">Let's get started</h2>
                <p className="text-gray-500 mb-8">What's the current stage of your business?</p>
                <div className="space-y-3">
                  {['I have an idea', 'Launching soon', 'Already running (Pre-revenue)', 'Already running (Generating sales)'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => selectOption('businessStage', opt)}
                      className={`w-full p-4 rounded-2xl text-left transition-all border ${
                        formData.businessStage === opt 
                        ? 'border-[#8B5CF6] bg-[#8B5CF6]/5 text-[#8B5CF6] font-medium' 
                        : 'border-gray-100 bg-gray-50/50 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Revenue */}
            {step === 2 && (
              <div className="animate-fadeIn">
                <button onClick={prevStep} className="text-[#8B5CF6] text-sm mb-4 flex items-center gap-1 hover:underline font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  Back
                </button>
                <h2 className="text-3xl font-semibold text-[#1a1a2e] font-syne mb-2">Monthly Revenue</h2>
                <p className="text-gray-500 mb-8">What's your current monthly revenue?</p>
                <div className="grid grid-cols-2 gap-3">
                  {['$0 (Newbie)', '$1k - $5k', '$5k - $20k', '$20k - $50k', '$50k - $100k', '$100k+'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => selectOption('revenue', opt)}
                      className={`p-4 rounded-2xl text-center transition-all border ${
                        formData.revenue === opt 
                        ? 'border-[#8B5CF6] bg-[#8B5CF6]/5 text-[#8B5CF6] font-medium' 
                        : 'border-gray-100 bg-gray-50/50 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Platform */}
            {step === 3 && (
              <div className="animate-fadeIn">
                <button onClick={prevStep} className="text-[#8B5CF6] text-sm mb-4 flex items-center gap-1 hover:underline font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  Back
                </button>
                <h2 className="text-3xl font-semibold text-[#1a1a2e] font-syne mb-2">Platform Choice</h2>
                <p className="text-gray-500 mb-8">Which platform are you interested in?</p>
                <div className="grid grid-cols-2 gap-3">
                  {['TikTok Shop', 'Amazon FBA', 'eBay Managed', 'Shopify Store', 'Walmart', 'Other'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => selectOption('platform', opt)}
                      className={`p-4 rounded-2xl text-center transition-all border ${
                        formData.platform === opt 
                        ? 'border-[#8B5CF6] bg-[#8B5CF6]/5 text-[#8B5CF6] font-medium' 
                        : 'border-gray-100 bg-gray-50/50 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Capital */}
            {step === 4 && (
              <div className="animate-fadeIn">
                <button onClick={prevStep} className="text-[#8B5CF6] text-sm mb-4 flex items-center gap-1 hover:underline font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  Back
                </button>
                <h2 className="text-3xl font-semibold text-[#1a1a2e] font-syne mb-2">Investment Capital</h2>
                <p className="text-gray-500 mb-8">Do you have the minimum liquid capital ($15k - $20k) to scale this business?</p>
                <div className="space-y-3">
                  {['Yes, I have it ready', 'I have part of it', 'No, but I can arrange it', 'Not at the moment'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => selectOption('capital', opt)}
                      className={`w-full p-4 rounded-2xl text-left transition-all border ${
                        formData.capital === opt 
                        ? 'border-[#8B5CF6] bg-[#8B5CF6]/5 text-[#8B5CF6] font-medium' 
                        : 'border-gray-100 bg-gray-50/50 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Contact Info */}
            {step === 5 && (
              <div className="animate-fadeIn">
                <button onClick={prevStep} className="text-[#8B5CF6] text-sm mb-4 flex items-center gap-1 hover:underline font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  Back
                </button>
                <h2 className="text-3xl font-semibold text-[#1a1a2e] font-syne mb-2">Final Details</h2>
                <p className="text-gray-500 mb-8">Where should we send your custom strategy?</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-[#1a1a2e] placeholder:text-gray-400 focus:outline-none focus:border-[#8B5CF6] transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-[#1a1a2e] placeholder:text-gray-400 focus:outline-none focus:border-[#8B5CF6] transition-all"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-[#1a1a2e] placeholder:text-gray-400 focus:outline-none focus:border-[#8B5CF6] transition-all"
                  />
                  
                  <label className="flex items-start gap-3 cursor-pointer mt-4">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#8B5CF6] focus:ring-[#8B5CF6]"
                    />
                    <span className="text-[10px] text-gray-500 leading-relaxed">
                      I agree to receive communications from Ecom Eternals. I understand my data is protected by the Privacy Policy.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full py-4 mt-4 rounded-xl text-white font-semibold text-base bg-gradient-to-r from-[#8B5CF6] to-[#0066CC] hover:opacity-90 transition-all duration-200 shadow-lg shadow-indigo-500/10 font-syne"
                  >
                    Complete Application
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
