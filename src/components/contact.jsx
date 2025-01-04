import '../styles/contact.css'
import image from '../images/mobile-device.png'

const Contact = () => {
  return (
    <div className='items_container'>
        <img src={image} alt='mobile device' className='image'/>
        <h1><span>We're just a call away!</span></h1>
        <p>Get in touch with us, and start your CyberSecurity Journey!</p>
        <button className='cta2'>Contact</button>
    </div>
  )
}

export default Contact
