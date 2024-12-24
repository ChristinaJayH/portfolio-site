import '../Stylesheets/roadmap.css'
import image from '../images/cyber-security.jpg'
const Roadmap = () => {
  return (
    <div className='roadmapContainer'>
      <div className='rContainer'>
        <div className='columnbox'>
            <div className='flexbox1'>
                <div className='columnbox1'>
                    <h1>Certification Roadmap & <br></br>Training Support</h1>
                    <p>Not sure which certifications are right for your Cybersecurity goals? Our Certification Roadmap & Training Support service takes the guesswork out of planning your path. Certifications are often a gateway to a successful Cybersecurity career, but choosing the right ones can be overwhelming</p>
                </div>
                <div className='cardcomponent'>
                      <img src={image} alt=''/>
                </div>
            </div>
            <div className='flexbox2'>
                <div className='textSection'>
                  <h2><span>Certification Reccomendations:</span> <br></br>Aligned with your goals, experience, and interests.</h2>
                </div>
                <div className='textSection'>
                  <h2><span>Roadmap Creation:</span> <br></br>Step-by-step guidance for certifications like Security+, CySA+, CISSP, or CEH.
                  </h2>
                </div>
                <div className='textSection'>
                  <h2><span>Training Resources:</span> <br></br>Access to courses, study materials, and practice exams.
                  </h2>
                </div>
                <div className='textSection'>
                  <h2><span>Ongoing Support:</span> <br></br>Access to courses, study materials, and practice exams.
                  </h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
