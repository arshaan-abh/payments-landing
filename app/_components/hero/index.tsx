"use client";
import React, { FC, useCallback, useEffect, useRef } from "react";
import Button from "../button";

function Hero() {
	return (
		<div className="flex h-full w-full flex-col justify-center gap-10 px-10 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<h1 className="text-center text-6xl font-medium text-white md:text-left lg:w-1/2">
				<span className="whitespace-nowrap bg-underline font-extrabold">
					Grow Sales
				</span>
				&nbsp;with a better payment solution
			</h1>
			<div className="text-center text-base font-normal text-white md:text-left lg:w-1/2">
				<p>
					Selected Payments, a leading one-stop payment solution for
					cross-border commerce, marketplaces, and platforms enables the means
					to move money without friction.
				</p>
				<p className="hidden md:flex">
					We help you grow your business locally and internationally by
					providing services for payment collection, multiparty split payments,
					and efficient payouts. With our multicurrency accounts, this process
					is simpler and faster.
				</p>
			</div>
			<div className="flex justify-center gap-2.5 md:justify-start lg:w-1/2">
				<Button white>Enquire Now</Button>
				<Button>Contact us</Button>
			</div>
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
			className="absolute inset-0 h-full w-full object-cover sm:fixed"
			autoPlay
			loop
			muted
			// ref={videoRef}
			poster="hero-background.jpg"
		>
			<source src="hero-background.mp4" type="video/mp4" />
		</video>
	);
};
