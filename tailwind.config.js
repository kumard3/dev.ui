module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './website/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient-animation': 'gradient-animation 4s ease infinite',
      },
      keyframes: {
        'gradient-animation': {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
      },
      fontFamily: {
        jostRegular: ['jostregular', 'sans-serif'],
        jostMedium: ['jostmedium', 'sans-serif'],
        jostBold: ['jostbold', 'sans-serif'],
        IBMPlexBold: ['IBMPlexMonoBold', 'sans-serif'],
        IBMPlexRegular: ['IBMPlexMonoRegular', 'sans-serif'],
        IBMPlexMedium: ['IBMPlexMonoMedium', 'sans-serif'],
        IBMPlexSemiBold: ['IBMPlexMonoSemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
