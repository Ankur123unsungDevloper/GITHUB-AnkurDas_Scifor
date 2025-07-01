// LogosCarousel.jsx
const logos = ["/assets/logo1.png", "/assets/logo2.png", "/assets/logo3.png"];

function LogosCarousel() {
  return (
    <section className="logos-carousel">
      <div className="carousel-track">
        {logos.map((src, i) => (
          <img key={i} src={src} alt={`logo-${i}`} className="logo" />
        ))}
      </div>
    </section>
  );
}

export default LogosCarousel;
