import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import '../Stylesheets/homepage.css'
const HomePage = () => {
  return (
    <div className='homePageContainer'>
      <HeroSection />
      <Services />
      <ContactForm />
    </div>
  );
};

export default HomePage;
