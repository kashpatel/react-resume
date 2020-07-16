const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        extend: {
            screens: {
                paper: '8.5in',
                print: {
                    raw: 'print',
                },
            },
            fontFamily: {
                serif: [
                    'Inter',
                    'Segoe UI',
                    'Roboto',
                    'Oxygen',
                    'Ubuntu',
                    'Helvetica Neue',
                    'sans-serif',
                    'Arial',
                ],
            },
            scale: {
                '120': '1.2',
                '140': '1.4',
                '160': '1.6',
            },
            fontSize: {
                '70': '0.70rem',
            },
            colors: {
                primary: colors.blue,
                secondary: colors.gray,
            },
            padding: {
                '0.10': '0.10rem',
            },
        },
    },
    variants: ['responsive', 'hover'],
    purge: [],
    plugins: [],
};
