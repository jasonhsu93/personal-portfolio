// Content aligned with resume_jason_hsu_s.pdf (September 2026).
export const skillGroups = [
  {
    title: "Programming languages",
    items: [
      "Python",
      "Swift",
      "C/C++",
      "Dart",
      "Kotlin",
      "Java",
      "JavaScript/TypeScript",
      "SQL",
    ],
  },
  {
    title: "Frameworks & libraries",
    items: [
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
  },
  {
    title: "Developer tools",
    items: [
      "Git",
      "Linux",
      "Xcode",
      "AWS",
      "Firebase",
      "MongoDB",
      "RevenueCat",
      "StoreKit",
    ],
  },
];

export const experiences = [
  {
    company: "Korotu Technology",
    role: "Software Engineer Intern",
    dates: "May 2025 — April 2026",
    start: "2025-05",
    end: "2026-04",
    location: "Vancouver, BC",
    href: "https://www.korotu.com/carboncruise",
    linkLabel: "Explore CarbonCruise",
    summary:
      "Built features for CarbonCruise, a forestry data-collection app that uses the iPhone camera, LiDAR, and motion sensors to capture tree species, height, diameter, and location for forest plots and biomass estimation.",
    highlights: [
      "Led iOS AR and LiDAR R&D, developing a noise-filtering algorithm to detect and measure tree trunks from 3D point clouds, processing ~49K points in ≤100 ms.",
      "Migrated a ~51K-line Dart codebase across 143 files to ~23K lines of native Swift in four weeks, using automated migration scripts and validating feature parity.",
      "Developed Python and SQL backend logic to process and synchronize field data between the mobile app and web application.",
      "Built subscriptions and entitlements with RevenueCat and StoreKit, including purchases, restores, subscription state, and dashboard synchronization across iOS and Flutter.",
      "Implemented continuous-save and recovery flows to protect field measurements when sessions were interrupted.",
    ],
    skills: [
      "Swift",
      "LiDAR",
      "Flutter",
      "Python",
      "SQL",
      "RevenueCat",
      "StoreKit",
    ],
  },
  {
    company: "UBC AgroBot",
    role: "Reinforcement Learning Developer",
    dates: "January 2025 — March 2026",
    start: "2025-01",
    end: "2026-03",
    location: "Vancouver, BC",
    href: "https://ubcagrobot.com",
    linkLabel: "Meet the team",
    summary:
      "Developed a Gymnasium-based reinforcement-learning environment modeling AgroBot steering and obstacle avoidance, enabling navigation policies to be trained and evaluated before deployment to hardware.",
    highlights: [],
    skills: ["Python", "Gymnasium", "Reinforcement Learning"],
  },
];
