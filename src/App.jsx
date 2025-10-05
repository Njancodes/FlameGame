import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Calculate from "./pages/Calculate/Calculate";
import Contact from "./pages/Contact/Contact";
import './App.css'
import CandyRain from "./components/CandyRain/CandyRain";


export default function App() {
  return (
    <Router>                            
      <CandyRain /> 
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/calculate">Flames</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
