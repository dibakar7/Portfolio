import React from 'react';
// import JULogo from "../assets/Jadavpur_University_Logo.png";
import JULogo from "../assets/education.png";
import BackgroundWaves from './stringBG';

const education = [
  {
    degree: "M.E. in Computer Science & Engineering",
    university: "Jadavpur University",
    link: "https://jadavpuruniversity.in/",
    period: "Aug 2024 - Sep 2026",
    result: "CGPA 9.03 (First Class with Distinction)",
    logo: JULogo,
  },
  {
    degree: "B.E. in Information Technology",
    university: "Jadavpur University",
    link: "https://jadavpuruniversity.in/",
    period: "Aug 2019 - Jul 2023",
    result: "CGPA 8.04 (First Class)",
    logo: JULogo,
  },
];

const Education = ({ dayTheme }) => {
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
      <div className="flex items-center justify-center w-full mb-12">
        <hr className="flex-grow border-t border-gray-400" />
        <span className={`mx-4 text-3xl font-bold font-display tracking-tight xs:text-2xl ${dayTheme ? "text-black" : "text-white"}`}>
          Education
        </span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      {/* Timeline */}
      <div className="relative w-full flex flex-col gap-12">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full border-l-2 border-gray-400"></div>

        {education.map((edu) => (
          <div key={edu.degree} className="relative pl-12">
            {/* Marker */}
            <div className="absolute top-2 left-1 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-md"></div>

            {/* Card */}
            <div
              className={`rounded-xl p-6 flex flex-row gap-6 items-start xs:flex-col transition-all duration-300 ${
                dayTheme ? "bg-white" : "bg-gray-800"
              } shadow-lg`}
            >
              <a
                href={edu.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${edu.university} website`}
                className="shrink-0"
              >
                <img
                  src={edu.logo}
                  alt={`${edu.university} logo`}
                  className="w-14 h-14 rounded-lg object-cover bg-white p-1"
                />
              </a>
              <div className="space-y-1">
                <h3 className={`text-xl font-bold ${dayTheme ? "text-black" : "text-white"}`}>{edu.degree}</h3>
                <p className={`text-md font-semibold ${dayTheme ? "text-gray-700" : "text-gray-300"}`}>{edu.university}</p>
                <p className={`text-sm font-medium ${dayTheme ? "text-blue-700" : "text-blue-300"}`}>{edu.result}</p>
                <span className="block text-sm font-mono text-gray-500">{edu.period}</span>
              </div>
            </div>
          </div>
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

export default Education;