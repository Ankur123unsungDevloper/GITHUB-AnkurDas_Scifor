import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function CardShowcase() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="card-showcase" ref={sectionRef}>
      <div className="heading">
        <h1>Build Stronger Customer Relationships</h1>
        <h2>
          Simplify Interactions & Gain Valuable Insights with <br />
          Keenect Customer Relations Management Software
        </h2>

        <button className="cta-btn">
          TRY IT OUT NOW <FaArrowRight className="arrow-icon" />
        </button>
      </div>

      
    </section>
  );
}

export default CardShowcase;
