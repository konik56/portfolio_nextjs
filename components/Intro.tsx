"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { GrInstagram } from "react-icons/gr";
import { RxGithubLogo } from "react-icons/rx";
import { useActiveSectionContext } from "@/constext/active-section-contex";
import { useInView } from "react-intersection-observer";

const Intro = () => {
  const {
    setActiveSection,
    setTimeOfLastClick,
    setColorForLite,
    timeOfLastClick,
  } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
      setColorForLite((num) => -num);
    }
  }, [inView, timeOfLastClick]);
  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] z-10 scroll-mt-[28rem] text-center"
    >
      <div className="flex items-center justify-center ">
        <motion.div
          transition={{ type: "tween", duration: 0.6 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-fit bg-gradient-to-b from-[#ffffff] p-4 pt-5 dark:from-[#000] to-transparent rounded-t-[170px] "
        >
          <Image
            src="/images/me.png"
            priority={true}
            quality={95}
            alt="My Image"
            width={300}
            height={200}
          />
        </motion.div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.6 }}
        className="mb-10 dark:text-white mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
      >
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building sites & apps. My focus is React (Next.js)
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.6, delay: 0.1 }}
        className="flex flex-wrap flex-row items-center justify-center gap-2"
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setColorForLite((num) => -num);

            setTimeOfLastClick(Date.now());
          }}
          className="bg-gray-900 group dark:bg-[#554f96] transition-all border outline-none hover:scale-105 hover:bg-[#bdb6fc] focus:scale-105 border-gray-900 text-white w-fit  px-7 py-3 rounded-full flex items-center gap-2"
        >
          Contact me
          <BsArrowRight className="text-lg group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="bg-white border hover:scale-105 transition-all hover:bg-[#a39fde] focus:scale-105  border-gray-900 text-black w-fit  px-7 py-3 rounded-full flex items-center gap-2"
        >
          Download CV <HiDownload className="text-lg" />
        </a>
        <div className="flex gap-2">
          <a
            href=""
            className="text-[1.2rem] hover:scale-105 transition-all dark:hover:bg-[#a39fde] hover:bg-[#fed5d6] focus:scale-105 border border-gray-900 bg-white text-black w-fit  p-4 rounded-full flex items-center gap-2"
          >
            <BsLinkedin />
          </a>
          <a
            href=""
            className="bg-white border hover:scale-105 transition-all dark:hover:bg-[#a39fde] hover:bg-[#fed5d6] focus:scale-105 border-gray-900 text-black w-fit  p-4 rounded-full flex items-center gap-2"
          >
            <RxGithubLogo className="text-[1.2rem]" />
          </a>
          <a
            href=""
            className="bg-white border hover:scale-105 transition-all dark:hover:bg-[#a39fde] hover:bg-[#fed5d6] focus:scale-105 border-gray-900 text-black w-fit  p-4 rounded-full flex items-center gap-2"
          >
            <GrInstagram className="text-[1.2rem]" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
