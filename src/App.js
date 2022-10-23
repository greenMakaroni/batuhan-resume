import Home from "./pages/landing/Home"
import About from "./pages/about/About"
import Portfolio from "./pages/portfolio/Portfolio"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/portfolio" element={ <Portfolio /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
