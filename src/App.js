import './App.css';
import headshotImg from "./assets/img/portfolio photo.JPG";
import { EnvelopeFill, Linkedin, Github } from "react-bootstrap-icons";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import Experience from './components/Experience';

function App() {
  return (
    <div className="Site">
      <a className="skipLink" href="#about">Skip to content</a>
      <NavBar />
      <main className="SiteMain">
        <section className="section" id="about">
          <div className="container">
            <header className="sectionHeader">
              <h2 className="sectionTitle">ABOUT</h2>
            </header>

            <div className="aboutHero">
              <div className="card aboutCopy">
                <h3 className="aboutName">I'm Jason</h3>

                <div className="aboutParagraphs">
                  <p className="muted">
                    I have previous software development experience at{" "}
                    <a className="inlineLink" href="https://www.korotu.com/" target="_blank" rel="noopener noreferrer">
                      Korotu Technology
                    </a>
                    , a tech start-up, where I worked on an iOS augmented reality app that utilized sensors, LiDAR, and camera to capture forestry data. I got to break-down problems, build
                    practical algorithms, and construct solutions using limited resources and data.
                  </p>
                  <p className="muted">
                    I enjoy trying new tech products and building things like Lego and Gundam! I also enjoy playing sports such as
                    basketball, table tennis, baseball, snowboarding, and riding my motorcycle in the breeze whenever I am free.
                  </p>
                </div>

                <div className="aboutIconActions" aria-label="Quick links">
                  <a className="aboutIconBtn" href="mailto:jasonhsubusiness@gmail.com" aria-label="Email Jason">
                    <EnvelopeFill size={18} />
                  </a>
                  <a
                    className="aboutIconBtn"
                    href="https://www.linkedin.com/in/jasonhsu-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    className="aboutIconBtn"
                    href="https://github.com/jasonhsu93"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <div className="card aboutPhotoCard" aria-label="Headshot">
                <div className="photoFrame">
                  <img
                    className="photoImg"
                    src={headshotImg}
                    alt="Jason Hsu headshot"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="photoFallback">
                    <div className="photoFallbackTitle">Add a headshot</div>
                    <div className="photoFallbackHint">Replace src/assets/img/portfolio photo.JPG</div>
                  </div>
                </div>
              </div>

			              <div className="card aboutEducation">
			                <h3 className="cardTitle">Education</h3>
			                <div className="eduTimeline">
			                  <div className="eduItem">
			                    <div className="eduOrg">University of British Columbia</div>
			                    <div className="timelineMeta">
			                      <span>B.A.Sc. Computer Engineering (4th-year)</span>
			                      <span className="timelineMetaDot" aria-hidden="true">•</span>
			                      <span>Expected May 2027</span>
			                      <span className="timelineMetaDot" aria-hidden="true">•</span>
			                      <span>Vancouver, BC</span>
			                    </div>
			                  </div>

			                  <div className="eduItem">
			                    <div className="eduOrg">University of Tsukuba</div>
			                    <div className="timelineMeta">
			                      <span>Exchange, College of Information Science</span>
			                      <span className="timelineMetaDot" aria-hidden="true">•</span>
			                      <span>Apr 2026 - Aug 2026</span>
			                      <span className="timelineMetaDot" aria-hidden="true">•</span>
			                      <span>Tokyo, Japan</span>
			                    </div>
			                  </div>
			                </div>
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
