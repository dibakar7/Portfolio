import React from 'react';
import animePhoto from "../assets/about.png";
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin, FaKaggle, FaGoogleScholar } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import BackgroundWaves from './stringBG';

const contactLinks = [
  { label: "Email", href: "mailto:itsdibakar007@gmail.com", Icon: MdOutlineMarkEmailRead, external: false },
  { label: "LinkedIn", href: "https://linkedin.com/in/connect-dibakar", Icon: FaLinkedin, external: true },
  { label: "GitHub", href: "https://github.com/dibakar7", Icon: RxGithubLogo, external: true },
  { label: "Kaggle", href: "https://www.kaggle.com/itspartha", Icon: FaKaggle, external: true },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=78_l9LwAAAAJ&hl=en", Icon: FaGoogleScholar, external: true },
];

const AboutMeContact = ({ dayTheme }) => {
  const linkColor = dayTheme
    ? "text-blue-700 hover:text-blue-500"
    : "text-blue-300 hover:text-blue-200";

  return (
    <div
      className={`relative overflow-hidden min-h-96 w-11/12 px-6 md:px-24 shadow-2xl rounded-2xl mb-40 flex flex-col items-center backdrop-blur-sm
      ${
        dayTheme
          ? "bg-gradient-to-r from-yellow-50 via-blue-50 to-blue-100 text-black"
          : "bg-gradient-to-r from-slate-900 via-slate-800 to-gray-950 text-white"
      } p-10`}
    >
      <BackgroundWaves dayTheme={dayTheme} />

      {/* Section Header */}
      <div className="flex items-center justify-center w-full mb-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className={`mx-4 text-3xl font-bold font-display tracking-tight xs:text-2xl ${dayTheme ? "text-black" : "text-white"}`}>
          About Me
        </span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      <div className="flex flex-col md:flex-row-reverse w-full gap-6 items-stretch">
        <div className="w-full md:w-[40%] flex items-center justify-center mb-6 md:mb-0">
          <img
            src={animePhoto}
            alt="Illustration of Dibakar Biswas"
            className="w-[60%] h-auto object-contain xs:pt-5"
          />
        </div>

        <div className="w-full md:w-3/5 text-base leading-relaxed text-left md:text-justify break-words space-y-4 xs:text-sm">
          <p>
            I’m an aspiring AI/ML researcher with an M.E. in Computer Science & Engineering from Jadavpur University
            (CGPA 9.03, First Class with Distinction). I’m driven by a passion for clean code, scalable backend
            systems, and the frontiers of AI and Machine Learning.
          </p>
          <p>
            My research has led to a published journal paper on a recommendation framework for biomaterials, a
            co-authored international conference paper on regression-based selection of drug and nanocarrier
            candidates, and a thesis on deep learning for infant cry classification. Alongside research, I’ve built
            production-grade modules and added LLM-powered features to real-world applications.
          </p>
          <p>
            My focus is applied machine learning for audio and signal processing, and sustainable solutions. I have
            also worked on computer vision applications. I enjoy hard problems and always look for the most efficient
            and elegant way to solve them. My goal is to build meaningful, future-ready technologies that are not only
            efficient but truly impactful.
          </p>
          <p>Open to opportunities in AI/ML research and engineering.</p>
        </div>
      </div>

      {/* Contact Links */}
      <div className="flex flex-row flex-wrap justify-center gap-x-12 gap-y-4 mt-12 text-md xs:text-sm xs:gap-x-8">
        {contactLinks.map(({ label, href, Icon, external }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            className={`flex flex-row items-center gap-2 transition ${linkColor}`}
          >
            <Icon style={{ width: "20px", height: "20px" }} />
            <span className="inline xs:hidden">{label}</span>
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center w-full pt-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className={`mx-4 text-2xl font-bold tracking-wide ${dayTheme ? "text-black" : "text-white"}`}>*******</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>
    </div>
  );
};

export default AboutMeContact;