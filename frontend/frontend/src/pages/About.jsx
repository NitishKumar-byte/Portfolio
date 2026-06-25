import Sidebar from "../components/Sidebar";

function About() {
  return (
    <div className="app">
      <Sidebar />

      <div className="page-content">
        <div className="about-container">

          <div className="about-header">
            <div className="about-tag">ABOUT ME</div>

            <h1>
              Hi, I'm <span>Nitish Kumar</span>
            </h1>

            <div className="about-role">
              Full Stack Developer
            </div>

            <p className="about-desc">
              I'm a passionate Full Stack Developer who loves building
              modern web applications using React, Node.js, Express.js
              and MongoDB. I also enjoy exploring AI and Machine Learning.
            </p>
          </div>

          <div className="about-grid">

            <div className="glass-card">
              <h3>Skills</h3>

              <div className="skill">
                <div className="skill-top">
                  <span>React.js</span>
                  <span>90%</span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: "90%" }} />
                </div>
              </div>

              <div className="skill">
                <div className="skill-top">
                  <span>JavaScript</span>
                  <span>85%</span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: "85%" }} />
                </div>
              </div>

              <div className="skill">
                <div className="skill-top">
                  <span>Node.js</span>
                  <span>80%</span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: "80%" }} />
                </div>
              </div>

              <div className="skill">
                <div className="skill-top">
                  <span>MongoDB</span>
                  <span>80%</span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: "80%" }} />
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h3>Education</h3>

              <p className="education-text">
                Currently pursuing my studies while focusing on
                Full Stack Development, Data Structures &
                Algorithms, and AI.
              </p>

              <br />

              <h3>What I Do</h3>

              <p className="education-text">
                🚀 Full Stack Development<br/>
                🤖 AI & Machine Learning<br/>
                🎨 Responsive UI Design<br/>
                🗄 Database Management<br/>
                ⚡ REST API Development
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default About;