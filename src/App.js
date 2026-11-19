import { FileEarmarkText, GeoAlt, Github, Linkedin, Youtube } from "react-bootstrap-icons";
import { NavBar } from "./components/NavBar";
import { StudyViewer } from "./components/StudyViewer";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { contact, mediaUrl, resumeUrl } from "./data/portfolio";
import "./App.css";

export default function App() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <NavBar />
      <main id="main" tabIndex="-1">
        <section className="hero-band" aria-labelledby="intro-title">
          <div className="hero wrap">
            <div className="hero-copy">
              <div className="identity">
                <img src={mediaUrl("jason-ballpark.webp")} width="80" height="94" alt="Jason at a baseball game" />
                <div><p className="intro">UBC Computer Engineering</p><p className="location"><GeoAlt aria-hidden="true" /> Vancouver, BC</p></div>
              </div>
              <h1 id="intro-title">Jason Hsu<span>.</span></h1>
              <p className="hero-subtitle">I build software that goes outside.</p>
              <p className="intro-copy">At Korotu, I built an iPhone tool that measures trees. On the basketball court, my team built a camera that keeps score so we can keep playing.</p>
              <div className="hero-actions"><a className="primary-button" href="#projects">Explore my work</a><a className="secondary-button" href={resumeUrl}><FileEarmarkText aria-hidden="true" />Résumé<span className="sr-only"> (PDF)</span></a></div>
              <div className="hero-meta"><a href={contact.github}><Github aria-hidden="true" />GitHub</a><a href={contact.linkedin}><Linkedin aria-hidden="true" />LinkedIn</a></div>
            </div>
            <StudyViewer />
          </div>
        </section>
        <Projects />
        <div className="background-section wrap">
          <section className="experience-section" id="experience" aria-labelledby="experience-title">
            <h2 id="experience-title">Experience &amp; education<span className="period">.</span></h2>
            <ol className="experience-list">
              <li><span className="career-date">May 2025 – Apr 2026</span><h3>Korotu Technology</h3><p>Software Engineering Co-op</p><p className="career-note">Migrated CarbonCruise from Flutter to native Swift in four weeks.</p></li>
              <li><span className="career-date">Jan 2025 – Mar 2026</span><h3>UBC AgroBot</h3><p>Reinforcement Learning Developer</p></li>
              <li><span className="career-date">Education</span><h3>University of British Columbia</h3><p>BASc in Computer Engineering</p><p className="career-note">Exchange at the University of Tsukuba, Japan.</p></li>
            </ol>
          </section>
          <section className="about-copy" id="about" aria-labelledby="about-title">
            <h2 id="about-title">Off the clock<span className="period">.</span></h2>
            <p>I grew up in Taiwan and moved to Canada at ten. Before I wrote software, I built PCs for friends and made tech tutorials as Peezs. Those videos have reached 2.3 million views.</p>
            <p>Away from my desk, you’ll usually find me playing pickup basketball or putting together a Gundam kit.</p>
            <a className="channel-link" href={contact.youtube}><Youtube aria-hidden="true" />Peezs on YouTube</a>
            <Skills />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
