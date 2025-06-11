import React from 'react'
import animePhoto from "../assets/about.png"

const AboutMeContact = ({dayTheme}) => {
  return (
    <div className={`min-h-96 w-11/12 px-15 shadow-md rounded-sm mb-40 flex flex-col items-center xs:px-10 ${dayTheme ? `day-theme` : `night-theme`} p-10`}>
        <div className="flex items-center justify-center w-full mb-10">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="mx-4 text-3xl font-bold tracking-wide">About Me</span>
            <hr className="flex-grow border-t border-gray-400" />
        </div>
        <div className="flex flex-col md:flex-row-reverse w-full gap-6 items-stretch">
          <div className="w-full md:w-[40%] flex items-center justify-center mb-6 md:mb-0">
            <img src={animePhoto} alt="doddle-image" className="w-[60%] h-auto object-contain xs:pt-5" />
          </div>
          <div className="w-full md:w-3/5 text-base leading-relaxed text-justify break-words">
            I’m a postgraduate student in Computer Science & Engineering at Jadavpur University, driven by a deep passion for clean code, scalable backend systems, and the emerging frontiers of AI and Machine Learning. With a strong academic foundation and hands-on experience from internships, I’ve developed production-grade modules and integrated cutting-edge LLM features into real-world applications.
            <br /><br />
            I constantly strive for optimal approaches and elegant solutions, love to face and handle challenges. Guided by a clear vision to build meaningful, future-ready technologies, I aim to contribute solutions that are not only efficient but truly impactful.
          </div>
        </div>


        <div className="flex gap-6 mt-10">
            <a href="mailto:itsdibakar007@gmail.com" className="text-primary hover:text-secondary transition">📧 Email</a>
            <a href="https://linkedin.com/in/connect-dibakar" target="_blank" rel="noreferrer" className="text-primary hover:text-secondary transition">🔗 LinkedIn</a>
            <a href="https://github.com/dibakar7" target="_blank" rel="noreferrer" className="text-primary hover:text-secondary transition">💻 GitHub</a>
        </div>
    </div>
  )
}

export default AboutMeContact