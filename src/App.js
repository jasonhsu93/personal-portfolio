import './App.css';
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import Experience from './components/Experience';

function App() {
  return (
    <div className="Site">
      <a className="skipLink" href="#experience">Skip to content</a>
      <NavBar />
      <main className="SiteMain">
        <Experience />
        <Projects />
        <Skills />
        <section className="section" id="about">
          <div className="container">
            <header className="sectionHeader">
              <p className="sectionEyebrow">About</p>
              <h2 className="sectionTitle">ABOUT</h2>
              <p className="sectionLead">
                Placeholder — add a short intro about you, what you’re looking for, and what kinds of problems you enjoy solving.
              </p>
            </header>

            <div className="aboutGrid">
              <div className="card">
                <h3 className="cardTitle">Bio</h3>
                <p className="muted">
                  Placeholder — write a concise 2–3 sentence summary of your background, interests, and strengths.
                </p>
              </div>

              <div className="card">
                <h3 className="cardTitle">Education</h3>
                <p className="cardStrong">University of British Columbia — B.A.Sc. Computer Engineering</p>
                <p className="muted">Expected Graduation: May 2027</p>
                <p className="muted">Awards: Dean's Honour List, Go Global International Learning Programs Award ($1000)</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
