
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Animation logic for scroll-based animations
    const setupAnimations = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            if (el.classList.contains('animate-on-scroll')) {
              if (el.classList.contains('fade-in')) {
                el.classList.add('fade-in-active');
              } else if (el.classList.contains('fade-in-up')) {
                el.classList.add('fade-in-up-active');
              } else if (el.classList.contains('fade-in-down')) {
                el.classList.add('fade-in-down-active');
              } else if (el.classList.contains('fade-in-left')) {
                el.classList.add('fade-in-left-active');
              } else if (el.classList.contains('fade-in-right')) {
                el.classList.add('fade-in-right-active');
              } else if (el.classList.contains('scale-in')) {
                el.classList.add('scale-in-active');
              } else if (el.classList.contains('blur-in')) {
                el.classList.add('blur-in-active');
              } else {
                // Default animation
                el.classList.add('fade-in-up-active');
              }
            }
          }
        });
      }, { threshold: 0.1 });
      
      animatedElements.forEach((el) => {
        observer.observe(el);
      });
    };
    
    setupAnimations();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
