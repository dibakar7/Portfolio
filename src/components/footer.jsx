import React from 'react';
import Icon from '../assets/icon.PNG';
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin, FaGoogleScholar, FaKaggle, FaArrowUp } from "react-icons/fa6";

const lastUpdated = '29th October 2026'; // update this whenever you change the site

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/connect-dibakar", Icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/dibakar7", Icon: RxGithubLogo },
  { label: "Kaggle", href: "https://www.kaggle.com/itspartha", Icon: FaKaggle },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=78_l9LwAAAAJ&hl=en", Icon: FaGoogleScholar },
];

const Footer = ({ dayTheme }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className={`relative w-full pt-8 pb-6 px-4 sm:px-10 md:px-16 z-50 flex flex-col items-center gap-5 text-sm shadow-inner rounded-t-2xl overflow-hidden ${
        dayTheme
          ? 'bg-gradient-to-r from-yellow-50 via-blue-50 to-blue-100 text-black'
          : 'bg-gradient-to-r from-slate-900 via-slate-800 to-gray-950 text-white'
      }`}
    >
      {/* Glowing gradient line on top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-10 bg-blue-500/20 blur-2xl pointer-events-none" />

      {/* Main row */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Brand */}
        <div className="group flex items-center gap-3 xs:flex-col text-center">
          <img
            src={Icon}
            alt="Dibakar's logo"
            className="w-9 h-9 rounded-md transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
          />
          <span className="font-display text-[17px] xs:text-sm font-semibold tracking-tight text-center">
            By Dibakar
          </span>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {socials.map(({ label, href, Icon: SocialIcon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className={`p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/40 hover:bg-blue-500 hover:text-white ${
                dayTheme ? 'bg-white text-gray-700' : 'bg-gray-800 text-gray-200'
              }`}
            >
              <SocialIcon style={{ width: '18px', height: '18px' }} />
            </a>
          ))}
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/40"
        >
          <span>Back to top</span>
          <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400/60 to-transparent" />

      {/* Bottom row */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] opacity-80 text-center">
        <span>© {new Date().getFullYear()} Dibakar Biswas. All rights reserved.</span>

        <span className="flex items-center gap-2 font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Last updated: <span className="font-semibold">{lastUpdated}</span>
        </span>

        {/* Tagline (matches the LinkedIn banner) */}
        <span className={`text-sm md:text-base tracking-wide ${dayTheme ? "text-gray-600" : "text-slate-400"}`}>
          Curiosity. Compute. Creation.
        </span>
      </div>
    </footer>
  );
};

export default Footer;