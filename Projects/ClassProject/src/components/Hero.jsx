import React from 'react';

function Hero() {
  return (
    <section className="hero">
      {/* Video background */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Hero content overlay */}
      <div className="hero-content">
        <h1>
          <span>KEENECT-SOFTWARE</span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
