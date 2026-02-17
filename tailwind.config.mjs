/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#b45309',
          dark: '#92400e',
          light: '#d97706',
        },
        slate: {
          DEFAULT: '#1e293b',
          light: '#334155',
          dark: '#0f172a',
        },
        sand: {
          DEFAULT: '#fef3c7',
          dark: '#fde68a',
          light: '#fffbeb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
