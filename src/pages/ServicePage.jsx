import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { serviceDetails } from '../data/serviceDetails';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FAQ from '../components/sections/FAQ';
import CTABanner from '../components/sections/CTABanner';
import ServiceHero from '../components/sections/ServiceHero';
import ServiceIntro from '../components/sections/ServiceIntro';
import ServiceProcess from '../components/sections/ServiceProcess';
import ServiceBenefits from '../components/sections/ServiceBenefits';

const ServicePage = () => {
  const { id } = useParams();
  const data = serviceDetails[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bricolage font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-[#485BFF] hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const serviceName = data.hero.title;

  return (
    <div className="bg-white text-[#1a1a2e] antialiased font-syne">
      <Navbar />

      <ServiceHero data={data} />
      <ServiceIntro data={data} serviceName={serviceName} />
      <ServiceProcess data={data} serviceName={serviceName} />
      <ServiceBenefits data={data} />

      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default ServicePage;
