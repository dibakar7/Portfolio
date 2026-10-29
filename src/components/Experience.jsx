import React from 'react';
import se from "../assets/programmer.png";
import BackgroundWaves from './stringBG';

const experience = [
  {
    title: "Research Intern",
    company: "TCS - Research",
    link: "https://www.linkedin.com/showcase/tcs-research/",
    date: "Aug 2025 - Mar 2026",
    logo: se,
    responsibilities: [
      "Conducted an in-depth literature review, data collection, and curation; implemented a range of machine learning methodologies, including traditional ML models and Bayesian optimization.",
      "Developed and evaluated data-driven solutions using Python libraries such as PyTorch, scikit-learn, SciPy, and pandas for model development, experimentation, and performance analysis.",
      "Worked on the backend module of a product prototype, Digital Food Passport, and proposed an architecture for DIMS (Digital Inventory Management System).",
      "One paper was published in Integrating Materials and Manufacturing Innovation, another was selected for the WCPT10 conference, and a third was submitted to the Circular Economy and Sustainability journal.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "LawCrats",
    link: "https://www.linkedin.com/company/lawcrats/",
    date: "Jul 2024 - Dec 2024",
    logo: se,
    responsibilities: [
      "Developed product modules using React for dynamic interfaces, Django REST Framework for scalable backend APIs, and MongoDB for reliable data storage and management.",
      "Used AWS services (EC2, S3, CloudFront); integrated AI and LLM components into the production codebase and prototyped new modules for support integration.",
      "Led a frontend team of 4 interns and handled both frontend and backend development.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Exposys Data Labs",
    link: "https://www.linkedin.com/company/upchat-technologies/",
    date: "Oct 2023 - Nov 2023",
    logo: se,
    responsibilities: [
      "Developed an e-Learning platform prototype using Django with MySQL for backend operations and HTML/CSS for a clean, responsive frontend; optimized CRUD operations to improve data handling efficiency.",
      "Created custom models and model managers, handled multiple user types with role-based permissions, and used the built-in SHA256 hash module for password encryption.",
    ],
  },
];

const Experience = ({ dayTheme }) => {
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
          Experience
        </span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      {/* Timeline */}
      <div className="relative w-full flex flex-col gap-12">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full border-l-2 border-gray-400"></div>

        {experience.map((exp) => (
          <div key={`${exp.company}-${exp.date}`} className="relative pl-12">
            {/* Marker */}
            <div className="absolute top-2 left-1 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-md"></div>

            {/* Card */}
            <div
              className={`rounded-xl p-6 flex flex-row gap-6 items-start xs:flex-col transition-all duration-300 ${
                dayTheme ? "bg-white" : "bg-gray-800"
              } shadow-lg`}
            >
              <a
                href={exp.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${exp.company} page`}
                className="shrink-0"
              >
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 rounded-lg object-cover bg-white p-1"
                />
              </a>

              <div className="space-y-1">
                <h3 className={`text-xl font-bold ${dayTheme ? "text-black" : "text-white"}`}>{exp.title}</h3>
                <p className={`text-md font-semibold ${dayTheme ? "text-gray-700" : "text-gray-300"}`}>{exp.company}</p>
                <span className="block text-sm font-mono text-gray-500">{exp.date}</span>

                <p className={`pt-2 text-md font-semibold ${dayTheme ? "text-gray-700" : "text-gray-300"}`}>
                  Responsibilities:
                </p>
                <ul className={`list-disc pl-5 text-sm space-y-1 ${dayTheme ? "text-gray-600" : "text-gray-300"}`}>
                  {exp.responsibilities.map((res) => (
                    <li key={res}>{res}</li>
                  ))}
                </ul>
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

export default Experience;