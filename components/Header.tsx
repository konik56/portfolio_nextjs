"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveSectionContext } from "@/constext/active-section-contex";
const Header = ({
  setMode,
}: {
  setMode: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const {
    activeSection,
    setActiveSection,
    setTimeOfLastClick,
    colorForLite,
    setColorForLite,
  } = useActiveSectionContext();

  //Adaptive for Phones

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add an event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine the threshold width
  const thresholdWidth = 640;

  const [showMenu, setShowMenu] = useState(false);

  if (windowWidth < thresholdWidth) {
    return (
      <header className="z-[999] relative">
        <div className=" m-2 px-3 fixed top-0 right-0 z-10 flex w-full justify-end">
          <input
            type="checkbox"
            id="checkbox"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          />

          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>
        {showMenu && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration:1
            }}
          >
            <div
              className="fixed top-0 right-0 h-[20rem] w-[10rem] 
       border border-white border-opacity-40
      bg-[#ffffff7d]  shadow-lg shadow-black/[0.03]
       backdrop-blur-[0.5rem]  rounded-b
       dark:bg-gray-950 dark:border-black/40 
       dark:bg-opacity-75"
            >
              {" "}
            </div>

            <nav className="mt-[3rem] flex flex-col w-[10rem]  justify-center items-center fixed top-0 right-0">
              <ul
                className="flex flex-col gap-x-1 flex-wrap justify-center 
           text-[1rem] font-medium text-gray-400 
            "
              >
                {links.map((link) => (
                  <li
                    onClick={() => {
                      setColorForLite((num) => -num);
                      setTimeOfLastClick(Date.now());
                      setActiveSection(link.name);
                    }}
                    className="flex items-center justify-center relative "
                    key={link.hash}
                  >
                    <Link
                      className={
                        (activeSection === link.name
                          ? "text-gray-950 dark:text-white "
                          : "") + "px-0 lg:px-[0.4rem] py-1"
                      }
                      href={link.hash}
                    >
                      <div>
                        {link.name}

                        {activeSection === link.name && (
                          <motion.span
                            transition={{
                              duration: 0.2,
                            }}
                            layoutId="activeSection"
                            className={
                              (colorForLite == 1
                                ? "bg-[#ffc7c8] "
                                : "bg-[#bdb6fc] ") +
                              " dark:bg-[#8f4fff67] absolute -z-10 inset-0 rounded-[2rem]"
                            }
                          ></motion.span>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
                <li className="flex items-center justify-center relative mt-[2rem]">
                  <label>
                    <input
                      className="toggle-checkbox"
                      type="checkbox"
                      onClick={() =>
                        setMode((prev: string) =>
                          prev === "light" ? "dark" : "light"
                        )
                      }
                    />
                    <div className="toggle-slot">
                      <div className="sun-icon-wrapper">
                        <div
                          className="iconify sun-icon"
                          data-icon="feather-sun"
                          data-inline="false"
                        ></div>
                      </div>
                      <div className="toggle-button"></div>
                      <div className="moon-icon-wrapper">
                        <div
                          className="iconify moon-icon"
                          data-icon="feather-moon"
                          data-inline="false"
                        ></div>
                      </div>
                    </div>
                  </label>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </header>
    );
  } else {
    return (
      <header className="z-[999] relative">
        <motion.div
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-1/2 h-[5rem] w-full 
        rounded-none border border-white border-opacity-40
        bg-[#ffffff7d]  shadow-lg shadow-black/[0.03] lg:w-[45rem]
         backdrop-blur-[0.5rem] sm:top-4 sm:h-[3.25rem] sm:w-[630px] md:w-[750px] 
         sm:rounded-full sm:m-auto dark:bg-gray-950 dark:border-black/40 
         dark:bg-opacity-75"
        >
          {" "}
        </motion.div>
        <div
          className="flex justify-center items-center w-full 
          rounded-none"
        >
          <nav
            className="flex fixed top-0  sm:top-4 sm:h-[3.25rem] sm:w-full 
         sm:rounded-full sm:m-auto"
          >
            <ul
              className="flex w-[25rem] gap-x-1 flex-wrap justify-center 
             text-[1rem] font-medium text-gray-400 lg:text-[1.1rem]
              sm:w-full  lg:text-lg sm:flex-nowrap md:gap-[0.6rem]
              sm:text-[0.9rem] sm:gap-1"
            >
              {links.map((link) => (
                <li
                  onClick={() => {
                    setColorForLite((num) => -num);
                    setTimeOfLastClick(Date.now());
                    setActiveSection(link.name);
                  }}
                  className="flex items-center justify-center relative "
                  key={link.hash}
                >
                  <Link
                    className={
                      (activeSection === link.name
                        ? "text-gray-950 dark:text-white "
                        : "") + "px-0 lg:px-[0.4rem] py-1"
                    }
                    href={link.hash}
                  >
                    <motion.div
                      className="relative p-1 px-2"
                      initial={{ y: -100 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {link.name}

                      {activeSection === link.name && (
                        <motion.span
                          transition={{
                            duration: 0.2,
                          }}
                          layoutId="activeSection"
                          className={
                            (colorForLite == 1
                              ? "bg-[#ffc7c8] "
                              : "bg-[#bdb6fc] ") +
                            " dark:bg-[#8f4fff67] absolute -z-10 inset-0 rounded-[2rem]"
                          }
                        ></motion.span>
                      )}
                    </motion.div>
                  </Link>
                </li>
              ))}
              <li className="flex items-center justify-center relative ">
                <motion.label
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <input
                    className="toggle-checkbox"
                    type="checkbox"
                    onClick={() =>
                      setMode((prev: string) =>
                        prev === "light" ? "dark" : "light"
                      )
                    }
                  />
                  <div className="toggle-slot">
                    <div className="sun-icon-wrapper">
                      <div
                        className="iconify sun-icon"
                        data-icon="feather-sun"
                        data-inline="false"
                      ></div>
                    </div>
                    <div className="toggle-button"></div>
                    <div className="moon-icon-wrapper">
                      <div
                        className="iconify moon-icon"
                        data-icon="feather-moon"
                        data-inline="false"
                      ></div>
                    </div>
                  </div>
                </motion.label>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
};

export default Header;
