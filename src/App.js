//  pages
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Portfolio from "./pages/portfolio/Portfolio"
import Contact from "./pages/contact/Contact"

//  navigation
import Navigation from "./components/navigation/Navigation"

//  react-router-dom components
import { BrowserRouter, Routes, Route } from "react-router-dom";

//  css
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/portfolio" element={ <Portfolio /> } />
        <Route exact path="/contact" element={ <Contact /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
