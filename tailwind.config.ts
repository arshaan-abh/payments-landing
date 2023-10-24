import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				gray_1: "#3B3B3B",
				gray_2: "#606060",
				gray_3: "#858585",
				gray_4: "#AAAAAA",
				gray_5: "#CFCFCF",
				gray_6: "#D0D0D0",
				gray_7: "#F2F2F2",
				primery: "#161616",
				secondary: "#FFFFFF",
			},
			fontFamily: {
				sans: ["var(--font-lato)", ...defaultTheme.fontFamily.sans],
				mono: ["var(--font-mono)", ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
