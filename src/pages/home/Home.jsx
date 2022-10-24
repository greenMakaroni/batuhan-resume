import Landing from '../../components/landing/Landing'
import PersonalDetails from '../../components/details/PersonalDetails'
import "./home.scss"


export default function Home() {
  return (
    <>
      <div className="banner"> 
        <Landing />
      </div>
      <div className="personal-details">
        <PersonalDetails />
      </div>
    </>
  )
}
