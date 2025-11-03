const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
            colors: {
                primary: colors.blue,
                secondary: colors.slate,
            }
        },
    }
};
