import { skillGroups } from "../data/resume";

export function Skills() {
  return (
    <details className="skill-index" id="tech">
      <summary>Technical skills<span className="small-plus" aria-hidden="true" /></summary>
      <dl>{skillGroups.map((group) => <div key={group.title}><dt>{group.title}</dt><dd>{group.items.join(" · ")}</dd></div>)}</dl>
    </details>
  );
}
