import React from 'react';
import BackgroundWaves from './stringBG';

const publications = [
  {
    type: "Journal Article",
    title:
      "The Performance, Feasibility, and Sustainability-Based Framework for Biomaterial Recommendation System for Packaging",
    authors: ["Kapoor, M.", "Beemaraj, S. B.", "Salvi, A.", "Biswas, D."],
    venue: "Integrating Materials and Manufacturing Innovation",
    details: "Vol. 15, Issue 2, pp. 307–325",
    year: "2026",
    link: null, // add the DOI or publisher URL when available
  },
  {
    type: "Conference Paper",
    title:
      "From Parameters to Permeation: A Regression-Driven Model for Early-Stage Selection of Transdermal Drug and Nanocarrier Candidates",
    authors: ["Kapoor, M.", "Runkana, V.", "Biswas, D."],
    venue: "10th World Congress on Particle Technology (WCPT10), Osaka, Japan, 11–15 May 2026",
    details: "WCPT10 Final Abstract Book, pp. 3-668–3-669",
    year: "2026",
    link: null,
  },
];

const Publication = ({ dayTheme }) => {
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
          Publications
        </span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      {/* Timeline */}
      <div className="relative w-full flex flex-col gap-12">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full border-l-2 border-gray-400"></div>

        {publications.map((pub) => (
          <div key={pub.title} className="relative pl-12">
            {/* Marker */}
            <div className="absolute top-2 left-1 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-md"></div>

            {/* Card */}
            <div
              className={`rounded-xl p-6 flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                dayTheme ? "bg-white" : "bg-gray-800"
              } shadow-lg`}
            >
              <span className={`text-xs font-semibold font-mono uppercase tracking-wider ${dayTheme ? "text-blue-700" : "text-blue-300"}`}>
                {pub.type} • {pub.year}
              </span>

              <h3 className={`text-xl font-bold font-display tracking-tight ${dayTheme ? "text-black" : "text-white"}`}>
                {pub.link ? (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {pub.title}
                  </a>
                ) : (
                  pub.title
                )}
              </h3>

              <p className={`text-md ${dayTheme ? "text-gray-700" : "text-gray-300"}`}>
                {pub.authors.map((author, i) => (
                  <React.Fragment key={author}>
                    <span className={author.startsWith("Biswas") ? "font-bold underline decoration-blue-400 underline-offset-4" : ""}>
                      {author}
                    </span>
                    {i < pub.authors.length - 1 && ", "}
                  </React.Fragment>
                ))}
              </p>

              <p className={`text-sm italic ${dayTheme ? "text-gray-600" : "text-gray-400"}`}>{pub.venue}</p>
              <p className={`text-sm font-mono ${dayTheme ? "text-gray-500" : "text-gray-400"}`}>{pub.details}</p>
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

export default Publication;