import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FiBook } from "react-icons/fi";
import pieshop from "@/public/pie.jpg";
import youtube from "@/public/youtube.jpg";
import xmlconverter from "@/public/xml.jpg";
import taskforce from "@/public/taskforce.jpg";
import leetcode from "@/public/leetcode.jpg";

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
    title: "Task Force",
    description:
      "Workforce management application. It enables employees to track schedules, punch in/out, start/end breaks. Also it provides manager tools for tracking and managing worked hours, clock setting, and employees schedules.",
    tags: ["React", "Spring Boot", "PostgreSQL", "MVC"],
    imageUrl: taskforce,
  },
  {
    title: "YouTube Clone",
    description:
      "React.js Web app which copies the interface of YouTube and lavarages Rapid API integration to fetch realtime videos data and display it to a user depending on a URL.",
    tags: ["React", "Tailwind", "Rapid API"],
    imageUrl: youtube,
  },
  {
    title: "LeetCode",
    description:
      "I have solved over 140 leetcode tasks applying various algorithms and methodologies",
    tags: ["LeetCode"],
    imageUrl: leetcode,
  },
  {
    title: "Web Pie Shop",
    description:
      "Online pie shop sells various types of pies, allowing customers to browse, customize, and order pies for delivery or pickup.",
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
