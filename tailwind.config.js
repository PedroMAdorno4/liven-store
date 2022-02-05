module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      aspectRatio: {
        '16/9': '16 / 9',
        '4/3': '4 / 3',
        '9/12': '9 / 12',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}