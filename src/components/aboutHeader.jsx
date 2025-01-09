import '../styles/about.css'
import image from '../images/human-image.png'
const aboutHeader = () => {
  return (
    <div className="about_container">
      <div className='images_cont'>
      <img src={image} alt='altered'/>
      </div>
      <div className='text'>
      <h1>Clifton Noah Heggins</h1>
      <p>Sr. Information Security Engineer</p>
      <p><span>Charlotte, NC</span></p>
      </div>
    </div>
  )
}

export default aboutHeader
