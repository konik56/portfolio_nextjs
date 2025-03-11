"use client";
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { useActiveSectionContext } from "@/constext/active-section-contex";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Contact");
    }
  }, [inView, timeOfLastClick]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      ref={ref}
      id="contact"
      className="text-center"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="dark:text-[#ffffffc3] text-gray-700 -mt-5 mb-9">
        Feel free to reach out to me via phone or email:
      </p>
      <div className="text-lg space-y-4">
        <p className="flex items-center justify-center gap-2">
          <FaPhone className="text-xl dark:text-[#ffffffc3] text-gray-700" />
          <a
            className="underline dark:text-[#ffffffc3] text-gray-700"
            href="tel:+14167236356"
          >
            +1 (416) 723-6356
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaEnvelope className="text-xl dark:text-[#ffffffc3] text-gray-700" />
          <a
            className="underline dark:text-[#ffffffc3] text-gray-700"
            href="mailto:illia.konik@georgebrown.ca"
          >
            illia.konik@georgebrown.ca
          </a>
        </p>
      </div>
    </motion.section>
  );
};

export default Contact;
