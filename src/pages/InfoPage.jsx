import React from 'react'
import Items from '../components/items'
import About from '../components/About';
import '../Stylesheets/infoPage.css'
const InfoPage = () => {
  return (
    <div className='infopage'>
      <About />
      <Items/>
      {/* Add additional sections for more information */}
    </div>
  );
};

export default InfoPage;
