import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern React Portfolio",
    github: "https://github.com/yourusername"
  },
  {
    title: "AI Resume Analyzer",
    description: "Resume analysis using AI",
    github: "https://github.com/yourusername"
  },
  {
    title: "MERN Blog App",
    description: "Full stack blog platform",
    github: "https://github.com/yourusername"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;