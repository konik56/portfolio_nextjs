"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/constext/active-section-contex";
import { motion } from "framer-motion";

const Skills = () => {
  const { setActiveSection, setColorForLite, timeOfLastClick } =
    useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  const [ifBg, setIfBg] = useState(false);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Skills");
      setColorForLite((num) => -num);
      setIfBg(true);
    }
  }, [inView, timeOfLastClick]);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  const fadeBgVariants = {
    initial: {
      opacity: 0,
      x: 700,
    },
    animate: () => ({
      opacity: 1,
      x: 0,
      transition: { duration: 3 },
    }),
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-[11rem] relative  overflow-x-clip w-full text-center "
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex justify-center m-auto max-w-[58rem] flex-wrap text-lg gap-2">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="border  bg-[#f5f5f555] dark:bg-white border-black/[0.1] rounded-xl p-2 px-5"
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>

      <motion.div
        variants={fadeBgVariants}
        initial="initial"
        animate={ifBg ? "animate" : "initial"}
        viewport={{
          once: true,
        }}
        className="bg-[#ffffff00] absolute dark:bg-[#655afba2] -z-10 top-[-50%] left-[10%]
   rounded-full h-[31.25rem] round-full  blur-[10rem]  w-[80%]"
      ></motion.div>
    </section>
  );
};

export default Skills;
