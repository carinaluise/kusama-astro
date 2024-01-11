/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '990px',
      xl: '1200px',
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
        xs: '14px',
        sm: '16px',
        base: '18px',
        md: '20px',
        lg: '24px',
        xl: '28px',
        '2xl': '30px',
        '3xl': '50px',
        '4xl': '70px',
      },
    },
  },
  plugins: [],
};
