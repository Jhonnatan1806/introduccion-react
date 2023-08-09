/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors:{
                red: '#e50914',
                white: '#ffffff',
                black: '#1e1e1e'
            }
        },
    },
    plugins: [],
}
