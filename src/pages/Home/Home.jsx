import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome Home!</h1>
      <p className="home-text">
        Are they on your mind all the time. Is it Platonic? Romantic? Or is it something else entirely?
        Click if you want to know.
      </p>
      <Link to="/calculate">
        <button className="home-button">Calculate</button>
      </Link>
    </div>
  );
}
