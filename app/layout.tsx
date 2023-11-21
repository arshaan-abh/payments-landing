import "./globals.css";
import type { Metadata } from "next";
import { Montserrat as Mono, Lato, Montserrat } from "next/font/google";

export const metadata: Metadata = {
	title: "Selected Payment",
	description: "",
};
const mono = Mono({
	subsets: ["latin"],
	variable: "--font-mono",
	weight: ["500", "600", "800", "900"],
});
const lato = Lato({
	subsets: ["latin"],
	variable: "--font-lato",
	weight: ["300", "400", "700", "900"],
});
const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${mono.variable} ${lato.variable} ${montserrat.variable} bg-secondary`}
			>
				{children}
			</body>
		</html>
	);
}
