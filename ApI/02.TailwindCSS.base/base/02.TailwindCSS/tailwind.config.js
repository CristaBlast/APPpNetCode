import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js}"],
 theme: {
 extend: {
 fontFamily: {
 sans: ['Figtree', ...defaultTheme.fontFamily.sans],
 },
 },
 },
 plugins: [forms],
}