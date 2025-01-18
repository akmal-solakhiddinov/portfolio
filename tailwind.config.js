/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Neutral palette
        primary: '#F5F5DC', // Soft Beige
        secondary: '#D8E2DC', // Light Green
        accent: '#FFD700', // Warm Yellow
        neutral: {
          light: '#E5E5E5',  // Light Gray
          DEFAULT: '#333333', // Dark Gray
          dark: '#555555',   // Gray for text
        },
        info: {
          DEFAULT: '#8DA7BE', // Muted Blue
          hover: '#F4C7AB',   // Blush Pink
        },
        success: {
          DEFAULT: '#8DA7BE', // Muted Blue
          hover: '#FFD700',   // Yellow accent
        },
        warning: '#F4C7AB', // Blush Pink
      },
      spacing: {
        '72': '18rem',   // 288px for large sections
        '96': '24rem',   // 384px for full-page sections
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}