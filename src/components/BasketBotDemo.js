import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowCounterclockwise, PauseFill, PlayFill, SkipEndFill } from "react-bootstrap-icons";
import { mediaUrl } from "../data/portfolio";
import { aimedReplay, durationMs, hoop, replayFrame, shotCount, shotMs } from "../data/basketballReplay";

const reduceMotion = () => Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);
const position = ({ x, y }) => ({ left: `${x * 100}%`, top: `${y * 100}%` });

export function BasketBotDemo() {
  const [reduced, setReduced] = useState(reduceMotion);
  const [playing, setPlaying] = useState(() => !reduceMotion());
  const [elapsed, setElapsed] = useState(0);
  const time = useRef(0);
  const [round, setRound] = useState(null);
  const [aim, setAim] = useState(-9);
  const trajectory = useMemo(() => round ? aimedReplay(round.aim / 100) : undefined, [round]);
  const frame = replayFrame(elapsed, trajectory);
  const end = round ? shotMs : durationMs;
  const inFlight = Boolean(round?.shots && !frame.done);
  const score = round ? round.previousScore + (round.shots ? frame.score : 0) : frame.score;

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
        time.current = Math.min(end, time.current + stamp - previous);
        setElapsed(time.current);
      }
      previous = stamp;
      if (time.current >= end) setPlaying(false);
      else request = requestAnimationFrame(advance);
    }
    document.addEventListener("visibilitychange", resetClock);
    request = requestAnimationFrame(advance);
    return () => {
      cancelAnimationFrame(request);
      document.removeEventListener("visibilitychange", resetClock);
    };
  }, [playing, end]);

  function seek(ms) { time.current = ms; setElapsed(ms); }
  function replay() { seek(0); setPlaying(!reduced); }
  function changeMode() {
    seek(0);
    if (round) {
      setRound(null);
      setPlaying(!reduced);
    } else {
      setPlaying(false);
      setAim(-9);
      setRound({ aim: -9, shots: 0, previousScore: 0 });
    }
  }
  function shoot() {
    setRound({ aim, shots: round.shots + 1, previousScore: score });
    seek(reduced ? shotMs : 0);
    setPlaying(!reduced);
  }

  function nextShot() {
    // The millisecond before the boundary retains the current shot's outcome.
    const nextEnd = Math.ceil((time.current + 2) / shotMs) * shotMs;
    seek(nextEnd >= durationMs ? durationMs : nextEnd - 1);
  }

  let outcome = playing ? "Tracking the ball" : "Tracking paused";
  if (reduced && elapsed === 0) outcome = "Ready to track";
  if (frame.missed) outcome = "Miss · score holds";
  if (frame.scored) outcome = "Basket counted";
  if (frame.done && !round) outcome = `${frame.score} baskets in ${shotCount} shots`;
  if (round && !round.shots) outcome = "Aim the marker at the hoop";
  if (round && inFlight && reduced) outcome = "Shot paused";
  const playLabel = playing ? "Pause" : "Play";
  return (
    <div className="demo-panel" aria-label="BasketBot simulated tracking camera">
      <div className="demo-scene court-camera">
        <img className="camera-plate" src={mediaUrl("basket-camera.webp")} width="1200" height="800" alt="An outdoor basketball hoop viewed from the sideline." />
        <span className="camera-shade" aria-hidden="true" />
        <div className="scoreboard"><span>Score</span><strong aria-label={`Score ${score}`}>{String(score).padStart(2,"0")}</strong></div>
        <button className="mode-label camera-hud practice-switch" onClick={changeMode} type="button">{round ? "Watch replay" : "Take a shot"}</button>
        {round && !inFlight && <span className="aim-marker" aria-hidden="true" style={position({ x: hoop.x + aim / 100, y: hoop.rimY })} />}
        <div className={`net-box${frame.scored ? " counted" : ""}`} aria-hidden="true"
          style={{ left: `${(hoop.x - hoop.halfWidth) * 100}%`, top: `${(hoop.rimY - 0.012) * 100}%`, width: `${hoop.halfWidth * 200}%`, height: `${(hoop.netDepth + 0.035) * 100}%` }}><span>NET</span></div>
        {frame.ballVisible && <div className="ball-layer" aria-hidden="true">
          {frame.trail.map((dot, i) => <i className="ball-trail" key={i} style={{ ...position(dot), opacity: (i + 1) / 9 }} />)}
          <span className="tracked-ball" style={{ ...position(frame.ball), "--rotation": `${frame.t * 470}deg` }}><i className="ball-surface" /><i className="ball-box" /></span>
        </div>}
        <img className="net-foreground" src={mediaUrl("basket-net-front.webp")} alt="" aria-hidden="true" width="174" height="160" />
        <span className="shot-index camera-hud">{round ? `Shots taken · ${round.shots}` : `Shot ${frame.index + 1} / ${shotCount}`}</span>
      </div>
      {round && <label className="shot-aim">Aim
        <input type="range" min="-15" max="15" step="1" value={aim} disabled={inFlight}
          aria-label="Aim your shot" aria-valuetext={aim === 0 ? "Center of hoop" : Math.abs(aim) + (aim < 0 ? " left of center" : " right of center")}
          onChange={(event) => setAim(Number(event.target.value))} />
      </label>}
      <div className="demo-controls">
        <div className="control-copy" aria-live="polite" aria-atomic="true"><strong>{outcome}</strong><span>{round ? `Automatic score · ${score}` : frame.done ? "Automatic scorekeeping" : `Automatic score · ${score}`}</span></div>
        <div className="playback-buttons">
          {round ? <button className="demo-action" type="button" disabled={inFlight && !reduced} onClick={inFlight && reduced ? () => seek(shotMs) : shoot}>{inFlight && reduced ? "Finish shot" : "Shoot"}</button> : <>
          {!frame.done && (reduced ? <button className="demo-action" type="button" onClick={nextShot}><SkipEndFill aria-hidden="true" />Next shot</button> :
            <button className="demo-action" type="button" onClick={() => setPlaying((moving) => !moving)} aria-label={`${playLabel} shot sequence`}>{playing ? <PauseFill aria-hidden="true" /> : <PlayFill aria-hidden="true" />}{playLabel}</button>)}
          <button className={frame.done ? "demo-action" : "demo-icon-button"} type="button" onClick={replay} aria-label="Replay shot sequence"><ArrowCounterclockwise aria-hidden="true" />{frame.done && "Replay"}</button>
          </>}
        </div>
      </div>
    </div>
  );
}
