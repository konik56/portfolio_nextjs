import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FiBook } from 'react-icons/fi';
import pieshop from "@/public/pie.jpg";
import youtube from "@/public/youtube.jpg";
import xmlconverter from "@/public/xml.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated hight scholl",
    location: "Kiyv, UA",
    description:
      'I graduated from Polytechnic Lyceum of NTUU "KPI", with advanced math program',
    icon: React.createElement(FiBook),
    date: "2015 - 2021",
  },
  {
    title: "George Brown College",
    location: "Toronto, ON",
    description:
      "I'm currently studing on Computer Programming and Analisys 3 year program",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Toronto, ON",
    description:
      "Also currently I work as a full-stack developer at Dayforce. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "YouTube Clone",
    description:
      "React.js Web app which copies the interface of YouTube and lavarages Rapid API integration to fetch realtime videos data and display it to a user depending on a URL.",
    tags: ["React", "Tailwind", "Rapid API"],
    imageUrl: youtube,
  },
  {
    title: "Web Pie Shop",
    description: "Online Shop build utilising ASP.NET CORE framework.",
    tags: [
      "MVC",
      "Bootstrap",
      "ASP.NET CORE",
      "MySQL",
      "xUnit",
      "Entity Framework",
      "Razor Pages",
    ],
    imageUrl: pieshop,
  },
  {
    title: "Configuration Converter",
    description:
      "Created a Legacy to Unifed Configuration and Localization Converter. To populate proper XML file to SQL Server on clock device update ",
    tags: [".NET", "SQL Server", "Postman", "Design Patterns"],
    imageUrl: xmlconverter,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Docket",
  "Git",
  "Tailwind",
  "SQL Server",
  "Wireshark",
  ".NET",
  "Java",
  "XUnit",
  "Mocq",
  "Design Patterns",
  "SOLID",
  "Clean Code",
] as const;
