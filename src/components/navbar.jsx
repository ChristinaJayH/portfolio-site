import '../styles/navbar.css';
import { NavLink } from 'react-router-dom'
import { GiCctvCamera } from "react-icons/gi";
import { useState, useEffect } from 'react';
import { IoIosMenu } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";
const Navbar = () => {
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='narbar'>
      <div className='mobile_navabr'>
        <div className={`top_section ${scrolled ? 'scrolled' : ''}`}>
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
            <li><NavLink to='/home' className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
            <li><NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink></li>
            <li><NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
