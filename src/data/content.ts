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

export interface Tech {
  name: string;
  icon: SimpleIcon;
  color?: string;
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
  email: "ammayken@email.com",
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
