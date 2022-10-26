import "./about.scss"
import PDF from '../../assets/Batu_Basal_CV.pdf'

export default function About() {
  return (
    <div className="about-page">
      <h1 className="about-title">
        Batuhan Ozgur Basal
      </h1>
      <p className="about-par">
        Data Scientist with 2 year of experience working with Python and a year
        of experience in R, SQL, Spreadsheets (Excel, google), Machine
        Learning and Deep Learning. Currently completed the Google data
        analytics professional certificate and Machine Learning, Data Science
        and Deep Learning with Python Specialization. In addition to these, I do
        not need sponsorship to work as I will have work a graduate visa
        until 2025
      </p>
      <button className="bannerCTO" onClick={() => window.open(PDF, "_blank")} style={{width: "150px", alignSelf: "center"}}>
        My Resume
      </button>
    </div>
  )
}
