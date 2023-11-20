import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
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
				lato: ["var(--font-lato)"],
				mono: ["var(--font-mono)"],
				montserrat: ["var(--font-montserrat)"],
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
			},
			animation: {
				marquee: "marquee 16s infinite linear",
				"marquee-after": "marquee-after 16s infinite linear",
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
