import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import TypeAnimationComp from "./TypeAnimationComp";
import Portfolio from "../assets/shirt-image-rbg.png";
import BackgroundWaves from "./stringBG";

const stringArray = [
  "AI/ML Researcher",
  "Applied Machine Learning",
  "Full-Stack Developer",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const AboutMe = ({ dayTheme }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden min-h-[550px] px-6 md:px-24 w-11/12 shadow-2xl rounded-2xl mb-40 flex flex-col md:flex-row items-center justify-between backdrop-blur-sm
      ${
        dayTheme
          ? "bg-gradient-to-r from-yellow-50 via-blue-50 to-blue-100"
          : "bg-gradient-to-r from-slate-900 via-slate-800 to-gray-950"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <BackgroundWaves dayTheme={dayTheme} />

      {/* Decorative background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={reduceMotion ? { opacity: 0.35 } : { opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: reduceMotion ? 0 : Infinity }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.12),transparent_60%)]" />
      </motion.div>

      {/* LEFT: image */}
      <motion.div
        className="z-10 w-full md:w-[40%] flex items-center justify-center py-12"
        whileHover={reduceMotion ? undefined : { scale: 1.04, y: -6 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <motion.img
          src={Portfolio}
          alt="Portrait of Dibakar Biswas"
          className="w-[60%] md:w-[75%] aspect-square object-cover object-top rounded-full shadow-2xl ring-4 ring-indigo-500/40 select-none pointer-events-none"
          draggable="false"
          animate={reduceMotion ? undefined : { y: [0, -4, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* RIGHT: text */}
      <motion.div
        className="z-10 w-full md:w-[55%] text-center md:text-left px-4 md:px-0 pb-12 md:pb-0 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className={`text-lg md:text-xl font-medium font-display mb-3 ${
            dayTheme ? "text-amber-600" : "text-yellow-400"
          }`}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="relative font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
        >
          <span className={`relative z-10 ${dayTheme ? "text-blue-800" : "text-white"}`}>
            Dibakar Biswas
          </span>
          {/* Subtle glow layer */}
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl opacity-60 -z-10" />
        </motion.h1>

        {/* Role animation */}
        <motion.div
          variants={fadeUp}
          className={`mb-4 ${
            dayTheme ? "text-indigo-700" : "text-indigo-400"
          }`}
        >
          <TypeAnimationComp stringArray={stringArray} />
        </motion.div>
      </motion.div>

      {/* Side accent bars */}
      <motion.div
        className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500/20 rounded-r-lg z-0"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-1.5 h-full bg-purple-500/20 rounded-l-lg z-0"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ delay: 0.2, duration: 1.2 }}
      />
    </motion.div>
  );
};

export default AboutMe;