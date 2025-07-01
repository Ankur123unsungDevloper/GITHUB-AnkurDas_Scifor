const features = [
  { icon: '💡', title: 'Innovation', desc: 'We bring new ideas to life.' },
  { icon: '🔒', title: 'Security', desc: 'Top-notch protection for your data.' },
  { icon: '⚙️', title: 'Customization', desc: 'Tailored solutions just for you.' }
];

function Features() {
  return (
    <section className="features">
      {features.map((item, index) => (
        <div className="feature-card" key={index}>
          <div className="icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
