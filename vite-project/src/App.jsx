import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className="header">
        <center><h1>My Portfolio</h1></center>
      </header>

      <section className="about">
        <h1>NANDHINI V</h1>
        <h2>About Me</h2>
        <p>
          Hi, I'm a web developer with a passion for creating clean, functional, and responsive websites.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>C++</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Line Follower Robot</h3>
          <h3>Water Level Indicator</h3>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: nandhini1485@gmail.com</p>
      </section>

 
    </>
  )
}

export default App
