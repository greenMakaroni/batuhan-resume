import LinkedInIcon from '@mui/icons-material/LinkedIn';
// https://www.linkedin.com/in/batuhan-ozgur-basal-84154320b/
import GitHubIcon from '@mui/icons-material/GitHub';
// https://github.com/batuozgurbasal
import reactLogo from "../../assets/logo192.png"
import useWindowDimensions from '../../useWindowDimensions';
import "./footer.scss"

// dev https://github.com/greenMakaroni

export default function Footer() {
  const dimensions = useWindowDimensions();

  return (
    <div className="footer">
        <div className="socials">
            Follow me on >>
            <a href="https://www.linkedin.com/in/batuhan-ozgur-basal-84154320b/">
                <LinkedInIcon className="social-icon" />
            </a>
            <a href="https://github.com/batuozgurbasal">
                <GitHubIcon className="social-icon" />
            </a>
        </div>
        <div className="ab">

        </div>
    </div>
  )
}
