import React from "react";
import cloudfront from "../assets/CloudFront.png";
import ec2 from "../assets/EC2.png";
import restapi from "../assets/restapi.png";
import colab from "../assets/colab.png";
import langchain from "../assets/1711873462713.png";
import fastapi from "../assets/fastapi.svg";
import Pytorch from "../assets/pytorch-icon.png";
import YOLOv8 from "../assets/YOLOv8-icon.png";
import BackgroundWaves from "./stringBG";

const devicon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

const skillCategories = [
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "PyTorch", logo: Pytorch },
      { name: "scikit-learn", logo: devicon("scikitlearn/scikitlearn-original.svg") },
      { name: "pandas", logo: devicon("pandas/pandas-original.svg") },
      { name: "NumPy", logo: devicon("numpy/numpy-original.svg") },
      { name: "YOLOv8", logo: YOLOv8 },
      { name: "LangChain", logo: langchain },
      { name: "Pinecone", logo: "https://static.cdnlogo.com/logos/p/46/pinecone.svg" },
      { name: "Google Colab", logo: colab },
    ],
  },
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "Python", logo: devicon("python/python-original.svg") },
      { name: "C++", logo: devicon("cplusplus/cplusplus-original.svg") },
      { name: "C", logo: devicon("c/c-original.svg") },
      { name: "Django", logo: devicon("django/django-plain.svg") },
      { name: "FastAPI", logo: fastapi },
      { name: "React", logo: devicon("react/react-original.svg") },
      { name: "HTML", logo: devicon("html5/html5-original.svg") },
      { name: "CSS", logo: "https://static.cdnlogo.com/logos/c/18/css.svg" },
    ],
  },
  {
    category: "Tools & APIs",
    skills: [
      { name: "REST API", logo: restapi },
      { name: "JWT", logo: "https://static.cdnlogo.com/logos/j/20/jwt.svg" },
      { name: "Git", logo: devicon("git/git-original.svg") },
      { name: "VS Code", logo: devicon("vscode/vscode-original.svg") },
      { name: "Postman", logo: "https://static.cdnlogo.com/logos/p/20/postman.svg" },
    ],
  },
  {
    category: "Cloud & Database",
    skills: [
      { name: "AWS", logo: "https://static.cdnlogo.com/logos/a/60/amazon-web-services.svg" },
      { name: "EC2", logo: ec2 },
      { name: "CloudFront", logo: cloudfront },
      { name: "MongoDB", logo: devicon("mongodb/mongodb-original.svg") },
      { name: "MySQL", logo: "https://static.cdnlogo.com/logos/m/10/mysql.svg" },
      { name: "PostgreSQL", logo: "https://static.cdnlogo.com/logos/p/93/postgresql.svg" },
    ],
  },
];

const Skills = ({ dayTheme }) => {
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
          Skills
        </span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      {/* 4 boxes: 2x2 on desktop, 1 column on mobile */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {skillCategories.map((category) => (
          <div
            key={category.category}
            className={`rounded-xl p-6 shadow-lg flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
              dayTheme ? "bg-white" : "bg-gray-800"
            }`}
          >
            <h3
              className={`text-2xl font-semibold font-display tracking-tight mb-5 text-center xs:text-xl ${
                dayTheme ? "text-black" : "text-white"
              }`}
            >
              {category.category}
            </h3>

            <div className="flex flex-wrap justify-center gap-4 my-auto">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex flex-col items-center w-24 p-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
                    dayTheme ? "bg-gray-50 shadow" : "bg-gray-900 shadow-md"
                  }`}
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    loading="lazy"
                    className="w-12 h-12 object-contain"
                  />
                  <span className={`mt-2 text-xs font-medium text-center ${dayTheme ? "text-gray-800" : "text-gray-200"}`}>
                    {skill.name}
                  </span>
                </div>
              ))}
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

export default Skills;