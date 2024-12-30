import '../Stylesheets/footer.css';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footerContent'>
          <div className='footerLinks'>
            <ul>
              <li><span>CyberSpecOps</span></li>
              <li>Company Slogan</li>
            </ul>
          </div>
          <div className='footerLinks'>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Reasources</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className='footerLinks'>
            <ul>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Indeed</li>
            </ul>
          </div>
          <div className='footerLinks'>
            <ul>
              <li>XXXXXXXXX@gmail.com</li>
              <li>(804) 703-8635</li>
              <li>8217 Mintworth Links Lane</li>
            </ul>
          </div>
      </div>
      <div className='divider1'></div>
      <div className='iconrows'>
      <FaLinkedinIn className='inicon'/>
      <FaGithub className='inicon'/>
      <FaInstagram className='inicon'/>
      <FaXTwitter className='inicon'/>
      </div>
      <p>© 2024 <span>CyberSpecOps</span> All Rights Reserved.</p>
    </div>
  )
}

export default Footer
