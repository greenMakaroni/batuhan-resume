import { Link, useLocation, useNavigate } from "react-router-dom"
import "./nav.scss"
import profilePic from "../../assets/pp.jpg"
import useScrollPosition from "../../useScrollPosition"; 

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollPosition = useScrollPosition();
  
  const isScrollingDown = () => {
    if (scrollPosition.prev < scrollPosition.current) {
      return true
    } else {
      return false
    }
  }
  
  return (
    <nav className={isScrollingDown() ? "nav-hidden" : "nav"}>
      <div className="logo">
        <img src={profilePic} className="pp" alt="Profile pictrue" onClick={() => navigate("/")} />
        <div className="logoText">
          <p className="name" onClick={() => navigate("/")}> Batuhan Ozgur Basal </p>
          <p className="title"> Master of Science in Robotics & Intelligent Systems </p>
        </div>
      </div>
      <div className="links">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}> Home </Link>
        <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}> About </Link>
        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}> Portfolio </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}> Contact </Link>
      </div>
    </nav>
  )
}
