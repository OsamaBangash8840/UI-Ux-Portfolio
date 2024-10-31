// tailwind.config.js

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',  // Custom breakpoint for tablet
        'laptop': '1024px', // Custom breakpoint for laptop
        'desktop': '1280px', // Custom breakpoint for desktop
        // Add more breakpoints as needed
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "gradient-one": '#1B1C37',
        "gradient-two": '#7579FF',
        "gradient-three": "#B224EF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
