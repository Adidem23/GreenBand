/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pacifico : ["Pacifico"],
        Bubblegum : ["Bubblegum"],
        Kudryashev: ["Kudryashev"],
      },
      backgroundImage: {
        'cross-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cg stroke-width='6.5' stroke='hsla(0, 0%25, 100%25, 1.00)' fill='none'%3E%3Cline x1='0' y1='0' x2='400' y2='400'%3E%3C/line%3E%3Cline x1='400' y1='0' x2='0' y2='400'%3E%3C/line%3E%3Cline x1='400' y1='0' x2='800' y2='400'%3E%3C/line%3E%3Cline x1='800' y1='0' x2='400' y2='400'%3E%3C/line%3E%3Cline x1='800' y1='0' x2='1200' y2='400'%3E%3C/line%3E%3Cline x1='1200' y1='0' x2='800' y2='400'%3E%3C/line%3E%3Cline x1='0' y1='400' x2='400' y2='800'%3E%3C/line%3E%3Cline x1='400' y1='400' x2='0' y2='800'%3E%3C/line%3E%3Cline x1='400' y1='400' x2='800' y2='800'%3E%3C/line%3E%3Cline x1='800' y1='400' x2='400' y2='800'%3E%3C/line%3E%3Cline x1='800' y1='400' x2='1200' y2='800'%3E%3C/line%3E%3Cline x1='1200' y1='400' x2='800' y2='800'%3E%3C/line%3E%3Cline x1='0' y1='800' x2='400' y2='1200'%3E%3C/line%3E%3Cline x1='400' y1='800' x2='0' y2='1200'%3E%3C/line%3E%3Cline x1='400' y1='800' x2='800' y2='1200'%3E%3C/line%3E%3Cline x1='800' y1='800' x2='400' y2='1200'%3E%3C/line%3E%3Cline x1='800' y1='800' x2='1200' y2='1200'%3E%3C/line%3E%3Cline x1='1200' y1='800' x2='800' y2='1200'%3E%3C/line%3E%3C/g%3E%3C/svg%3E")`,
        'cross-pattern-light': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cg stroke-width='6.5' stroke='hsla(215, 16%25, 47%25, 1.00)' fill='none'%3E%3Cline x1='0' y1='0' x2='400' y2='400'%3E%3C/line%3E%3Cline x1='400' y1='0' x2='0' y2='400'%3E%3C/line%3E%3Cline x1='400' y1='0' x2='800' y2='400'%3E%3C/line%3E%3Cline x1='800' y1='0' x2='400' y2='400'%3E%3C/line%3E%3Cline x1='800' y1='0' x2='1200' y2='400'%3E%3C/line%3E%3Cline x1='1200' y1='0' x2='800' y2='400'%3E%3C/line%3E%3Cline x1='0' y1='400' x2='400' y2='800'%3E%3C/line%3E%3Cline x1='400' y1='400' x2='0' y2='800'%3E%3C/line%3E%3Cline x1='400' y1='400' x2='800' y2='800'%3E%3C/line%3E%3Cline x1='800' y1='400' x2='400' y2='800'%3E%3C/line%3E%3Cline x1='800' y1='400' x2='1200' y2='800'%3E%3C/line%3E%3Cline x1='1200' y1='400' x2='800' y2='800'%3E%3C/line%3E%3Cline x1='0' y1='800' x2='400' y2='1200'%3E%3C/line%3E%3Cline x1='400' y1='800' x2='0' y2='1200'%3E%3C/line%3E%3Cline x1='400' y1='800' x2='800' y2='1200'%3E%3C/line%3E%3Cline x1='800' y1='800' x2='400' y2='1200'%3E%3C/line%3E%3Cline x1='800' y1='800' x2='1200' y2='1200'%3E%3C/line%3E%3Cline x1='1200' y1='800' x2='800' y2='1200'%3E%3C/line%3E%3C/g%3E%3C/svg%3E")`,
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        gradient_move: 'gradientMove 6s ease infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }
    },
    
  },
  plugins: [],
}