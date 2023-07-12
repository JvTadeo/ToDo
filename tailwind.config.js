/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'very-dark-blue': '#0c0c25',
        'very-dark-desaturated-blue':'#131a2f',
        'ligh-grayish-blue':'#d9e2f1',
        'ligh-gravysh-blue(hover)':'#f0f4fa',
        'dark-grayish-blue':'#575d73',
        'very-dark-grayish-blue':'#202a45',
        'very-dark-grayish-blue(other)':'#1c1f34',
        'very-ligh-blue': '#57ddff',
        'very-ligh-purble': '#c058f3',    
        'light-very-light-gray': '#fafafa',
        'light-very-light-blue': '#dbe3f1',
        'light-grayish-blue': '#c2cde8',
        'light-dark-grayish-blue': '#546d98',
        'light-very-dark-grayish-blue': '#2b3f59',
      },
      fontFamily:{
        'JosefinSans': ['Josefin Sans']
      }
    },
  },
  plugins: [],
}

