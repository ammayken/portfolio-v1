import type { SimpleIcon } from "simple-icons";
import {
  siReact, siTypescript, siTailwindcss, siNodedotjs,
  siLaravel, siAngular, siGit, siWordpress,
  siMysql, siElementor, siPhp, siFigma,
} from "simple-icons";

export interface Social {
  label: string;
  url: string;
  lead: string;
  hoverBg?: string; 
  hoverText?: string; 
}

export interface Profile {
  name: string;
  title: string;
  /** Optional image path, e.g. "/avatar.jpg" (put the file in /public) */
  avatar?: string;
  /** The intro is split so one phrase can be highlighted */
  intro: { before: string; highlight: string; after: string };
  socials: Social[];
  email: string;
  footerLinks?: FooterLink[];
}

export interface JourneyItem {
  role: string;
  org: string;
  url?: string;
  period: string;
}

export interface Work {
  title: string;
  tagline: string;
  domain: string;
  url: string;
  /** Optional preview image, e.g. "/works/project-one.png" */
  image?: string;
}

export interface Note {
  title: string;
  summary: string;
  date: string;
  url: string;
}

export interface Service {
  title: string;
  summary: string;
}

export interface Tech {
  name: string;
  icon: SimpleIcon;
  color?: string;
}

export interface SkillGroup {
  title: string;
  /** Lucide icon drawing: one SVG path `d` string per shape */
  iconPaths: string[];
  skills: string[];
}

export interface FooterLink { 
  label: string; 
  url: string 
}



export const profile: Profile = {
  name: "Ken Matthew Ammay",
  title: "Full-Stack Developer",
  intro: {
    before: "Hi! I'm a Web Developer with ",
    highlight: "3 years of professional experience",
    after:
      " in website development, front-end development, and building responsive web applications. I specialize in creating modern, performance-optimized, and SEO-friendly websites using industry-standard technologies and best coding practices.",
  },
  socials: [
    { 
      label: "GitHub", 
      url: "https://github.com/ammayken", 
      lead: "writing code on",
      hoverBg: "#232925",
      hoverText: "#F2F5F3",
    },
    { 
      label: "LinkedIn", 
      url: "https://linkedin.com/in/ken-matthew-ammay-883869250", 
      lead: "or connect with me professionally on",
      hoverBg: "#0077B5",
      hoverText: "#ffffff",
    },
  ],
  email: "ammayken@gmail.com",
  footerLinks: [
    { 
      label: "Facebook", 
      url: "https://www.facebook.com/KEEEEEEEEEEEEEEEEEEEN"
    }
  ]
};


export const journey: JourneyItem[] = [
  {
    role: "Junior Web Developer",
    org: "iFormatLogic I.T Solutions",
    url: "https://iformatlogic.com/",
    period: "2023 – 2026",
  },
  {
    role: "Software Developer Intern",
    org: "Pilipinas Micro-Matrix Technology, Inc",
    url: "https://pmti.biz/",
    period: "2023",
  },
  {
    role: "BS Information Technology",
    org: "Gordon College",
    period: "2019 - 2023",
  },
];

export const works: Work[] = [
  {
    title: "Project One",
    tagline: "A short line about what it does",
    domain: "project-one.dev",
    url: "https://project-one.dev",
  },
  {
    title: "Project Two",
    tagline: "Another one-line description",
    domain: "project-two.app",
    url: "https://project-two.app",
  },
  {
    title: "Project Three",
    tagline: "A third project worth showing",
    domain: "project-three.com",
    url: "https://project-three.com",
  },
  {
    title: "Project Four",
    tagline: "Keep taglines short and specific",
    domain: "project-four.io",
    url: "https://project-four.io",
  },
];

export const notes: Note[] = [
  {
    title: "A Post About Something You Built",
    summary:
      "One or two sentences summarizing the post. Long summaries get trimmed to two lines automatically.",
    date: "Oct 5, 2026",
    url: "#",
  },
  {
    title: "What I Learned Shipping My First App",
    summary: "Another short summary that gives the reader a reason to click through.",
    date: "Sep 19, 2026",
    url: "#",
  },
  {
    title: "Notes on Learning TypeScript",
    summary: "A third post. Delete the Notes section in App.tsx if you don't want a blog.",
    date: "Sep 16, 2026",
    url: "#",
  },
];

export const services: Service[] = [
  {
    title: "Responsive Business Website Development",
    summary: "I build modern, responsive business websites using WordPress and Elementor. I focus on creating clean layouts, user-friendly navigation, and mobile-friendly designs that help businesses establish a professional online presence."
  },
  {
    title: "Custom Web Application Development",
    summary: "I develop custom web applications using Laravel and React, building functional and scalable solutions based on specific project requirements. I work on both front-end and back-end development, creating interactive user interfaces and reliable application functionalities."
  },
  {
    title: "Website Performance & SEO Optimization",
    summary: "I improve existing websites by focusing on loading speed, performance, and search engine optimization. I work on optimizing website structure, improving mobile responsiveness, and implementing SEO best practices."
  }
];

export const stack: Tech[] = [
  { name: "Laravel", icon: siLaravel  },
  { name: "Node.js", icon: siNodedotjs },
  { name: "React", icon: siReact },
  { name: "Angular", icon: siAngular, color: "#dd0031" },
  { name: "TypeScript", icon: siTypescript},
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "WordPress", icon: siWordpress },
  { name: "Elementor", icon: siElementor },
  { name: "Php", icon: siPhp },
  { name: "MySQL", icon: siMysql },
  { name: "Figma", icon: siFigma },
  { name: "Git", icon: siGit  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend and Web",
    iconPaths: ["m18 16 4-4-4-4", "m6 8-4 4 4 4", "m14.5 4-5 16"],
    skills: ["HTML", "CSS", "JavaScript", "JQuery", "React", "Vue.js", "Angular", "Tailwind CSS", "Bootstrap", "Responsive Design"]
  },
  {
    title: "Backend and Data",
    iconPaths: [
      "M3 5a9 3 0 1 0 18 0a9 3 0 1 0-18 0Z",
      "M3 5V19A9 3 0 0 0 21 19V5",
      "M3 12A9 3 0 0 0 21 12",
    ],
    skills: ["PHP", "Laravel", "Node.js", "Express.js", "REST APIs", "MySQL", "SQL", "Redis", "BullMQ", "ERD Design", "Database Management", "Authentication"]
  },
  {
    title: "UI/UX Design and SEO",
    iconPaths: [
      "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
      "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
      "m2.3 2.3 7.286 7.286",
      "M9 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z",
    ],
    skills: ["Figma", "Wireframing", "UI/UX Design", "WordPress", "Elementor", "Gutenberg", "WordPress page builders", "Custom WordPress Themes", "SEO Optimization", "Google Analytics"]
  },
  {
    title: "Tools and Workflows",
    iconPaths: [
      "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    ],
    skills: ["Git", "GitHub", "Postman", "VS Code", "CLI", "Slack", "Google Workspace", "Claude", "Codex", "DigitalOcean", "Deployment", "Server Management"]
  }
];
