import React from "react";

const EXPERIENCES = [
  {
    role: "Software Engineer Intern",
    company: "Korotu Technology",
    location: "Vancouver, BC",
    dates: "May 2025 — Present",
    achievements: [
      <>
        Developed{" "}
        <a className="inlineLink" href="https://www.korotu.com/carboncruise" target="_blank" rel="noopener noreferrer">
          CarbonCruise
        </a>
        , an iOS app for forest plot data collection using <strong>ARKit</strong> and <strong>LiDAR</strong> to capture tree
        diameter, species, and location, enabling around <strong>90%</strong> faster average collection vs. manual
        measurements.
      </>,
      <>
        Led iOS <strong>ARKit</strong> and <strong>LiDAR</strong> R&amp;D, building a <strong>Swift</strong> point-cloud
        algorithm that filters background noise and measures trunk diameter in under <strong>100ms</strong> from{" "}
        <strong>49k</strong> points.
      </>,
      <>
        Architected iOS subscriptions in <strong>Flutter</strong>, integrating <strong>RevenueCat</strong> and{" "}
        <strong>StoreKit</strong>; validated transactions via <strong>TestFlight</strong> and synced entitlements to the
        dashboard in under <strong>2s</strong>.
      </>,
      <>
        Drove full lifecycle development in a startup environment, authoring low-level design docs and specifications while
        adapting to shifting priorities and budget constraints.
      </>,
    ],
  },
  {
    role: "Software Developer",
    company: "UBC AgroBot",
    location: "Vancouver, BC",
    dates: "January 2025 — Present",
    achievements: [
      <>
        Engineered a computer vision pipeline using <strong>Python</strong>, <strong>YOLO</strong>, and <strong>OpenCV</strong>
        , achieving sub <strong>150ms</strong> inference latency for real-time classification of biological targets (pests,
        pollinators).
      </>,
      <>
        Accelerated R&amp;D by prototyping autonomous navigation stacks in simulated physics engines like{" "}
        <strong>Gymnasium</strong>, improving stability and safety before hardware deployment of{" "}
        <a className="inlineLink" href="https://ubcagrobot.com/#/agrobot" target="_blank" rel="noopener noreferrer">
          AgroBot
        </a>
        .
      </>,
    ],
  },
  {
    role: "Partnered Tech Review Content Creator",
    company: "YouTube (Peezs)",
    location: "Vancouver, BC",
    dates: "June 2020 — June 2023",
    achievements: [
      <>
        Managed and scaled{" "}
        <a className="inlineLink" href="https://youtube.com/peezs" target="_blank" rel="noopener noreferrer">
          Peezs
        </a>{" "}
        to <strong>5,000+</strong> subscribers, <strong>2.3M+</strong> views, and <strong>67,000+</strong> hours of watch
        time.
      </>,
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <header className="sectionHeader">
          <p className="sectionEyebrow">Highlights</p>
          <h2 className="sectionTitle">EXPERIENCES</h2>
          <p className="sectionLead">A timeline of internships, teams, and creator work.</p>
        </header>

        <div className="timeline" role="list">
          {EXPERIENCES.map((experience, index) => {
            const alignment = index % 2 === 0 ? "left" : "right";
            return (
              <article key={`${experience.company}-${experience.role}`} className={`timelineItem ${alignment}`} role="listitem">
                <div className="timelineDot" aria-hidden="true" />
                <div className="timelineCard">
                  <h3 className="timelineRole">{experience.role}</h3>
                  <p className="timelineCompany">{experience.company}</p>
                  <div className="timelineMeta">
                    <span>{experience.dates}</span>
                    <span className="timelineMetaDot" aria-hidden="true">•</span>
                    <span>{experience.location}</span>
                  </div>
                  <ul className="timelineBullets">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
