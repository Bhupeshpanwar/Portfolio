import React, { useState } from 'react';
import { Github, Linkedin, Mail, Code2, Server, Database, FileCode, ExternalLink, Menu, X, ChevronDown } from 'lucide-react';
import { Fiverr, Github1 } from '../Svg';
import { LinkedIn } from '../Svg';
import { XIcon } from '../Svg';
import { MailIcon } from '../Svg';
import { Portfolio } from '../Svg';


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'React', icon: <Code2 className="icon" />, level: 85 },
    { name: 'Express.js', icon: <Server className="icon" />, level: 80 },
    { name: 'Python', icon: <FileCode className="icon" />, level: 90 },
    { name: 'Mongodb', icon: <Database className="icon" />, level: 80 }
  ];

const projects = [
  {
    title: 'X (Twitter Clone) Project',
    description: 'Built an X (Twitter) clone supporting live and seamless multi-database operations using Socket.io.',
    tech: ['React', 'Node.js', 'Socket.io', 'Databases'],
    link: 'https://www.youtube.com/watch?v=UVqhIfmFBos'
  },
  {
    title: 'WhatsApp Clone Project',
    description: 'Built a WhatsApp clone using Socket.io, implementing real-time messaging handling.',
    tech: ['React', 'Node.js', 'Socket.io'],
    link: 'https://github.com/Bhupeshpanwar/whatsappclone'
  },
  {
    title: 'WebRTC Video Calling App',
    description: 'Built a WebRTC video calling application with real-time peer-to-peer communication.',
    tech: ['WebRTC', 'JavaScript', 'Real-time Communication'],
    link: ''
  },
  {
    title: 'Wallpaper App',
    description: 'Created a feature-rich wallpaper application during my internship using React Native.',
    tech: ['React Native', 'Mobile App Development'],
    link: ''
  },
  {
    title: 'Email Summarizer',
    description: 'Built an efficient email summarizer using Hugging Face models in Google Colab.',
    tech: ['Python', 'Hugging Face', 'NLP', 'LLM'],
    link: 'https://github.com/Bhupeshpanwar/emailsummarizer'
  },
  {
    title: 'Talking Calculator',
    description: 'Built an interactive talking calculator in React with integrated speech functionality.',
    tech: ['React', 'Speech API', 'JavaScript'],
    link: 'https://github.com/Bhupeshpanwar/TalkingCalculator'
  },
  {
    title: 'Currency Exchange Rate Web App',
    description: 'Developed a currency exchange rate web application using Django with conversion functionality.',
    tech: ['Django', 'Python', 'APIs'],
    link: 'https://github.com/Bhupeshpanwar/exchangeapi'
  },
  {
    title: 'Game for AWS Hackathon',
    description: 'Built a JavaScript-based game for an AWS hackathon with smooth gameplay and features.',
    tech: ['JavaScript', 'Game Development', 'AWS'],
    link: 'https://github.com/Bhupeshpanwar/awsgame'
  }
];
const certificates = [
  {
    title: 'IBM AI Fundamentals',
    issuer: 'IBM',
    description: 'Completed IBM AI course focused on machine learning and deep learning concepts.'
  },
  {
    title: 'IBM Quantum Enigmas',
    issuer: 'IBM',
    description: 'Completed the IBM Quantum Enigmas course, focusing on quantum computing concepts.'
  },
  {
    title: 'Udemy Python Course',
    issuer: 'Udemy',
    description: 'Completed a Python course on Udemy, covering fundamentals and advanced concepts.'
  }
];




  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      window.alert('Link is not available');
    }
  };

  return (
    <div className="app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #000;
          color: #fff;
          line-height: 1.6;
        }

        .app {
          min-height: 100vh;
          background-color: #000;
          color: #fff;
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          z-index: 50;
          border-bottom: 1px solid #1a1a1a;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .nav-links {
          display: none;
          gap: 2rem;
        }

        .nav-links.desktop {
          display: flex;
        }

        .nav-link {
          background: none;
          border: none;
          color: #999;
          cursor: pointer;
          text-transform: capitalize;
          transition: all 0.3s;
          font-size: 1rem;
          font-family: inherit;
          padding: 0;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #fff;
        }

        .nav-link.active {
          border-bottom: 2px solid #fff;
          padding-bottom: 2px;
        }

        .menu-btn {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          display: block;
        }

        .mobile-menu {
          background-color: #111;
          border-top: 1px solid #1a1a1a;
        }

        .mobile-menu button {
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.75rem 1.5rem;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          text-transform: capitalize;
          font-size: 1rem;
          font-family: inherit;
        }

        .mobile-menu button:hover {
          background-color: #1a1a1a;
        }

        /* Sections */
        section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5rem 1.5rem;
        }

        section.alt-bg {
          background-color: #0a0a0a;
        }

        .section-container {
          max-width: 900px;
          width: 100%;
        }

        .section-container.large {
          max-width: 1100px;
        }

        .section-container.small {
          max-width: 600px;
        }

        /* Hero Section */
        .hero-content {
          text-align: center;
          max-width: 900px;
        }

       .hero-avatar {
  display: inline-block;
  margin-bottom: 1.5rem;
}

.avatar-circle {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

        .hero-name {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #999;
          margin-bottom: 2rem;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn {
          padding: 0.75rem 2rem;
          border-radius: 0.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 1rem;
          font-family: inherit;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary {
          background-color: #fff;
          color: #000;
          border: none;
        }

        .btn-primary:hover {
          background-color: #e5e5e5;
        }

        .btn-secondary {
          background: none;
          color: #fff;
          border: 2px solid #fff;
        }

        .btn-secondary:hover {
          background-color: #fff;
          color: #000;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .social-link {
          color: #999;
          transition: color 0.3s;
        }

        .social-link:hover {
          color: #fff;
        }

        .scroll-indicator {
          margin-top: 3rem;
          cursor: pointer;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        .scroll-indicator:hover {
          animation: bounce 1s infinite;
        }

        /* Section Title */
        .section-title {
          font-size: 2.25rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 4rem;
        }

        /* Skills Section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .skill-card {
          background-color: #000;
          border: 1px solid #1a1a1a;
          border-radius: 0.125rem;
          padding: 1.5rem;
          transition: border-color 0.3s;
        }

        .skill-card:hover {
          border-color: #fff;
        }

        .skill-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skill-icon {
          background-color: #fff;
          color: #000;
          padding: 0.75rem;
          border-radius: 0.125rem;
          margin-right: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-info {
          flex: 1;
        }

        .skill-name-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-size: 1.125rem;
          font-weight: 600;
        }

        .skill-level {
          color: #999;
        }

        .progress-bar-bg {
          width: 100%;
          background-color: #1a1a1a;
          border-radius: 0.125rem;
          height: 0.5rem;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background-color: #fff;
          transition: width 1s ease-out;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .tech-item {
          background-color: #000;
          border: 1px solid #1a1a1a;
          border-radius: 0.125rem;
          padding: 1rem;
          text-align: center;
          transition: border-color 0.3s;
        }

        .tech-item:hover {
          border-color: #fff;
        }

        .tech-name {
          color: #ccc;
        }

        /* Projects Section */
       .projects-scroll-container {
  overflow: hidden;
  position: relative;
}

.projects-grid {
  display: flex;
  gap: 2rem;
  animation: scroll 20s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% - 2rem));
  }
}

.projects-grid:hover {
  animation-play-state: paused;
}

.project-card {
  min-width: 350px;
  max-width: 350px;
  flex-shrink: 0;
  background-color: #0a0a0a;
  border: 1px solid #1a1a1a;
  border-radius: 0.125rem;
  overflow: hidden;
  transition: border-color 0.3s;
}

.project-card:hover {
  border-color: #fff;
}

.project-image {
  height: 8rem;
  background-color: #1a1a1a;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.project-description {
  color: #999;
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background-color: #1a1a1a;
  padding: 0.25rem 0.75rem;
  border-radius: 0.125rem;
  font-size: 0.75rem;
  border: 1px solid #333;
}

.project-link {
  display: flex;
  align-items: center;
  color: #fff;
  transition: color 0.3s;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: inherit;
  padding: 0;
}

.project-link:hover {
  color: #ccc;
}

.icon-small {
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
}

        /* Certification Section */
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        .cert-card {
          background-color: #000;
          border: 1px solid #1a1a1a;
          border-radius: 0.125rem;
          padding: 2rem;
          transition: border-color 0.3s;
        }

        .cert-card:hover {
          border-color: #fff;
        }

        .cert-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .cert-issuer {
          color: #999;
          margin-bottom: 1rem;
        }

        .cert-description {
          color: #ccc;
        }

        /* Contact Section */
        .contact-icons-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .contact-icon-wrapper {
          cursor: pointer;
          transition: transform 0.3s;
        }

        .contact-icon-wrapper:hover {
          transform: scale(1.1);
        }

        .contact-icon-wrapper svg {
          width: 100px;
          height: 100px;
        }

        /* Footer */
        .footer {
          border-top: 1px solid #1a1a1a;
          padding: 2rem;
          text-align: center;
          color: #666;
        }

        .icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .menu-btn {
            display: none;
          }

          .nav-links.desktop {
            display: flex;
          }

          .hero-name {
            font-size: 3rem;
          }

          .hero-title {
            font-size: 4.5rem;
          }

          .hero-subtitle {
            font-size: 1.5rem;
          }

          .section-title {
            font-size: 3rem;
          }

          .tech-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .cert-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .cert-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      {/* Navigation */}
      
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <Portfolio />
            <div className="logo">Portfolio</div>
          </div>
         
          <div className="nav-links desktop">
            {['home', 'skills', 'projects', 'certification', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>

          <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            {['home', 'skills', 'projects', 'certification', 'contact'].map((section) => (
              <button key={section} onClick={() => scrollToSection(section)}>
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home">
        <div className="hero-content">
          <div className="hero-avatar">
            <div className="avatar-circle">
              <img src="WhatsApp Image 2025-12-25 at 16.06.38.jpeg" alt="Avatar" className="avatar-image" />
            </div>
          </div>
          <h2 className="hero-name">Bhupesh Panwar</h2>
          <h1 className="hero-title">Full-Stack Developer</h1>
          
          <p className="hero-subtitle">
            Building modern web applications with React, Express.js, and Python
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>View Projects</button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>Contact Me</button>
          </div>

          <div className="scroll-indicator" onClick={() => scrollToSection('skills')}>
            <ChevronDown style={{ width: '2rem', height: '2rem', color: '#666', margin: '0 auto' }} />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="alt-bg">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <div className="skill-name-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="tech-grid">
            {['JavaScript', 'REST APIs', 'Django', 'Node.js'].map((tech) => (
              <div key={tech} className="tech-item">
                <span className="tech-name">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="section-container large">
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="projects-scroll-container">
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-image" />
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tech-tags">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <button className="project-link" onClick={() => handleProjectClick(project.link)}>
                      View Project <ExternalLink className="icon-small" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="alt-bg">
        <div className="section-container large">
          <h2 className="section-title">Certifications</h2>
          
          <div className="cert-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="cert-card">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-icons-container">
           <a className="contact-icon-wrapper" href="https://www.fiverr.com/s/BRZ1eVz">
  <Fiverr />
</a>

<a className="contact-icon-wrapper" href="https://www.linkedin.com/in/bhupesh-panwar-96b855238/">
  <LinkedIn />
</a>

<a className="contact-icon-wrapper" href="https://github.com/Bhupeshpanwar">
  <Github1 />
</a>

<a className="contact-icon-wrapper" href="mailto:panwarbhupesh3@gmail.com">
  <MailIcon />
</a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Developer Portfolio. Built with React & CSS.</p>
      </footer>
    </div>
  );
}