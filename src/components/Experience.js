import React from "react";

const EXPERIENCES = [
  {
    role: "Software Engineer Intern",
    company: "Korotu Technology",
    companyUrl: "https://www.korotu.com/",
    location: "Vancouver, BC",
    dates: "May 2025 — Present",
    summary: (
      <>
        Built and shipped{" "}
        <a className="inlineLink" href="https://www.korotu.com/carboncruise" target="_blank" rel="noopener noreferrer">
          CarbonCruise
        </a>
        , an iOS augmented reality app that utilized sensors, LiDAR, and camera to capture forestry data. I led the AR R&amp;D by developing a <strong>Swift</strong> point-cloud algorithm capable of automatically 
        detecting and measuring trunk diameters from real-time AR sessions. I also implemented the app's full subscriptions' flow, enabling users to purchase, manage, and restore subscriptions. I was given much oppurtunities
        to lead developments, create new features, review processes, and discuss futures of the product with the team.
      </>
    ),
    skills: ["ARKit", "LiDAR", "Swift", "Flutter", "RevenueCat", "StoreKit", "TestFlight"],
    related: {
      title: "CarbonCruise",
      description: "Product page",
      href: "https://www.korotu.com/carboncruise",
    },
  },
  {
    role: "Software Developer",
    company: "UBC AgroBot",
    location: "Vancouver, BC",
    dates: "January 2025 — Present",
    summary: (
      <>
         <a className="inlineLink" href="https://ubcagrobot.com/#/agrobot" target="_blank" rel="noopener noreferrer">
          UBC AgroBot
        </a> is a student-led engineering design team dedicated to developing innovative projects in a collaborative environment. 
        Being part of this team allowed me to connect with like-minded peers while gaining hands-on experience with industry-standard development tools and best practices. 
        My team and I developed a real-time computer vision pipeline, allowing AgroBot to detect pests and aphids in maize fields. We also explored
        agentic-based algorithms to efficiently plan the robot's path and actions in the <a className="inlineLink" href="https://www.fieldrobotevent.eu/" target="_blank" rel="noopener noreferrer">
          FIELD ROBOT EVENT
        </a> competition in Germany.
      </>
    ),
    skills: ["Python", "YOLO", "OpenCV", "Gymnasium"],
    related: {
      title: "AgroBot",
      description: "Team site",
      href: "https://ubcagrobot.com/#/agrobot",
    },
  },
  {
    role: "Partnered Tech Review Content Creator",
    company: "YouTube",
    location: "Vancouver, BC",
    dates: "June 2020 — June 2023",
    summary: (
      <>
        In highschool, my passion for technology and computer brought me to growing{" "}
        <a className="inlineLink" href="https://youtube.com/peezs" target="_blank" rel="noopener noreferrer">
          Peezs
        </a>, eventually scaling to <strong>5,000+</strong> subscribers, <strong>2.3M+</strong> views, and <strong>67,000+</strong>{" "}
        hours of watch
        time. I created tech tips, review and unbox videos, where I got the chance to work with sent units from peripheral brands such as{" "}
        <a className="inlineLink" href="https://roccats.com/" target="_blank" rel="noopener noreferrer">
         ROCCAT
        </a> and <a className="inlineLink" href="https://www.xvxchannel.com/" target="_blank" rel="noopener noreferrer">
        XVX
        </a>. Thanks to this experience, I got the chance to fulfil my childhood dream and built my first PC at the age of 16. It taught me the resilient, persistent, and self-improving mindset that
        are necessary to build any successful product or business.
      </>
    ),
    skills: ["Video Production", "Adobe Premiere Pro", "Canva", "CapCut"],
    related: {
      title: "Peezs",
      description: "YouTube Channel",
      href: "https://youtube.com/peezs",
    },
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <header className="sectionHeader">
          <h2 className="sectionTitle">EXPERIENCES</h2>
        </header>

        <div className="timeline" role="list">
          {EXPERIENCES.map((experience, index) => {
            const alignment = index % 2 === 0 ? "left" : "right";
            return (
              <article key={`${experience.company}-${experience.role}`} className={`timelineItem ${alignment}`} role="listitem">
                <div className="timelineDot" aria-hidden="true" />
                <div className="timelineCard">
                  <h3 className="timelineRole">{experience.role}</h3>
                  <p className="timelineCompany">
                    {experience.companyUrl ? (
                      <a
                        className="timelineCompanyLink"
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {experience.company}
                      </a>
                    ) : (
                      experience.company
                    )}
                  </p>
                  <div className="timelineMeta">
                    <span>{experience.dates}</span>
                    <span className="timelineMetaDot" aria-hidden="true">•</span>
                    <span>{experience.location}</span>
                  </div>
                  <p className="timelineSummary">{experience.summary}</p>

                  {experience.skills?.length ? (
                    <>
                      <div className="timelineSectionTitle">Skills &amp; Technologies</div>
                      <div className="timelineChips" aria-label="Skills and technologies">
                        {experience.skills.map((skill) => (
                          <span key={skill} className="chip chipSm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </>
                  ) : null}

                  {experience.related ? (
                    <>
                      <div className="timelineSectionTitle">Related Media</div>
                      <a className="relatedCard" href={experience.related.href} target="_blank" rel="noopener noreferrer">
                        <div className="relatedTitleRow">
                          <div className="relatedTitle">{experience.related.title}</div>
                          <div className="relatedArrow" aria-hidden="true">
                            ↗
                          </div>
                        </div>
                        <div className="relatedDesc">{experience.related.description}</div>
                      </a>
                    </>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
