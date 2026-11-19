import { act, fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";
import { durationMs, replayFrame, shotMs } from "./data/basketballReplay";

test("shows recent work, outcomes and a résumé on first render", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Jason Hsu");
  const work = screen.getByRole("region", { name: "Selected work" });
  for (const title of ["CarbonCruise", "BasketBot", "UBC AgroBot"]) {
    expect(within(work).getByRole("heading", { name: title })).toBeInTheDocument();
  }
  for (const metric of ["49K points", "1st place", "58% fewer"]) {
    expect(within(work).getByText(metric)).toBeVisible();
  }
  expect(screen.getByRole("link", { name: "Résumé (PDF)" })).toHaveAttribute("href", expect.stringMatching(/Jason-Hsu-Resume\.pdf$/));
});

test("project cards expose the demos before opening details and experience navigation reaches the timeline", () => {
  render(<App />);
  const work = screen.getByRole("region", { name: "Selected work" });
  expect(within(work).getByRole("link", { name: "Try measuring a tree" })).toHaveAttribute("href", "#demo-carboncruise");
  expect(within(work).getByRole("link", { name: "Try automatic scoring" })).toHaveAttribute("href", "#demo-basketbot");
  const nav = screen.getByRole("navigation", { name: "Primary navigation" });
  const target = within(nav).getByRole("link", { name: "Experience" }).getAttribute("href");
  expect(document.querySelector(target)).toHaveAccessibleName(/Experience & education/);
});

test("a trunk tap produces an immediate diameter and retake returns to live view", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Measure center trunk" }));
  expect(screen.getByText("43.7 cm diameter")).toBeVisible();
  fireEvent.click(screen.getByRole("button", { name: "Measure right trunk" }));
  expect(screen.getByText("22.9 cm diameter")).toBeVisible();
  fireEvent.click(screen.getByRole("button", { name: "Retake the tree measurement" }));
  expect(screen.getByText("Live view")).toBeVisible();
  fireEvent.click(screen.getByRole("button", { name: "Capture tree diameter" }));
  expect(screen.getByText("22.9 cm diameter")).toBeVisible();
  fireEvent.pointerDown(screen.getByAltText(/foreground trunks/));
  expect(screen.getByText("Aim at a foreground trunk")).toBeVisible();
  expect(screen.queryByText("22.9 cm diameter")).not.toBeInTheDocument();
});

test("basket detection counts downward passes once and leaves a miss uncounted", () => {
  expect(replayFrame(0).score).toBe(0);
  expect(replayFrame(1600).score).toBe(0);
  expect(replayFrame(shotMs - 1)).toMatchObject({ score: 1, scored: true });
  expect(replayFrame(shotMs * 2 - 1)).toMatchObject({ score: 1, missed: true });
  expect(replayFrame(durationMs)).toMatchObject({ score: 2, scored: true, done: true });
  expect(replayFrame(durationMs + 4000).score).toBe(2);
});

test("the tracker runs automatically, pauses, resumes and replays at zero", () => {
  let nextFrame;
  const request = jest.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => { nextFrame = callback; return 1; });
  const cancel = jest.spyOn(window, "cancelAnimationFrame").mockImplementation(() => { nextFrame = null; });
  try {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "BasketBot" }));
    expect(screen.getByLabelText("Score 0")).toBeVisible();
    act(() => { nextFrame(0); nextFrame(shotMs - 1); });
    expect(screen.getByLabelText("Score 1")).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: "Pause shot sequence" }));
    expect(nextFrame).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Play shot sequence" }));
    act(() => { nextFrame(9000); nextFrame(9000 + shotMs); });
    expect(screen.getByText("Miss · score holds")).toBeVisible();
    expect(screen.getByLabelText("Score 1")).toBeVisible();
    act(() => { nextFrame(9000 + durationMs); });
    expect(screen.getByText("2 baskets in 3 shots")).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: "Replay shot sequence" }));
    expect(screen.getByLabelText("Score 0")).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: "CarbonCruise" }));
    expect(nextFrame).toBeNull();
  } finally {
    request.mockRestore();
    cancel.mockRestore();
  }
});

test("reduced motion offers shot-by-shot scoring without autoplay", () => {
  const original = window.matchMedia;
  window.matchMedia = jest.fn(() => ({ matches: true }));
  try {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "BasketBot" }));
    const next = screen.getByRole("button", { name: "Next shot" });
    fireEvent.click(next);
    expect(screen.getByLabelText("Score 1")).toBeVisible();
    fireEvent.click(next);
    expect(screen.getByText("Miss · score holds")).toBeVisible();
    fireEvent.click(next);
    expect(screen.getByText("2 baskets in 3 shots")).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: "Replay shot sequence" }));
    expect(screen.getByLabelText("Score 0")).toBeVisible();
  } finally { window.matchMedia = original; }
});

test("a visitor's aim determines the score and returning to replay resets the game", () => {
  const original = window.matchMedia;
  window.matchMedia = jest.fn(() => ({ matches: true }));
  try {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "BasketBot" }));
    fireEvent.click(screen.getByRole("button", { name: "Take a shot" }));
    const aim = screen.getByRole("slider", { name: "Aim your shot" });
    const shoot = screen.getByRole("button", { name: "Shoot" });
    fireEvent.change(aim, { target: { value: "0" } });
    fireEvent.click(shoot);
    expect(screen.getByLabelText("Score 1")).toBeVisible();
    fireEvent.change(aim, { target: { value: "15" } });
    fireEvent.click(shoot);
    expect(screen.getByText("Miss · score holds")).toBeVisible();
    expect(screen.getByLabelText("Score 1")).toBeVisible();
    expect(screen.getByText("Shots taken · 2")).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: "Watch replay" }));
    expect(screen.getByLabelText("Score 0")).toBeVisible();
    expect(screen.getByRole("button", { name: "Next shot" })).toBeVisible();
  } finally { window.matchMedia = original; }
});

test("an entry reveals its role, dates and original project link", () => {
  render(<App />);
  const entry = document.getElementById("carboncruise");
  fireEvent.click(entry.querySelector("summary"));
  expect(entry.querySelector("details")).toHaveAttribute("open");
  expect(within(entry).getByText("May 2025 – April 2026")).toBeVisible();
  expect(within(entry).getByRole("link", { name: "Visit CarbonCruise" })).toHaveAttribute("href", "https://www.korotu.com/carboncruise");
});

test("mobile menu closes on navigation and Escape restores focus", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Open menu" });
  fireEvent.click(button);
  const menu = document.getElementById("mobileMenu");
  const work = within(menu).getByRole("link", { name: "Work" });
  work.focus();
  fireEvent.keyDown(window, { key: "Escape" });
  expect(menu).not.toBeVisible();
  expect(button).toHaveFocus();
  fireEvent.click(button);
  fireEvent.click(work);
  expect(button).toHaveAttribute("aria-expanded", "false");
});
