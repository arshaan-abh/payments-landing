import React, { FC } from "react";
import Button from "../button";

function Hero() {
	return (
		<div className="flex h-full w-full grow flex-col px-10 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="min-h-[1.5rem] grow" />
			<h1 className="mb-4 text-center text-6xl font-medium text-white md:text-left lg:w-1/2">
				<span className="bg-underline relative whitespace-nowrap font-extrabold">
					<span className="relative z-10">Grow Sales</span>
					<div className="absolute inset-x-0 bottom-2 top-1/2 -z-0 bg-teal-300 opacity-20 sm:-z-10" />
				</span>{" "}
				with a better payment solution
			</h1>
			<div className="mb-6 text-center text-base font-normal text-white md:text-left lg:w-1/2">
				{/* <p>
					Selected Payments, a leading one-stop payment solution for
					cross-border commerce, marketplaces, and platforms enables the means
					to move money without friction.
				</p> */}
				<p className="hidden md:flex">
					We help you grow your business locally and internationally by
					providing services for payment collection, multiparty split payments,
					and efficient payouts.
				</p>
			</div>
			<div className="flex justify-center gap-4 md:justify-start lg:w-1/2">
				<a href="#enquire-form">
					<Button long>Enquire Now</Button>
				</a>
				<a href="#contact-us">
					<Button long dark>
						Contact Us
					</Button>
				</a>
			</div>
			<div className="min-h-[1.5rem] grow-2" />
		</div>
	);
}

export default Hero;

interface HeroBackgroundProps {}

export const HeroBackground: FC<HeroBackgroundProps> = ({}) => {
	return (
		<video
			className="absolute inset-0 h-screen w-full object-cover sm:fixed"
			autoPlay
			loop
			muted
			poster="hero-background.jpg"
		>
			<source src="hero-background.mp4" type="video/mp4" />
		</video>
	);
};
