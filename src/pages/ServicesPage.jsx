import '../Stylesheets/supportpage.css'
import Roadmap from '../components/Roadmap'
import LightTheme from '../components/LightTheme'
import Support from '../components/Support'
const SupportPage = () => {
  return (
    <div className="homePageContainer">
      <Support/>
      <Roadmap/>
      <LightTheme/>
    </div>
  )
}

export default SupportPage
