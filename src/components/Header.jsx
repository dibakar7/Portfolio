import React, { useEffect, useState } from 'react';
import nightThemeIcon from "../assets/full-moon.png";
import dayThemeIcon from "../assets/sun.png";
import Icon from "../assets/icon.PNG";
import { GoDownload } from "react-icons/go";

const RESUME_URL = "https://drive.google.com/file/d/1moVO13thTbATLAu21OTZWWT1eECwe1h4/view?usp=sharing";

const Header = ({ dayTheme, setDayTheme, scrollToContact }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Animated underline shared by the text links
  const underline =
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header
      className={`fixed top-0 left-0 w-full h-16 z-50 sm:px-10 md:px-10 shadow-md flex items-center justify-between xs:px-5 xs:h-10 backdrop-blur-md ${
        dayTheme
          ? 'bg-gradient-to-r from-yellow-50/80 to-blue-100/80 text-black'
          : 'bg-gradient-to-r from-slate-800/80 to-gray-900/80 text-white'
      }`}
    >
      <div className="w-ex mx-auto h-full flex items-center justify-between">
        {/* Left Section */}
        <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
          <img
            src={Icon}
            alt="Dibakar's logo"
            className="w-8 h-8 rounded-md xs:w-6 xs:h-6 transition-transform duration-500 group-hover:rotate-[360deg]"
          />
          <span className="font-display font-semibold text-lg tracking-tight hidden sm:block">
            Dibakar's Portfolio
          </span>
        </a>

        {/* Right Section */}
        <nav className="flex items-center gap-8 xs:gap-5">
          <button
            onClick={scrollToContact}
            className={`relative text-sm font-medium hidden sm:block ${underline}`}
          >
            Contact
          </button>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Download resume"
            className={`group flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full border transition-all duration-300 xs:px-2 xs:py-1 ${
              dayTheme
                ? 'border-gray-400 hover:bg-black hover:text-white hover:border-black'
                : 'border-gray-500 hover:bg-white hover:text-black hover:border-white'
            }`}
          >
            <span className="xs:hidden">Resume</span>
            <GoDownload className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>

          <button
            onClick={() => setDayTheme((prev) => !prev)}
            aria-label={dayTheme ? "Switch to night theme" : "Switch to day theme"}
            title={dayTheme ? "Night mode" : "Day mode"}
            className="rounded-full transition-transform duration-500 hover:rotate-45 hover:scale-110"
          >
            <img
              src={dayTheme ? nightThemeIcon : dayThemeIcon}
              alt=""
              className="w-8 h-8 xs:w-6 xs:h-6"
            />
          </button>
        </nav>
      </div>

      {/* Scroll progress line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-blue-500 to-cyan-400"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;