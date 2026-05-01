import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import LandingPage from './pages/LandingPage';
import ServicePage from './pages/ServicePage';
import ServiceMain from './pages/ServiceMain';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<ServiceMain />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/services/:id" element={<ServicePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
