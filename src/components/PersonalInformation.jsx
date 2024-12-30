import '../Stylesheets/PersonalInformation.css'
const PersonalInformation = () => {
  return (
    <div className='personal-information'>
        <div className='titleArea'>
            <h3>About Me</h3>
            <p>I am a dedicated Cybersecurity professional specializing in advanced threat detection, incident response, and empowering <br></br>others to succeed in this dynamic field.</p>
        </div>
        <div className='personalContent'>
            <div className='paragraph-element'>
                <h1>My Journey</h1>
                <p>With 16 years of leadership experience in retail management and supply chain logistics, I transitioned into Cybersecurity, applying my strategic thinking and problem-solving skills. My journey started with self-study in Python and data science, followed by completing a Cybersecurity bootcamp and earning the CompTIA CySA+ certification. I then gained hands-on experience at an MSSP, working with a variety of tools like SIEMs, EDRs, XDRs, and SOAR platforms. Currently, as a Senior Information Security Engineer, I specialize in advanced threat detection and incident response, while also dedicating time to mentoring aspiring professionals in Cybersecurity.</p>
            </div>
            <div className='certtifications-data'>
                <h1>Certifications & Data Experience</h1>
                <div className='certifications-container'>
                    <div className='data-element'>
                        <h2>Certifications:</h2>
                        <ul>
                            <li><p>CompTIA CySA+</p></li>
                            <li><p>Cybersecurity Bootcamp Graduate</p></li>
                        </ul>
                    </div>
                    <div className='data-element'>
                        <h2>Programming Languages:</h2>
                        <ul>
                            <li><p>Python</p></li>
                            <li><p>Data Science Fundamentals</p></li>
                        </ul>
                    </div>
                    <div className='data-element'>
                        <h2>Experience with Tools:</h2>
                        <ul>
                            <li><p>SIEMs (Security Information and Event Management)</p></li>
                            <li><p>EDRs (Endpoint Detection and Response)</p></li>
                            <li><p>XDRs (Extended Detection and Response)</p></li>
                            <li><p>SOAR (Security Orchestration, Automation, and Response)</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default PersonalInformation
