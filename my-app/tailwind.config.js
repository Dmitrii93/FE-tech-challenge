/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                main: '#151F4E',
                primary: '#4B516A',
                secondary: '#838AA9',
                border: '#123FD2',
                hovered: '#F3F4F9',
                button: '#2B3E9B',
                strongBlue: '#1E318B',
                grayBorder: '#B9BFD9',
                lightBorder: '#EDF1FF',
                cancel: '#DCDFEF',
            },
            screens: {
                '2xl': { max: '1535px' },
                // => @media (max-width: 1535px) { ... }

                xl: { max: '1279px' },
                // => @media (max-width: 1279px) { ... }

                lg: { max: '1023px' },
                // => @media (max-width: 1023px) { ... }

                md: { max: '767px' },
                // => @media (max-width: 767px) { ... }

                sm: { max: '639px' },
                // => @media (max-width: 639px) { ... }
            },
        },
    },
    plugins: [],
};
