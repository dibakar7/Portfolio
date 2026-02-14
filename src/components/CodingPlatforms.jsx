import React from 'react';
import Slider from 'react-slick';
import hackerRankLogo from "../assets/hackerrank-logo.png";
import leetCodeLogo from "../assets/leetcode-logo-2.png";
import codeChefLogo from "../assets/codechef-logo.png";
import geeksForGeeksLogo from "../assets/gfg-logo.png";
import BackgroundWaves from './stringBG';

const platforms = [
  {
    name: "LeetCode",
    questionsSolved: "701",
    badges: "17",
    logo: leetCodeLogo,
    link: "https://leetcode.com/u/diba_lc/"
  },
  {
    name: "GeeksForGeeks",
    questionsSolved: "100",
    badges: "-",
    logo: geeksForGeeksLogo,
    link: "https://www.geeksforgeeks.org/user/dibakar007/"
  },
  {
    name: "HackerRank",
    questionsSolved: 30,
    badges: "-",
    logo: hackerRankLogo,
    link: "https://www.hackerrank.com/profile/dibakar1998b"
  },
  {
    name: "CodeChef",
    questionsSolved: "-",
    badges: "-",
    logo: codeChefLogo,
    link: "https://www.codechef.com/users/imdiba007_cc"
  }
];

const CodingPlatforms = ({ dayTheme }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className={`relative overflow-hidden min-h-96 w-11/12 px-4 shadow-md rounded-sm mb-40 flex flex-col items-center ${dayTheme ? 'bg-gradient-to-r from-yellow-50 to-blue-100 text-black' : 'bg-gradient-to-r from-slate-800 to-gray-900 text-white'} py-10`}>
      <BackgroundWaves dayTheme={dayTheme} />
      {/* Section Header */}
      <div className="flex items-center justify-center w-full mb-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className="mx-4 text-3xl font-bold tracking-wide xs:text-2xl">Coding Platforms</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      {/* Carousel */}
      <div className="w-full max-w-6xl">
        <Slider {...settings}>
          {platforms.map((platform, index) => (
            <div key={index} className="px-4">
              <a
                href={platform.link}
                target="_blank"
                rel="noreferrer"
                className={`block shadow-md rounded-lg p-6 w-full max-w-sm mx-auto text-center hover:shadow-lg transition ${dayTheme ? 'bg-white' : 'bg-gray-800'}`}
              >
                <img
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="h-16 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                <p className={`${dayTheme ? 'text-gray-700' : 'text-white'}`}>
                  Questions Solved: <span className="font-bold">{platform.questionsSolved}</span>
                </p>
                <p className={`${dayTheme ? 'text-gray-700' : 'text-white'}`}>
                  Badges: <span className="font-bold">{platform.badges}</span>
                </p>
              </a>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex items-center justify-center w-full pt-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className={`mx-4 text-2xl font-bold tracking-wide ${dayTheme ? 'text-black' : 'text-white'}`}>*******</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>
    </div>
  );
};

export default CodingPlatforms;
