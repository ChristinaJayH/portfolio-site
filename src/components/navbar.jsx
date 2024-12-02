import { NavLink } from 'react-router-dom'
import '../Stylesheets/navbar.css'
import { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
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
             CyberSpecOps
        </div>
        <div className={`hammenu ${menuOpen ? 'clicked' : ''}`}>
          <RxHamburgerMenu  onClick={() => setMenuOpen(!menuOpen)}/>
        </div>
      <div className="navbar_Links">
        <ul className={menuOpen ? "" : "open"}>
          <li><a><NavLink to='/home' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink></a></li>
          <li><a><NavLink to='/info-page' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>InfoPage</NavLink></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
