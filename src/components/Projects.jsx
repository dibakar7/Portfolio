import React from 'react';
import githubWhite from "../assets/github-mark-white.png"
import githubBlack from "../assets/github-mark.png"
import website from "../assets/website.png"

const Projects = ({ dayTheme }) => {
  const projects = [
    {
      title: 'Doc-Archive',
      links: { github: 'https://github.com/dibakar7/doc-archive', website: 'https://doc-archive.onrender.com/' },
      date: 'May 2024',
      tech: 'Python, MiniLM, FastAPI, Pinecone, LangChain',
      details: [
        'Built a backend module for querying a resource archive using FastAPI, Pinecone, and MiniLM.',
        'Developed a CI/CD pipeline for automated build, run, and deployment from GitHub to Render.',
      ],
    },
    {
      title: 'SpamMarker',
      links: { github: 'https://github.com/dibakar7/SpamMarker' },
      date: 'April 2024',
      tech: 'Django Web Framework, REST API, JWT, MySQL, Postman',
      details: [
        'Developed a backend module for marking potential spam phone numbers in a database.',
        'Implemented JWT-based authentication for users and created REST APIs to interact with MySQL.',
      ],
    },
    {
      title: 'Malware Detection using ML',
      date: 'November 2022 – April 2023',
      tech: 'Python, Pandas, Numpy, Matplotlib, Scikit-Learn, Google Colab',
      details: [
        'Used dataset of dimension [138047, 57], did random under-sampling to balance the dataset.',
        'Applied Decision Tree and Random Forest algorithms, achieving 99.29% accuracy with FP 0.51%, FN 0.78%, and cross-validation scores of 97.31% and 98.27%.',
      ],
    },
    {
      title: 'Travel Advisor',
      links: { github: 'https://github.com/dibakar7/Travel-Advisor', website: 'https://travel-advisor-db.netlify.app/' },
      date: 'July 2022 – November 2022',
      tech: 'HTML, React, Google Map and Places API, Rapid API',
      details: [
        'Designed and developed the web application using HTML and React.JS library.',
        'Utilized Google Maps API and Places API for geolocation and mapping, and Rapid API for fetching hotel, attraction, and restaurant data.',
      ],
    },
    {
      title: 'Weather App',
      links: { github: 'https://github.com/dibakar7/Weather-App', website: 'https://weather-db.netlify.app/' },
      date: 'July 2022',
      tech: 'HTML, CSS, JavaScript, OpenWeatherMap API',
      details: [
        'This website was designed using simple HTML, CSS & JavaScript.',
        'To access weather data based on city, OpenWeatherMap API was used. Fully responsive website, hosted on Netlify',
      ],
    },
    {
      title: 'Portfolio Website',
      links: { github: 'https://github.com/dibakar7/Portfolio', website: 'https://portfolio-dibakar.netlify.app/' },
      date: 'January, 2025',
      tech: 'React, Tailwind CSS',
      details: [
        'This website was designed using React and Tailwind CSS',
        'The website contains all the informations about my experiences, education, skills, projects and certifications',
      ],
    },
  ];

  return (
    <div
      className={`min-h-96 w-11/12 px-15 shadow-md rounded-sm mb-40 flex flex-col items-center xs:px-10 ${dayTheme ? 'bg-gradient-to-r from-yellow-50 to-blue-100 text-black' : 'bg-gradient-to-r from-slate-800 to-gray-900 text-white'} p-10`}>
      {/* Section Header */}
      <div className="flex items-center justify-center w-full mb-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className="mx-4 text-3xl font-bold tracking-wide xs:text-2xl">Projects</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${
              dayTheme ? 'bg-white' : 'bg-gray-800'
            } flex flex-col justify-between space-y-4 min-h-80`}
          >
            {/* Project Title */}
            <div className="text-xl font-bold flex items-center justify-between">
              <span>{project.title}</span>
              <div className="flex flex-row gap-4">
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-7 h-7"
                      src={dayTheme ? githubBlack : githubWhite}
                      alt="github"
                    />
                  </a>
                )}
                {project.links?.website && (
                  <a
                    href={project.links.website}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="w-7 h-7" src={website} alt="website" />
                  </a>
                )}
              </div>
            </div>

            {/* Date */}
            <div className="text-sm text-gray-500">{project.date}</div>

            {/* Technologies Used */}
            <div className="text-sm italic">{project.tech}</div>

            {/* Details */}
            <ul className="list-disc list-inside text-sm space-y-2">
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
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

export default Projects;
