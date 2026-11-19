import { useState } from "react";
import { Tree, Dribbble } from "react-bootstrap-icons";
import { mediaUrl } from "../data/portfolio";

const studies = [
  {
    id: "forest", name: "Forest", icon: Tree, title: "CarbonCruise", caption: "LiDAR illustration",
    alt: "Point-cloud illustration of a grove of conifers, with a ring marking a trunk cross-section.",
  },
  {
    id: "court", name: "Court", icon: Dribbble, title: "BasketBot", caption: "Trajectory illustration",
    alt: "Point-cloud illustration of a basketball court, with a shot trajectory leading to the hoop.",
  },
];

export function StudyViewer() {
  const [current, setCurrent] = useState(studies[0]);
  return (
    <figure className="study" aria-label="Illustrations of two projects">
      <div className="study-toolbar">
        <span className="instrument-label"><span className="aperture" aria-hidden="true" />Field viewer</span>
        <div className="study-switch" role="group" aria-label="Choose an illustration">
          {studies.map((study) => (
            <button key={study.id} type="button" aria-pressed={study.id === current.id} onClick={() => setCurrent(study)}>
              <study.icon aria-hidden="true" />{study.name}
            </button>
          ))}
        </div>
      </div>
      <div className="study-image">
        <img src={mediaUrl(`${current.id}-study.webp`)} width="1300" height="800" alt={current.alt} fetchpriority="high" />
      </div>
      <figcaption aria-live="polite" aria-atomic="true">
        <strong>{current.title}</strong><span>{current.caption}</span>
      </figcaption>
    </figure>
  );
}
