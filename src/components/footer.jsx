import '../styles/footer.css'
const Footer = () => {
  return (
    <div className="footer_container">
     <div className='about_section'>
        <div className='title_section'>
          <h1>About PrimeSecOps</h1>
        </div>
          <p>PrimeSecOps provides resources and tools to help individuals build cybersecurity skills, advance their careers, and stay secure in the digital world.</p>
     </div>
     <div className='company_section'>
        <div className='company_title_section'>
            <h1>Company</h1>
        </div>
      <ul>
      <li>Matthews, NC</li>
        <li>noah7q4lg@gmail.com</li>
        <li>(805) 503-8635</li>
      </ul>
     </div>
     <div className='footer_Links'>
        <div className='links_section'>
            <div className='links_title_section'>
              <h1>Learn More</h1>
            </div>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Booking</li>
              <li>Contact</li>
            </ul>
        </div>
        <div className='services_section'>
          <div className='services_title_section'>
              <h1>Services</h1>
            </div>
            <ul>
              <li>Booking</li>
              <li>Courses</li>
              <li>Roadmap</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer
