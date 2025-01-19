import Header from "../components/header.jsx";
import Information from "../components/information.jsx";
import Contact from '../components/contactComponent.jsx'
import Midsection from '../components/midsection.jsx'
const Home = () => {
  return (
    <div>
        <Header/>
        <Information/>
        <Midsection/>
        <Contact/>
    </div>
  );
};

export default Home;
