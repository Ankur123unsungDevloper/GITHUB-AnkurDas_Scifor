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

  const maxSlide = 400; // max pixels to slide

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      const vh = window.innerHeight;

      if (!hero) return;

      const heroHeight = hero.getBoundingClientRect().height;

      // ✅ Slide starts after hero height is <= 375.413px
      const slideStart = 375.413;
      const slideEnd = 76; // when hero fully shrinks

      if (heroHeight <= slideStart && heroHeight >= slideEnd) {
        const progress = (slideStart - heroHeight) / (slideStart - slideEnd);
        setSlideAmount(progress * maxSlide);
      } else if (heroHeight < slideEnd) {
        // After fully shrunk, keep it at max
        setSlideAmount(maxSlide);
      } else {
        // Before slideStart, no movement
        setSlideAmount(0);
      }

      // Fixed positioning control (if needed)
      setIsCardFixed(heroHeight > slideEnd);
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
