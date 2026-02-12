// Data configuration for Om Chaddha's portfolio

// Skills grouped for dynamic rendering
const skillsData = [
  {
    category: "Languages",
    items: ["JavaScript", "Python"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React (future)"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Authentication (JWT)"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker (basic)"],
  },
];

// Projects for engineering and freelance sections
const projectsData = [
  {
    title: "Role-Based Task Manager",
    category: "engineering",
    description:
      "Secure full-stack task management application with JWT authentication and role-based access control.",
    techStack: ["Node.js", "Express", "PostgreSQL", "JWT", "HTML", "CSS"],
    features: [
      "Role-based access control for admins, managers, and contributors",
      "JWT-based authentication and secure session handling",
      "Task lifecycle management with status tracking and filtering",
      "API-first design ready for future React frontends",
    ],
    github: "https://github.com/your-username/role-based-task-manager",
    demo: "",
  },
  {
    title: "API Service Platform",
    category: "engineering",
    description:
      "REST API backend with authentication, input validation, and database integration for multi-service platforms.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "Versioned REST API endpoints with clear separation of concerns",
      "Centralized error handling and input validation",
      "Token-based authentication and refresh token flow",
      "Logging hooks for monitoring and observability",
    ],
    github: "https://github.com/your-username/api-service-platform",
    demo: "",
  },
  {
    title: "Business Landing Page",
    category: "freelance",
    description:
      "Responsive marketing website built for a small business with performance and SEO optimization.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Fast-loading, mobile-first responsive layout",
      "Clean information architecture optimized for conversions",
      "On-page SEO best practices and semantic HTML",
      "Contact form integration ready for backend wiring",
    ],
    github: "",
    demo: "https://example.com/business-landing",
  },
  {
    title: "Admin Dashboard",
    category: "freelance",
    description:
      "Custom admin dashboard with secure login and analytics integration for internal teams.",
    techStack: ["HTML", "CSS", "JavaScript", "REST APIs"],
    features: [
      "Authentication-ready layout for secure admin access",
      "Modular card-based dashboard design",
      "Charts and KPIs powered via API integration",
      "Expandable structure for new internal tools and workflows",
    ],
    github: "",
    demo: "",
  },
];

// Resources for the resources section
const resourcesData = [
  {
    title: "Full-Stack Starter Template",
    description:
      "Minimal full-stack starter layout with Node.js, Express, and a clean client structure.",
    link: "#",
  },
  {
    title: "API Development Checklist",
    description:
      "Practical checklist for building secure, well-documented REST APIs.",
    link: "#",
  },
  {
    title: "Portfolio Boilerplate",
    description:
      "Lightweight portfolio structure designed for quick customization and deployment.",
    link: "#",
  },
  {
    title: "Automation Script Collection",
    description:
      "Utility scripts for deployment, backups, and repetitive development tasks.",
    link: "#",
  },
];

