import { additionalWork, mediaUrl, selectedWork } from "../data/portfolio";

function WorkEntry({ project }) {
  return (
    <details className="work-entry" id={project.id}>
      <summary>
        <img className="work-thumb" src={mediaUrl(project.preview)} width="148" height="94" alt="" loading="lazy" />
        <div className="work-copy">
          <span className="work-context">{project.context}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="outcome"><strong>{project.outcome}</strong><span>{project.measure}</span></div>
        <span className="expand-symbol" aria-hidden="true" />
      </summary>
      <div className="work-detail">
        <p className="role"><strong>{project.role}</strong><span>{project.dates}</span></p>
        <p>{project.detail}</p>
        <ul className="tool-list" aria-label={`${project.title} technologies`}>
          {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
        <div className="entry-links">{project.links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</div>
      </div>
    </details>
  );
}

export function Projects() {
  return (
    <section id="projects" className="work-section" aria-labelledby="projects-title">
      <span className="anchor" id="experience" aria-hidden="true" />
      <div className="wrap">
        <div className="section-heading"><h2 id="projects-title">Selected work<span className="period" aria-hidden="true">.</span></h2><span className="section-date">2024 — 2026</span></div>
        <div className="work-list">{selectedWork.map((project) => <WorkEntry key={project.id} project={project} />)}</div>
        <details className="more-projects">
          <summary><span>More projects</span><span className="small-plus" aria-hidden="true" /></summary>
          <ul>{additionalWork.map((project) => <li key={project.title}>
            <div><h3>{project.title}</h3><p>{project.description}</p></div>
            <a href={project.href} aria-label={`${project.label} for ${project.title}`}>{project.label}</a>
          </li>)}</ul>
        </details>
      </div>
    </section>
  );
}
