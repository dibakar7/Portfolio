import React from 'react';
import lcLogo from "../assets/lc-logo.jpg";
import edlLogo from "../assets/edl-logo.PNG";

const Experience = ({ dayTheme }) => {
  return (
    <div
      className={`min-h-96 w-11/12 px-15 shadow-md rounded-sm mb-40 flex flex-col items-center xs:px-5 ${dayTheme ? `day-theme` : `night-theme`} p-10`}>
      {/* Section Header */}
      <div className="flex items-center justify-center w-full mb-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className="mx-4 text-3xl font-bold tracking-wide">Experience</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      {/* Timeline */}
      <div className="relative w-full flex flex-col gap-8">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full border-l-2 border-gray-300"></div>

        {/* Timeline Item 1 */}
        <div className="relative pl-12">
          {/* Marker */}
          <div className="absolute top-0 left-1 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
            <span className="block w-4 h-4 bg-white rounded-full"></span>
          </div>
          {/* Content */}
          <div className="shadow-md rounded-md p-6 flex flex-row gap-4 items-center xs:flex-col p-5">
            <img src={lcLogo} alt="company_logo" className="w-14 h-14 rounded-md" onClick={()=>window.open('https://www.linkedin.com/company/lawcrats/', '_blank')} />
            <div className=''>
              <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
              <p className={`text-md font-semibold ${dayTheme ? `text-gray-800` : `text-gray-400`}`}>LawCrats</p>
              <span className="text-md text-gray-500 dark:text-gray-400">July, 2024 - December, 2024</span>
              <p className="text-md font-semibold">Responsibilities:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Developed foundational product modules using React, Django REST Framework, and MongoDB.</li>
                <li>Integrated AI and LLM modules into production codebase and built prototype modules for future use.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="relative pl-12">
          {/* Marker */}
          <div className="absolute top-0 left-1 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
            <span className="block w-4 h-4 bg-white rounded-full"></span>
          </div>
          {/* Content */}
          <div className="shadow-md rounded-md p-6 flex flex-row gap-4 items-center xs:flex-col">
            <img src={edlLogo} alt="company_logo" className="w-14 h-14 rounded-md" onClick={()=>window.open('https://www.linkedin.com/company/upchat-technologies/', '_blank')} />
            <div>
              <h3 className="text-xl font-semibold">Software Developer Intern</h3>
              <p className={`text-md font-semibold ${dayTheme ? `text-gray-800` : `text-gray-400`}`}>Exposys Data Labs</p>
              <span className="text-md text-gray-500 dark:text-gray-400">Oct, 2023 - Nov, 2023</span>
              <p className="text-md font-semibold">Responsibilities:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Django framework and MySQL for backend database operations, while frontend with HTML and CSS.</li>
                <li>Created custom models, custom model managers, handled different users, assigned permissions.</li>
                <li>Implemented CRUD operations, enabling seamless data management, decrease 20% in loading times.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
