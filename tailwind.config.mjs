/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        		"primary": "#0D7DF2",
        		"primary-dark": "#61758A",
        		"secondary": "#F0F2F5",
        		"secondary-dark": "#374957",
        		"blackout": "#121417",
        		"primary-light": "#DBE0E5",
        		"background": "#CECECE"
      		},
			screens: {
      			'xs': "480px",
      			'sm': "640px",
      			"md": "768px",
      			"lg": "1024px",
      			"xl": "1280px"
    		}
		},
	},
	darkMode: 'class',
	plugins: [],
}
