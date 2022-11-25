import { useNavigate } from "react-router-dom"
import "./personalDetails.scss"

export default function PersonalDetails() {
  const navigate = useNavigate();

  return (
    <div className="personal-details-section">
      <h1 className="personal-details-header">
          Personal details
      </h1>
      <p className="details-paragraph">
        I take great pleasure in watching and playing team sports. I can attribute my competitiveness to this.
        Whatever my role in the team, I will do my best and I look to myself and my teammates and our errors
        to improve and be better.
      </p>
      <p className="details-paragraph">
        I have a Master of science degree in Intelligent Systems and Robotics Department, graduated with distinction from De Montfort University Leicester. I strive to improve myself and
        gain real life experience by working on a personal projects every day. I'm available to hire now.
      </p>
      <button 
        className="bannerCTO" 
        style={{marginLeft: "20px", marginTop: "20px"}}
        onClick={() => navigate("/about")}
        >
        MORE ABOUT ME
      </button>
    </div>
  )
}
