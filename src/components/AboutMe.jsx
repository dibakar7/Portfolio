import React from 'react'
import TypeAnimationComp from './TypeAnimationComp'
import Portfolio from "../assets/portfolio-photo-sh.png"
const AboutMe = ({dayTheme}) => {
  const stringArray = ["Software Engineer", "Full Stack Developer", "AI/ML Enthusiast"]
  return (
    <div className={`min-h-96 px-20 w-11/12 shadow-md rounded-sm mb-40 flex flex-row xs:flex-col items-stretch px-5 xs:px-5 justify-between ${dayTheme ? 'day-theme' : 'night-theme'}`}>
      <div className="w-full md:w-[40%] flex items-center justify-center mb-6 md:mb-0">
        <img src={Portfolio} alt="About" className="w-[60%] h-auto object-contain xs:pt-5 pointer-events-none select-none" onContextMenu={(e) => e.preventDefault()} draggable="false"/>
      </div>

      <div className="w-[60%] xs:w-full text-center mt-5 pb-10 xs:pb-5 flex flex-col justify-center">
        <p className="text-2xl font-medium xs:text-xl">Hi 👋</p>
        <p className="text-4xl font-semibold xs:text-xl">I'm Dibakar Biswas</p>
        <TypeAnimationComp stringArray={stringArray} />
      </div>

    </div>

  )
}

export default AboutMe