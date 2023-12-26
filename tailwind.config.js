module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./website/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-animation": "gradient-animation 4s ease infinite",
      },
      keyframes: {
        "gradient-animation": {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
      fontFamily: {
        jostRegular: ["jostregular", "sans-serif"],
        jostMedium: ["jostmedium", "sans-serif"],
        jostBold: ["jostbold", "sans-serif"],
        joyride: ["joyride", "sans-serif"],
        outerSans: ["outerSans", "sans-serif"],
        RubikBold: ["Rubik-Bold", "sans-serif"],
        RubikSemibold: ["Rubik-SemiBold", "sans-serif"],
        RubikMedium: ["Rubik-Medium", "sans-serif"],
        aberMono: ["aberMono", "sans-serif"],
        raleway: ["raleway", "sans-serif"],
        ralewayRegular: ["ralewayRegular", "sans-serif"],
        jostregular: ["jostregular", "sans-serif"],
        jostmedium: ["jostmedium", "sans-serif"],
        jostbold: ["jostbold", "sans-serif"],
        IBMPlexBold: ["IBMPlexMonoBold", "sans-serif"],
        IBMPlexRegular: ["IBMPlexMonoRegular", "sans-serif"],
        IBMPlexMedium: ["IBMPlexMonoMedium", "sans-serif"],
        IBMPlexSemiBold: ["IBMPlexMonoSemiBold", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "black-1": "#111111",
      },
    },
  },
  plugins: [],
};
