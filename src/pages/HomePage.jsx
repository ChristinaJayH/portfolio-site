import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <ContactForm />
    </div>
  );
};

export default HomePage;
