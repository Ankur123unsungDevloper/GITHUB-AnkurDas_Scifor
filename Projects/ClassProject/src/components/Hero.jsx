import React, { useEffect, useRef } from "react";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 300;

      const clamped = Math.min(scrollY, maxScroll);
      const targetHeight = 100 - (clamped / maxScroll) * (100 - 10);

      if (heroRef.current) {
        heroRef.current.style.height = `${targetHeight}vh`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1><span>KEENECT-SOFTWARE</span></h1>
      </div>
    </section>
  );
}

export default Hero;
