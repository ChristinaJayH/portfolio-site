import React from 'react';
import '../Stylesheets/services.css'
import { BiSupport } from "react-icons/bi";
import { FaGears } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
const Services = () => {
  return (
    <div className='servicesection'>
      <div className='text_area'>
      <h2>Our Services</h2>
      <ul>
        <li className='card'>
          <BiSupport className='icons'/>
          <h1>Support</h1>
          <p>Immediate expert <br></br>cybersecurity assistance.</p>
        </li>
        <li className='card'>
          <FaGears className='icons'/>
          <h1>Consulting</h1>
          <p>Tailored cybersecurity <br></br>strategy advice.</p>
          </li>
        <li className='card'>
          <FaFileAlt className='icons'/>
          <h1>Rules</h1>
          <p>Custom rules for <br></br>Chronicle and Splunk.</p>
        </li>
        <li className='card'>
          <GrCertificate className='icons'/>
          <h1>Training</h1>
          <p>Essential skills for <br></br>cybersecurity tools.</p>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Services;
