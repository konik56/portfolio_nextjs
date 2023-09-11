"use client";
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { useActiveSectionContext } from "@/constext/active-section-contex";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import SubmitButton from "./SubmitButton";

const Contact = () => {
  const { pending } = useFormStatus();
  const { setActiveSection, setColorForLite, timeOfLastClick } =
    useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Contact");
      setColorForLite((num) => -num);
    }
  }, [inView, timeOfLastClick]);
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.9,
      }}
      viewport={{
        once: true,
      }}
      ref={ref}
      id="contact"
      className=" text-center"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="dark:text-[#ffffffc3] text-gray-700 -mt-5 mb-9">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:konik5629@gmail.com">
          {" "}
          konik5629@gmail.com{" "}
        </a>{" "}
        or through the form.
      </p>
      <form
        className=" justify-center items-center w-[min(100%, 38rem)]  flex flex-col"
        action={async (fromData) => {
          await sendEmail(fromData);
          
        }}
      >
        <input
          className="h-14 mb-3  w-full outline-black rounded-lg p-3 border border-black/10"
          type="email"
          name="sender"
          required
          maxLength={300}
          placeholder="Your email"
        />
        <textarea
          required
          name="message"
          maxLength={2000}
          placeholder="Your message"
          className="h-52 border w-full  outline-black mb-3 p-3 border-black/10 rounded-lg"
        ></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
