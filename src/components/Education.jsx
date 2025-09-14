import React from 'react';
// import JULogo from "../assets/Jadavpur_University_Logo.png";
import JULogo from "../assets/education.png";


const Education = ({ dayTheme }) => {
  return (
    <div className={`min-h-96 w-11/12 px-5 shadow-md rounded-sm mb-40 flex flex-col items-center ${dayTheme ? 'bg-gradient-to-r from-yellow-50 to-blue-100 text-black' : 'bg-gradient-to-r from-slate-800 to-gray-900 text-white'} p-10`}>
      
      {/* Section Header */}
      <div className="flex items-center justify-center w-full mb-12">
        <hr className="flex-grow border-t border-gray-400" />
        <span className={`mx-4 text-3xl font-bold tracking-wide xs:text-2xl ${dayTheme ? 'text-black' : 'text-white'}`}>Education</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      {/* Timeline */}
      <div className="relative w-full flex flex-col gap-12">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full border-l-2 border-gray-400"></div>

        {/* Education Cards */}
        {[{
          degree: "M.E in Computer Science & Engineering",
          university: "Jadavpur University",
          link: "https://jadavpuruniversity.in/",
          date: "CGPA - 8.43 | Aug 2024 - Present",
          logo: JULogo
        }, {
          degree: "B.E in Information Technology",
          university: "Jadavpur University",
          link: "https://jadavpuruniversity.in/",
          date: "CGPA - 8.04 | Aug 2019 - July 2023",
          logo: JULogo
        }].map((edu, index) => (
          <div key={index} className="relative pl-12">
            {/* Marker */}
            <div className="absolute top-2 left-1 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-md"></div>

            {/* Card */}
            <div className={`rounded-xl p-6 flex flex-row gap-6 items-start xs:flex-col transition-all duration-300 ${dayTheme ? 'bg-white' : 'bg-gray-800'} shadow-lg`}>
              <img
                src={edu.logo}
                alt="university_logo"
                className="w-14 h-14 rounded-lg object-cover bg-white cursor-pointer"
                onClick={() => window.open(edu.link, '_blank')}
              />
              <div className="space-y-1">
                <h3 className={`text-xl font-bold ${dayTheme? 'text-gray-700' : 'text-gray-300'}`}>{edu.degree}</h3>
                <p className={`text-md font-semibold ${dayTheme ? 'text-black' : 'text-white'}`}>{edu.university}</p>
                <span className="text-sm text-gray-500">{edu.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full pt-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className={`mx-4 text-2xl font-bold tracking-wide ${dayTheme ? 'text-black' : 'text-white'}`}>*******</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>
    </div>
  );
};

export default Education;
