import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'ticker-horizontal': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'ticker-vertical-left': {
          '0%': { transform: 'translateY(100%) rotate(90deg)' },
          '100%': { transform: 'translateY(-100%) rotate(90deg)' },
        },
        'ticker-vertical-right': {
          '0%': { transform: 'translateY(100%) rotate(90deg)' },
          '100%': { transform: 'translateY(-100%) rotate(90deg)' },
        },
      },
      animation: {
        'ticker-horizontal-up': 'ticker-horizontal 10s linear infinite',
        'ticker-horizontal-down': 'ticker-horizontal 10s linear infinite 2s',
        'ticker-vertical-left': 'ticker-vertical-left 10s linear infinite',
        'ticker-vertical-right': 'ticker-vertical-right 10s linear infinite 2s',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      fontSize: {
        c2: ['12px', '18px'],
        c1: ['14px', '21px'],
        p: ['16px', '24px'],
        bt: ['18px', '27px'],
        t: ['20px', '30px'],
        h6: ['24px', '30px'],
        h5: ['32px', '48px'],
        h4: ['48px', '72px'],
        h3: ['64px', '96px'],
        h2: ['72px', '108px'],
        h1: ['80px', '120px'],
      },
      colors: {
        neutral: {
          0: '#FFFFFF',
          100: '#F6F6F6',
          200: '#E4E4E4',
          300: '#CACACA',
          400: '#B0B0B0',
          500: '#959595',
          600: '#7B7B7B',
          700: '#616161',
          800: '#505050',
          900: '#404040',
          1000: '#202020',
        },
        primary: {
          100: '#F0FBFE',
          200: '#D4F4FC',
          300: '#AAEAF9',
          400: '#7FE0F6',
          500: '#55D6F3',
          600: '#2ACCF0',
          700: '#00C2EE',
          800: '#00A1C6',
          900: '#00819E',
          1000: '#006177',
          1100: '#001216'
        },
        secondary: {
          100: '#FFFDF2',
          200: '#FFF9D9',
          300: '#FFF3B3',
          400: '#FFEE8D',
          500: '#FFE867',
          600: '#FFE241',
          700: '#FFDD1C',
          800: '#D4B817',
          900: '#AA9312',
          1000: '#7F6E0E',
          1100: '#181502'
        },
        tertiary: {
          100: '#F2F3F4',
          200: '#DADCDF',
          300: '#B7BAC0',
          400: '#9397A1',
          500: '#6F7582',
          600: '#4B5263',
          700: '#273044',
          800: '#202838',
          900: '#1A202D',
          1000: '#273044',
          1100: '#030406'
        },
        success: {
          100: '#F2FAF2',
          200: '#D9F1D9',
          300: '#B3E4B5',
          400: '#8DD690',
          500: '#67C96B',
          600: '#41BB46',
          700: '#1CAE21',
          800: '#17911B',
          900: '#127416',
          1000: '#0E5710',
          1100: '#021002'
        },
        warning: {
          100: '#FFF6F0',
          200: '#FFE5D4',
          300: '#FFCBAA',
          400: '#FFB27F',
          500: '#FF9855',
          600: '#FF7E2A',
          700: '#FF6500',
          800: '#D45400',
          900: '#AA4300',
          1000: '#7F3200',
          1100: '#180900'
        },
        danger: {
          100: '#FEF5F5',
          200: '#FEE3E2',
          300: '#FDC7C5',
          400: '#FCABA8',
          500: '#FB8F8B',
          600: '#FA736E',
          700: '#FA5852',
          800: '#D04944',
          900: '#A63A36',
          1000: '#7D2C29',
          1100: '#170807'
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
