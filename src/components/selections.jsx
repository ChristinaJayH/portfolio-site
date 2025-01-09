import '../styles/selections.css'
import { BsGlobe } from "react-icons/bs";
import { PiSecurityCameraFill } from "react-icons/pi";
import { RiRoadMapFill } from "react-icons/ri";
const selections = () => {
  return (
      <div className='selection_container'>
        <div className='other_content'>
          <p><span>More Information</span></p>
          <h1>See what it's all About!</h1>
          <p>PrimeSecOps simplifies cybersecurity, helping individuals master essential IT skills to advance their careers. Explore our resources and start your journey today!</p>
        </div>
        <div className='card_context'>
          <div className='starter_area'>
            <h3>You Ready?</h3>
            <button>Get Started</button>
          </div>
          <div className='text_area'>
              <p>PrimeSecOps helps you master cybersecurity and IT skills with accessible resources and tailored learning paths, empowering you to advance your career.</p>
              <div className='divider'></div>
          </div>
          <div className='applience_container'>
                  <div className='card_text'>
                  <PiSecurityCameraFill className='span'/>
                    <p><span>Cybersecurity beginner Tutorials</span> - Our tutorials simplify cybersecurity concepts, offering clear explanations and hands-on examples to build foundational skills.</p>
                  </div>
              <div className='card_text'>
                <BsGlobe className='span'/>
                  <p><span>IT skill Resources</span> - Access resources that teach essential IT skills, helping you develop practical knowledge for career advancement.</p>
              </div>
              <div className='card_text'>
              <RiRoadMapFill className='span'/>
                  <p><span>Cybersecurity Roadmap</span> - Our roadmaps guide you through the cybersecurity journey, simplifying complex topics and ensuring steady progress.</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default selections
