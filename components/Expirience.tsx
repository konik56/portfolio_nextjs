"use client";

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/constext/active-section-contex";

export default function Experience() {
  const { setActiveSection, setColorForLite, timeOfLastClick } =
    useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Experience");
      setColorForLite((num: number) => -num);
    }
  }, [inView, timeOfLastClick]);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 ">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="lightgray">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                color:"#968aff",
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid #c0c0c0",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.5rem solid #c0c0c0",
              }}
              date={item.date}

              icon={item.icon}
              iconStyle={{
                background: "white",
              }}
            >
              <h3 className="font-semibold text-black capitalize">{item.title}</h3>
              <p className="font-normal text-black !mt-1">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
