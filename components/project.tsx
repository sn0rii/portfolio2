"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  demo,
  code,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 "
    >
      <section className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]  rounded-lg hover:bg-gray-200 transition sm:group-even:even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] ">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 ">
            {description}
          </p>
          <div className="flex gap-2 py-2 items-center">
            <a
              href={demo}
              // className="bg-white px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black rounded-full dark:text-black/70 borderBlack hover:scale-100  "
              className=" py-1 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
              target="_blank"
            >
              demo
            </a>
            <a
              href={code}
              // className="bg-white px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black rounded-full dark:text-black/70 borderBlack "
              className="py-1 transition bg-white border rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 border-black/10 dark:bg-white/10"
              target="_blank"
            >
              code
            </a>
          </div>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className=" absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-[12rem] rounded-t-lg shadow-2xl 
        transition group-hover:scale-[1.04]
        group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 
         
        group-even:group-hover:-translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40 "
        />
      </section>
    </motion.div>
  );
}
