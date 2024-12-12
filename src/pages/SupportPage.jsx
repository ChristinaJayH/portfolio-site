import '../Stylesheets/supportpage.css'
import Support from '../components/Support'
import More from '../components/More'
import Selecors from '../components/selectors'
import Finale from '../components/Finale'
const SupportPage = () => {
  return (
    <div className="homePageContainer">
      <Support/>
      <More/>
      <Selecors/>
      <Finale/>
    </div>
  )
}

export default SupportPage
