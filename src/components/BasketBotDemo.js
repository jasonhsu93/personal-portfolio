import { useEffect, useRef, useState } from "react";
import { ArrowCounterclockwise, PauseFill, PlayFill, SkipEndFill } from "react-bootstrap-icons";
import { mediaUrl } from "../data/portfolio";
import { durationMs, hoop, replayFrame, shotCount, shotMs } from "../data/basketballReplay";

const reduceMotion = () => Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);
const position = ({ x, y }) => ({ left: `${x * 100}%`, top: `${y * 100}%` });

export function BasketBotDemo() {
  const [reduced, setReduced] = useState(reduceMotion);
  const [playing, setPlaying] = useState(() => !reduceMotion());
  const [elapsed, setElapsed] = useState(0);
  const time = useRef(0);
  const frame = replayFrame(elapsed);

  useEffect(() => {
    const query = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    function onPreference(event) {
      setReduced(event.matches);
      if (event.matches) setPlaying(false);
    }
    query?.addEventListener?.("change", onPreference);
    return () => query?.removeEventListener?.("change", onPreference);
  }, []);

  useEffect(() => {
    if (!playing) return undefined;
    let request, previous;
    function resetClock() { previous = undefined; }
    function advance(stamp) {
      if (!document.hidden && previous !== undefined) {
        time.current = Math.min(durationMs, time.current + stamp - previous);
        setElapsed(time.current);
      }
      previous = stamp;
      if (time.current >= durationMs) setPlaying(false);
      else request = requestAnimationFrame(advance);
    }
    document.addEventListener("visibilitychange", resetClock);
    request = requestAnimationFrame(advance);
    return () => {
      cancelAnimationFrame(request);
      document.removeEventListener("visibilitychange", resetClock);
    };
  }, [playing]);

  function seek(ms) { time.current = ms; setElapsed(ms); }
  function replay() { seek(0); setPlaying(!reduced); }
  function nextShot() {
    // The millisecond before the boundary retains the current shot's outcome.
    const nextEnd = Math.ceil((time.current + 2) / shotMs) * shotMs;
    seek(nextEnd >= durationMs ? durationMs : nextEnd - 1);
  }

  let outcome = playing ? "Tracking the ball" : "Tracking paused";
  if (reduced && elapsed === 0) outcome = "Ready to track";
  if (frame.missed) outcome = "Miss · score holds";
  if (frame.scored) outcome = "Basket counted";
  if (frame.done) outcome = `${frame.score} baskets in ${shotCount} shots`;
  const playLabel = playing ? "Pause" : "Play";
  return (
    <div className="demo-panel" aria-label="BasketBot simulated tracking camera">
      <div className="demo-scene court-camera">
        <img className="camera-plate" src={mediaUrl("basket-camera.webp")} width="1200" height="800" alt="An outdoor basketball hoop viewed from the sideline." />
        <span className="camera-shade" aria-hidden="true" />
        <div className="scoreboard"><span>Score</span><strong aria-label={`Score ${frame.score}`}>{String(frame.score).padStart(2,"0")}</strong></div>
        <span className="mode-label camera-hud">Tracking demo</span>
        <div className={`net-box${frame.scored ? " counted" : ""}`} aria-hidden="true"
          style={{ left: `${(hoop.x - hoop.halfWidth) * 100}%`, top: `${(hoop.rimY - 0.012) * 100}%`, width: `${hoop.halfWidth * 200}%`, height: `${(hoop.netDepth + 0.035) * 100}%` }}><span>NET</span></div>
        {frame.ballVisible && <div className="ball-layer" aria-hidden="true">
          {frame.trail.map((dot, i) => <i className="ball-trail" key={i} style={{ ...position(dot), opacity: (i + 1) / 9 }} />)}
          <span className="tracked-ball" style={{ ...position(frame.ball), "--rotation": `${frame.t * 470}deg` }}><i className="ball-surface" /><i className="ball-box" /></span>
        </div>}
        <img className="net-foreground" src={mediaUrl("basket-net-front.webp")} alt="" aria-hidden="true" width="174" height="160" />
        <span className="shot-index camera-hud">Shot {frame.index + 1} / {shotCount}</span>
      </div>
      <div className="demo-controls">
        <div className="control-copy" aria-live="polite" aria-atomic="true"><strong>{outcome}</strong><span>{frame.done ? "Automatic scorekeeping" : `Automatic score · ${frame.score}`}</span></div>
        <div className="playback-buttons">
          {!frame.done && (reduced ? <button className="demo-action" type="button" onClick={nextShot}><SkipEndFill aria-hidden="true" />Next shot</button> :
            <button className="demo-action" type="button" onClick={() => setPlaying((moving) => !moving)} aria-label={`${playLabel} shot sequence`}>{playing ? <PauseFill aria-hidden="true" /> : <PlayFill aria-hidden="true" />}{playLabel}</button>)}
          <button className={frame.done ? "demo-action" : "demo-icon-button"} type="button" onClick={replay} aria-label="Replay shot sequence"><ArrowCounterclockwise aria-hidden="true" />{frame.done && "Replay"}</button>
        </div>
      </div>
    </div>
  );
}
