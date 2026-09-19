import { ArrowUpRight } from "react-bootstrap-icons";
import { experiences } from "../data/resume";

export default function Experience() {
  return (
    <section
      className="section experienceSection"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <header className="sectionHeader">
          <div>
            <p className="eyebrow">01 / Experience</p>
            <h2 className="sectionTitle" id="experience-title">
              Learning through real-world experience.
            </h2>
          </div>
          <p className="sectionLead">
            Real problems. Thoughtful solutions.
            <br />A few stops along the way.
          </p>
        </header>
        <div className="timeline">
          {experiences.map((experience) => (
            <article key={experience.company} className="timelineItem">
              <div className="timelineAside">
                <span className="timelineDot" aria-hidden="true" />
                <p className="timelineDates">
                  <time dateTime={experience.start}>
                    {experience.dates.split(" — ")[0]}
                  </time>
                  <span aria-hidden="true"> — </span>
                  <time dateTime={experience.end}>
                    {experience.dates.split(" — ")[1]}
                  </time>
                </p>
                <p className="smallLabel">{experience.location}</p>
              </div>
              <div className="timelineContent">
                <p className="timelineCompany">{experience.company}</p>
                <h3 className="timelineRole">{experience.role}</h3>
                <p className="timelineSummary">{experience.summary}</p>
                {experience.highlights.length > 0 && (
                  <ul className="timelineBullets">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
                <div
                  className="chipRow"
                  aria-label={`${experience.company} technologies`}
                >
                  {experience.skills.map((skill) => (
                    <span className="chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  className="textLink experienceLink"
                  href={experience.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience.linkLabel} <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
