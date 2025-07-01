// Testimonials.jsx
const testimonials = [
  { name: 'Alice', quote: 'Amazing platform!', image: '/assets/user1.jpg' },
  { name: 'Bob', quote: 'Transformed our workflow.', image: '/assets/user2.jpg' }
];

function Testimonials() {
  return (
    <section className="testimonials">
      {testimonials.map((t, index) => (
        <div className="testimonial" key={index}>
          <img src={t.image} alt={t.name} />
          <p>“{t.quote}”</p>
          <h4>{t.name}</h4>
        </div>
      ))}
    </section>
  );
}

export default Testimonials;
