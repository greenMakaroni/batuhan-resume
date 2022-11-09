import { Suspense, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import useWindowDimensions from '../../useWindowDimensions'
// threejs
// GizmoHelper, GizmoViewport
import { Canvas, gridHelper} from "@react-three/fiber";
import { Html, useProgress, OrbitControls  } from '@react-three/drei';
import { Neural_network } from './Neural_network.jsx';
// styling
import "./landing.scss"

export default function Landing() {
  const { height, width } = useWindowDimensions()
  const navigate = useNavigate()
    // model loading progress bar
    function Loader() {
      const { progress } = useProgress();
      return <Html center>{progress}%</Html>
    }

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="landing-section"> 
      <div className={width < 650 ? "left-mobile" : "left"} >
        <h3 className="intro-header" >
          I'm Batu
        </h3>
        <p className="intro">
          I disect errors for knowledge, constantly 
          improving my skills 
          and understanding.
          
        </p>
        <button className="button-banner" onClick={() => navigate("/portfolio")}>
          MY PROJECTS
        </button>
      </div>
      <div className="right" style={width < 650 ? { width: "100vw" } : { width: "50vw" }}>
        <Canvas camera={width < 650 ? { position: [-5, 50, 5] } : { position: [-5, 35, 5]} } >
                <Suspense fallback={<Loader />}>
                  <color attach="background" args={ ["#DFF6FF"] } />
                  
                  <ambientLight intensity={ 0.17 } />

                  <pointLight
                    intensity={0.5}       
                    position={ [-25, 35, -12] } 
                  />           
                  <Neural_network />
                  <OrbitControls enablePan={false} enableZoom={false} />
                </ Suspense>
                {/* <gridHelper />
                <GizmoHelper
                  alignment="bottom-right"
                  margin={[80, 80]}>
                  <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
            
                </GizmoHelper> */}
            </Canvas>
      </div>
    </div>
  )
}
