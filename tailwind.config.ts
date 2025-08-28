import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts,tsx,js,jsx}'],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
