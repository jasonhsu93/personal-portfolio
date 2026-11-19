export const contact = {
  email: "jasonhsubusiness@gmail.com",
  linkedin: "https://www.linkedin.com/in/jasonhsu-/",
  github: "https://github.com/jasonhsu93",
  youtube: "https://youtube.com/peezs",
};

export const resumeUrl = `${process.env.PUBLIC_URL}/resume/Jason-Hsu-Resume.pdf`;
export const mediaUrl = (filename) => `${process.env.PUBLIC_URL}/media/${filename}`;

export const selectedWork = [
  {
    id: "carboncruise",
    title: "CarbonCruise",
    context: "Korotu Technology · iOS engineering",
    preview: "trunk-section.webp",
    description: "I built an iPhone feature that shows a tree’s diameter as soon as a forester taps its trunk.",
    outcome: "49K points",
    measure: "processed in under 100 ms",
    role: "Software Engineer Intern",
    dates: "May 2025 – April 2026",
    detail: "I filtered noisy 3D scans to find the edges of each trunk. I also migrated a 51,000-line Flutter app to 23,000 lines of Swift in four weeks and kept field records in sync with a Python and MySQL backend on AWS.",
    tools: ["Swift", "ARKit", "Python", "MySQL", "AWS"],
    links: [{ label: "Try measuring a tree", href: "#demo-carboncruise" }, { label: "Visit CarbonCruise", href: "https://www.korotu.com/carboncruise" }],
  },
  {
    id: "basketbot",
    title: "BasketBot",
    context: "ProduHacks · Computer vision",
    preview: "basketbot-tracking.webp",
    description: "Our scorekeeper tracks the ball on camera and updates the score automatically when it passes through the net.",
    outcome: "1st place",
    measure: "at ProduHacks",
    role: "Hackathon team project",
    dates: "2024",
    detail: "We used OpenCV to track the ball and a TensorFlow model to recognize the net. Offline speech recognition lets players start or pause the clock without leaving the court.",
    tools: ["Python", "OpenCV", "TensorFlow", "Vosk"],
    links: [
      { label: "Try automatic scoring", href: "#demo-basketbot" },
      { label: "View code", href: "https://github.com/04christopher/basketbot" },
      { label: "Watch the demo", href: "https://drive.google.com/file/d/1RJbd_o-VBn84WX9jimN7xBIibmxVnxko/view" },
    ],
  },
  {
    id: "agrobot",
    title: "UBC AgroBot",
    context: "UBC design team · Robotics",
    preview: "agrobot-route.webp",
    description: "I built a simulator where a farm robot could learn to steer around obstacles before it ever touched soil.",
    outcome: "58% fewer",
    measure: "negative-reward runs",
    role: "Reinforcement Learning Developer",
    dates: "January 2025 – March 2026",
    detail: "I trained PPO driving policies for five million steps across eight parallel environments. Compared with early training, average reward rose 8.7% and negative-reward runs fell by 58%.",
    tools: ["Python", "Gymnasium", "Stable-Baselines3", "PPO"],
    links: [{ label: "Meet the AgroBot team", href: "https://ubcagrobot.com" }],
  },
];

export const additionalWork = [
  {
    title: "RoboRacer",
    description: "Our autonomous car won its head-to-head class race using LiDAR navigation and real-time traffic-sign detection.",
    href: "https://github.com/abhiverma13/RoboRacer",
    label: "View code",
  },
  {
    title: "MemoSpace",
    description: "An iOS app that maps a room in 3D and anchors notes to places in it. My depth filtering reduced scan noise by about half.",
    href: "https://github.com/stovetopman/nw2026",
    label: "View code",
  },
  {
    title: "CarbonWise",
    description: "An Android barcode scanner that suggests greener alternatives from a catalog of 100,000+ food items.",
    href: "https://drive.google.com/file/d/1kNyNmZe2dqOa0ifYqepZxrqfE_KoZr_6/view?usp=sharing",
    label: "Read design document",
  },
];
