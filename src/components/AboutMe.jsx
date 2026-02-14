// import React from 'react'
// import { motion } from 'framer-motion'
// import TypeAnimationComp from './TypeAnimationComp'
// // import Portfolio from "../assets/portfolio-photo-sh.png"
// import Portfolio from "../assets/shirt-image-rbg.png"

// const AboutMe = ({ dayTheme }) => {
//   const stringArray = ["Software Engineer", "Fullstack Developer", "AI/ML Enthusiast"]

//   return (
//     <motion.div
//       className={`relative overflow-hidden min-h-96 px-5 md:px-20 w-11/12 shadow-xl rounded-xl mb-40 flex flex-col md:flex-row items-center justify-between
//         ${dayTheme ? 'bg-gradient-to-r from-yellow-50 to-blue-100' : 'bg-gradient-to-r from-slate-800 to-gray-900'}`}
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <svg
//         className="absolute z-0 top-0 left-0 w-full h-full pointer-events-none"
//         viewBox="0 0 800 600"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <motion.polygon
//           points="100,100 300,100 200,300"
//           fill="#6366f1"
//           fillOpacity="0.08"
//           animate={{ scale: [1, 1.1, 1] }}
//           transform="translate(0, 0)"
//           transition={{ duration: 5, repeat: Infinity }}
//         />
//         <motion.circle
//           cx="650"
//           cy="100"
//           r="60"
//           fill="#ec4899"
//           fillOpacity="0.07"
//           animate={{ r: [60, 70, 60] }}
//           transition={{ duration: 6, repeat: Infinity }}
//         />
//         <motion.rect
//           x="500"
//           y="400"
//           width="120"
//           height="120"
//           rx="20"
//           fill="#10b981"
//           fillOpacity="0.06"
//           animate={{ rotate: [0, 360] }}
//           transform="rotate(0 560 460)"
//           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//         />

//       </svg>

//       <motion.div
//         className="absolute inset-0 pointer-events-none z-0"
//         animate={{ opacity: [0.3, 0.6, 0.3] }}
//         transition={{ duration: 5, repeat: Infinity }}
//       >
//         <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-400/10 via-transparent to-transparent" />
//       </motion.div>

//       <motion.div
//         className="z-10 w-full md:w-[40%] flex items-center justify-center py-10"
//         whileHover={{ scale: 1.05, y: -5 }}
//         transition={{ type: 'spring', stiffness: 150 }}
//       >
//         <motion.img
//           src={Portfolio}
//           alt="About"
//           className="w-[50%] md:w-[70%] h-auto object-contain rounded-full shadow-2xl ring-4 ring-indigo-400 pointer-events-none select-none xs:w-[80%]"
//           onContextMenu={(e) => e.preventDefault()}
//           draggable="false"
//           animate={{
//             y: [0, -3, 3, 0],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </motion.div>

//       <motion.div
//         className="z-10 w-full md:w-[60%] text-center px-4 pb-10 md:pb-0 flex flex-col justify-center"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//       >
//         <p className="text-2xl font-medium text-yellow-300 dark:text-yellow-400 xs:text-xl">Hi!👋</p>
//         <p className="text-4xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 animate-gradient xs:text-2xl">
//           I'm
//         </p>
//         <p className="mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white">
//           Dibakar Biswas
//         </p>
//         <TypeAnimationComp stringArray={stringArray} />
//       </motion.div>

//       <motion.div
//         className="absolute top-0 left-0 w-2 h-full bg-indigo-500 opacity-20 rounded-r-lg z-0"
//         initial={{ height: 0 }}
//         animate={{ height: "100%" }}
//         transition={{ duration: 1.2 }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-0 w-2 h-full bg-purple-400 opacity-20 rounded-l-lg z-0"
//         initial={{ height: 0 }}
//         animate={{ height: "100%" }}
//         transition={{ delay: 0.3, duration: 1.2 }}
//       />
//     </motion.div>
//   )
// }

// export default AboutMe


import React from "react"
import { color, motion } from "framer-motion"
import TypeAnimationComp from "./TypeAnimationComp"
import Portfolio from "../assets/shirt-image-rbg.png"
import BackgroundWaves from "./stringBG"

const AboutMe = ({ dayTheme }) => {
  const stringArray = [
    "Software Engineer",
    "Fullstack Developer",
    "AI/ML Enthusiast",
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className={`relative overflow-hidden min-h-[550px] px-6 md:px-24 w-11/12 shadow-2xl rounded-2xl mb-40 flex flex-col md:flex-row items-center justify-between backdrop-blur-sm
      ${
        dayTheme
          ? "bg-gradient-to-r from-yellow-50 to-blue-100"
          : "bg-gradient-to-r from-slate-900 to-gray-950"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <BackgroundWaves dayTheme={dayTheme}/>
      {/* Decorative Background Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.12),transparent_60%)]" />
      </motion.div>

      {/* LEFT IMAGE SECTION */}
      <motion.div
        className="z-10 w-full md:w-[40%] flex items-center justify-center py-12"
        whileHover={{ scale: 1.04, y: -6 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <motion.img
          src={Portfolio}
          alt="Dibakar Biswas"
          className="w-[60%] md:w-[75%] h-auto object-contain rounded-full shadow-2xl ring-4 ring-indigo-500/40 select-none pointer-events-none"
          draggable="false"
          animate={{ y: [0, -4, 4, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* RIGHT TEXT SECTION */}
      <motion.div
        className="z-10 w-full md:w-[55%] text-center md:text-left px-4 md:px-0 pb-12 md:pb-0 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl font-medium text-yellow-400 mb-3"
        >
          Hi 👋
        </motion.p>

        {/* Intro */}
        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl font-semibold text-slate-400 mb-2"
        >
          I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white mb-6"
        >
          <span className={`relative z-10 font-black tracking-tight ${
            dayTheme ? "text-blue-800" : "text-white"
          }`}>Dibakar Biswas</span>

          {/* Subtle Glow Layer */}
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl opacity-60 -z-10" />
        </motion.h1>

        {/* Role Animation */}
        <motion.div
          variants={fadeUp}
          className="text-lg md:text-xl font-medium text-indigo-400"
        >
          <TypeAnimationComp stringArray={stringArray} />
        </motion.div>
      </motion.div>

      {/* Side Accent Bars */}
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
  )
}

export default AboutMe
