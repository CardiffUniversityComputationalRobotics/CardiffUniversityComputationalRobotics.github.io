export const siteTitle = "Cardiff University Computational Robotics Team";

export const brand = {
  kicker: "Cardiff University",
  title: "Computational Robotics Team",
};

export const navigation = [
  {
    id: "home",
    label: "Home",
    href: "#/",
  },
  {
    id: "papers",
    label: "Published Papers",
    href: "#/papers",
  },
  {
    id: "team",
    label: "Team",
    href: "#/team",
  },
  // {
  //   id: "projects",
  //   label: "Research Projects",
  //   href: "#/projects",
  // },
  // {
  //   id: "contact",
  //   label: "Contact",
  //   href: "#/contact",
  // },
];

export const hero = {
  eyebrow: "",
  title: "Cardiff University Computational Robotics Team",
  intro:
    "Research team founded at the School of Computer Science at Cardiff University in 2022. Focused on different research areas such as perception and navigation for autonomous robots, robot manipulation, object reconstruction and VR with shared autonomy.",
  supportingText:
    "",
  slides: [
    {
      image: "/cucr_team_2025.jpeg",
      alt: "Cardiff University Computational Robotics team group photo",
      caption:
        "Cardiff University Computational Robotics team group photo, 2025.",
    },
    {
      image: "/cucr_team_2024.JPG",
      alt: "Cardiff University Computational Robotics team group photo",
      caption:
        "Cardiff University Computational Robotics team group photo, 2024.",
    },
  ],
  primaryLink: {
    label: "See all papers",
    href: "#/papers",
  },
  secondaryLink: {
    label: "Meet the team",
    href: "#/team",
  },
};

export const home = {
  papersEyebrow: "",
  papersTitle: "Latest accepted papers",
  // papersDescription:
  //   "This section sits below the team photograph on the landing page and can feature the latest papers, conference presentations, or the group's most representative outputs.",
};

export const pages = {
  papers: {
    eyebrow: "",
    title: "Published Papers",
    description:
      "",
  },
  team: {
    eyebrow: "Team",
    title: "Principal investigators, doctoral researchers, and collaborators.",
    // description:
    //   "This page is organized by role so visitors can quickly understand the structure of the group and the people involved in each research area.",
  },
  projects: {
    eyebrow: "Research Projects",
    title: "A home for ongoing, completed, and upcoming research efforts.",
    description:
      "Populate these project cards with summaries, links, funding details, datasets, videos, or software repositories as needed.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Collaboration, enquiries, and student opportunities.",
    description:
      "Keep the core contact routes here, along with the location of the group and any preferred channels for project or PhD enquiries.",
  },
};
