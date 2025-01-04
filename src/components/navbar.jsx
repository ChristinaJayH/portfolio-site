import '../styles/navbar.css';
import { GiCctvCamera } from "react-icons/gi";
import { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='narbar'>
      <div className='mobile_navabr'>
        <div className='top_section'>
          <div className='navbar_title'>
          <GiCctvCamera className='camera'/>
              <h1>PrimeSecOps</h1>
              
          </div>
          <div className='toggle_button' onClick={toggleMenu}>
          {isMenuOpen ? <HiMiniXMark className='mark'/> : <IoIosMenu/>}
          </div>
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : 'not'}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
