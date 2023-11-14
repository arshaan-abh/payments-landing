"use client";
import Image from "next/image";
import React, { FC, useCallback, useEffect, useRef } from "react";
import Button from "../button";
import Stack from "../stack";
import growSales from "public/grow-scales.svg";
import Grid from "../grid";

function Hero() {
	return (
		<div className="w-full h-full px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl">
			<Stack
				containerClassName="h-full flex items-center"
				className="flex flex-col gap-10"
				underLayer={<Grid />}
			>
				<Stack
					underLayer={
						<Image
							src={growSales}
							alt="Grow Sales"
							className="-translate-x-3 -translate-y-1 select-none pointer-events-none"
						/>
					}
				>
					<h1 className="text-white font-montserrat font-medium text-6xl lg:w-1/2">
						<span className="font-extrabold italic text-primary">
							Grow Sales
						</span>{" "}
						with a better payment solution
					</h1>
				</Stack>
				<p className="font-lato text-white text-base font-normal lg:w-1/2">
					Selected Payments leading one-stop payment solution for cross-border
					commerce, marketplaces, and platforms enables the means to move money
					without friction. We help you grow your business locally and
					internationally, allow you to collect payments, flexible multiparty
					split payments, and make payouts. With our multicurrency accounts,
					this process is simpler and faster.
				</p>
				<div className="flex gap-2.5 lg:w-1/2">
					<Button white>Enquire Now</Button>
					<Button>Contact us</Button>
				</div>
			</Stack>
		</div>
	);
}

export default Hero;

interface HeroBackgroundProps {}

export const HeroBackground: FC<HeroBackgroundProps> = ({}) => {
	const videoRef = useRef<HTMLVideoElement>(null);

	const pause = useCallback(() => {
		videoRef.current?.pause();
	}, []);

	const play = useCallback(() => {
		videoRef.current?.play();
	}, []);

	const handleScroll = useCallback(() => {
		pause();
		const scrollY = window.scrollY || window.pageYOffset;
		if (scrollY === 0) play();
	}, [pause, play]);

	useEffect(() => {
		addEventListener("scroll", handleScroll);
		return () => {
			removeEventListener("scroll", handleScroll);
		};
	}, [play, pause, handleScroll]);

	return (
		<video
			className="w-full h-full object-cover grayscale"
			autoPlay
			loop
			muted
			ref={videoRef}
		>
			<source src="hero-background.mp4" type="video/mp4" />
		</video>
	);
};
