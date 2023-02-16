/** @type {import('tailwindcss').Config} */
const { withAnimations } = require('animated-tailwindcss');

module.exports = withAnimations({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	mode: 'jit',
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				sed: ['Sedgwick Ave Display', 'cursive'],
			},
		},
	},
	plugins: [require('tailwindcss-intersect')],
});
