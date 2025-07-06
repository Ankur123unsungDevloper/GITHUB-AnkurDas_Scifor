import React from "react";

function Hero() {
  window.addEventListener("scroll", function () {
    const heroSection = document.querySelector(".hero");
    heroSection.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>
          <span>KEENECT-SOFTWARE</span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
