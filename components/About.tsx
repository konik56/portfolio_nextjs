"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/constext/active-section-contex";

const About = () => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
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
      <p className="mb-3">
        {" "}
        I am a full-time full-stack developer at Dayforce, where my team
        develops a workforce management solution. For the past 1.5 years, I have
        been working with a React frontend and a .NET/SQL Server backend,
        gaining extensive experience across different parts of the application.
        I have worked on the frontend, implementing complex business logic and
        offline capabilities while adhering to accessibility requirments using
        React and TypeScript. On the backend, I have developed endpoints
        following clean code principles , optimized services, and written
        various SQL queries for different tasks. Additionally, I have tackled
        complex bugs related to application logic and thread safety. I have also
        been involved in developing automated UI tests.
      </p>
      <p className="mb-3">
        I am highly communicative and confident in public speaking, which allows
        me to collaborate effectively in any team setting. I thrive in teamwork
        environments, always being polite, respectful, and approachable, ready
        to offer help when needed. I am also eager to take on challenging tasks,
        even when I have no prior knowledge, as I view these challenges as
        opportunities to learn and grow. With strong leadership qualities, I am
        comfortable guiding processes and suggesting the best path for the team
        to reach a solution. I am always punctual, committed to delivering
        results on time, and never shy away from asking questions or clarifying
        aspects to ensure a thorough understanding of the task at hand.
      </p>
      <p className="mb-3 ">
        In my free time, I am always eager to learn something new and expand my
        knowledge. I have a strong interest in distributed systems, OOP design
        principles, cloud technologies, software optimization approaches,
        various algorithms and datastructures.
      </p>
    </motion.section>
  );
};

export default About;
function setActiveSection(arg0: string) {
  throw new Error("Function not implemented.");
}
