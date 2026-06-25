import Sidebar from "../components/Sidebar";
import TechStack from "../components/TechStack";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <Sidebar />

      <section className="hero">
        <div className="hero-content">
          <p className="intro">Hello, I'm</p>

          <h1>
            Nitish <span>Kumar</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="description">
            I build exceptional and immersive digital experiences
            using modern technologies.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-btn"
              onClick={() => navigate("/projects")}
            >
              View My Work →
            </button>

            <button
              className="cv-btn"
              onClick={() => navigate("/contact")}
            >
              Hire Me →
            </button>
          </div>
        </div>

        <div className="right-section">
          <TechStack />
        </div>
      </section>
    </div>
  );
}

export default Home;