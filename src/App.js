// firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//  pages
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Portfolio from "./pages/portfolio/Portfolio"
import Contact from "./pages/contact/Contact"

//  react-router-dom components
import { BrowserRouter, Routes, Route } from "react-router-dom";

//  css
import './App.css';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/portfolio" element={ <Portfolio /> } />
        <Route exact path="/contact" element={ <Contact /> } />
        <Route exact path="/attribution" element={() => {
          window.location.href = 'https://github.com/greenMakaroni';
          return null
        }} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
