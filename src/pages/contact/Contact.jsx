import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "./contact.scss"

export default function Contact() {
  return (
    <div className="contact-main">
      <div className="contact-method">
        <a target="new" style={{justifyContent: "center", alignItems: "center"}} href="https://www.linkedin.com/in/batuhan-ozgur-basal-84154320b/">
            <LinkedInIcon className="social-icon"/>
            <h3 className="h3-footer"> Connect with me </h3>   
        </a>
      </div>
      <div className="contact-method">
        <a target="new" style={{justifyContent: "center", alignItems: "center"}} href="https://github.com/batuozgurbasal">
            <GitHubIcon className="social-icon"/>
            <h3 className="h3-footer"> Follow me </h3>
            
        </a>
      </div>
      <div className="contact-method">
        <a target="new" style={{justifyContent: "center", alignItems: "center"}} href="mailto:batuhanozgurbasal@posta.mu.edu.tr">
            <EmailIcon className="social-icon"/>
            <h3 className="h3-footer"> E-mail me </h3>
        </a>
      </div>
    </div>
  )
}
