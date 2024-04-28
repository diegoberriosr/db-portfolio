/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation : {
        'materialize' : 'materialize 5s forward'
      }
    },
      keyframes : {
        'materialize' : {
          '0%' : { transform : 'translateY(-10px)', opacity: 0},
          '100%' : { transform : 'translateY(0px)', opacity: 1}
        }
      }
  },
  plugins: [],
}