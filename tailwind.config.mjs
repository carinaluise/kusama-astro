/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1290px',
    },
    colors: {
      white: '#fff',
      black: '#000',
      pink: '#e6007a',
      turqoise: '#40e0d0',
      gray: '#6c757d',
      'gray-dark': '#343a40',
    },
    fontFamily: {
      mono: ['SpaceMono-Regular', 'Helvetica', 'Arial', 'sans-serif'],
      space: ['SpaceGrotesk-Regular', 'serif'],
      'space-bold': ['SpaceGrotesk-Bold', 'serif'],
    },
    extend: {
      fontSize: {
        base: '18px',
        xl: '1.6rem',
        '2xl': '2.2rem',
        '3xl': '2.5rem',
        '4xl': '3.5rem',
        '5xl': '4rem',
      },
    },
  },
  plugins: [],
};
