import { Link } from "react-router-dom"
import "./nav.scss"

export default function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        logo
      </div>
      <div className="links">
        <Link to="/" className="nav-link"> Home </Link>
        <Link to="/about" className="nav-link"> About </Link>
        <Link to="/portfolio" className="nav-link"> Portfolio </Link>
        <Link to="/contact" className="nav-link"> Contact </Link>
      </div>
    </nav>
  )
}
