import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				underline:
					"linear-gradient(0deg, #ffffff1a 0%, #ffffff1a calc(100% / 3), transparent calc(100% / 3), transparent 100%)",
			},
			flexGrow: {
				2: "2",
			},
			screens: {
				xs: "376px",
			},
			colors: {
				gray: {
					100: "#3b3b3b",
					200: "#606060",
					300: "#858585",
					400: "#aaaaaa",
					500: "#cfcfcf",
					600: "#d0d0d0",
					700: "#f2f2f2",
				},
				primary: "#161616",
				secondary: "#ffffff",
			},
			fontFamily: {
				mono: ["var(--font-geist-mono)", "sans-serif"],
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				"marquee-after": {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				wiggle: {
					"0%, 50%": {
						"-webkit-transform": "rotate(0deg)",
						transform: "rotate(0deg)",
					},
					"60%": {
						"-webkit-transform": "rotate(15deg)",
						transform: "rotate(15deg)",
					},
					"70%": {
						"-webkit-transform": "rotate(-10deg)",
						transform: "rotate(-10deg)",
					},
					"80% ": {
						"-webkit-transform": "rotate(5deg)",
						transform: "rotate(5deg)",
					},
					"90%": {
						"-webkit-transform": "rotate(-5deg)",
						transform: "rotate(-5deg)",
					},
					"100%": {
						"-webkit-transform": "rotate(0deg)",
						transform: "rotate(0deg)",
					},
				},
				showHide: {
					"0%": {
						opacity: "1",
					},
					"49%": {
						opacity: "1",
					},
					"51%": {
						opacity: "0",
					},
					"100%": {
						opacity: "0",
					},
				},
			},
			animation: {
				marquee: "marquee 16s infinite linear",
				"marquee-after": "marquee-after 16s infinite linear",
				wiggle: "wiggle 2s infinite",
				show: "showHide 8s infinite alternate linear",
				hide: "showHide 8s infinite alternate-reverse linear",
			},
			maxWidth: {
				"screen-1.5xl": "88rem",
			},
			padding: {
				30: "7.5rem",
			},
		},
	},
	plugins: [],
};

export default config;
