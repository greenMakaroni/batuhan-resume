import { useState, useEffect, Suspense} from 'react'
import { useNavigate } from "react-router-dom"
import useWindowDimensions from '../../useWindowDimensions'
import profilePic from "../../assets/pp.jpg"
// threejs
import { Canvas } from "@react-three/fiber";
import { Html, useProgress, GizmoHelper, GizmoViewport, OrbitControls } from '@react-three/drei';
import { Neural_network } from './Neural_network.jsx';

import "./landing.scss"
import { radToDeg } from 'three/src/math/MathUtils';
const titles = ["Call me Batu", "I'm Batu", "Think about it", "Persistent Perfection"]

export default function Landing() {
  const navigate = useNavigate()
  const { height, width } = useWindowDimensions()
  const [ title, setTitle ] = useState(titles[[Math.floor(Math.random()*titles.length)]])

  useEffect(() => {
    setTitle(titles[[Math.floor(Math.random()*titles.length)]])
  }, [])

 
    function Loader() {
      const { progress } = useProgress();
    
      return <Html center>{progress} % loaded </Html>
    }

  return (
    <div className="landing-section"> 
      <div className={ width > 650 ? "left" : "left-mobile"}>
        <img src={profilePic} className="landing-pic" alt="Profile pictrue" onClick={() => navigate("/about")} />
        <h1 className="intro-header">{ title }</h1>
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
            <Canvas camera={{ position: [0, 25, 0]}} >
              <Suspense fallback={<Loader />}>
                <color attach="background" args={ ["#DFF6FF"] } />
                
                <ambientLight intensity={ 0.17 } />

                <pointLight
                  intensity={0.5}       
                  position={ [-25, 35, -12] } 
                />

                {/* <NeuralNetwork />     */}

                {/* <GizmoHelper
                  alignment="bottom-right" // widget alignment within scene
                  margin={[80, 80]} // widget margins (X, Y)
                  
                >
                  <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
             
                </GizmoHelper>
                <gridHelper /> */}
                
                <Neural_network />
                <OrbitControls enablePan={false} maxDistance={30.0} minDistance={15.0}/>
              </ Suspense>
          </Canvas>
      </div>
       }
       
    </div>
  )
}
