import React from "react";

interface BoxProps { children: React.ReactNode }

const Box: React.FC<BoxProps> = ({ children }: BoxProps) => {
  return (
    <section style={{ padding: "1em", border: "5px solid purple" }}>
      {children}
    </section>
  );
};

export default Box;
