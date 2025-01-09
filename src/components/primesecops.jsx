import '../styles/primesecops.css'
import { MdMiscellaneousServices } from "react-icons/md";
import { MdPhoneMissed } from "react-icons/md";
const primesecops = () => {
  return (
    <div className='prime_container'>
        <h1>What is PrimeSecOps?</h1>
        <p>PrimeSpecOps helps individuals build successful cybersecurity careers by offering tailored guidance, resources, and support for certifications, job placement, and career growth.</p>
        <div className='component_containers'>
          <div className='cards'>
            <MdMiscellaneousServices className='card_icon'/>
            <p><span>Services</span> - Discover essential cybersecurity tools and strategies to protect your digital world.</p>
          </div>
          <div className='cards'>
            <MdPhoneMissed className='card_icon'/>
              <p><span>Contact</span> - Get in touch with us for more cybersecurity insights and support.</p>
          </div>
        </div>
    </div>
  )
}

export default primesecops
