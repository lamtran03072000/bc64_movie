/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px', min: '993px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '992px', min: '768px' },
        // => @media (max-width: 992px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};

// B1 : npm install -D tailwindcss
//b2 : npx tailwindcss init
// b3 :
