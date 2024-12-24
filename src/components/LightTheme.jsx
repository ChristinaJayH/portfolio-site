import '../Stylesheets/LightTheme.css'
import image from '../images/print-press-image.jpg'
const LightTheme = () => {
  return (
    <div className='jobContainer'>
      <div className='TitleContainer'>
        <h1>Cybersecurity Job Search Strategy</h1>
        <h2>Breaking into Cybersecurity doesn’t have to be overwhelming. With our Cybersecurity Job Search Strategy, you’ll gain the tools, knowledge, and confidence to land the perfect entry-level role. This service includes:</h2>
      </div>
      <div className='textContentContainer'>
        <div className='image'><img src={image} alt='@'/></div>
        
        <div className='textContent'>
          <div className='textRow'>
            <div className='textContainerContent'>
              <h1>Resume & LinkedIn Optimization:</h1>
              <p>Tailor your resume and online presence carefully to effectively highlight valuable transferable skills, such as problem-solving and analytical abilities, alongside your Cybersecurity certifications, which showcase your expertise and dedication to the field.</p>
            </div>
            <div className='textContainerContent'>
            <h1>Job Board Navigation:</h1>
            <p>Provide detailed guidance on where to find Cybersecurity roles, including specialized niche job boards that focus exclusively on Cybersecurity positions and company career pages that often feature opportunities tailored to professionals in the field.</p>
            </div>
          </div>
          <div className='textRow'>
            <div className='textContainerContent'>
            <h1>Networking Tips:</h1>
            <p>Leverage LinkedIn, industry-specific meetups, and professional organizations to strategically build valuable connections within the field and uncover hidden opportunities that may not be publicly advertised.</p>
            </div>
            <div className='textContainerContent'>
            <h1>Role Matching:</h1>
            <p>Gain detailed insight into roles such as SOC Analyst, Threat Intelligence Analyst, and IT Security Specialist, which are well-suited to align with your current qualifications and areas of expertise.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LightTheme
