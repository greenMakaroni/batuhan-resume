import { useState } from 'react'
import { Link } from 'react-router-dom';

import "./mobileNav.scss";

const MobileNav = () => {

  const [open, setOpen] = useState(false);

  const NavigationMenu = () => {
    return (
      <nav className="navigation-menu">
          <Link to="/" className="link" onClick={() => setOpen(!open)} > Home </Link>
          <Link to="/about" className="link" onClick={() => setOpen(!open)} > About </Link>
          <Link to="/portfolio" className="link" onClick={() => setOpen(!open)} > Portfolio </Link>
          <Link to="/contact" className="link" onClick={() => setOpen(!open)} > Contact </Link>
      </nav>
    )
  }

  return (
    <>
        <div className={ "div-hamburger" } onClick={() => setOpen(!open)}>
            <div className={ open ? "top-close" : "hamburger-top" }></div>
            <div className={ open ? "middle-close" : "hamburger-middle" }></div>
            <div className={ open ? "bottom-close" : "hamburger-bottom" }></div>
        </div>

        { open && <NavigationMenu /> }
    </>

  )
}

export default MobileNav