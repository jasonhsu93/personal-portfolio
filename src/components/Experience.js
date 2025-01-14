import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
  const experiences = [
    {
      role: "Tech Review Video Creator",
      company: <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://www.youtube.com/peezs" target="_blank" rel="noopener noreferrer">YouTube Channel Peezs ☍</a>,
      duration: "June 2020 – Present",
      description: "Producer, Manager, Editor, Scripter for YouTube channel: Peezs",
      location: "Vancouver, BC, Canada",
      achievements: [
        "Independently directed, managed, edited, and produced high-quality tech review video content, adapting to the ever-evolving YouTube search algorithm",
        "6000 subscribers, 2.2 million views, 1000+ views per day, 400,000 views for a single video",
        "Partnered with renowned computer accessory manufacturers Womier and ROCCAT",
      ]
    },
    {
      role: "PC Assembler",
      company: "Self Employed",
      duration: "Jan 2021 - Sep 2022",
      location: "Burnaby, BC, Canada",
      achievements: [
        "Built custom gaming PCs for clients",
        "Ran test benches/stress tests to ensure stability",
        "Overclocked CPU/GPU/RAM using MSI Afterburner to maximize performance"
      ]
    },
    // Add more experiences here
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <div className="experience-wrapper">
              <h2>Experience</h2>
              {experiences.map((experience, index) => (
                <div key={index} className="experience-item">
                  <h3>{experience.role}</h3>
                  <h6>{experience.company}</h6>
                  <p>{experience.duration}</p>
                  <p>{experience.location}</p>
                  <ul>
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;