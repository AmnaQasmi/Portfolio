/** @type {import('tailwindcss').Config} */
module.exports = {
  siteUrl: 'https://portfolio30-amna-qasmis-projects.vercel.app',
  generateRobotsTxt: true,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/magicui/components/**/*.{ts,tsx}", // 🔥 This line is required 
  ],
  theme: {
    extend: {
      colors: {
        // from tailwindcss docs colorVariables
        bgColor: '#0A192F',
        primaryColor: '#64ffda',
        textColor: '#8892B0',
        

      },
      animation: {
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },
    },
    screens: {
      'xsm': '350px',
      'xs': '476px',
      'sm': '640px',
      'md': '768px',
      'bs': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',


      '2xl-mx': { 'max': '1535px' },
      'xl-mx': { 'max': '1279px' },
      'lg-mx': { 'max': '1023px' },
      'bs-mx': { 'max': '899px' },
      'md-mx': { 'max': '767px' },
      'sm-mx': { 'max': '639px' },
      'xs-mx': { 'max': '475px' },
      'xsm-mx': { 'max': '349px' }
    }

  },
    plugins: [],
  }