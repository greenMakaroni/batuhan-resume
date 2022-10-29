import React from 'react'
import { useNavigate } from "react-router-dom"
import useWindowDimensions from '../../useWindowDimensions'
import profilePic from "../../assets/pp.jpg"

import "./landing.scss"

export default function Landing() {
  const navigate = useNavigate()
  const { height, width } = useWindowDimensions()

  return (
    <div className="landing-section"> 
      <div className={ width > 650 ? "left" : "left-mobile"}>
        <img src={profilePic} className="landing-pic" alt="Profile pictrue" onClick={() => navigate("/about")} />
        <h1 className="intro-header">Call me Batu</h1>
        <p className="intro">
          I am a team player and I like competition, 
          with good attention to detail I disect 
          errors for knowledge, constantly improving my skills and understanding.
        </p>
        <button className="bannerCTO" onClick={() => navigate("/portfolio")}>
          MY PROJECTS
        </button>
      </div>
      { width > 650 && 
      <div className="right">
      
      </div>
       }
       
    </div>
  )
}
