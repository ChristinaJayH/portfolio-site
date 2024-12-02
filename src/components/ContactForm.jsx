import React, { useState } from 'react';
import '../Stylesheets/contactform.css'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className='contactContainer'>
      <h1>Contact Us</h1>
    <form className='formHandle' onSubmit={handleSubmit}>
      <div className='inputContainer'>
      <label>
        <input placeholder='Name:' type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        <input placeholder='Email:' type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      </div>
      <label className='message'>
        <textarea placeholder='Message:' name="message" value={formData.message} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
    </div>
  );
};

export default ContactForm;
