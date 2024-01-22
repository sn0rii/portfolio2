import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { IoMdWater } from "react-icons/io";
import { FaReact, FaTools } from "react-icons/fa";
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
    title: "Internet network installer",
    location: "Pionki, PL",
    description:
      "I worked as a internet network installer for 1 year in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(FaTools),
    date: "2013 - 2014",
  },
  {
    title: "Operating a pressure washing machine",
    location: "Edinburgh, GB",
    description: "I worked as a pressure washing machine opeartor ",
    // "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",,
    icon: React.createElement(IoMdWater),
    date: "2014 - 2021",
  },
  {
    title: "FUTURE COLLARS bootcamp",
    location: "Pionki, PL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
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
  "Express",
  "Framer Motion",
] as const;
