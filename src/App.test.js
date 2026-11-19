import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("shows recent work, outcomes and a résumé on first render", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("I build software");
  const work = screen.getByRole("region", { name: "Selected work" });
  for (const title of ["CarbonCruise", "BasketBot", "UBC AgroBot"]) {
    expect(within(work).getByRole("heading", { name: title })).toBeInTheDocument();
  }
  for (const metric of ["49K points", "1st of 30", "58% fewer"]) {
    expect(within(work).getByText(metric)).toBeVisible();
  }
  expect(screen.getByRole("link", { name: "Résumé (PDF)" })).toHaveAttribute("href", expect.stringMatching(/Jason-Hsu-Resume\.pdf$/));
});

test("switches both the study and its accessible caption", () => {
  render(<App />);
  const forest = screen.getByRole("button", { name: "Forest" });
  const court = screen.getByRole("button", { name: "Court" });
  expect(forest).toHaveAttribute("aria-pressed", "true");
  fireEvent.click(court);
  expect(court).toHaveAttribute("aria-pressed", "true");
  expect(forest).toHaveAttribute("aria-pressed", "false");
  expect(screen.getByRole("img", { name: /shot trajectory/ })).toHaveAttribute("src", expect.stringMatching(/court-study\.webp$/));
  expect(screen.getByText("Trajectory illustration")).toBeVisible();
  fireEvent.click(forest);
  expect(screen.getByText("LiDAR illustration")).toBeVisible();
});

test("an entry reveals its role, dates and original project link", () => {
  render(<App />);
  const entry = document.getElementById("carboncruise");
  fireEvent.click(entry.querySelector("summary"));
  expect(entry).toHaveAttribute("open");
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
