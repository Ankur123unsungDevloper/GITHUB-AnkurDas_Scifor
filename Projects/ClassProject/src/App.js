import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import LogosCarousel from './components/LogosCarousel';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "./index.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,  // animation duration
      once: true,     // animate only once
      offset: 120,    // trigger when 120px above
    });
  }, []);

  
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <LogosCarousel />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
