import React, { ReactNode } from "react";

const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-3xl dark:text-white text-center font-medium mb-6">
      {children}
    </h2>
  );
};

export default SectionHeading;
