import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			flexGrow: {
				2: "2",
			},
			screens: {
				xs: "376px",
			},
			colors: {
				gray: {
					50: "#f5f8f6",
					100: "#e0e7e4",
					200: "#c0cfc8",
					300: "#9ab0a7",
					400: "#738e83",
					500: "#597369",
					600: "#465b54",
					700: "#3a4b45",
					800: "#313e3a",
					900: "#222927",
					950: "#0f1413",
				},
				primary: {
					50: "#effefb",
					100: "#c9fef5",
					200: "#92fded",
					300: "#54f4e2",
					400: "#21e0d0",
					500: "#08c4b7",
					600: "#039e97",
					700: "#087d79",
					800: "#0c6362",
					900: "#0f5251",
					950: "#013334",
				},
				secondary: {
					50: "#e9fff6",
					100: "#c9ffe8",
					200: "#99ffd7",
					300: "#66fecb",
					400: "#16f1ae",
					500: "#00d999",
					600: "#00b17e",
					700: "#008e69",
					800: "#007054",
					900: "#004d3b",
					950: "#003429",
				},
			},
			fontFamily: {
				mono: ["var(--font-geist-mono)"],
			},
			keyframes: {
				marquee: {
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
				marquee: "marquee 8s infinite linear",
				"marquee-reverse": "marquee 8s infinite reverse linear",
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
			borderRadius: {
				"rectangle-full": "999px",
			},
			transitionProperty: {
				"opacity-width": "opacity, width",
				"opacity-height": "opacity, height",
			},
		},
	},
	plugins: [],
};

export default config;
