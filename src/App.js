import "./App.css";
import { useScrollReveal } from "./hooks/useScrollReveal";
import headshotImg from "./assets/img/New Profile Picture.JPG";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  GeoAlt,
} from "react-bootstrap-icons";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  const revealRef = useScrollReveal();
  return (
    <div className="Site" ref={revealRef}>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <NavBar />
      <main id="main" tabIndex={-1}>
        <section
          className="hero section"
          id="about"
          aria-labelledby="hero-title"
        >
          <div className="container">
            <div className="heroGrid">
              <div className="heroCopy">
                <p className="eyebrow">
                  <span className="statusDot" /> Computer engineering · UBC
                </p>
                <h1 id="hero-title">
                  Hi, I’m
                  <br />
                  <span>Jason Hsu.</span>
                </h1>
                <p className="heroDescription">
                  I build software that connects the digital and physical
                  worlds. From measuring forests with LiDAR to teaching robots
                  to navigate, I enjoy turning complex problems into practical
                  tools.
                </p>
                <div className="heroActions">
                  <a className="btn btnPrimary" href="#projects">
                    Explore my work <ArrowDown aria-hidden="true" />
                  </a>
                  <a
                    className="textLink"
                    href="mailto:jasonhsubusiness@gmail.com"
                  >
                    Let’s connect <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
                <div className="heroSocials">
                  <span>
                    <GeoAlt aria-hidden="true" /> Vancouver, BC
                  </span>
                  <span className="socialDivider" aria-hidden="true" />
                  <a
                    href="https://github.com/jasonhsu93"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                  >
                    <Github size={19} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jasonhsu-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              <figure className="heroPortrait">
                <div className="photoFrame">
                  <img
                    className="photoImg"
                    src={headshotImg}
                    alt="Jason Hsu at a baseball stadium"
                    fetchpriority="high"
                  />
                  <span className="photoLabel">
                    A little beyond the keyboard.
                  </span>
                </div>
                <figcaption>
                  <span>Software, hardware & everything in between.</span>
                  <span aria-hidden="true">↗</span>
                </figcaption>
              </figure>
            </div>
            <div className="aboutNote">
              <p className="eyebrow">A little about me</p>
              <p>
                Previously, I developed iOS AR and LiDAR features at{" "}
                <a
                  className="inlineLink"
                  href="https://www.korotu.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Korotu Technology
                </a>
                . Away from code, you’ll find me building Lego and Gundam,
                trying new tech, playing basketball, table tennis or baseball,
                snowboarding, or out on my motorcycle.
              </p>
            </div>
            <div className="education" aria-labelledby="education-title">
              <h2 className="eyebrow" id="education-title">
                Education
              </h2>
              <div className="educationGrid">
                <article className="educationItem">
                  <div className="educationTop">
                    <span className="educationMark">UBC</span>
                    <span className="smallLabel">Expected May 2027</span>
                  </div>
                  <h3>University of British Columbia</h3>
                  <p>Bachelor of Applied Science · Computer Engineering</p>
                  <p className="educationDetail">
                    Dean’s Honour List · Go Global International Learning
                    Programs Award
                  </p>
                  <p className="educationDetail">
                    Coursework: Relational Databases, Computer Communications,
                    Operating Systems, Intro to Cybersecurity
                  </p>
                </article>
                <article className="educationItem">
                  <div className="educationTop">
                    <span className="educationMark">筑波</span>
                    <span className="smallLabel">
                      Go Global Exchange · 2026
                    </span>
                  </div>
                  <h3>University of Tsukuba</h3>
                  <p>Computer &amp; Information Science · Japan</p>
                  <p className="educationDetail">
                    Met and discussed with people from all over the world.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
