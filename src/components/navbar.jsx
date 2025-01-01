import { NavLink } from 'react-router-dom'
import '../Stylesheets/navbar.css'
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from 'react-icons/fa'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="title_Area">
        PrimeSecOps
        </div>
        <div className="hammenu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes  className='hamburger'/> : <GiHamburgerMenu className='exit'/>}
      </div>
      <div className="navbar_Links">
        <ul className={menuOpen ? "open" : ""}>
          <li><NavLink to='/home' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink></li>
          <li><NavLink to='/info-page' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>About</NavLink></li>
          <li><NavLink to='/services' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Services</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
