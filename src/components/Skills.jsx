import React from "react";
import cloudfront from "../assets/CloudFront.png"
import ec2 from "../assets/EC2.png"
import restapi from "../assets/restapi.png"
import colab from "../assets/colab.png"
import langchain from "../assets/1711873462713.png"
import fastapi from "../assets/fastapi.svg"

const skillCategories = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://static.cdnlogo.com/logos/c/18/css.svg"},
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "REST API", logo: restapi }, // Custom placeholder icon
      { name: "JWT", logo: "https://static.cdnlogo.com/logos/j/20/jwt.svg" }, // Custom placeholder icon
      { name: "VCS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", logo: "https://static.cdnlogo.com/logos/p/20/postman.svg" }, // Direct link to Postman logo
      { name: "Google Colab", logo: colab },
      { name: "Pinecone", logo: "https://static.cdnlogo.com/logos/p/46/pinecone.svg" },
      { name: "LangChain", logo: langchain },
      { name: "Fast API", logo: fastapi },
    ],
  },
  {
    category: "Cloud & Database",
    skills: [
      { name: "Amazon AWS", logo: "https://static.cdnlogo.com/logos/a/60/amazon-web-services.svg" },
      { name: "Amazon EC2", logo: ec2},
      { name: "CloudFront", logo: cloudfront },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", logo: "https://static.cdnlogo.com/logos/m/10/mysql.svg" },
      { name: "PostgreSQL", logo: "https://static.cdnlogo.com/logos/p/93/postgresql.svg" },
    ],
  },
];

const Skills = ({ dayTheme }) => {
  return (
    <div
      className={`min-h-96 w-11/12 px-15 shadow-md rounded-sm mb-40 flex flex-col items-center xs:px-5 ${dayTheme ? 'bg-gradient-to-r from-yellow-50 to-blue-100 text-black' : 'bg-gradient-to-r from-slate-800 to-gray-900 text-white'} p-10`}>
      {/* Section Header */}
      <div className="flex items-center justify-center w-full mb-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className="mx-4 text-3xl font-bold tracking-wide">Skills</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      {/* Skills Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="relative flex flex-col items-center p-2 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-lg shadow-md transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-14 h-14"
                  />
                  <span className={`text-md ${dayTheme ? `text-gray-800` : `text-gray-400`}`}>{`${skill.name}`}</span>
                </div>
              ))}
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

export default Skills;
