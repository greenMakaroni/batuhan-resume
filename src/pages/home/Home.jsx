import Landing from '../../components/landing/Landing'
import PersonalDetails from '../../components/details/PersonalDetails'
import "./home.scss"
import Interests from '../../components/interests/Interests'


export default function Home() {
  return (
    <>
      <div className="banner"> 
        <Landing />
      </div>
      <div className="personal-details">
        <PersonalDetails />
      </div>
      <div className="interests">
        <Interests />
      </div>
    </>
  )
}
