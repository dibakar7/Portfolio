import React from 'react';

const platforms = [
  {
    name: "LeetCode",
    questionsSolved: 350,
    badges: 5
  },
  {
    name: "HackerRank",
    questionsSolved: 120,
    badges: 3
  },
  {
    name: "Codeforces",
    questionsSolved: 200,
    badges: 4
  }
];

const CodingPlatforms = ({ dayTheme }) => {
  return (
    <div className={`min-h-96 w-11/12 px-15 shadow-md rounded-sm mb-40 flex flex-col items-center xs:px-10 ${dayTheme ? `day-theme` : `night-theme`} p-10`}>
      
      {/* Section Header */}
      <div className="flex items-center justify-center w-full mb-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className="mx-4 text-3xl font-bold tracking-wide">Coding Platforms</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full justify-items-center">
        {platforms.map((platform, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-xs text-center">
            <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
            <p className="text-gray-700 dark:text-gray-300">Questions Solved: <span className="font-bold">{platform.questionsSolved}</span></p>
            <p className="text-gray-700 dark:text-gray-300">Badges: <span className="font-bold">{platform.badges}</span></p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CodingPlatforms;
