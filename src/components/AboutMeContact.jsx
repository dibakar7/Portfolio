import React from 'react'
import animePhoto from "../assets/about.png"
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaKaggle } from "react-icons/fa";

const AboutMeContact = ({dayTheme}) => {
  return (
    <div className={`min-h-96 w-11/12 px-15 shadow-md rounded-sm mb-40 flex flex-col items-center xs:px-10 ${dayTheme ? 'bg-gradient-to-r from-yellow-50 to-blue-100 text-black' : 'bg-gradient-to-r from-slate-800 to-gray-900 text-white'} p-10`}>
        <div className="flex items-center justify-center w-full mb-10">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="mx-4 text-3xl font-bold tracking-wide xs:text-2xl">About Me</span>
            <hr className="flex-grow border-t border-gray-400" />
        </div>
        <div className="flex flex-col md:flex-row-reverse w-full gap-6 items-stretch">
          <div className="w-full md:w-[40%] flex items-center justify-center mb-6 md:mb-0">
            <img src={animePhoto} alt="doddle-image" className="w-[60%] h-auto object-contain xs:pt-5" />
          </div>
          <div className="w-full md:w-3/5 text-base leading-relaxed text-justify break-words xs:text-sm">
            I’m a postgraduate student in Computer Science & Engineering at Jadavpur University, driven by a deep passion for clean code, scalable backend systems, and the emerging frontiers of AI and Machine Learning. With a strong academic foundation and hands-on experience from internships, I’ve developed production-grade modules and integrated cutting-edge LLM features into real-world applications.
            <br /><br />
            I constantly strive for optimal approaches and elegant solutions, love to face and handle challenges. Guided by a clear vision to build meaningful, future-ready technologies, I aim to contribute solutions that are not only efficient but truly impactful.
          </div>
        </div>


        <div className="text-md flex flex-row gap-[80px] mt-12 xs:text-sm xs:gap-[3rem]">
          <a href="mailto:itsdibakar007@gmail.com" className="text-primary flex flex-row gap-2 hover:text-secondary transition">
            <MdOutlineMarkEmailRead style={{width:"20px", height: "20px"}} />
            <span className="inline xs:hidden">Email</span>
          </a>
          <a href="https://linkedin.com/in/connect-dibakar" target="_blank" rel="noreferrer" className="text-primary flex flex-row gap-2 hover:text-secondary transition">
            <FaLinkedin style={{width:"20px", height: "20px"}} />
            <span className="inline xs:hidden">LinkedIn</span>
          </a>
          <a href="https://github.com/dibakar7" target="_blank" rel="noreferrer" className="text-primary flex flex-row gap-2 hover:text-secondary transition">
            <RxGithubLogo style={{width:"20px", height: "20px"}} />
            <span className="inline xs:hidden">GitHub</span>
          </a>
          <a href="https://www.kaggle.com/itspartha" target="_blank" rel="noreferrer" className="text-primary flex flex-row gap-2 hover:text-secondary transition">
            <FaKaggle style={{width:"20px", height: "20px"}} />
            <span className="inline xs:hidden">Kaggle</span>
          </a>
        </div>
        <div className="flex items-center justify-center w-full pt-10">
          <hr className="flex-grow border-t border-gray-400" />
          <span className={`mx-4 text-2xl font-bold tracking-wide ${dayTheme ? 'text-black' : 'text-white'}`}>*******</span>
          <hr className="flex-grow border-t border-gray-400" />
        </div>
    </div>
  )
}

export default AboutMeContact