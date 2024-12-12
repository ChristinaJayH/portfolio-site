import React from 'react'
import About from '../components/About';
import '../Stylesheets/infoPage.css'
const InfoPage = () => {
  return (
    <div className='infopage'>
      <About />
      {/* Add additional sections for more information */}
    </div>
  );
};

export default InfoPage;
