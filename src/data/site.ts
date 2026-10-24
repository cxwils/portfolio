// ─────────────────────────────────────────────────────────────
// Everything on the site comes from this file.
// Edit the text here and the pages update. Fields marked TODO
// are empty on purpose: empty links are simply not shown.
// ─────────────────────────────────────────────────────────────
export type Project = {
  slug: string;
  title: string;
  role: string; // "Solo project", "Course project", ...
  year: string;
  summary: string;
  tags: string[];
  // Drop a screenshot in /public/projects and set e.g. "/projects/otaku-score.png".
  // Without an image, the card shows the title set large on a tinted panel.
  image?: string;
  tint: { light: string; dark: string; ink: { light: string; dark: string } };
  links: { label: string; href: string }[];
};

export type Entry = {
  title: string;
  org: string;
  href?: string;
  detail?: string;
};

export const profile = {
  name: "Hi, I'm Christian!", // TODO: add your last name, e.g. "Christian Smith"
  photo: "/profile.jpg",
  role: "Aspiring Software Engineer",
  location: "Ormond Beach, Florida",
  intro:
    "I'm interested in fullstack and backend developement and current looking for open roles!",
  links: [
    { label: "GitHub", href: "https://github.com/cxwils" }, // TODO: https://github.com/your-username
    { label: "LinkedIn", href: "https://www.linkedin.com/in/christian-wilsey-382b29308/?isSelfProfile=true" }, // TODO: https://www.linkedin.com/in/your-profile
    { label: "Email", href: "mailto:gatorchristian@gmail.com" }, // TODO: mailto:you@example.com
  ],
};

export const now: Entry[] = [
  {
    title: "B.S in Computer Science",
    org: "Florida State University",
    detail: "August 2024 to August 2026",
  },
  {
    title: "Associate of Arts",
    org: "Daytona State College",
    detail: "August 2022 to May 2024"
  },
];

export const previously: Entry[] = [
  {
    title: "CQV Intern",
    org: "Germfree",
    detail: "May to August 2024",
  },
];

export const projects: Project[] = [
  {
    slug: "otaku-score",
    title: "Otaku Score",
    role: "Solo project",
    year: "2026",
    summary:
      "Anime and manga rating site where each title is scored across eight categories, from premise to binge-ability. 500 anime and 500 manga imported from AniList, with accounts, email verification and personal watch and reading lists.",
    tags: ["ASP.NET Core", "PostgreSQL", "React", "JWT auth", "Railway", "Vercel"],
    image: "/projects/otaku-score.png",
    tint: {
      light: "#E4E6F5",
      dark: "#22254A",
      ink: { light: "#2B2F6B", dark: "#C9CCF5" },
    },
    links: [
      { label: "Live site", href: "https://otaku-score.vercel.app" },
      { label: "Source", href: "" }, // TODO: link to the GitHub repo
    ],
  },
  {
    slug: "cfb-upsets",
    title: "The Data Science of Randomness: Predicting CFB Upsets",
    role: "Data Science Research Project",
    year: "2026",
    summary:
      "Predicting FBS college football upsets with applied machine learning. Exploratory analysis covers spread buckets, conference trends and week-of-season patterns.",
    tags: ["Python", "Machine learning", "Exploratory analysis"],
    image: "/projects/cfb.png",
    tint: {
      light: "#EFE3E6",
      dark: "#3A1F27",
      ink: { light: "#782F40", dark: "#F0C9D2" },
    },
    links: [
      { label: "Repository", href: "https://github.com/cxwils/cfb-randomness" }, 
    ],
  },
  {
    slug: "spearitskins",
    title: "SpearItSkins",
    role: "Group Project",
    year: "2026",
    summary:
      "A real-time CS:GO skin pricing catalog with advanced search, filtering, and historical price tracking capabilities.",
    tags: ["CSS", "Node.js", "Express.js","PostgreSQL"],
    image: "/projects/spearit.png",
    tint: {
      light: "#eeeae3",
      dark: "#d3681c",
      ink: { light: "#1F5A3F", dark: "#f7f7f7" },
    },
    links: [
       { label: "Repository", href: "https://github.com/cxwils/spear-it-skins" }, 
    ],
  },
  {
    slug: "kernel",
    title: "Elevator Kernel Module",
    role: "Group Project",
    year: "2026",
    summary:
      " A Linux kernel module focused on synchronization and resource management, using mutexes and /proc interfaces",
    tags: ["C"],
    tint: {
      light: "#929292",
      dark: "#332D18",
      ink: { light: "#fbfbf8", dark: "#EBDFA6" },
    },
    links: [
      { label: "Repository", href: "https://github.com/cxwils/project-2-project-2-group-21" },
    ],
  },
];
