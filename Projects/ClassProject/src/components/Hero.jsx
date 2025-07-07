import React from "react";

function Hero() {
  window.addEventListener("scroll", function () {
    const heroSection = document.querySelector(".hero");
    heroSection.classList.toggle("sticky", window.scrollY > 0);
  });

  let video = "/assets/hero-bg.mp4";
  let container = document.querySelector(".hero-video");
  let sliceWidth = 20;
  let sliceHeight = 20;
  let rows = 20;
  let cols = 20;
  let slices = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let slice = document.createElement("div");
      slice.classList.add("slice");
      slice.style.width = `${sliceWidth}px`;
      slice.style.height = `${sliceHeight}px`;
      slice.style.backgroundImage = `url(${video})`;
      slice.style.backgroundPosition = `-${col * sliceWidth}px -${row * sliceHeight}px`;
      container.appendChild(slice);
      slices.push(slice);
    }
  }

  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
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
