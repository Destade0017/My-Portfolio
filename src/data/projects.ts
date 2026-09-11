export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  features: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  initials: string;
}

export const projects: Project[] = [
  {
    id: "rentra",
    title: "Rentra",
    type: "Property Management Platform",
    description: "A full-stack property management application designed to help property owners and tenants manage properties, rent information, and tenant-related workflows from one platform.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Cloudinary"],
    features: [
      "Authentication & Role-based Access",
      "Property Management Dashboard",
      "Tenant Dashboard & Rent Tracking",
      "REST APIs"
    ],
    featured: true,
    caseStudyUrl: "/projects/rentra",
    initials: "RN"
  },
  {
    id: "learnova",
    title: "Learnova",
    type: "Learning Management Platform",
    description: "A full-stack learning management platform with structured courses, assessments, progress tracking, analytics, and rule-based adaptive learning.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    features: [
      "Role-based Access & Course Management",
      "Diagnostic Tests & Quizzes",
      "Analytics Dashboard",
      "Rule-based Adaptive Learning Engine"
    ],
    featured: true,
    caseStudyUrl: "/projects/learnova",
    initials: "LN"
  },
  {
    id: "fintrack",
    title: "FinTrack",
    type: "Personal Finance Platform",
    description: "A MERN personal finance management platform for tracking transactions, budgets, and financial information through an interactive dashboard.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Chart.js"],
    features: [
      "Authentication",
      "Transaction & Budgeting Management",
      "Financial Dashboard & Charts"
    ],
    featured: false,
    initials: "FT"
  },
  {
    id: "property-automation",
    title: "Property Management Automation",
    type: "Workflow Automation",
    description: "An automation system built with Google Apps Script and Google Sheets to automate property-management communication and recurring rent reminder workflows.",
    technologies: ["Google Apps Script", "JavaScript", "Google Sheets", "HTML Email Templates", "Google Workspace APIs"],
    features: [
      "Automated Rent Reminders",
      "Duplicate Notification Prevention",
      "Personalized HTML Email Templates",
      "Google Sheets Integration"
    ],
    featured: false,
    initials: "PA"
  }
];
