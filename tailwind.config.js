/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // nunito: ['Nunito', 'sans-serif']
        heading: ['"Playfair Display"', 'serif'], // for headings
        body: ['Lato', 'sans-serif'],            // for body text
        // optional: other pairings
        spiritual: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        // primary: '#33a8a2',
        // secondary: '#8ccbc7',
        // accent: '#8ccbc7',
        // btt: '#e93732',
        // dark: '#e9694e',
        // light: '#eab1a2',

        // primary: '#3EB5A3', // teal
        // secondary: '#F2D5A0', // beige
        // accent: '#F2D5A0', // sunlit sand
        // btt: '#D97B54', // terracota
        // dark: '#7A9E69', // olive
        // light: '#FF857A', // light coral
        
        primary: '#3EB5A3', // teal
        secondary: '#F2D5A0', // beige
        accent: '#F2D5A0', // sunlit sand
        btt: '#D97B54', // terracota
        dark: '#7A9E69', // olive
        light: '#FF857A', // light coral
      },
    },
},
  plugins: [],
}
