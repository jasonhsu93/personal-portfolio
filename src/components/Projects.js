import { additionalWork, mediaUrl, selectedWork } from "../data/portfolio";

function WorkEntry({ project }) {
  const [primaryLink, ...moreLinks] = project.links;
  const photo = project.id === "basketbot" ? "basketbot-demo.webp" : project.preview;
  return (
    <article className="project-card" id={project.id}>
      <img className="project-image" src={mediaUrl(photo)} width="460" height="250" alt={project.id === "basketbot" ? "Original BasketBot footage showing the ball and hoop outlined on court." : ""} loading="lazy" />
      <div className="card-body">
        <span className="work-context">{project.context}</span>
        <h3>{project.title}</h3>
        <p className="project-intro">{project.description}</p>
        <p className="project-result"><strong>{project.outcome}</strong><span>{project.measure}</span></p>
        <a className="project-primary" href={primaryLink.href}>{primaryLink.label}</a>
      </div>
      <details className="project-detail">
        <summary>Technical details<span className="small-plus" aria-hidden="true" /></summary>
        <div className="detail-content">
          <p className="role"><strong>{project.role}</strong><span>{project.dates}</span></p>
          <p>{project.detail}</p>
          <ul className="tool-list" aria-label={project.title + " technologies"}>{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          {moreLinks.length > 0 && <div className="entry-links">{moreLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</div>}
        </div>
      </details>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="work-section" aria-labelledby="projects-title">
      <div className="wrap">
        <div className="section-heading"><h2 id="projects-title">Selected work<span className="period" aria-hidden="true">.</span></h2><span className="section-date">2024 — 2026</span></div>
        <div className="project-grid">{selectedWork.map((project) => <WorkEntry key={project.id} project={project} />)}</div>
        <details className="more-projects">
          <summary><span>More projects</span><span className="small-plus" aria-hidden="true" /></summary>
          <ul>{additionalWork.map((project) => <li key={project.title}>
            <div><h3>{project.title}</h3><p>{project.description}</p></div>
            <a href={project.href} aria-label={project.label + " for " + project.title}>{project.label}</a>
          </li>)}</ul>
        </details>
      </div>
    </section>
  );
}
