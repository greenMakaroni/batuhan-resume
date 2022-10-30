import "./about.scss"
import PDF from '../../assets/Batu_Basal_CV.pdf'

export default function About() {
  return (
    <div className="about-page">
      <h1 className="about-title">
        Batuhan Ozgur Basal
      </h1>
      <button className="bannerCTO" onClick={() => window.open(PDF, "_blank")} style={{width: "150px", alignSelf: "center"}}>
        My Resume
      </button>
      <p className="about-par">
        I'm really interested in finding out more about how companies
        operate and how they gather and make use of the data they receive.
        My ambition is to rank among the top data scientists in the 
        industry.
      </p>
      <p className="about-par">
        I am enthusiastic, consistent, and have excellent interpersonal and communication 
        skills. I like to collaborate with others in order to share ideas and learn from their 
        perspectives, but I can also work effectively on my own.
      </p>
      <p className="about-par">
        I have 2 year of experience working with Python and a year
        of experience in R, SQL, Spreadsheets (Excel, google), Machine
        Learning and Deep Learning. Currently completed the Google data
        analytics professional certificate and Machine Learning, Data Science
        and Deep Learning with Python Specialization. In addition to these, I do
        not need sponsorship to work as I will have work a graduate visa
        until 2025
      </p>
    </div>
  )
}
