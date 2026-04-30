import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
import Services from '../components/sections/Services';
import WhyFail from '../components/sections/WhyFail';
import WeDoEverything from '../components/sections/WeDoEverything';
import VideoProcess from '../components/sections/VideoProcess';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import CTABanner from '../components/sections/CTABanner';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const LandingPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="text-[#1a1a2e] antialiased selection:bg-[#6C5CE7] selection:text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyFail />
      <WeDoEverything />
      <VideoProcess />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default LandingPage;
