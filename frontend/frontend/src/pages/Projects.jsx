import Sidebar from "../components/Sidebar";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  HiOutlineCode,
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

function Projects() {
  const projects = [
    {
      icon: <HiOutlineCode />,
      title: "3D Portfolio Website",
      description:
        "Modern portfolio website built with React, Vite and responsive UI design.",
      tech: ["React", "Vite", "CSS", "Tailwind"],
    },
    {
      icon: <HiOutlineChartBar />,
      title: "Portfolio Dashboard",
      description:
        "Admin dashboard to manage projects, skills and messages.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    },
    {
      icon: <HiOutlineDocumentText />,
      title: "AI Resume Analyzer",
      description:
        "AI-powered application to analyze resumes and provide feedback.",
      tech: ["React", "Express", "OpenAI API", "Node.js"],
    },
    {
      icon: <HiOutlineClipboardCheck />,
      title: "Task Manager",
      description:
        "CRUD application for managing daily tasks efficiently.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
    },
  ];

  return (
    <div className="app">
      <Sidebar />

      <div className="page-content">
        <div className="projects-container">
          <div className="project-header">
            <span className="project-tag">PROJECTS</span>

            <h1>
              My <span>Projects</span>
            </h1>

            <p>
              Here are some of the projects I have built. Each project
              helped me improve my development skills.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card-new" key={index}>
                <div className="project-icon">
                  {project.icon}
                </div>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <button className="github-btn">
                    <FaGithub />
                    View Code
                  </button>

                  <button className="demo-btn">
                    <FaExternalLinkAlt />
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;