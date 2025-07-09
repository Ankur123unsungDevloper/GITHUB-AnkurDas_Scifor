import React, { useEffect } from 'react';

function Hero({ forwardedRef }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 300; // Max scroll at which hero is 76px
      const clamped = Math.min(scrollY, maxScroll);

      // Convert vh to px for calculation
      const viewportHeight = window.innerHeight;
      const startHeight = viewportHeight; // 100vh
      const endHeight = 76; // target height in px

      const targetHeight =
        startHeight - ((startHeight - endHeight) * clamped) / maxScroll;

      if (forwardedRef.current) {
        forwardedRef.current.style.height = `${targetHeight}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forwardedRef]);


  return (
    <section className="hero" ref={forwardedRef}>
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
