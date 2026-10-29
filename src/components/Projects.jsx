import React from 'react';
import githubWhite from "../assets/github-mark-white.png";
import githubBlack from "../assets/github-mark.png";
import website from "../assets/website.png";
import BackgroundWaves from './stringBG';

// Moved outside the component so it is not rebuilt on every render
const projects = [
  {
    title: "Doc-Archive",
    links: { github: "https://github.com/dibakar7/doc-archive", website: "https://doc-archive.onrender.com/" },
    date: "May 2024",
    tech: ["Python", "MiniLM", "FastAPI", "Pinecone", "LangChain"],
    details: [
      "Built a backend module for querying a resource archive using FastAPI, Pinecone, and MiniLM.",
      "Developed a CI/CD pipeline for automated build, run, and deployment from GitHub to Render.",
    ],
  },
  {
    title: "SpamMarker",
    links: { github: "https://github.com/dibakar7/SpamMarker" },
    date: "April 2024",
    tech: ["Django", "REST API", "JWT", "MySQL", "Postman"],
    details: [
      "Developed a backend module for marking potential spam phone numbers in a database.",
      "Implemented JWT-based authentication for users and created REST APIs to interact with MySQL.",
    ],
  },
  {
    title: "Malware Detection using ML",
    date: "Nov 2022 – Apr 2023",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "Google Colab"],
    details: [
      "Used a dataset of dimension [138047, 57] and applied random under-sampling to balance the classes.",
      "Applied Decision Tree and Random Forest algorithms, achieving 99.29% accuracy (FP 0.51%, FN 0.78%) with cross-validation scores of 97.31% and 98.27%.",
    ],
  },
  {
    title: "Travel Advisor",
    links: { github: "https://github.com/dibakar7/Travel-Advisor", website: "https://travel-advisor-db.netlify.app/" },
    date: "Jul 2022 – Nov 2022",
    tech: ["HTML", "React", "Google Maps API", "Places API", "Rapid API"],
    details: [
      "Designed and developed the web application using HTML and the React.js library.",
      "Used Google Maps and Places APIs for geolocation and mapping, and Rapid API to fetch hotel, attraction, and restaurant data.",
    ],
  },
  {
    title: "Weather App",
    links: { github: "https://github.com/dibakar7/Weather-App", website: "https://weather-db.netlify.app/" },
    date: "Jul 2022",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    details: [
      "Built a fully responsive website with HTML, CSS, and JavaScript, hosted on Netlify.",
      "Used the OpenWeatherMap API to fetch weather data by city.",
    ],
  },
  {
    title: "Portfolio Website",
    links: { github: "https://github.com/dibakar7/Portfolio", website: "https://portfolio-dibakar.netlify.app/" },
    date: "Jan 2025",
    tech: ["React", "Tailwind CSS"],
    details: [
      "Designed and built this website using React and Tailwind CSS.",
      "It presents my experience, education, skills, projects, and publications in one place.",
    ],
  },
];

const Projects = ({ dayTheme }) => {
  const iconLink =
    "rounded-full p-1 transition-transform duration-300 hover:-translate-y-0.5 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500";

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
      <div className="flex items-center justify-center w-full mb-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className={`mx-4 text-3xl font-bold font-display tracking-tight xs:text-2xl ${dayTheme ? "text-black" : "text-white"}`}>
          Projects
        </span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`p-6 rounded-lg shadow-lg flex flex-col space-y-3 min-h-80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
              dayTheme ? "bg-white" : "bg-gray-800"
            }`}
          >
            {/* Title and links */}
            <div className="flex items-start justify-between gap-3">
              <h3 className={`text-xl font-bold font-display tracking-tight ${dayTheme ? "text-black" : "text-white"}`}>
                {project.title}
              </h3>
              <div className="flex flex-row gap-2 shrink-0">
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    title="GitHub"
                    className={iconLink}
                  >
                    <img className="w-7 h-7" src={dayTheme ? githubBlack : githubWhite} alt="" />
                  </a>
                )}
                {project.links?.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live website`}
                    title="Live site"
                    className={iconLink}
                  >
                    <img className="w-7 h-7" src={website} alt="" />
                  </a>
                )}
              </div>
            </div>

            {/* Date */}
            <span className="text-sm font-mono text-gray-500">{project.date}</span>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    dayTheme ? "bg-blue-50 text-blue-700" : "bg-blue-900/40 text-blue-200"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Details */}
            <ul className={`list-disc pl-5 text-sm space-y-2 ${dayTheme ? "text-gray-700" : "text-gray-300"}`}>
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
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

export default Projects;