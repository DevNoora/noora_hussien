import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "The 1st on my branch",
          "Full Stack Developer",
          "Project manager",
          "Freelancer",
          "Full Stack Developer",
          "vm ware",
          "Flutter developer",
          "Linux ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 0,
      }}
    />
  );
}

export default Type;
