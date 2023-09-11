"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Expirience from "@/components/Expirience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState("light");

  return (
    <main className="flex items-center flex-col w-[100vw] min-w-[330px]">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider even />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider even />
      <Expirience />
      <SectionDivider />
      <Contact />
    </main>
  );
}
