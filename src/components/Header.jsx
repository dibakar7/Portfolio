import React from 'react';
import nightThemeIcon from "../assets/full-moon.png";
import dayThemeIcon from "../assets/sun.png";
import Icon from "../assets/icon.PNG"
import { GoDownload } from "react-icons/go";

const Header = ({dayTheme, setDayTheme}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-16 z-50 sm:px-10 md:px-10 shadow-md flex items-center justify-between xs:px-5 ${dayTheme ? 'day-theme' : 'night-theme'}`}>
      <div className="w-ex mx-auto h-full flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img src={Icon} alt="icon" className="w-8 h-8 rounded-md" />
          <span className="font-semibold text-lg hidden sm:block">Dibakar's Portfolio</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-10">
          <button className="hover:underline hidden sm:block">Contacts</button>

          <button className="flex items-center gap-1 hover:underline">
            <span className="inline xs:hidden ">Download</span>
            <span className="xs:inline-block sm:hidden">
              <GoDownload className="w-6 h-6" />
            </span>
          </button>

          <img
            onClick={() => setDayTheme((prev) => !prev)}
            src={dayTheme ? nightThemeIcon : dayThemeIcon}
            alt="Toggle Theme"
            className="w-8 h-8 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
