import React from "react";

const WORDS = ["Curiosity.", "Compute.", "Creation."];
const FILL_ALPHA = { day: 0.07, night: 0.09 };
const STROKE_ALPHA = { day: 0.3, night: 0.35 };

const PortfolioBackground = ({ dayTheme }) => {
  const ink = dayTheme ? "0, 0, 0" : "255, 255, 255";
  const fill = `rgba(${ink}, ${dayTheme ? FILL_ALPHA.day : FILL_ALPHA.night})`;
  const stroke = `rgba(${ink}, ${dayTheme ? STROKE_ALPHA.day : STROKE_ALPHA.night})`;

  const base = {
    lineHeight: 0.88,
    fontWeight: 800,
    letterSpacing: "-0.045em",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    whiteSpace: "nowrap",
    userSelect: "none",
    transition: "color 0.5s ease, -webkit-text-stroke-color 0.5s ease",
  };

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-500 ${
        dayTheme ? "bg-neutral-100" : "bg-black"
      }`}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-end gap-[1.5vh] px-[4vw]">
        {WORDS.map((word, i) => {
          const outlined = i === 1;
          return (
            <div
              key={word}
              className="text-right text-[length:min(19vw,29vh)] md:text-[length:min(16vw,29vh)]"
              style={{
                ...base,
                color: outlined ? "transparent" : fill,
                WebkitTextStroke: outlined ? `1.5px ${stroke}` : "0",
              }}
            >
              {word}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioBackground;
