/**  @type {import('tailwindcss').Config}  */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: { extend: {
    colors: {
      'day-bg': '#ffffff', // Day background
      'night-bg': '#1a202c', // Night background
      'day-text': '#1a202c', // Day text
      'night-text': '#ffffff', // Night text
    },
    screens: {
      'xs': { 'max': '450px' },  // Custom breakpoint for 450px
    },
    boxShadow: {
      'custom': '0 4px 30px rgba(0, 0, 0, 0.1)', // Example custom shadow
    },
    fontFamily: {
      sans: ['Consolas', 'ui-sans-serif', 'system-ui'],
      mono: ['Consolas', 'ui-monospace', 'SFMono-Regular'],
    },
    keyframes: {
      pulseScale: {
        "0%, 100%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.2)" }, // Adjust scale as needed
      },
    },
    animation: {
      pulseScale: "pulseScale 1.5s infinite ease-in-out",
    },
    spacing: {
        '30': '7.5rem', // Now you can use pl-30
    },
    width: {
        'ex': '96%',
    },
  }, },
  plugins: [],
}



