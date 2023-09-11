"use client";
import { motion } from "framer-motion";
import React from "react";

const BackGround = () => {
  return (
    <div className="absolute inset-0 w-[100%] h-[50rem] overflow-hidden">
      <motion.div
        transition={{ type: "tween", duration: 2 }}
        initial={{ opacity: 0, x: 700 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-[#fed5d6] dark:bg-[#655afba2] absolute -z-10 top-[-6rem] right-[-6rem]
   rounded-full h-[31.25rem] w-[31.25rem] round-full  blur-[6rem] dark:blur-[10rem] sm:w-[68.75rem]"
      ></motion.div>
      <motion.div
        transition={{ type: "tween", duration: 2 }}
        initial={{ opacity: 0, x: -1200 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-[#bdb6fc] dark:bg-[#d47ee382] dark:blur-[10rem] -z-10 absolute top-[-1rem] blur-[6rem] left-[-35rem] rounded-full
   h-[31.25rem] w-[50rem] round-full  sm:w-[55rem]
    md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
      ></motion.div>
    </div>
  );
};

export default BackGround;
