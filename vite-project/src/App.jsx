import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="portfolio-container">
      <header className="header">
        <div className="profile">
          <img src="https://via.placeholder.com/150" alt="Student" className="profile-img" />
          <h1 className="name">John Doe</h1>
          <p className="role">Student | Developer | Designer</p>
        </div>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Hello! I'm John, a passionate computer science student who loves coding and design.
          I specialize in front-end development, and I'm always eager to learn new technologies.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>HTML/CSS</li>
          <li>Node.js</li>
          <li>UI/UX Design</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Project One</h3>
          <p>A web app built with React to manage tasks.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
        <div className="project-card">
          <h3>Project Two</h3>
          <p>Portfolio website built with HTML/CSS.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: johndoe@example.com</p>
        <p>LinkedIn: <a href="#">linkedin.com/in/johndoe</a></p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 John Doe</p>
      </footer>
    </div>
    </>
  )
}

export default App
