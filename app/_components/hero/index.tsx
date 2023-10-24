import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroSection from "../../../public/Hero section SVG.svg";

function Hero() {
	return (
		<div className="grid grid-cols-12 lg:py-24 h-screen" id="section1">
			<div className="col-span-12 lg:col-span-6 flex flex-col h-full justify-evenly">
				<div>
					<div className="flex">
						<h1 className="text-3xl lg:text-6xl text-center lg:text-start font-mono font-extrabold italic">
							Grow
						</h1>
						<h1 className="text-3xl lg:text-6xl text-center lg:text-start font-mono font-extrabold lg:mx-3 italic">
							Sales
						</h1>
						<h1 className="text-3xl lg:text-6xl text-center lg:text-start font-mono font-medium">
							with a
						</h1>
					</div>
					<div>
						<h1 className="text-3xl lg:text-6xl text-center lg:text-start font-mono font-medium">
							better payment
						</h1>
						<h1 className="text-3xl lg:text-6xl text-center lg:text-start font-mono font-medium">
							solution
						</h1>
					</div>
				</div>
				<div>
					<p className="text-base font-normal text-gray_2 text-center lg:text-start">
						Selected Payments leading one-stop payment solution for cross-border
						commerce, marketplaces, and platforms enables the means to move
						money without friction. We help you grow your business locally and
						internationally, allow you to collect payments, flexible multiparty
						split payments, and make payouts. With our multicurrency accounts,
						this process is simpler and faster.
					</p>
				</div>
				<div className="grid grid-cols-12 mt-10 lg:mt-0">
					<Link
						href="#"
						className="col-span-6 lg:col-span-3 col-start-4 lg:col-start-1 h-10 text-white bg-primery rounded-md text-base font-normal flex items-center justify-center"
					>
						Contact us
					</Link>
				</div>
			</div>
			<div className="col-span-12 lg:col-span-6 flex justify-center my-10 lg:my-0">
				<Image src={HeroSection} alt="hero-section" />
			</div>
		</div>
	);
}

export default Hero;
