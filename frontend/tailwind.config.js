/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "640px", // Tablet (small screens)
        md: "768px", // Tablet (medium screens)
        lg: "1024px", // Laptop (large screens)
        xl: "1280px", // Desktop (extra large screens)
        "2xl": "1536px", // Extra large screens
      },
      keyframes: {
        "fade-in-bottom": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        rotate: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "fade-in-bottom": "fade-in-bottom 1s ease-out forwards",
        rotate: "rotate 1s linear infinite",
      },
    },
  },
  plugins: [],
};
