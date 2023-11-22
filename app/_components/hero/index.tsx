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
				<h1 className="text-white font-montserrat font-medium text-6xl lg:w-1/2 text-center md:text-left">
					<Stack
						className="inline"
						containerClassName="inline"
						underLayer={
							<Image
								src={growSales}
								alt="Grow Sales"
								className="-translate-x-1 translate-y-2 select-none pointer-events-none"
							/>
						}
					>
						<span className="font-extrabold italic text-primary whitespace-nowrap">
							Grow Sales&nbsp;
						</span>
					</Stack>
					with a better payment solution
				</h1>
				<div className="font-lato text-white text-base font-normal lg:w-1/2 text-center md:text-left">
					<p>
						Selected Payments, a leading one-stop payment solution for
						cross-border commerce, marketplaces, and platforms enables the means
						to move money without friction.
					</p>
					<p className="hidden md:flex">
						We help you grow your business locally and internationally by
						providing services for payment collection, multiparty split
						payments, and efficient payouts. With our multicurrency accounts,
						this process is simpler and faster.
					</p>
				</div>
				<div className="flex gap-2.5 lg:w-1/2 justify-center md:justify-start">
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
			className="w-full h-full object-cover"
			autoPlay
			loop
			muted
			ref={videoRef}
		>
			<source src="hero-background.mp4" type="video/mp4" />
		</video>
	);
};
