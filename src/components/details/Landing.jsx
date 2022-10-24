import React from 'react'
import "./landing.scss"
import { useNavigate } from "react-router-dom"

export default function Landing() {
  const navigate = useNavigate()
  return (
    <div className="landing-banner"> 
      <div className="left">
        <p className="intro">
          I'm a competetive person and a team player, 
          with good attention to detail I pay attention 
          to errors and constantly striving to learn from them.
        </p>
        <button className="bannerCTO" onClick={() => navigate("/portfolio")}>
          Portfolio
        </button>
      </div>
      <div className="right">

      </div>
    </div>
  )
}
