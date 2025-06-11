import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeAnimationComp = ({stringArray}) => {
    return (
        <TypeAnimation
        sequence={[
            stringArray[0],
            1000,
            ' ',
            () => {},
            stringArray[1],
            1000,
            ' ',
            () => {},
            stringArray[2],
            1000,
            ()=>{},
          ]}
          wrapper="span"
          speed={50}
          className="text-purple-600 font-semibold text-4xl md:text-2xl lg:text-4xl xs:text-xl"
          repeat={Infinity}
        />
      );
}

export default TypeAnimationComp