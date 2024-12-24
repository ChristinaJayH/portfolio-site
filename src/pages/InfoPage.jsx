import React from 'react'
import About from '../components/About';
import Clifton from '../components/Clifton';
import PersonalInformation from '../components/PersonalInformation';
import '../Stylesheets/infoPage.css'
const InfoPage = () => {
  return (
    <div className='infopage'>
      <About />
      <Clifton/>
      <PersonalInformation/>
      {/* Add additional sections for more information */}
    </div>
  );
};

export default InfoPage;
