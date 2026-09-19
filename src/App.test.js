import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders the portfolio and resume experience dates", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Jason Hsu",
  );
  for (const name of [
    "Learning through real-world experience.",
    "Ideas into reality.",
    "The tools I work with.",
  ]) {
    expect(screen.getByRole("heading", { level: 2, name })).toBeInTheDocument();
  }
  const experience = screen.getByRole("region", {
    name: "Learning through real-world experience.",
  });
  expect(within(experience).getByText("April 2026")).toBeInTheDocument();
  expect(within(experience).getByText("March 2026")).toBeInTheDocument();
  expect(
    within(experience).getByRole("heading", {
      name: "Reinforcement Learning Developer",
    }),
  ).toBeInTheDocument();
  expect(experience).not.toHaveTextContent("Present");
});

test("shows the resume skill groups without outdated entries", () => {
  render(<App />);
  const skills = screen.getByRole("region", { name: "The tools I work with." });
  const groups = within(skills).getAllByRole("list");
  expect(
    groups.map((group) =>
      within(group)
        .getAllByRole("listitem")
        .map((item) => item.textContent),
    ),
  ).toEqual([
    [
      "Python",
      "Swift",
      "C/C++",
      "Dart",
      "Kotlin",
      "Java",
      "JavaScript/TypeScript",
      "SQL",
    ],
    [
      "Flutter",
      "Express.js",
      "Node.js",
      "OpenCV",
      "React",
      "PyTorch",
      "ARKit",
      "RealityKit",
      "YOLO",
      "ROS",
    ],
    [
      "Git",
      "Linux",
      "Xcode",
      "AWS",
      "Firebase",
      "MongoDB",
      "RevenueCat",
      "StoreKit",
    ],
  ]);
});

test("mobile menu closes on navigation and Escape returns focus to its button", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Open menu" });
  fireEvent.click(button);
  expect(button).toHaveAttribute("aria-expanded", "true");
  const menu = document.getElementById("mobileMenu");
  const projectsLink = within(menu).getByRole("link", { name: "Projects" });
  projectsLink.focus();
  fireEvent.keyDown(window, { key: "Escape" });
  expect(button).toHaveAttribute("aria-expanded", "false");
  expect(button).toHaveFocus();
  fireEvent.click(button);
  fireEvent.click(projectsLink);
  expect(button).toHaveAttribute("aria-expanded", "false");
});
