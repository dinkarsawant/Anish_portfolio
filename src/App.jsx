
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <section className="hero">
      <div className="hero-text">
        <span className="tag">⚡ FUTURE IT PROFESSIONAL ⚡</span>

        <h1>
          Hello, I'm <span>Anish</span> 👨‍💻
        </h1>

        <h2>Learning. Building. Growing.</h2>

        <p>
          I am an MCA student passionate about programming,
          web development, cybersecurity, and exploring new technologies.
          Welcome to my digital world!
        </p>

        <NavLink to="/projects" className="primary-btn">
          Explore My Projects ↗
        </NavLink>

        <div className="social-text">
          &lt; CODE /&gt; &nbsp; • &nbsp; BUILD &nbsp; • &nbsp; REPEAT
        </div>
      </div>

      <div className="profile-circle">
        <div className="profile-icon">👨‍💻</div>
        <h3>ANISH.exe</h3>
        <p>Turning ideas into reality_</p>
        <span className="status">● SYSTEM ONLINE</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page">
      <span className="tag">[ WHO AM I? ]</span>
      <h1>About Me ✦</h1>
      <p className="subtitle">A little introduction about myself</p>

      <div className="card">
        <h2>My Journey &gt;_</h2>
        <p>
          I am pursuing a Master of Computer Applications (MCA).
          I enjoy learning programming languages, solving problems,
          and creating useful applications.
        </p>
        <p>
          My goal is to strengthen my technical skills and build
          a successful career in the IT industry.
        </p>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <h3>🎓 Education</h3>
          <p>Master of Computer Applications</p>
        </div>
        <div className="info-card">
          <h3>🎯 Mission</h3>
          <p>Become a skilled IT professional</p>
        </div>
        <div className="info-card">
          <h3>⚡ Interests</h3>
          <p>Web development, programming, cybersecurity</p>
        </div>
        <div className="info-card">
          <h3>🔥 Mindset</h3>
          <p>Focus. Discipline. Consistency.</p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { name: 'HTML & CSS', icon: '🌐', level: 'Web Structure & Design' },
    { name: 'JavaScript', icon: '⚡', level: 'Interactive Web Pages' },
    { name: 'ReactJS', icon: '⚛️', level: 'Frontend Development' },
    { name: 'Python', icon: '🐍', level: 'Programming' },
    { name: 'Java', icon: '☕', level: 'Object-Oriented Programming' },
    { name: 'SQL & DBMS', icon: '🗄️', level: 'Database Management' },
    { name: 'Git & GitHub', icon: '🔧', level: 'Version Control' },
    { name: 'Cybersecurity', icon: '🛡️', level: 'Security Fundamentals' }
  ];

  return (
    <section className="page">
      <span className="tag">[ TECH STACK ]</span>
      <h1>My Skills ⚡</h1>
      <p className="subtitle">Technologies I am learning and exploring</p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      icon: '🌐',
      title: 'Personal Portfolio',
      description:
        'A responsive portfolio website showcasing my profile, skills, and projects.',
      tech: 'ReactJS • CSS'
    },
    {
      icon: '🎓',
      title: 'Student Management',
      description:
        'An application concept for managing student information and academic records.',
      tech: 'Java • MySQL'
    },
    {
      icon: '📝',
      title: 'Online Quiz App',
      description:
        'An interactive quiz application for answering questions and testing knowledge.',
      tech: 'HTML • CSS • JavaScript'
    },
    {
      icon: '🛡️',
      title: 'Cybersecurity Dashboard',
      description:
        'A learning project concept for presenting security alerts and website risk information.',
      tech: 'ReactJS • Python'
    }
  ];

  return (
    <section className="page">
      <span className="tag">[ SELECTED WORK ]</span>
      <h1>My Projects &lt;/&gt;</h1>
      <p className="subtitle">Ideas, experiments, and things I build</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-icon">{project.icon}</div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>
            <div className="project-symbol">✦ &nbsp; CODE • CREATE</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page">
      <span className="tag">[ GET IN TOUCH ]</span>
      <h1>Let's Connect ✉</h1>
      <p className="subtitle">Have an idea? Let's talk about it.</p>

      <div className="card contact-card">
        <div className="contact-icon">📨</div>
        <h2>Connect with ANISH</h2>
        <p>
          Interested in technology, projects, or collaboration?
          Feel free to contact me by email.
        </p>

        <a
          href="mailto:Dinkarsawant48@gmail.com"
          className="primary-btn"
        >
          Email Me ↗
        </a>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="page not-found">
      <div className="error-number">404</div>
      <h1>Page Not Found</h1>
      <p className="subtitle">
        This page doesn't exist in this dimension.
      </p>
      <NavLink to="/" className="primary-btn">
        ↶ Return to Home
      </NavLink>
    </section>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" end className="logo">
        ANISH<span>_</span>
      </NavLink>

      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer>
          <p>
            &lt; Made with ♥ by ANISH /&gt; | © {new Date().getFullYear()}
          </p>
          <p className="footer-subtitle">
            LEARN <span>•</span> BUILD <span>•</span> EVOLVE
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
