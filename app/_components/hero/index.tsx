import React, { FC } from "react";
import Button from "../button";

function Hero() {
	return (
		<div className="flex h-full w-full flex-col px-10 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="min-h-[1.5rem] grow" />
			<h1 className="mb-4 text-center text-6xl font-medium text-white md:text-left lg:w-1/2">
				<span className="relative whitespace-nowrap bg-underline font-extrabold">
					Grow Sales
					<div className="absolute inset-x-0 bottom-2 top-1/2 -z-10 bg-teal-300 opacity-20" />
				</span>
				&nbsp;with a better payment solution
			</h1>
			<div className="mb-6 text-center text-base font-normal text-white md:text-left lg:w-1/2">
				{/* <p>
					Selected Payments, a leading one-stop payment solution for
					cross-border commerce, marketplaces, and platforms enables the means
					to move money without friction.
				</p> */}
				<p className="hidden md:flex">
					We help you grow your business locally and internationally, allow you
					to collect payments, flexible multiparty split payments, and make
					payouts. With our multicurrency accounts, this process is simpler and
					faster.
				</p>
			</div>
			<div className="flex justify-center gap-4 md:justify-start lg:w-1/2">
				<Button white>Enquire Now</Button>
				<Button>Contact us</Button>
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
			className="absolute inset-0 h-full w-full object-cover sm:fixed"
			autoPlay
			loop
			muted
			poster="hero-background.jpg"
		>
			<source src="hero-background.mp4" type="video/mp4" />
		</video>
	);
};
