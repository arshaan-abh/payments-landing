import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { LayoutProps } from "@/.next/types/app/layout";

export const metadata: Metadata = {
	title: "Selected Payment",
	description:
		"Enjoy effortless and secure transactions with Selected Payments.",
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<head>
				<meta property="og:url" content="https://selectedpayments.com" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Selected Payments" />
				<meta
					property="og:description"
					content="Enjoy effortless and secure transactions with Selected Payments."
				/>
				<meta property="og:image" content="/*TODO*/" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="selectedpayments.com" />
				<meta property="twitter:url" content="https://selectedpayments.com" />
				<meta name="twitter:title" content="Selected Payments" />
				<meta
					name="twitter:description"
					content="Enjoy effortless and secure transactions with Selected Payments."
				/>
				<meta name="twitter:image" content="/*TODO*/" />

				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="metadata/light/apple-icon-57x57.png"
					media="(prefers-color-scheme: light)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="metadata/light/apple-icon-60x60.png"
					media="(prefers-color-scheme: light)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="metadata/light/apple-icon-72x72.png"
					media="(prefers-color-scheme: light)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="metadata/light/apple-icon-76x76.png"
					media="(prefers-color-scheme: light)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="metadata/light/apple-icon-114x114.png"
					media="(prefers-color-scheme: light)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="metadata/light/apple-icon-120x120.png"
					media="(prefers-color-scheme: light)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="metadata/light/apple-icon-144x144.png"
					media="(prefers-color-scheme: light)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="metadata/light/apple-icon-152x152.png"
					media="(prefers-color-scheme: light)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="metadata/light/apple-icon-180x180.png"
					media="(prefers-color-scheme: light)"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="metadata/light/android-icon-192x192.png"
					media="(prefers-color-scheme: light)"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="metadata/light/favicon-32x32.png"
					media="(prefers-color-scheme: light)"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="metadata/light/favicon-96x96.png"
					media="(prefers-color-scheme: light)"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="metadata/light/favicon-16x16.png"
					media="(prefers-color-scheme: light)"
				/>
				<link
					rel="manifest"
					href="metadata/light/manifest.json"
					media="(prefers-color-scheme: light)"
				/>
				<meta
					name="msapplication-TileColor"
					content="#ffffff"
					media="(prefers-color-scheme: light)"
				/>
				<meta
					name="msapplication-TileImage"
					content="metadata/light/ms-icon-144x144.png"
					media="(prefers-color-scheme: light)"
				/>
				<meta
					name="theme-color"
					content="#ffffff"
					media="(prefers-color-scheme: light)"
				/>

				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="metadata/dark/apple-icon-57x57.png"
					media="(prefers-color-scheme: dark)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="metadata/dark/apple-icon-60x60.png"
					media="(prefers-color-scheme: dark)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="metadata/dark/apple-icon-72x72.png"
					media="(prefers-color-scheme: dark)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="metadata/dark/apple-icon-76x76.png"
					media="(prefers-color-scheme: dark)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="metadata/dark/apple-icon-114x114.png"
					media="(prefers-color-scheme: dark)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="metadata/dark/apple-icon-120x120.png"
					media="(prefers-color-scheme: dark)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="metadata/dark/apple-icon-144x144.png"
					media="(prefers-color-scheme: dark)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="metadata/dark/apple-icon-152x152.png"
					media="(prefers-color-scheme: dark)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="metadata/dark/apple-icon-180x180.png"
					media="(prefers-color-scheme: dark)"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="metadata/dark/android-icon-192x192.png"
					media="(prefers-color-scheme: dark)"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="metadata/dark/favicon-32x32.png"
					media="(prefers-color-scheme: dark)"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="metadata/dark/favicon-96x96.png"
					media="(prefers-color-scheme: dark)"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="metadata/dark/favicon-16x16.png"
					media="(prefers-color-scheme: dark)"
				/>
				<link
					rel="manifest"
					href="metadata/dark/manifest.json"
					media="(prefers-color-scheme: dark)"
				/>
				<meta
					name="msapplication-TileColor"
					content="#161616"
					media="(prefers-color-scheme: dark)"
				/>
				<meta
					name="msapplication-TileImage"
					content="metadata/dark/ms-icon-144x144.png"
					media="(prefers-color-scheme: dark)"
				/>
				<meta
					name="theme-color"
					content="#161616"
					media="(prefers-color-scheme: dark)"
				/>
			</head>
			<body
				className={`${GeistMono.variable} ${GeistSans.className} bg-secondary`}
			>
				{children}
			</body>
		</html>
	);
}
