import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import reactLogo from "../../assets/logo192.png"
import useWindowDimensions from '../../useWindowDimensions';


export default function Footer() {
  const { width } = useWindowDimensions();

  return (
    <div className="footer" style={ width < 700 ? { flexDirection: "column" } : { flexDirection: "row"} }>
        <div className="socials" style={width < 700 ? { width: "100%", alignItems: "center", justifyContent: "center" } : {width: "50%"}}>
            <h3 className="h3-footer"> Follow me on </h3>
            <a href="https://www.linkedin.com/in/batuhan-ozgur-basal-84154320b/">
                <LinkedInIcon className="social-icon"/>
            </a>
            <a href="https://github.com/batuozgurbasal">
                <GitHubIcon className="social-icon"/>
            </a>
        </div>
        <div className="about-page" style={width < 700 ? { width: "100%", alignItems: "center", justifyContent: "center" } : {width: "50%"}}>
            <h3 className="h3-footer">
                About this website
            </h3>
            <p className="about-this-website-par">
                This website is powered by React 
                <img src={reactLogo} className="react-logo" alt=" " />
            </p>
            <p className="about-this-website-par">
                Copyright ©2022 All rights reserved.
            </p>
            <p className="formatting-pain">
                This website was developed by 
                <span>
                <a className="footer-link" href="https://github.com/greenMakaroni"> Dawid Markieton</a>
                </span>
            </p>
        </div>
    </div>
  )
}
