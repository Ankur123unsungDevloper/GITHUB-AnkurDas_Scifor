import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import LogosCarousel from './components/LogosCarousel';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <LogosCarousel />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
