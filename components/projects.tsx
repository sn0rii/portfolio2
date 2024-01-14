import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React from "react";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>

      <Image src={imageUrl} alt={title} quality={95} />
    </section>
  );
}
