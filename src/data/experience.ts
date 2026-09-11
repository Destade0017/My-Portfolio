export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
  isSecondary?: boolean;
}

export const experiences: Experience[] = [
  {
    role: "Digital Support & Social Media Intern",
    company: "Peniel Apartments",
    location: "Abuja, Nigeria",
    date: "September 2026 – Present",
    description: "Supporting digital operations across social media, website management, and general digital workflows.",
    responsibilities: [
      "Create and support social media content for platforms including Instagram, LinkedIn, Facebook, and X.",
      "Help maintain and execute monthly social media content calendars.",
      "Support routine website content updates, media uploads, link checks, and usability testing.",
      "Assist with basic website layout improvements, landing-page customization, and bug tracking.",
      "Support basic SEO, analytics, digital asset organization, and documentation."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Ouranos Labs",
    location: "Lagos, Nigeria",
    date: "June 2025 – November 2025",
    description: "Contributed to software projects and supported the development of an internal reporting tool used for performance tracking and decision-making.",
    responsibilities: [
      "Contributed to project ideation, validation, and feature implementation.",
      "Collaborated with senior engineering team members in agile workflows.",
      "Supported development of the internal performance reporting tool."
    ],
    technologies: ["Svelte", "Tailwind CSS", "Django", "MongoDB"]
  },
  {
    role: "WordPress Developer Intern",
    company: "GAO Tek Inc.",
    location: "Remote",
    date: "July 2025 – September 2025",
    description: "Worked on WordPress website projects involving theme customization, plugin integration, responsive design, and user experience improvements.",
    responsibilities: [
      "Customized responsive WordPress layouts and user interfaces.",
      "Integrated plugins and tested layout compatibility across device viewports."
    ]
  },
  {
    role: "General Sales Executive",
    company: "Kaikruz Trading Ventures",
    location: "Nigeria",
    date: "February 2024 – April 2024",
    description: "Assisted with client communication and sales support operations.",
    responsibilities: [
      "Supported sales tracking and client relations."
    ],
    isSecondary: true
  },
  {
    role: "Academic Instructor",
    company: "Radiance Bright Stars Academy",
    location: "Nigeria",
    date: "July 2023 – December 2023",
    description: "Instructed students in fundamental computer science and academic subjects.",
    responsibilities: [
      "Delivered structured lessons and evaluated student progress."
    ],
    isSecondary: true
  }
];
