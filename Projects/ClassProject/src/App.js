import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import LogosCarousel from './components/LogosCarousel';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

import 'aos/dist/aos.css';
import './index.css';

function App() {
  const heroRef = useRef(null);
  const [isCardFixed, setIsCardFixed] = useState(true);
  const [slideAmount, setSlideAmount] = useState(0);

  const maxSlide = 400; // Adjust as needed

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      const vh = window.innerHeight;

      if (!hero) return;

      const heroHeight = hero.getBoundingClientRect().height;
      const heightVH = (heroHeight / vh) * 100;

      // Slide cards when hero shrinks between 100vh and 53.92vh
      if (heightVH <= 100 && heightVH >= 53.92) {
        const progress = (100 - heightVH) / (100 - 53.92);
        setSlideAmount(progress * maxSlide);
      }

      // Lock card showcase in fixed mode until Hero shrinks to 76px
      setIsCardFixed(heroHeight > 76);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero forwardedRef={heroRef} />
      <Features isFixed={isCardFixed} slideAmount={slideAmount} />
      {/* Placeholder to create space while features is fixed */}
      {isCardFixed && <div style={{ height: 'calc(100vh - 76px)' }}></div>}
      <About />
      <LogosCarousel />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
