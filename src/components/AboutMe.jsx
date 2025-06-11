import React from 'react'
import { motion } from 'framer-motion'
import TypeAnimationComp from './TypeAnimationComp'
import Portfolio from "../assets/portfolio-photo-sh.png"

const AboutMe = ({ dayTheme }) => {
  const stringArray = ["Software Engineer", "Fullstack Developer", "AI/ML Enthusiast"]

  return (
    <motion.div
      className={`relative overflow-hidden min-h-96 px-5 md:px-20 w-11/12 shadow-xl rounded-xl mb-40 flex flex-col md:flex-row items-center justify-between
        ${dayTheme ? 'bg-gradient-to-r from-yellow-50 to-blue-100' : 'bg-gradient-to-r from-slate-800 to-gray-900'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <svg
        className="absolute z-0 top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.polygon
          points="100,100 300,100 200,300"
          fill="#6366f1"
          fillOpacity="0.08"
          animate={{ scale: [1, 1.1, 1] }}
          transform="translate(0, 0)"
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.circle
          cx="650"
          cy="100"
          r="60"
          fill="#ec4899"
          fillOpacity="0.07"
          animate={{ r: [60, 70, 60] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.rect
          x="500"
          y="400"
          width="120"
          height="120"
          rx="20"
          fill="#10b981"
          fillOpacity="0.06"
          animate={{ rotate: [0, 360] }}
          transform="rotate(0 560 460)"
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

      </svg>

      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-400/10 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        className="z-10 w-full md:w-[40%] flex items-center justify-center py-10"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: 'spring', stiffness: 150 }}
      >
        <motion.img
          src={Portfolio}
          alt="About"
          className="w-[50%] md:w-[70%] h-auto object-contain rounded-full shadow-2xl ring-4 ring-indigo-400 pointer-events-none select-none xs:w-[80%]"
          onContextMenu={(e) => e.preventDefault()}
          draggable="false"
          animate={{
            y: [0, -3, 3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        className="z-10 w-full md:w-[60%] text-center px-4 pb-10 md:pb-0 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p className="text-2xl font-medium text-yellow-300 dark:text-yellow-400 xs:text-xl">Hi!👋</p>
        <p className="text-4xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 animate-gradient xs:text-2xl">
          I'm Dibakar Biswas
        </p>
        <TypeAnimationComp stringArray={stringArray} />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-2 h-full bg-indigo-500 opacity-20 rounded-r-lg z-0"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-2 h-full bg-purple-400 opacity-20 rounded-l-lg z-0"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ delay: 0.3, duration: 1.2 }}
      />
    </motion.div>
  )
}

export default AboutMe


