"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import BackGround from "@/components/BackGround";
import ActiveSectionContexProvider from "@/constext/active-section-contex";
import { useState } from "react";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Ricardo |  Personal Portfolio",
//   description: "Ricardo is full stack developer with 8 years of experience",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState("light");
  return (
    <html lang="en" className={"!scroll-smooth " + mode}>
      <body
        className={`${inter.className} pt-28 scrollbar-design sm:pt-[8rem] w-[100vw] overflow-x-hidden  bg-gray-50 dark:bg-[#131233] text-gray-950`}
      >
        <BackGround />
        <ActiveSectionContexProvider>
          <Header setMode={setMode} />
          {children}
        </ActiveSectionContexProvider>
        <Footer />
      </body>
    </html>
  );
}
