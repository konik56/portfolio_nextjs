"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/constext/active-section-contex";

const About = () => {
  const { setActiveSection, setColorForLite, timeOfLastClick } =
    useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
      setColorForLite((num) => -num);
    }
  }, [inView, timeOfLastClick]);
  return (
    <motion.section
      ref={ref}
      className=" dark:text-white max-w-[45rem] text-center leading-8  scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 ">
        Born and raised in Ukraine, I was immersed in a culture rich in history
        and tradition. Early on, my fascination with the complexities of
        mathematics led me to participate in advanced programs throughout my
        schooling. In 2022, I embarked on an exciting new chapter of my life by
        relocating to Canada. Eager to further my education and pursue my
        passion for technology, I enrolled in the Computer Programming and
        Analysis program at George Brown College. Endlessly curious and driven
        by the opportunity to delve into new technologies, I found my calling as
        a full stack developer at Dayforce. Each day at Dayforce presents fresh
        challenges and opportunities for growth, fueling my passion for software
        development. I am dedicated to continuously expanding my knowledge and
        skills, pushing the boundaries of what I can achieve in this dynamic
        field.
      </p>
    </motion.section>
  );
};

export default About;
function setActiveSection(arg0: string) {
  throw new Error("Function not implemented.");
}
