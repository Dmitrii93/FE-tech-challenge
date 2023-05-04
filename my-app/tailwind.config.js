/** @type {import('tailwindcss').Config} */
module.exports = {
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
                sm: { min: '640px', max: '768px' },
                // => @media (min-width: 640px and max-width: 767px) { ... }

                md: { min: '768px', max: '1024px' },
                // => @media (min-width: 768px and max-width: 1023px) { ... }

                lg: { min: '1024px', max: '1280px' },
                // => @media (min-width: 1024px and max-width: 1279px) { ... }

                xl: { min: '1280px', max: '1536px' },
                // => @media (min-width: 1280px and max-width: 1535px) { ... }

                '2xl': { min: '1536px' },
                // => @media (min-width: 1536px) { ... }
            },
        },
    },
    plugins: [],
};
