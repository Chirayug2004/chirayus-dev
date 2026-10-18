
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { motion } from "motion/react";
import "../src/App.css"
import "../src/styles.css"
import Cursor from "./cursor";
import Chatbot from "./Chatbot";
import Services from "./Services";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        chirayu<span>.</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <a href="mailto:hello@example.com" className="nav-cta">
        Let's Talk <span>↗</span>
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <main className="hero" id="home">
      <div className="hero-glow"></div>

      <div className="hero-content">
        <div className="availability">
          <span className="status-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <p className="eyebrow">HELLO, I'M CHIRAYU GHAI</p>

        <h1>
          I BUILD
          <br />
          <span className="outline-text">DIGITAL</span>
          <br />
          EXPERIENCES<span className="green-dot">.</span>
        </h1>

        <p className="hero-description">
          A developer passionate about building modern,
          interactive, and user-friendly web experiences
          with React and JavaScript.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            Explore My Work <span>↗</span>
          </a>

          <a href="#about" className="btn-secondary">
            More About Me <span>↓</span>
          </a>
        </div>

        <div className="hero-footer">
          <span>HTML CSS BOOTSTRAP PHP REACT.JS DEVELOPER</span>
          <span>DESIGN · CODE · CREATE</span>
        </div>
      </div>

      {/* <div className="hero-orb" aria-hidden="true">
        <div className="orb-inner">C.</div>
      </div> */}

      <div className="my-img">
          {/* <img src="../images/my-img.png" /> */}
          <motion.img 
          className="myImage"
          src="../images/my-img.png"
          alt="My Image"
          whileHover={{
            rotateX: 10,
            rotateY: 10,
            scale: 1.05,
          }}
          transition={{ duration: 0.3 }}
          />
      </div>

      <div className="scroll-indicator">
        <span></span> SCROLL TO EXPLORE
      </div>
    </main>
  );
}


function About() {
  const highlights = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building responsive interfaces using HTML, Bootstrap and CSS, PHP & React.",
    },
    {
      number: "02",
      title: "Creative Thinking",
      description:
        "Turning ideas into interactive digital experiences with thoughtful design.",
    },
    {
      number: "03",
      title: "Always Learning",
      description:
        "Exploring new technologies, APIs, animations and full-stack development.",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-heading">
          <p className="section-label">
            <span></span> A LITTLE ABOUT ME
          </p>

          <h2>
            Curious mind.
            <br />
            <span>Creative developer.</span>
          </h2>

          <p className="about-intro">
            I'm Chirayu Ghai, a developer passionate about
            creating modern websites and meaningful digital
            experiences. I enjoy learning new technologies,
            solving problems, and bringing ideas to life
            through code.
          </p>
        </div>

        <div className="about-highlights">
          {highlights.map((item) => (
            <div className="highlight-card" key={item.number}>
              <span className="highlight-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <span className="highlight-arrow">↗</span>
            </div>
          ))}
        </div>

        <div className="about-bottom">
          <div>
            <span className="about-bottom-label">
              CURRENT FOCUS
            </span>
            <p>React.js · UI Design · Full-Stack Development</p>
          </div>

          <a href="#projects" className="about-link">
            Explore my projects <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}


function Projects() {
const projects = [
  {
    number: "01",
    title: "The Startio",
    description: "Launch and Grow Your Business with Confidence",
    technologies: ["HTML", "CSS", "BOOTSTRAP", "PHP", "ANTIGRAVITY"],
    image: "../images/startio.jpg",
    link: "https://www.thestartio.com/",
  },
  {
    number: "02",
    title: "Honest Jaggery",
    description: "To preserve the purity of food as nature intended.",
    technologies: ["HTML", "CSS", "BOOTSTRAP", "PHP"],
    image: "../images/honest-jag.jpg",
    link: "https://www.honestjaggery.com/",
  },
  {
    number: "03",
    title: "Zorsaa Exports",
    description: "From Indian Expertise to Global Table",
    technologies: ["HTML", "CSS", "BOOTSTRAP", "PHP", "ANTIGRAVITY"],
    image: "../images/zorsaa.jpg",
    link: "https://zorsaaexports.com/",
  },
  {
    number: "04",
    title: "Midland Foods & Packaging Limited",
    description: "Leading UK Food Packaging & Beverage Logistics",
    technologies: ["HTML", "CSS", "BOOTSTRAP", "PHP", "ANTIGRAVITY"],
    image: "../images/mid-land.jpg",
    link: "https://midlandsfoodandpackaginglimited.com/",
  },
];


  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <p className="section-label">
            <span></span> SELECTED WORK
          </p>

          <h2>
            Ideas into
            <br />
            <span>digital experiences.</span>
          </h2>

          <p className="projects-intro">
            A collection of projects where I experiment,
            solve problems, and turn ideas into reality.
          </p>
        </div>


        <div className="projects-grid">
  {projects.map((project) => (
    <article
      className="project-card"
      key={project.number}
    >
      {/* Project Image */}
      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="project-image"
          loading="lazy"
        />
        <span className="image-label">
          FEATURED PROJECT
        </span>
      </div>

      <div className="project-top">
        <span className="project-number">
          / {project.number}
        </span>

        <a
          href={project.link}
          className="project-open"
          aria-label={`Open ${project.title}`}
        >
          ↗
        </a>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </article>
  ))}
</div>

      </div>
    </section>
  );
}


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [state, handleSubmit] = useForm("xvkzdzke");
  if (state.succeeded) {
      return <p className="thanks-txt">Thanks for joining!</p>;
  }
  

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   setSubmitted(true);
  // }

  // function Contact() {


  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="section-label">
            <span></span> GET IN TOUCH
          </p>

          <h2>
            Have an idea?
            <br />
            <span>Let's connect.</span>
          </h2>

          <p className="contact-intro">
            Have a project in mind or want to talk about
            technology? Send me a message.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} action="https://formspree.io/f/xvkzdzke" method="POST">
          <div className="contact-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Enter your name"
              // value={name}
              // onChange={(event) => setName(event.target.value)}
              required
            />

             <ValidationError 
             prefix="Name" 
             field="name"
             errors={state.errors}
            /> 
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">Your email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              // value={email}
              // onChange={(event) => setEmail(event.target.value)}
              required
            />
            <ValidationError 
             prefix="Email" 
             field="email"
             errors={state.errors}
            /> 
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about your idea..."
              rows="5"
              // value={message}
              // onChange={(event) => setMessage(event.target.value)}
              required
            />

             <ValidationError 
             prefix="Message" 
             field="message"
             errors={state.errors}
            /> 
          </div>

          <button className="contact-submit" type="submit" disabled={state.submitting}>
            Send Message <span>↗</span>
          </button>

          {submitted && (
            <p className="contact-success" role="status">
              Thanks! Your form was submitted successfully.
            </p>
          )}
        </form>
      </div>
    </section>
  );
  // }
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo">
          CH<span>.</span>
        </a>

        <p className="footer-message">
          Designed with purpose. Built with React.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} · All rights reserved.</p>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>
      <div className="watermark">
        <h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">Chirayu</h3>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="portfolio">
      <Chatbot />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;