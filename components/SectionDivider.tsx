"use client";
import React from "react";
import { motion } from "framer-motion";

type SectionDividerProps = {
  even?: boolean;
};

const SectionDivider: React.FC<SectionDividerProps> = () => {
  return (
    <motion.div
      transition={{ type: "tween", duration: 0.6, delay: 0.2 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className={`sm:h-[90px] h-[0.3rem] w-[7rem] m-4 mb-8 mt-8 sm:mb-20 sm:mt-20 rounded-2xl sm:w-[0.3rem] bg-[#bdb6fc] dark:bg-[#655afba2]"
      }`}
    ></motion.div>
  );
};

export default SectionDivider;
