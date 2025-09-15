import React from 'react';
import se from "../assets/programmer.png"

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
          title: "Research Intern (AI/ML)",
          company: "TCS - Research",
          link: "https://www.linkedin.com/showcase/tcs-research/",
          date: "August, 2025 - Present",
          logo: se,
          responsibilities: [
            "Currently engaged in literature review and exploring the implementation of various machine learning approaches, including the integration of vision-language models (VLMs) and large language models (LLMs), while leveraging different cloud platforms AWS, Azure."
          ]
        },
          {
          title: "Software Engineer Intern",
          company: "LawCrats",
          link: "https://www.linkedin.com/company/lawcrats/",
          date: "July, 2024 - December, 2024",
          logo: se,
          responsibilities: [
            "Developed product modules using React for dynamic interfaces, Django REST Framework for scalable backend APIs, and MongoDB for efficient and reliable data storage and management.",
            "Integrated AI and LLM components into the production codebase, while also prototyping new modules for support integration"
          ]
        }, {
          title: "Software Developer Intern",
          company: "Exposys Data Labs",
          link: "https://www.linkedin.com/company/upchat-technologies/",
          date: "Oct, 2023 - Nov, 2023",
          logo: se,
          responsibilities: [
            "Built and maintained full-stack applications using Django with MySQL for backend operations and HTML/CSS for clean, responsive frontend development.",
            "Developed custom models and managers, implemented role-based permissions for multiple user types, and optimized CRUD operations to improve data handling efficiency and reduce loading time."
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
                className="w-14 h-14 rounded-lg object-cover cursor-pointer bg-white p-1"
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
