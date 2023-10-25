import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroSection from "../../../public/Hero section SVG.webp";
import Cookie from "../../../public/Cookie.svg";
import Logo from "../../../public/Frame 26085919.svg";

function Hero() {
	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<div className="grid grid-cols-12 xl:mx-[120px]  space-y-8">
				<div className="grid grid-cols-12 col-span-12 lg:col-span-12">
					<div className="col-span-12 lg:col-span-2">
						<Image src={Logo} alt="logo" />
					</div>
					<div className="col-span-2 col-end-13 justify-end hidden lg:flex">
						<Link
							href="#"
							className="w-2/3 h-10 text-white bg-primery rounded-md text-base font-normal flex items-center justify-center"
						>
							Contact us
						</Link>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 flex flex-col h-full justify-center space-y-8 ">
					<div>
						<div className="flex">
							<h1 className="custom-bg bg-no-repeat text-6xl font-mono text-secondary font-extrabold pl-2">
								Grow Sales
							</h1>
							<h1 className="text-6xl font-mono font-medium text-primery ml-1">
								with a
							</h1>
						</div>
						<h1 className="text-6xl font-mono font-medium text-primery">
							better payment solution
						</h1>
					</div>
					<div>
						<span className="text-base font-normal text-gray_2">
							Selected Payments leading one-stop payment solution for
							cross-border commerce, marketplaces, and platforms enables the
							means to move money without friction. We help you grow your
							business locally and internationally, allow you to collect
							payments, flexible multiparty split payments, and make payouts.
							With our multicurrency accounts, this process is simpler and
							faster.
						</span>
					</div>
					<div className="flex">
						<Link
							href="#"
							className="bg-primery text-secondary rounded-md w-1/3 py-3 text-center text-base"
						>
							Contact us
						</Link>
						<Link
							href="#"
							className="text-primery w-1/3 py-3 text-center text-base"
						>
							Enquire Now
						</Link>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 flex justify-center my-10 lg:my-0 items-center">
					<Image src={HeroSection} alt="hero-section" />
				</div>
			</div>
			<div className="grid grid-cols-12 w-full">
				<div className="col-span-3 w-full">
					<div className="w-full flex mb-5 pl-16 justify-between">
						<div className="flex items-end">
							<h3 className="text-2xl font-mono font-bold text-primery">
								Cookies
							</h3>
						</div>
						<Image src={Cookie} alt="Cookie" />
					</div>
					<div className="flex pl-16 mb-5">
						<span className="text-sm font-normal text-primery">
							We use cookies to make your experience better!
						</span>
					</div>
					<div className="flex items-center pl-16 mt-5">
						<Link href="#" className="text-sm text-primery pr-12">
							Privacy Policy
						</Link>
						<button className="bg-primery text-secondary text-base rounded-md w-1/3 py-2">
							Agree
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
