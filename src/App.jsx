import React, { useEffect } from 'react';
import Navbar from './Navbar';
import FirstPage from './FirstPage';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer'

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once the animation is triggered, it can stop observing this element
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all elements that should animate
    const animatedElements = document.querySelectorAll('.service-box, .services-title, .contact-box, .contact-head, .fade-in-section');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar />
      <div id="home">
        <FirstPage />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
