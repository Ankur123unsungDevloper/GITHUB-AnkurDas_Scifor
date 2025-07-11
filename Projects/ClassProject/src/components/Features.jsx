import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Features({ isFixed, slideAmount }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardsRef.current.forEach((card, index) => {
            setTimeout(() => {
              if (card) card.classList.add('show');
            }, index * 100);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="feature-section">
      <div className={`slide-card ${isFixed ? 'fixed' : 'relative'}`}>
        {/* Heading + Cards */}
        <div className="card-content">
          <div className="heading">
            <h1>Build Stronger Customer Relationships</h1>
            <h2>
              Simplify Interactions & Gain Insights <br />
              with Keenect CRM
            </h2>
          </div>

          <div className="card-container">
            <div
              className="card-slider"
              style={{ transform: `translateX(-${slideAmount}px)` }}
            >
              {Array.from({ length: 15 }).map((_, index) => (
                <div key={index} className="card" />
              ))}
            </div>
          </div>
        </div>

        {/* For future card effects */}
        <div className="future-card-effect" />
      </div>
    </section>
  );
}

export default Features;
