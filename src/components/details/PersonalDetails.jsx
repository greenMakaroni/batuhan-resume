import "./personalDetails.scss"

export default function PersonalDetails() {
  return (
    <div className="personal-details-section">
      <h1 className="personal-details-header">
          PERSONAL DETAILS
      </h1>
      <p className="details-paragraph">
        I take great pleasure in watching and playing team sports. I can attribute my competitiveness to this.
        Whatever my role in the team, I will do my best and I look to myself and my teammates and our errors
        to improve and be positively better.
      </p>
      <p className="details-paragraph">
      I expect to graduate from De Montfort University Intelligent Systems and Robotics Department with first
        class next month. In addition to this, of course, I make projects every day in order to improve myself and
        gain real life experience
      </p>
      <button className="bannerCTO" style={{marginLeft: "20px", marginTop: "20px"}}>
        About
      </button>
    </div>
  )
}
