"use client";
import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import BackGround from "./BackGround";
import { useActiveSectionContext } from "@/constext/active-section-contex";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { setActiveSection, setColorForLite, timeOfLastClick } =
    useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
      setColorForLite((num) => -num);
    }
  }, [inView, timeOfLastClick]);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
type ProjectCardProps = (typeof projectsData)[number];

function ProjectCard({ title, description, tags, imageUrl }: ProjectCardProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opasityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opasityProgress,
      }}
      ref={ref}
      className="group relative"
    >
      <div
        className="group-hover:dark:bg-[#4c33a7] transition group-hover:h-[130%] group-hover:w-[180%] dark:bg-[#4c33a7b4] dark:blur-[10rem] -z-10 absolute  blur-[6rem] left-[-15%] rounded-full
   h-full w-[130%] round-full group-hover:left-[-40%] group-hover:top-[-15%]
    "
      ></div>

      <section
        className="bg-gray-100 flex dark:hover:bg-[#6256b1] hover:bg-gray-200 group-even:flex-row-reverse
       rounded-[15px] mb-8 relative max-w-[20rem] sm:max-w-[30rem] md:max-w-[40rem] border h-fit sm:h-[22rem]
        border-black/5 overflow-hidden sm:pr-8
        dark:bg-[#907ddd3d]"
      >
        <div className="py-4 px-5 items-center sm:text-left pb-5 h-full flex flex-col  sm:pl-10 sm:pt-8 w-full sm:max-w-[55%] md:max-w-[50%]">
          <h3 className="text-2xl dark:text-white">{title}</h3>
          <p className="mt-2 leading-relaxed dark:text-[#e4e4e4] text-gray-700 ">
            {description}
          </p>
          <Image
            className="m-auto max-h-[20rem] py-2
             rounded-[2rem] sm:hidden w-auto pb-3"
            src={imageUrl}
            alt="My project"
            quality={95}
          ></Image>
          <ul className="flex mt-auto sm:justify-normal pt-2 justify-center flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li
                className="dark:bg-white dark:text-black bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wide text-white  rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="absolute group-hover:scale-105 hidden
        group-even:group-hover:translate-x-3 group-even:group-hover:rotate-1 
        group-hover:-rotate-1 group-hover:-translate-x-3 transition 
        group-hover:-translate-y-3 top-12 group-even:-left-40 -right-40 rounded-lg shadow-2xl  w-[20rem] sm:block md:w-[28rem]"
          src={imageUrl}
          alt="My project"
          quality={95}
        ></Image>
      </section>
    </motion.div>
  );
}
export default Projects;
