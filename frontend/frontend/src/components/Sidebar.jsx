import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">NK</div>

      <nav>
        <NavLink to="/">
          <FaHome />
        </NavLink>

        <NavLink to="/about">
          <FaUser />
        </NavLink>

        <NavLink to="/projects">
          <FaProjectDiagram />
        </NavLink>

        <NavLink to="/contact">
          <FaEnvelope />
        </NavLink>
      </nav>

      <div className="social-icons">
        <a
          href="https://github.com/nitishkumar-byte"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/nitishkumar____official/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;