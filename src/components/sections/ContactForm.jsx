import React, { useState } from 'react';
import Contactimg from "../../assets/images/contact.png";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
    });

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
        alert('Thank you! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '', consent: false });
    };

    return (
        <section className="py-20 px-4 md:px-6 bg-white overflow-hidden" id="contact">
            <div className="max-w-7xl mx-auto">
                {/* Main Outer Container with Gradient Border */}
                <div
                    className="relative rounded-[40px] p-[1px] overflow-hidden"
                    style={{ background: 'linear-gradient(90.3deg, #8B5CF6 0.26%, #0066CC 101.24%)' }}
                >
                    <div className="relative bg-white rounded-[39px] overflow-hidden p-4 md:p-8 lg:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                            {/* Left Column: Image */}
                            <div className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-[32px] overflow-hidden group">
                                <img
                                    src={Contactimg}
                                    alt="E-commerce Consultation"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40"></div>
                            </div>

                            {/* Right Column: Form Side with its own Gradient Border */}
                            <div
                                className="rounded-[32px] p-[1.5px] flex flex-col"
                                style={{ background: 'linear-gradient(180deg, #9294FF, #FFFFFF)' }}
                            >
                                <div
                                    className="h-full rounded-[31px] p-6 sm:p-10 lg:p-12 flex flex-col justify-center"
                                    style={{
                                        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), linear-gradient(180.49deg, rgba(146, 148, 255, 0.3) -72.97%, rgba(255, 255, 255, 0.3) 91.34%)'
                                    }}
                                >
                                    <div className="text-center mb-10">
                                        <h2 className="text-4xl lg:text-6xl font-bold text-[#1a1a2e] mb-4 tracking-tight font-bricolage">
                                            Get Free Consultation
                                        </h2>
                                        <p className="text-gray-500 text-sm md:text-base">
                                            Discuss detail with our ecommerce experts
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="space-y-4">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white/80 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all duration-300"
                                            />

                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white/80 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all duration-300"
                                            />

                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white/80 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all duration-300"
                                            />

                                            <textarea
                                                name="message"
                                                placeholder="Your Message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white/80 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all duration-300 resize-none"
                                            />
                                        </div>

                                        {/* Consent */}
                                        <label className="flex items-start gap-3 cursor-pointer group px-1">
                                            <div className="relative flex items-center justify-center mt-1">
                                                <input
                                                    type="checkbox"
                                                    name="consent"
                                                    checked={formData.consent}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500/20 transition-all cursor-pointer"
                                                />
                                            </div>
                                            <span className="text-[11px] leading-relaxed text-gray-600  transition-colors">
                                                I agree to receive text messages from Ecom Eternals about my inquiry. I also agree to the Terms of Use and Privacy Policy linked below. I understand that my consent to be contacted is not a requirement to purchase any product or service. You may opt out by replying STOP or ask for more information by replying HELP. Message frequency varies. Message and data rates may apply.
                                            </span>
                                        </label>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="w-full py-4.5 py-4 rounded-2xl text-white font-semibold text-lg bg-gradient-to-r from-[#8B5CF6] to-[#0066CC] shadow-[0_10px_25px_-5px_rgba(59,130,246,0.4)] hover:shadow-[0_15px_35px_-5px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] mt-4"
                                        >
                                            Submit Now
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
