const BackgroundWaves = ({ dayTheme }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1440 800"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {[...Array(15)].map((_, i) => (
          <path
            key={i}
            d={`M0 ${300 + i * 45}
               C 400 ${400 + i * 10},
                 900 ${200 + i * 10},
                 1440 ${200 + i * 30}`}
            stroke={dayTheme ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)"}
            strokeWidth="1.5"
            fill="none"
          />
        ))}
      </svg>
    </div>
  )
}
export default BackgroundWaves