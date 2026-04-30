import React, { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CTA from '../components/sections/CTABanner'
import FAQ from '../components/sections/FAQ'
import Testimonials from '../components/sections/Testimonials'
import Services from '../components/sections/Services';
import ServiceMainHero from '../components/sections/ServiceMainHero'
import { useParams } from 'react-router-dom'


const ServiceMain = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    return (
        <>

            <Navbar />
            <ServiceMainHero />
            <Services />
            <Testimonials />
            <FAQ />
            <CTA />
            <Footer />
        </>
    )
}

export default ServiceMain