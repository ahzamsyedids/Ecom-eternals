import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/sections/AboutHero';
import OurStory from '../components/sections/OurStory';
import Values from '../components/sections/Values';
import FAQ from '../components/sections/FAQ';
import CTABanner from '../components/sections/CTABanner';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white antialiased">
      <Navbar />

      <AboutHero />
      <OurStory />
      <Values />
      <FAQ />
      <CTABanner />

      <Footer />
    </div>
  );
};

export default About;
