import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/NextJsImgGallery.jpg";
import rmtdevImg from "@/public/ProjektMarket.jpg";
import wordanalyticsImg from "@/public/ProjektThreads.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Market Project",
    description: "Fullstack E-Commerce Marketplace for Digital Products.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Shadcn-ui",
      "Payload",
      "MongoDb",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Threads Clone",
    description: "Fullstack threads clone with authorization(clerk).",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Shadcn-ui",
      "Clerk",
      "MongoDb",
    ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Next JS Gallery",
    description:
      "Final project for NextJs course, including all main features.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
