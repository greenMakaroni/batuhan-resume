import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Navigation from "../../components/navigation/Navigation"
import Footer from "../../components/footer/Footer"

import "./contact.scss"

export default function Contact() {
  return (
    <>
      <Navigation />
      <div className="contact-main">
        <div className="contact-method">
          <a target="new" style={{ justifyContent: "flex-start", alignItems: "center", width: "100%" }} href="https://www.linkedin.com/in/batuhan-ozgur-basal-84154320b/">
            <LinkedInIcon className="social-icon" />
            <h3 className="h3-footer"> Connect with me </h3>
          </a>
        </div>
        <div className="contact-method">
          <a target="new" style={{ justifyContent: "flex-start", alignItems: "center", width: "100%" }} href="https://github.com/batuozgurbasal">
            <GitHubIcon className="social-icon" />
            <h3 className="h3-footer"> Follow me </h3>

          </a>
        </div>
        <div className="contact-method" style={{marginBottom: "75px"}}>
          <a target="new" style={{ justifyContent: "flex-start", alignItems: "center", width: "100%" }} href="mailto:batuhanozgurbasal@posta.mu.edu.tr">
            <EmailIcon className="social-icon" />
            <h3 className="h3-footer"> E-mail me </h3>
          </a>
        </div>
        <Footer />
      </div>
    </>
  )
}
