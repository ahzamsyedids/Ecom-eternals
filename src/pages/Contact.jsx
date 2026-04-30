import React, { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import ContactHero from '../components/sections/ContactHero'
import Footer from '../components/layout/Footer'
import ContactForm from '../components/sections/ContactForm'
import FAQ from '../components/sections/FAQ'
import CTABanner from '../components/sections/CTABanner'
import { useParams } from 'react-router-dom'


const Contact = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    return (
        <>
            <Navbar />
            <ContactHero />
            <ContactForm />
            <FAQ />
            <CTABanner />
            <Footer />
        </>
    )
}

export default Contact