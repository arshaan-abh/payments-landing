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
					50: "#F5F8F6",
					100: "#E0E7E4",
					200: "#C0CFC8",
					300: "#9AB0A7",
					400: "#738E83",
					500: "#597369",
					600: "#465B54",
					700: "#3A4B45",
					800: "#313E3A",
					900: "#222927",
					950: "#0F1413",
				},
				primary: {
					50: "#EFFEFB",
					100: "#C9FEF5",
					200: "#92FDED",
					300: "#54F4E2",
					400: "#21E0D0",
					500: "#08C4B7",
					600: "#039E97",
					700: "#087D79",
					800: "#0C6362",
					900: "#0F5251",
					950: "#013334",
				},
				secondary: {
					50: "#E9FFF6",
					100: "#C9FFE8",
					200: "#99FFD7",
					300: "#66FECB",
					400: "#16F1AE",
					500: "#00D999",
					600: "#00B17E",
					700: "#008E69",
					800: "#007054",
					900: "#004D3B",
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
				marquee: "marquee 64s infinite linear",
				"marquee-after": "marquee-after 64s infinite linear",
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
		},
	},
	plugins: [],
};

export default config;
