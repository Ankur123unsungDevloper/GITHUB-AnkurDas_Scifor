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
    <section
      className={`card-showcase ${isFixed ? 'fixed' : 'relative'}`}
      ref={sectionRef}
      style={{
        marginTop: isFixed ? '0px' : 'calc(100vh - 76px)',
        transition: 'margin-top 0.4s ease-in-out, transform 0.4s ease-in-out',
      }}
    >
      <div className="heading">
        <h1>Build Stronger Customer Relationships</h1>
        <h2>
          Simplify Interactions & Gain Valuable <br />
          Insights with Keenect Customer Relations Management Software
        </h2>
        <button className="cta-btn">
          TRY IT OUT NOW <FaArrowRight className="arrow-icon" />
        </button>
      </div>

      <div
        className="card-container"
        style={{
          transform: `translateX(-${slideAmount}px)`,
          transition: 'transform 0.3s ease',
        }}
      >
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className={`card ${[3, 5, 6, 10].includes(index) ? 'rotate-card' : ''}`}
            ref={(el) => (cardsRef.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
