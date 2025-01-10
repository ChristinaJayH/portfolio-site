import '../styles/header.css';
import { GiCctvCamera } from "react-icons/gi";
const Header = () => {
  return (
    <div className='header'>
      <h1>Start Your <span>Cybersecurity</span> <br></br>Journey Today</h1>
      <p>Embark on a path to learn, grow, and succeed in the world of cybersecurity. Start building the skills you need to advance your career today.</p>
      <button><GiCctvCamera className='icon'/>Get Started</button>
    </div>
  )
}

export default Header
