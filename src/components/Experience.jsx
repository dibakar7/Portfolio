import React from 'react';
import lcLogo from "../assets/lc-logo.jpg";
import edlLogo from "../assets/edl-logo.PNG";

const Experience = ({ dayTheme }) => {
  return (
    <div className={`min-h-96 w-11/12 px-5 shadow-md rounded-sm mb-40 flex flex-col items-center ${dayTheme ? 'bg-gradient-to-r from-yellow-50 to-blue-100 text-black' : 'bg-gradient-to-r from-slate-800 to-gray-900 text-white'} p-10`}>
      
      {/* Section Header */}
      <div className="flex items-center justify-center w-full mb-12">
        <hr className="flex-grow border-t border-gray-400" />
        <span className={`mx-4 text-3xl font-bold tracking-wide xs:text-2xl ${dayTheme ? 'text-black' : 'text-white'}`}>Experience</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      {/* Timeline */}
      <div className="relative w-full flex flex-col gap-12">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full border-l-2 border-gray-400"></div>

        {/* Experience Cards */}
        {[{
          title: "Software Engineer Intern",
          company: "LawCrats",
          link: "https://www.linkedin.com/company/lawcrats/",
          date: "July, 2024 - December, 2024",
          logo: lcLogo,
          responsibilities: [
            "Developed foundational product modules using React, Django REST Framework, and MongoDB.",
            "Integrated AI and LLM modules into production codebase and built prototype modules for future use."
          ]
        }, {
          title: "Software Developer Intern",
          company: "Exposys Data Labs",
          link: "https://www.linkedin.com/company/upchat-technologies/",
          date: "Oct, 2023 - Nov, 2023",
          logo: edlLogo,
          responsibilities: [
            "Django framework and MySQL for backend database operations, while frontend with HTML and CSS.",
            "Created custom models, custom model managers, handled different users, assigned permissions.",
            "Implemented CRUD operations, enabling seamless data management, decreased 20% in loading times."
          ]
        }].map((exp, index) => (
          <div key={index} className="relative pl-12">
            {/* Marker */}
            <div className="absolute top-2 left-1 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-md"></div>

            {/* Card */}
            <div className={`rounded-xl p-6 flex flex-row gap-6 items-start xs:flex-col transition-all duration-300 ${dayTheme ? 'bg-white' : 'bg-gray-800'} shadow-lg`}>
              <img 
                src={exp.logo} 
                alt="company_logo" 
                className="w-14 h-14 rounded-lg object-cover cursor-pointer" 
                onClick={() => window.open(exp.link, '_blank')} 
              />
              <div className="space-y-1">
                <h3 className={`text-xl font-bold ${dayTheme? 'text-black' : 'text-white'}`}>{exp.title}</h3>
                <p className={`text-md font-semibold ${dayTheme ? 'text-gray-700' : 'text-gray-300'}`}>{exp.company}</p>
                <span className="text-sm text-gray-500">{exp.date}</span>
                <p className={`mt-2 text-md font-semibold ${dayTheme ? 'text-gray-700' : 'text-gray-300'}`}>Responsibilities:</p>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  {exp.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
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

export default Experience;
