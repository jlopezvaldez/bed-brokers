/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom-blue': '#05414c',
				'custom-blue-700': '#011317',
			}

		},
	},
	plugins: [],
}
