import React from 'react'

const Footer = ({dayTheme}) => {
  return (
    <div
      className={`min-h-12 w-11/12 shadow-md rounded-sm flex flex-col items-center px-5 xs:px-10 ${
        dayTheme ? `day-theme` : `night-theme`
      } p-10`}
    >
      <div className="name font-semibold text-lg">Copyright Dibakar</div>
    </div>
  );
};

export default Footer;