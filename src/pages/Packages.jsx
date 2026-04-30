import React, { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PackagesHero from '../components/sections/PackagesHero.jsx'
import PackagesGrid from '../components/sections/PackagesGrid'
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTABanner'
import { useParams } from 'react-router-dom'


const Packages = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    return (
        <>
            <Navbar />
            <PackagesHero />
            <PackagesGrid />
            <FAQ />
            <CTA />
            <Footer />
        </>
    )
}

export default Packages