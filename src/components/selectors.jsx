import '../Stylesheets/selectors.css'
import { PiHeadsetFill } from "react-icons/pi";
const selectors = () => {
  return (
    <div className='container'>
      <div className='contentContainer'>
        <PiHeadsetFill className='icon-image'/>
          <div className="textContaienr">
            <h1>
              Helpdesk and Contact Options
            </h1>
            <p>
            Our Helpdesk is your trusted partner for reliable cybersecurity support, providing the guidance, tools, and expertise you need to address challenges with confidence. Whether you're troubleshooting technical issues, seeking advice to strengthen your security, or escalating urgent concerns, our team is dedicated to delivering fast, effective, and tailored assistance. We aim to minimize disruptions and empower you with the knowledge and resources to maintain a secure digital environment. From personalized solutions for individuals to collaborative support for organizations, we are committed to ensuring a seamless and responsive experience that prioritizes your success and peace of mind.
            </p>
            <button>
              Get Assistance Now
            </button>
          </div>
      </div>
    </div>
  )
}

export default selectors
