import { useEffect, useState } from "react";
import { Tree, Dribbble } from "react-bootstrap-icons";
import { CarbonCruiseDemo } from "./CarbonCruiseDemo";
import { BasketBotDemo } from "./BasketBotDemo";
import "./StudyViewer.css";

const demos = [
  { id: "carboncruise", name: "CarbonCruise", icon: Tree },
  { id: "basketbot", name: "BasketBot", icon: Dribbble },
];

function demoFromHash() {
  return demos.find((demo) => window.location.hash === `#demo-${demo.id}`)?.id;
}

export function StudyViewer() {
  const [active, setActive] = useState(() => demoFromHash() || "carboncruise");
  useEffect(() => {
    function syncHash() {
      const id = demoFromHash();
      if (id) setActive(id);
    }
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  function select(id) {
    setActive(id);
    // A subsequent project link to the previously selected demo must navigate.
    if (demoFromHash() && demoFromHash() !== id) window.history.replaceState(null, "", `#demo-${id}`);
  }

  return (
    <section className="study" aria-label="Interactive project demos">
      {demos.map((demo) => <span key={demo.id} className="demo-anchor" id={`demo-${demo.id}`} aria-hidden="true" />)}
      <div className="study-toolbar">
        <span className="instrument-label"><span className="aperture" aria-hidden="true" />Demos</span>
        <div className="study-switch" role="group" aria-label="Choose a project demo">
          {demos.map((demo) => <button key={demo.id} type="button" aria-pressed={demo.id === active} onClick={() => select(demo.id)}>
            <demo.icon aria-hidden="true" />{demo.name}
          </button>)}
        </div>
      </div>
      {active === "carboncruise" ? <CarbonCruiseDemo /> : <BasketBotDemo />}
    </section>
  );
}
