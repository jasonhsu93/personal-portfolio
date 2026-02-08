export const Projects = () => {
  const featured = {
    label: "Featured Project",
    title: "BasketBot",
    description:
      "🏆 Winner of ProduHacks 2024 (1st / 30 teams). An automatic basketball scorekeeper using computer vision + speech recognition with sub‑16ms tracking latency.",
    tags: ["Python", "OpenCV", "PyAudio", "TensorFlow"],
    primaryCta: { label: "View GitHub", href: "https://github.com/04christopher/basketbot" },
    secondaryCta: { label: "Email Me", href: "mailto:jasonhsubusiness@gmail.com" },
  };

  const projects = [
    {
      title: "RoboRacer",
      description:
        "1st place autonomous racing stack for NVIDIA Jetson F1TENTH with PID control + safety stops; fine-tuned a YOLOv11s traffic-sign model (1,000+ images) for ~85% real-time accuracy.",
      tags: ["Python", "C++", "ROS", "YOLO", "OpenCV", "PyTorch", "NumPy"],
      href: "https://github.com/abhiverma13/RoboRacer",
      linkLabel: "GitHub",
    },
    {
      title: "MemoSpace",
      description:
        "iOS AR app that captures real environments as 3D-mapped points and anchors notes in-world; implemented depth + RGB world-point reconstruction with filtering + deduplication to cut scan noise by ~50%.",
      tags: ["Swift", "ARKit", "RealityKit", "SceneKit", "Xcode"],
      href: "https://github.com/stovetopman/nw2026",
      linkLabel: "GitHub",
    },
    {
      title: "CarbonWise",
      description:
        "3rd / 16 teams for UX: Android app that scans barcodes and recommends greener alternatives; delivered product info under ~3s for 100,000+ food items with AWS backend + Firebase messaging.",
      tags: ["Kotlin", "MongoDB", "ML Kit", "Firebase", "AWS"],
      href: "https://drive.google.com/file/d/1kNyNmZe2dqOa0ifYqepZxrqfE_KoZr_6/view?usp=sharing",
      linkLabel: "Design Doc",
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <header className="sectionHeader">
          <p className="sectionEyebrow">Selected</p>
          <h2 className="sectionTitle">PROJECTS</h2>
          <p className="sectionLead">A few things I’ve built across AR, robotics, and mobile.</p>
        </header>

        <div className="featuredProject">
          <div className="featuredContent">
            <p className="eyebrowOnDark">{featured.label}</p>
            <h3 className="featuredTitle">{featured.title}</h3>
            <p className="featuredDesc">{featured.description}</p>

            <div className="tagRow" aria-label="Featured project tech">
              {featured.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="actions">
              <a className="btn btnPrimary" href={featured.primaryCta.href} target="_blank" rel="noopener noreferrer">
                {featured.primaryCta.label}
              </a>
              <a className="btn btnSecondary" href={featured.secondaryCta.href}>
                {featured.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>

        <div className="projectsGrid" aria-label="Project list">
          {projects.map((project) => (
            <article key={project.title} className="projectCard">
              <div className="projectTitleRow">
                <h3 className="projectTitle">{project.title}</h3>
                <a className="projectLink" href={project.href} target="_blank" rel="noopener noreferrer">
                  {project.linkLabel} ↗
                </a>
              </div>
              <p className="projectDesc">{project.description}</p>
              <div className="projectTags" aria-label={`${project.title} tech`}>
                {project.tags.map((tag) => (
                  <span key={tag} className="projectTag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
