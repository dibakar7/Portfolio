import React from "react";
import { TypeAnimation } from "react-type-animation";

const MAX_FONT = "2.25rem";
const MIN_FONT = "0.5rem";
const CHAR_WIDTH = 0.6;
const SIDE_SPACE = "2rem";

const TypeAnimationComp = ({ stringArray }) => {
  const longest = Math.max(...stringArray.map((s) => s.length), 1) + 1;
  const fontSize = `clamp(${MIN_FONT}, calc((100vw - ${SIDE_SPACE}) / ${
    longest * CHAR_WIDTH
  }), ${MAX_FONT})`;

  return (
    <TypeAnimation
      sequence={[
        stringArray[0],
        1000,
        " ",
        () => {},
        stringArray[1],
        1000,
        " ",
        () => {},
        stringArray[2],
        1000,
        () => {},
      ]}
      wrapper="span"
      speed={50}
      className="inline-block max-w-full whitespace-nowrap text-purple-600 font-semibold"
      style={{ fontSize }}
      repeat={Infinity}
    />
  );
};

export default TypeAnimationComp;
