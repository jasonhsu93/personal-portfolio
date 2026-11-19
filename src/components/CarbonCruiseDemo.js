import { useState } from "react";
import { Camera, ArrowCounterclockwise } from "react-bootstrap-icons";
import { mediaUrl } from "../data/portfolio";

// The scene has a fixed crop. Edge positions are normalized image coordinates.
// Depth and camera intrinsics are sample values for this browser reconstruction.
const focalLength = 0.90;
const trunks = [
  { id: "center", name: "center trunk", left: 0.329, right: 0.618, top: 0, bottom: 1, level: 0.56, depthM: 1.36 },
  { id: "right", name: "right trunk", left: 0.763, right: 0.847, top: 0, bottom: 1, level: 0.54, depthM: 2.45 },
];
const percent = (number) => `${number * 100}%`;

export function CarbonCruiseDemo() {
  const [aim, setAim] = useState(trunks[0]);
  const [reading, setReading] = useState(null);
  const [missed, setMissed] = useState(false);
  const [snap, setSnap] = useState(0);
  const target = reading?.tree || aim;
  const center = (target.left + target.right) / 2;
  const targetStyle = {
    "--left": percent(target.left), "--right": percent(target.right),
    "--center": percent(center), "--level": percent(target.level),
  };

  function capture(tree) {
    const cm = ((tree.right - tree.left) * tree.depthM * 100 / focalLength).toFixed(1);
    setAim(tree);
    setMissed(false);
    setReading({ tree, cm });
    setSnap((value) => value + 1);
  }

  function liveView() {
    setReading(null);
    setMissed(false);
  }

  function aimAt(tree) {
    if (!reading) setAim(tree);
  }

  return (
    <div className="demo-panel" aria-label="CarbonCruise simulated camera">
      <div className="demo-scene forest-camera" style={targetStyle}
        onPointerDown={(event) => {
          if (!event.target.closest("button")) {
            setReading(null);
            setMissed(true);
          }
        }}>
        <img className="camera-plate" src={mediaUrl("forest-camera.webp")} width="1200" height="800" alt="Two foreground trunks in a Pacific Northwest forest." fetchpriority="high" />
        <span className="camera-shade" aria-hidden="true" />
        <span className="view-status camera-hud"><i className={reading ? "still-light" : "live-light"} />{reading ? "Snapshot" : "Live view"}</span>
        <span className="mode-label camera-hud">LiDAR demo</span>
        {trunks.map((tree) => (
          <button key={tree.id} type="button" className="trunk-hit" aria-label={`Measure ${tree.name}`}
            style={{ left: percent(tree.left), width: percent(tree.right - tree.left), top: percent(tree.top), height: percent(tree.bottom - tree.top) }}
            onPointerEnter={() => aimAt(tree)} onFocus={() => aimAt(tree)} onClick={() => capture(tree)}>
            <span className="target-point" aria-hidden="true" style={{ top: percent((tree.level - tree.top) / (tree.bottom - tree.top)) }} />
          </button>
        ))}
        {!reading && <div className="focus-frame" aria-hidden="true"><i /><i /><i /><i /><span className="range-sweep" /></div>}
        {reading && <>
          <div className="diameter-line" aria-hidden="true"><i /><i /></div>
          <div className="diameter-pill"><span>Diameter</span><strong>{reading.cm} <small>cm</small></strong></div>
          <div className="capture-pulse" key={snap} aria-hidden="true" />
        </>}
      </div>
      <div className="demo-controls">
        <div className="control-copy" aria-live="polite" aria-atomic="true">
          <strong>{missed ? "Aim at a foreground trunk" : reading ? `${reading.cm} cm diameter` : "Tap a trunk to measure"}</strong>
          <span>{reading ? "Tap the other trunk to compare." : "Or use the camera shutter."}</span>
        </div>
        <button type="button" className="demo-action" onClick={reading ? liveView : () => capture(aim)} aria-label={reading ? "Retake the tree measurement" : "Capture tree diameter"}>
          {reading ? <ArrowCounterclockwise aria-hidden="true" /> : <Camera aria-hidden="true" />}{reading ? "Retake" : "Capture"}
        </button>
      </div>
    </div>
  );
}
