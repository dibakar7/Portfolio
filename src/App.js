import React, { useState} from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/footer";
import CodingPlatforms from "./components/CodingPlatforms";
import AboutMeContact from "./components/AboutMeContact";
import ContactMe from "./components/ContactMe";

function App() {
  const [dayTheme, setDayTheme] = useState(true);
  return (
    <div className={`relative overflow-hidden ${dayTheme ? `gray-primary-color`: `bg-primary-color`}`}>
      {/* <PortfolioBackground /> */}
      <div className="flex flex-col w-full justify-between items-center">
        <Header dayTheme={dayTheme} setDayTheme={setDayTheme} />
      </div>
      <div className="flex flex-col w-full justify-between items-center relative z-0 pt-36">
        <AboutMe dayTheme={dayTheme} />
        <AboutMeContact dayTheme={dayTheme} />
        <Experience dayTheme={dayTheme} />
        <Education dayTheme={dayTheme} />
        <Skills dayTheme={dayTheme} />
        <Projects dayTheme={dayTheme} />
        <CodingPlatforms dayTheme={dayTheme} />
        <ContactMe dayTheme={dayTheme} />
        <Footer dayTheme={dayTheme} />
      </div>
    </div>
  );
}

export default App;
