import LinkedInIcon from '@mui/icons-material/LinkedIn';
// https://www.linkedin.com/in/batuhan-ozgur-basal-84154320b/
import GitHubIcon from '@mui/icons-material/GitHub';
// https://github.com/batuozgurbasal
import reactLogo from "../../assets/logo192.png"
import useWindowDimensions from '../../useWindowDimensions';
import { useNavigate } from 'react-router-dom';
import "./footer.scss"

// dev https://github.com/greenMakaroni

export default function Footer() {
  const dimensions = useWindowDimensions();
  const navigate = useNavigate();

  return (
    <div className="footer">
        <div className="socials">
            Follow me
            <a className="social-icon" href="https://www.linkedin.com/in/batuhan-ozgur-basal-84154320b/">
                <LinkedInIcon style={{width: "40px", height: "40px"}} />
            </a>
            <a className="social-icon" href="https://github.com/batuozgurbasal">
                <GitHubIcon style={{width: "40px", height: "40px"}} />
            </a>
        </div>
    </div>
  )
}
