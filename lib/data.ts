import React from "react";

import { IoMdWater } from "react-icons/io";
import { FaReact, FaTools } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/NextJsImgGallery.jpg";
import rmtdevImg from "@/public/ProjektPortfolio.jpg";
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
    title: "Internet network installer",
    location: "Pionki, PL",
    description:
      "I worked as a internet network installer for 1 year - Repair of common technical faults.",
    icon: React.createElement(FaTools),
    date: "2013 - 2014",
  },
  {
    title: "Operating a pressure washing machine",
    location: "Edinburgh, GB",
    description:
      "I worked as a pressure washing machine operator - I improved my English and gained experience using heavy jet-wash machinery.",

    icon: React.createElement(IoMdWater),
    date: "2014 - 2021",
  },
  {
    title: "FUTURE COLLARS bootcamp",
    location: "Pionki, PL",
    description:
      "I completed a very intensive bootcamp for which I received certificates and created my first bigger projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Project",
    description: "My first portfolio project in React.",
    tags: ["React", "TypeScript", "Tailwind", "Payload"],
    imageUrl: rmtdevImg,
    demo: "https://voytecportfolio.netlify.app/",
    code: "https://github.com/sn0rii/Portfolio01",
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
    demo: "https://voytec-threads.vercel.app/",
    code: "https://github.com/sn0rii/threads",
  },
  {
    title: "Next JS Gallery",
    description:
      "Final project for NextJs course, including all main features.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: corpcommentImg,
    demo: "https://voytec-img-gallery.vercel.app/",
    code: "https://github.com/sn0rii/img-gallery",
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
  "Express",
  "Framer Motion",
  "Sense of Humour",
] as const;
