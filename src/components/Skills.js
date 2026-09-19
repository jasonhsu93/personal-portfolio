import { skillGroups } from "../data/resume";

export const Skills = () => (
  <section
    className="section skillsSection"
    id="tech"
    aria-labelledby="skills-title"
  >
    <div className="container">
      <header className="sectionHeader">
        <div>
          <p className="eyebrow">03 / Skills</p>
          <h2 className="sectionTitle" id="skills-title">
            The tools I work with.
          </h2>
        </div>
        <p className="sectionLead">
          Across mobile, robotics,
          <br />
          and the web.
        </p>
      </header>
      <div className="stackGroups" aria-label="Technical skills">
        {skillGroups.map((group, index) => (
          <div className="stackGroup" key={group.title}>
            <span className="stackNumber" aria-hidden="true">
              0{index + 1}
            </span>
            <h3>{group.title}</h3>
            <ul className="skillList">
              {group.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
