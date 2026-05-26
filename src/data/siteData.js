export const siteData = {
  siteTitle: "Cardiff University Computational Robotics Team",
  brand: {
    kicker: "Cardiff University",
    title: "Computational Robotics Team",
  },
  navigation: [
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
    {
      id: "projects",
      label: "Research Projects",
      href: "#/projects",
    },
    {
      id: "contact",
      label: "Contact",
      href: "#/contact",
    },
  ],
  hero: {
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
  },
  home: {
    papersEyebrow: "",
    papersTitle: "Latest accepted papers",
    // papersDescription:
    //   "This section sits below the team photograph on the landing page and can feature the latest papers, conference presentations, or the group's most representative outputs.",
  },
  pages: {
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
  },
  papers: [
    {
      title:
        "Social Robot Navigation Under Kinodynamic Constraints Using Learning-Informed Sampling for Indoor Environments",
      venue: "IEEE Robotics and Automation Letters (RA-L)",
      year: "2026",
      authors:
        "S. Silva, V. Romero-Cano, J. D. Hernández",
      summary:
        "Presents a social robot navigation framework for socially acceptable, kinodynamically feasible motion in dynamic indoor spaces. The approach combines world representation, multilayered path planning, and path-following control. A CNN-driven informed sampling strategy improves planner performance for online navigation. Benchmarks against state-of-the-art methods and real-world Reachy robot tests demonstrate the framework's feasibility.",
      titleHref: "",
      youtubeUrl: "https://youtu.be/nIs93xLLCWc",
      links: [],
      tag: "Accepted (To be published)",
    },
    {
      title:
        "Supervisory Control via AR for Teleoperation under Communication Delays: An In-Space Assembly Use Case",
      venue: "International Conference on Social Robotics (ICSR)",
      year: "2026",
      authors:
        "I. M. Stavropoulos, A. Kucukyilmaz, C. Martinez, D. J. Finnegan, J. D. Hernández",
      summary:
        "Presents an AR-supported supervisory control system for in-space assembly under communication delays. Operators define goals in a 3D AR interface, while behavior trees handle execution and recovery. In a user study, the approach reduced completion time, effort, and workload compared with shared control under 0s and 2s latency.",
      titleHref: "",
      youtubeUrl: "https://www.youtube.com/watch?v=Z4aOs5zU8UM",
      links: [],
      tag: "Accepted (To be published)",
    },
    {
      title: "One-Shot View Planning and Online Optimization-based Replanning for Unknown Object Reconstruction",
      venue: "2026 IEEE International Conference on Robotics & Automation",
      year: "2026",
      authors: "J.J. Patiño, V. Romero-Cano, Y. Lai, Z. Kingston, J.D. Hernández",
      summary:
        "",
      titleHref: "https://orca.cardiff.ac.uk/id/eprint/184709/",
      youtubeUrl: "https://www.youtube.com/watch?v=Si_atZL73xI",
      links: [
      ],
      tag: "Accepted (To be published)",
    },
    {
      title:
        "Exploring the Perceptions and Challenges of Social Robot Navigation: Two Case Studies in Different Socio-Technical Contexts",
      venue: "OzCHI '24: 36th Australasian Conference on Human-Computer Interaction",
      year: "2024",
      authors:
        "Steven Silva, Polina Oliinyk, Jose Patino, Dennys Paillacho, Juan D. Hernandez, Nervo Verdezoto",
      summary:
        "A qualitative study of social robot navigation in real-world service settings across Ecuador and the UK, examining how robot behaviour, appearance, spatial constraints, and local context affect acceptance and user experience.",
      titleHref: "https://doi.org/10.1145/3726986.3727028",
      youtubeUrl: "https://www.youtube.com/watch?v=dFreXVsIJmc",
      links: [
      ],
      tag: "Conference",
    },
    {
      title: "Online Social Robot Navigation in Indoor, Large and Crowded Environments",
      venue: "2023 IEEE International Conference on Robotics and Automation (ICRA)",
      year: "2023",
      authors:
        "Steven Silva, Nervo Verdezoto, Dennys Paillacho, Samuel Millan-Norman, Juan David Hernández",
      summary:
        "Presents an online social robot navigation framework for large, crowded indoor environments, combining social heatmap world modelling, multilayered sampling-based planning, and path-following control, with benchmarks and Pepper robot trials.",
      titleHref: "https://doi.org/10.1109/ICRA48891.2023.10160603",
      youtubeUrl: "https://www.youtube.com/watch?v=Gq149wFVj7A",
      links: [
      ],
      tag: "Conference",
    },
    {
      title: "Towards Online Socially Acceptable Robot Navigation",
      venue: "2022 IEEE 18th International Conference on Automation Science and Engineering (CASE)",
      year: "2022",
      authors: "Steven Silva, Dennys Paillacho, Nervo Verdezoto, Juan David Hernández",
      summary:
        "Introduces an online social robot navigation framework that generates collision-free and socially acceptable paths in uncontrolled crowded spaces using a modified sampling-based planner and social relevance validity checking.",
      titleHref: "https://doi.org/10.1109/CASE49997.2022.9926686",
      youtubeUrl: "https://www.youtube.com/watch?v=aZf27nthmX8",
      links: [
      ],
      tag: "Conference",
    },
  ],
  teamSections: [
    {
      title: "Principal Investigators",
      // description:
      //   "Use this section for the faculty leads or senior researchers responsible for the group's direction and supervision.",
      members: [
        {
          name: "Juan David Hernández Vega",
          role: "Principal Investigator",
          affiliation: "Cardiff University",
          image: "Juan.jpeg",
          imageAlt: "",
          bio:
            "Senior Lecturer (Associate Professor) in the School of Computer Science and Informatics at Cardiff University, and former Director of Postgraduate Research studies. His research focuses on motion planning, autonomous navigation, robot decision-making, and human-robot collaboration. He has over 10 years of robotics experience across academia and industry, including work on underwater robots, automated valet parking, collaborative robotics, and autonomous systems simulation.",
          researchAreas: ["Planning", "Navigation", "Robot Learning"],
          links: [
            {
              label: "Profile",
              href: "https://profiles.cardiff.ac.uk/staff/hernandezvegaj",
            },
            {
              label: "Email",
              href: "HernandezVegaJ@cardiff.ac.uk",
            },
          ],
        },
        {
          name: "Victor Romero Cano",
          role: "Principal Investigator",
          affiliation: "Cardiff University",
          image: "Victor.jpeg",
          imageAlt: "",
          bio:
            "I work in Robotics, Artificial Intelligence (AI) and Autonomous Systems in general! I am an academic in the School of Computer Science and Informatics at Cardiff University, within the Human-centred computing research unit. My research focuses on advancing robot perception and machine learning technologies to make autonomous systems ubiquitous and practically useful across diverse real-world environments.",
          researchAreas: ["Planning", "Navigation", "Robot Learning"],
          links: [
            {
              label: "Profile",
              href: "https://profiles.cardiff.ac.uk/staff/romerocanov",
            },
            {
              label: "Email",
              href: "RomeroCanoV@cardiff.ac.uk",
            },
          ],
        },
        {
          name: "Walter Colombo",
          role: "Principal Investigator",
          affiliation: "Cardiff University",
          image: "",
          imageAlt: "",
          bio:
            "",
          researchAreas: [],
          links: [
            {
              label: "Profile",
              href: "",
            },
            {
              label: "Email",
              href: "ColomboG@cardiff.ac.uk",
            },
          ],
        },
      ],
    },
    {
      title: "PhD Students",
      // description:
      //   "Doctoral researchers, visiting students, or other postgraduate team members can be listed here.",
      members: [
        {
          name: "Furkan Duman",
          role: "PhD Researcher",
          affiliation: "Cardiff University",
          image: "Furkan.jpeg",
          imageAlt: "",
          bio:
            "",
          researchAreas: [],
          links: [
            {
              label: "Email",
              href: "DumanF@cardiff.ac.uk",
            },
          ],
        },
        {
          name: "Safa E. Tok",
          role: "PhD Researcher",
          affiliation: "Cardiff University",
          image: "Safa.jpeg",
          imageAlt: "",
          bio:
            "",
          researchAreas: [],
          links: [
            {
              label: "Email",
              href: "TokE@cardiff.ac.uk",
            },
          ],
        },
        {
          name: "Yuanzhi He",
          role: "PhD Researcher",
          affiliation: "Cardiff University",
          image: "Yuanzhi.jpeg",
          imageAlt: "",
          bio:
            "He is a PhD candidate who focuses on reinforcement learning, evolutionary algorithms and generative models for sample-efficient motion planning on long-horizon robotic manipulation tasks.",
          researchAreas: ["Robotic Manipulation", "Reinforcement Learning", "Generative AI"],
          links: [
            {
              label: "Email",
              href: "HeY65@cardiff.ac.uk",
            },
          ],
        },
        {
          name: "Steven Silva",
          role: "PhD Researcher",
          affiliation: "Cardiff University",
          image: "Steven.jpeg",
          imageAlt: "",
          bio:
            "Mechatronics engineer from ESPOL in Ecuador, and now Teacher at Cardiff University and pursuing a PhD over social robot navigation.",
          researchAreas: ["Path Planning","Human-Robot Interaction"],
          links: [
            {
              label: "Profile",
              href: "https://sasilva1998.github.io/",
            },
          ],
        },
        {
          name: "Zitian Ding",
          role: "PhD Researcher",
          affiliation: "Cardiff University",
          image: "Ding.jpeg",
          imageAlt: "",
          bio:
            "",
          researchAreas: [],
          links: [
            {
              label: "Email",
              href: "DingZ10@cardiff.ac.uk",
            },
          ],
        },
        {
          name: "Jose Patiño",
          role: "PhD Researcher",
          affiliation: "Cardiff University",
          image: "Jose.jpeg",
          imageAlt: "",
          bio:
            "",
          researchAreas: [],
          links: [
            {
              label: "Email",
              href: "PatinoMinanJJ@cardiff.ac.uk",
            },
          ],
        },
        {
          name: "Samuel Millan-Norman",
          role: "PhD Researcher",
          affiliation: "Cardiff University",
          image: "Samuel.jpeg",
          imageAlt: "",
          bio:
            "",
          researchAreas: [],
          links: [
            {
              label: "Email",
              href: "NormanS2@cardiff.ac.uk",
            },
          ],
        },
        {
          name: "Ioannis-Marios Stavropoulos",
          role: "PhD Researcher",
          affiliation: "Cardiff University",
          image: "Ioannis.jpeg",
          imageAlt: "",
          bio:
            "PhD candidate and Teaching Associate at Cardiff University researching robot supervisory control via Immersive Interfaces under communication constraints.",
          researchAreas: [],
          links: [
            {
              label: "Email",
              href: "StavropoulosI@cardiff.ac.uk",
            },
          ],
        },
      ],
    },
    {
      title: "Collaborators",
      description:
        "External collaborators, partner institutions, or affiliated researchers can be grouped here.",
      members: [
        {
          name: "Collaborator Placeholder",
          role: "Research Collaborator",
          affiliation: "Partner Institution",
          image: "",
          imageAlt: "",
          bio:
            "Use this template for collaborators from other universities, labs, or industry partners connected to the group.",
          researchAreas: ["Field Robotics", "Multi-Robot Systems"],
          links: [
            {
              label: "Institution",
              href: "https://example.com",
            },
          ],
        },
      ],
    },
  ],
  projects: [
    {
      title: "Project Template for an Ongoing Study",
      status: "Active",
      period: "2025 to present",
      summary:
        "A placeholder summary for an active research project, suitable for explaining the aim, the scientific question, or the system being developed.",
      focus:
        "Use this line for the expected impact, methods, or application domain of the project.",
      tags: ["Navigation", "Perception", "Real-World Deployment"],
      links: [
        {
          label: "Project page",
          href: "https://example.com/project-one",
        },
      ],
    },
    {
      title: "Project Template for a Completed Collaboration",
      status: "Completed",
      period: "2023 to 2025",
      summary:
        "A placeholder card for a finished project. This could later link to publications, datasets, code, or videos.",
      focus:
        "Useful for summarizing the main outcome, partner institutions, or what was delivered at the end of the project.",
      tags: ["HRI", "Evaluation", "Field Study"],
      links: [
        {
          label: "Repository",
          href: "https://github.com",
        },
        {
          label: "Video",
          href: "https://example.com/video",
        },
      ],
    },
    {
      title: "Project Template for an Upcoming Direction",
      status: "Planned",
      period: "Starting soon",
      summary:
        "Use this placeholder when you want to signal a new line of work, a funded initiative, or a collaboration currently being prepared.",
      focus:
        "This area can hold a one-line statement about the opportunity, funding source, or open participation call.",
      tags: ["Future Work", "Funding", "Collaboration"],
      links: [
        {
          label: "Learn more",
          href: "https://example.com/project-three",
        },
      ],
    },
  ],
  contacts: {
    message:
      "For collaboration enquiries, student opportunities, media requests, or general questions about the group, the entries below can be replaced with the preferred contact details.",
    methods: [
      {
        label: "General enquiries",
        value: "robotics-group@cardiff.ac.uk",
        href: "mailto:robotics-group@cardiff.ac.uk",
        detail: "Shared inbox placeholder for the whole team.",
      },
      {
        label: "Location",
        value: "School of Computer Science and Informatics, Cardiff University",
        detail: "Replace with building, room, and postal details if needed.",
      },
      {
        label: "Prospective students",
        value: "PhD and visiting researcher enquiries",
        detail:
          "Swap this placeholder for the exact person, form, or application route you want people to use.",
      },
    ],
    links: [
      {
        label: "University page",
        href: "https://www.cardiff.ac.uk",
      },
      {
        label: "GitHub",
        href: "https://github.com",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
      },
    ],
    note:
      "This panel can also include office hours, a collaboration note, lab access information, or a link to an external contact form.",
  },
};
