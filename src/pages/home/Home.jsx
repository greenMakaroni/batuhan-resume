// components
import Landing from '../../components/landing/Landing'
import PersonalDetails from '../../components/details/PersonalDetails'
import Interests from '../../components/interests/Interests'
import Skills from '../../components/skills/Skills'
import Footer from '../../components/footer/Footer'
//  navigation
import Navigation from "../../components/navigation/Navigation"
import "./home.scss"

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="banner"> 
        <Landing />
      </div>
      <div className="personal-details">
        <PersonalDetails />
      </div>
      <div className="interests">
        <Interests />
      </div>
      <div className="skills">
        <Skills />
      </div>
      <Footer />
    </>
  )
}
