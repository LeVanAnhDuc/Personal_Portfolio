import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            textColor: {
                primary: '#65B741',
            },
            backgroundColor: {
                define: '#F9FAFF',
                primary: '#65B741',
            },
            spacing: {
                18: '4.5rem',
                120: '30rem',
                128: '32rem',
                140: '35rem',
                144: '36rem',
                148: '37rem',
                152: '38rem',
                156: '39rem',
            },
        },
    },
    plugins: [],
};
export default config;
