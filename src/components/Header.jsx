import React from 'react';
import nightThemeIcon from "../assets/full-moon.png";
import dayThemeIcon from "../assets/sun.png";
import Icon from "../assets/icon.PNG"
import { GoDownload } from "react-icons/go";
import BackgroundWaves from './stringBG';

const Header = ({dayTheme, setDayTheme, scrollToContact}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-16 z-50 sm:px-10 md:px-10 shadow-md flex items-center justify-between xs:px-5 xs:h-10 ${dayTheme ? 'bg-gradient-to-r from-yellow-50 to-blue-100 text-black' : 'bg-gradient-to-r from-slate-800 to-gray-900 text-white'}`}>
      <div className="w-ex mx-auto h-full flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img src={Icon} alt="icon" className="w-8 h-8 rounded-md xs:w-6 xs:h-6" />
          <span className="font-semibold text-lg hidden sm:block">Dibakar's Portfolio</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-10">
          <button className="hover:underline hidden sm:block" onClick={scrollToContact}>Contacts</button>

          <button className="flex items-center gap-1 hover:underline">
            <a href='https://drive.google.com/file/d/1Sc9IeXeLx3I9vA6KswQyZ4b4NGozIJZ9/view?usp=sharing' target='_blank' rel='noreferrer'><span className="inline xs:hidden">Download</span></a>
            <span className="xs:inline-block sm:hidden">
              <GoDownload className="w-6 h-6 xs:w-4 xs:h-4" onClick={()=> window.open("https://drive.google.com/file/d/1Sc9IeXeLx3I9vA6KswQyZ4b4NGozIJZ9/view?usp=sharing")} />
            </span>
          </button>

          <img
            onClick={() => setDayTheme((prev) => !prev)}
            src={dayTheme ? nightThemeIcon : dayThemeIcon}
            alt="Toggle Theme"
            className="w-8 h-8 cursor-pointer xs:w-6 xs:h-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
