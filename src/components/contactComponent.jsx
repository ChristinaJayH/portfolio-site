import '../styles/contact.css'
import image from '../images/message-image.png'
import { NavLink } from 'react-router-dom'
const Contact = () => {
  return (
    <div className='items_container'>
        <img src={image} alt='message-images'/>
        <div className='items_content_container'>
        <h1>Contact Us</h1>
        <p>Get in touch with us, and start your CyberSecurity Journey!</p>
        <NavLink to='/contact'>
        <button>Contact</button>
        </NavLink>
        </div>
    </div>
  )
}

export default Contact
