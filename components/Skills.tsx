import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/constext/active-section-contex";
import { motion, MotionValue } from "framer-motion";

// Define a more specific type for the skillsData
type SkillsData = {
  [category: string]: string[] | { [subCategory: string]: string[] };
};

const skillsData: SkillsData = {
  "Frontend Development": [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind",
    "Service Worker",
  ],
  "Backend Development": {
    General: [
      ".NET",
      "Java",
      "WebSockets (SignalR)",
      "SQL Server",
      "MySQL",
      "NoSQL (MongoDB)",
      "GraphQL",
    ],
    "Spring Boot Framework": [
      "Spring Boot Web",
      "Spring Boot Actuator",
      "Spring Boot Validation",
      "Spring Data JPA",
      "Spring Cloud OpenFeign",
      "Spring Cloud Netflix Eureka",
      "Spring Cloud Load Balancer",
      "Spring Cloud Gateway",
      "Spring Cloud Config",
      "Spring Cloud Resilience4J",
      "Spring Security",
      "Spring Security OAuth2",
      "Spring Cloud Security",
      "Spring Kafka",
    ],
  },
  Testing: ["XUnit", "Jest", "Testcontainers", "Moq"],
  "Software Architecture & Principles": [
    "Design Patterns",
    "SOLID",
    "Clean Code",
    "Distributed System Design",
  ],
  "DevOps & Cloud Computing": [
    "Docker/Docker Compose",
    "Azure",
    "Serverless Computing",
  ],
  Other: ["Git", "Gradle"],
};

const Skills = () => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [ifBg, setIfBg] = useState(false);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Skills");
      setIfBg(true);
    }
  }, [inView, timeOfLastClick]);

  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * index },
    }),
  };

  const fadeBgVariants = {
    initial: { opacity: 0, x: 700 },
    animate: { opacity: 1, x: 0, transition: { duration: 3 } },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-[11rem] relative overflow-x-clip w-full text-center flex flex-col items-center"
    >
      <SectionHeading>My Skills</SectionHeading>
      <div className="flex flex-col items-center gap-6 w-full max-w-[58rem]">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <div
            key={categoryIndex}
            className="w-full bg-[#0d00ff0d] dark:bg-[#8171fb1c] rounded-lg shadow-md p-6 mb-6"
          >
            <h3 className="text-xl dark:text-white font-bold mb-4">
              {category}
            </h3>
            {Array.isArray(skills) ? (
              <ul className="flex flex-wrap justify-center gap-2 text-lg">
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                    className="border dark:bg-[#ffffffb3] bg-white border-black/[0.1] rounded-xl p-2 px-5"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            ) : (
              Object.entries(skills).map(
                ([subCategory, subSkills], subIndex) => (
                  <div key={subIndex} className="mb-4">
                    <h4 className="text-lg dark:text-white font-semibold mb-2">
                      {subCategory}
                    </h4>
                    <ul className="flex flex-wrap justify-center gap-2 text-lg">
                      {subSkills.map((skill, index) => (
                        <motion.li
                          key={index}
                          variants={fadeInAnimationVariants}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true }}
                          custom={index}
                          className="border dark:bg-[#ffffffb3] bg-white border-black/[0.1] rounded-xl p-2 px-5"
                        >
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )
              )
            )}
          </div>
        ))}
      </div>

      <motion.div
        variants={fadeBgVariants}
        initial="initial"
        animate={ifBg ? "animate" : "initial"}
        viewport={{ once: true }}
        className="bg-[#ffffff00] absolute dark:bg-[#655afba2] -z-10 top-[-50%] left-[10%] rounded-full h-[31.25rem] blur-[10rem] w-[80%]"
      ></motion.div>
    </section>
  );
};

export default Skills;
