import "./about.scss"
import PDF from '../../assets/Batu_Basal_CV.pdf'
import Navigation from "../../components/navigation/Navigation"
import Footer from "../../components/footer/Footer"
import { useNavigate } from "react-router-dom"

export default function About() {
  const navigate = useNavigate()
  return (
    <>
     <Navigation />
     <div className="about-page">
      <h1 className="about-title">
        Batuhan Ozgur Basal
      </h1>
      <p className="about-par">
        I'm really interested in finding out more about how companies
        operate and how they gather and make use of the data they receive.
        My ambition is to rank among the top data scientists in the 
        industry. I am enthusiastic, consistent, and have excellent interpersonal and communication 
        skills. I like to collaborate with others in order to share ideas and learn from their 
        perspectives, but I can also work effectively on my own.
      </p>
      <button className="bannerCTO" onClick={() => window.open(PDF, "_blank")} style={{width: "150px", alignSelf: "center"}}>
        My Resume
      </button>
      <h1 className="about-title" style={{marginTop: "15vh"}}>
        Achievements
      </h1>
      <p className="about-par" style={{marginTop: "5vh"}}>
        Google Data Analytics Professional Certificate
      </p>
      <button className="bannerCTO" style={{width: "150px", alignSelf: "center", marginBottom: "25vh"}}>
        <a className="CTO-anchor" target="new" href="https://www.coursera.org/account/accomplishments/specialization/certificate/TPLQC9B3MJNS">
          View Certificate</a>
      </button>
      <p className="about-par" style={{marginTop: "5vh"}}>
        Machine Learning Specialization Certificate
      </p>
      <button className="bannerCTO" style={{width: "150px", alignSelf: "center", marginBottom: "25vh"}}>
        <a className="CTO-anchor" target="new" href="https://www.coursera.org/account/accomplishments/specialization/certificate/WXRRKC3QBQJB">
          View Certificate</a>
      </button>
      <p className="about-par" style={{marginTop: "5vh"}}>
        Machine Learning, Data Science and Deep Learning with Python
      </p>
      <button className="bannerCTO" style={{width: "150px", alignSelf: "center", marginBottom: "25vh"}}>
        <a className="CTO-anchor" target="new" href="https://www.udemy.com/certificate/UC-f5528353-e115-4c2a-8de4-6e33b48ae75d/">
          View Certificate</a>
      </button>
      <Footer />
    </div>
    
    </>
   
  )
}
