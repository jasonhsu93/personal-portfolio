export const Skills = () => {
  const featured = [
    { name: "Python", mark: "Py", hint: "ML • CV" },
    { name: "Swift", mark: "Sw", hint: "iOS • AR" },
    { name: "Flutter", mark: "Fl", hint: "Mobile" },
    { name: "React", mark: "Re", hint: "Web" },
    { name: "OpenCV", mark: "CV", hint: "Vision" },
    { name: "PyTorch", mark: "PT", hint: "Deep Learning" },
    { name: "AWS", mark: "AWS", hint: "Cloud" },
    { name: "Node.js", mark: "Node", hint: "Backend" },
    { name: "MongoDB", mark: "MDB", hint: "Database" },
    { name: "TypeScript", mark: "TS", hint: "Typed JS" },
    { name: "Kotlin", mark: "Kt", hint: "Android" },
    { name: "Git", mark: "Git", hint: "Collaboration" },
  ];

  const languages = ["Python", "Java", "C/C++", "Swift", "Dart", "Kotlin", "HTML", "CSS", "JavaScript", "TypeScript", "SQL"];
  const frameworks = ["Flutter", "Express.js", "OpenCV", "React", "NumPy", "PyTorch", "PyAudio", "Gymnasium"];
  const tools = [
    "AWS",
    "Azure",
    "Node.js",
    "Linux/Unix",
    "Git",
    "MongoDB",
    "Postman",
    "Microsoft Office",
    "Google Workspace",
  ];

  return (
    <section className="section" id="tech">
      <div className="container">
        <header className="sectionHeader">
          <p className="sectionEyebrow">Toolkit</p>
          <h2 className="sectionTitle">TECH STACK</h2>
          <p className="sectionLead">Languages, frameworks, and tools I’m comfortable shipping with.</p>
        </header>

        <div className="techGrid" aria-label="Featured tech">
          {featured.map((tech) => (
            <div key={tech.name} className="techTile">
              <div className="techMark" aria-hidden="true">
                {tech.mark}
              </div>
              <div>
                <div className="techName">{tech.name}</div>
                <div className="techHint">{tech.hint}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="stackGroups" aria-label="Full tech stack">
          <div className="stackGroup">
            <h3 className="stackGroupTitle">Programming Languages</h3>
            <div className="chipRow">
              {languages.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="stackGroup">
            <h3 className="stackGroupTitle">Frameworks &amp; Libraries</h3>
            <div className="chipRow">
              {frameworks.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="stackGroup">
            <h3 className="stackGroupTitle">Developer Tools</h3>
            <div className="chipRow">
              {tools.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
