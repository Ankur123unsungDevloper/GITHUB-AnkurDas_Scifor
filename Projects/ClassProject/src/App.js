import React, { useEffect, useRef } from 'react';
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
  const cardsContainerRef = useRef(null);
  const maxSlide = 400;

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      const cards = cardsContainerRef.current;
      const vh = window.innerHeight;

      if (!hero || !cards) return;

      const heroHeight = hero.getBoundingClientRect().height;
      const heightVH = (heroHeight / vh) * 100;

      // Slide cards left when Hero shrinks to 53.92vh or lower
      if (heightVH <= 100 && heightVH >= 53.92) {
        const progress = (100 - heightVH) / (100 - 53.92);
        const slideAmount = progress * maxSlide;
        cards.style.transform = `translateX(-${slideAmount}px)`;
      }

      // Lock scroll until Hero shrinks below 22.72vh
      if (heightVH > 22.72) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero forwardedRef={heroRef} />
      <Features forwardedRef={cardsContainerRef} />
      <About />
      <LogosCarousel />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
