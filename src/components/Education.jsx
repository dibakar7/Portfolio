import React from 'react'
import JULogo from "../assets/Jadavpur_University_Logo.png"

const Education = ({dayTheme}) => {
  return (
    <div
      className={`min-h-96 w-11/12 px-15 shadow-md rounded-sm mb-40 flex flex-col items-center xs:px-5 ${dayTheme ? `day-theme` : `night-theme`} p-10`}>
      {/* Section Header */}
      <div className="flex items-center justify-center w-full mb-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className="mx-4 text-3xl font-bold tracking-wide">Education</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      {/* Timeline */}
      <div className="relative w-full flex flex-col gap-8">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full border-l-2 border-gray-300"></div>

        {/* Timeline Item 1 */}
        <div className="relative pl-12">
          {/* Marker */}
          <div className="absolute top-0 left-1 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center shadow-lg animate-pulseScale">
            <span className="block w-4 h-4 bg-white rounded-full"></span>
          </div>
          {/* Content */}
          <div className="shadow-md rounded-md p-6 flex flex-row gap-4 items-center xs:flex-col">
            <img src={JULogo} alt="company_logo" className="w-14 h-14 rounded-md bg-white" onClick={()=>window.open('https://jadavpuruniversity.in/', '_blank')} />
            <div className=''>
              <h3 className="text-xl font-semibold">M.E in Computer Science & Engineering</h3>
              <p className="text-md text-gray-600 dark:text-gray-400">Jadavpur University</p>
              <span className="text-sm text-gray-500 dark:text-gray-300">CGPA - ___ | Aug 2024 - Present</span>
            </div>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="relative pl-12">
          {/* Marker */}
          <div className="absolute top-0 left-1 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
            <span className="block w-4 h-4 bg-gray-200 rounded-full"></span>
          </div>
          {/* Content */}
          <div className="shadow-md rounded-md p-6 flex flex-row gap-4 items-center xs:flex-col">
            <img src={JULogo} alt="company_logo" className="w-14 h-14 rounded-md bg-white" onClick={()=>window.open('https://jadavpuruniversity.in/', '_blank')} />
            <div>
              <h3 className="text-xl font-semibold">B.E in Information Technology</h3>
              <p className="text-md text-gray-600 dark:text-gray-400">Jadavpur University</p>
              <span className="text-sm text-gray-500 dark:text-gray-300">CGPA - 8.04 | Aug 2019 - July 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education