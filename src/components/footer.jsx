import React from 'react';
import Icon from '../assets/icon.PNG';

const Footer = ({ dayTheme }) => {
  const lastUpdated = '14th February 2026';


  return (
    <footer
      className={`w-full py-6 px-4 sm:px-10 md:px-16 z-50 flex flex-col xs:gap-4 xs:flex-col sm:flex-row items-center justify-between text-sm ${
        dayTheme
          ? 'bg-gradient-to-r from-yellow-50 to-blue-100 text-black'
          : 'bg-gradient-to-r from-slate-800 to-gray-900 text-white'
      } shadow-inner rounded-t-2xl`}
    >
      <div className="flex items-center gap-2 xs:flex-col">
        <img src={Icon} alt="icon" className="w-8 h-8 rounded-md xs:w-6 xs:h-6" />
        <span className="text-[17px] xs:text-[12px] font-semibold tracking-wide text-center">Developed & Maintained by Dibakar</span>
      </div>


      <div className="text-[15px] font-light tracking-tight opacity-80 text-center xs:text-sm">
        Last Updated: <span className="font-medium">{lastUpdated}</span>
      </div>
    </footer>
  );
};

export default Footer;
