import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

function TechStack() {
  return (
    <div className="tech-card">
      <h3>Tech Stack</h3>

      <div className="tech-icons">
        <div>
          <FaReact />
          <span>React</span>
        </div>

        <div>
          <FaNodeJs />
          <span>Node</span>
        </div>

        <div>
          <SiMongodb />
          <span>MongoDB</span>
        </div>

        <div>
          <SiTailwindcss />
          <span>Tailwind</span>
        </div>
      </div>
    </div>
  );
}

export default TechStack;