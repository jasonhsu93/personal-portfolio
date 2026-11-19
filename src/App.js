import { FileEarmarkText, GeoAlt, Github } from "react-bootstrap-icons";
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
        <section className="hero wrap" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="intro"><span aria-hidden="true" />Hi, I’m Jason Hsu.</p>
            <h1 id="intro-title">I build software<br /><em>that goes outside.</em></h1>
            <p className="intro-copy">I study Computer Engineering at UBC. I’ve built iPhone tools for foresters and a basketball scorekeeper that lets players stay in the game.</p>
            <div className="hero-actions"><a className="primary-button" href="#projects">Explore my work</a><a className="secondary-button" href={resumeUrl}><FileEarmarkText aria-hidden="true" />Résumé<span className="sr-only"> (PDF)</span></a></div>
            <div className="hero-meta"><span><GeoAlt aria-hidden="true" />Vancouver, BC</span><span className="meta-rule" aria-hidden="true" /><a href={contact.github}><Github aria-hidden="true" />GitHub</a></div>
          </div>
          <StudyViewer />
        </section>
        <Projects />
        <section className="about-section wrap" id="about" aria-labelledby="about-title">
          <div className="about-copy">
            <h2 id="about-title">Off the clock<span className="period" aria-hidden="true">.</span></h2>
            <p>I grew up in Taiwan, moved to Canada at ten, and got into tech building PCs for friends. My reviews and tutorials on <a href={contact.youtube}>Peezs</a> have reached 2.3 million views.</p>
            <p>These days I’m finishing my degree at UBC after an exchange at the University of Tsukuba. Away from my desk, I’m usually playing basketball or building a Gundam kit.</p>
            <Skills />
          </div>
          <figure className="court-photo"><img src={mediaUrl("basketbot-demo.webp")} width="1050" height="583" loading="lazy" alt="BasketBot demo footage showing a ball and hoop outlined by the tracking software on an outdoor court." /><figcaption><span>From the camera roll</span><strong>BasketBot on the court · 2024</strong></figcaption></figure>
        </section>
      </main>
      <Footer />
    </div>
  );
}
