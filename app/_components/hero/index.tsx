import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroSection from "../../../public/Hero section SVG.webp";
import Cookie from "../../../public/Cookie.svg";
import Logo from "../../../public/Frame 26085919.svg";
import ImageSlider from "../image-slider";

function Hero() {
	return (
		<div className="h-screen flex flex-col items-center justify-center w-full">
			<div className="grid grid-cols-12 md:px-[40px] lg:px-[80px] xl:px-[120px] xl:max-w-[1440px] xl:mt-8">
				<div className="grid grid-cols-12 col-span-12 lg:col-span-12">
					<div className="col-span-4 lg:col-span-2">
						<Image src={Logo} alt="logo" />
					</div>
					<div className="col-span-3 lg:col-span-2 col-end-13 justify-end flex">
						<Link
							href="#"
							className="w-2/3 h-10 text-white bg-primary rounded-md text-base font-normal flex items-center justify-center"
						>
							Contact us
						</Link>
					</div>
				</div>
				<div className="md:col-span-12 lg:hidden md:flex justify-center my-10">
					<Image
						src={HeroSection}
						alt="hero-section"
						width={360}
						height={333}
					/>
				</div>
				<div className="col-span-12 lg:col-span-8 xl:col-span-6 flex flex-col h-full justify-center lg:space-y-7 xl:space-y-8">
					<div className="flex md:justify-center lg:justify-normal">
						<h1 className="custom-bg bg-no-repeat text-6xl font-mono text-secondary font-extrabold pl-2">
							Grow Sales
						</h1>
						<h1 className="text-6xl font-mono font-medium text-primary ml-1">
							with a
						</h1>
					</div>
					<h1 className="text-6xl font-mono font-medium text-primary md:px-10 lg:px-0 md:text-center lg:text-start">
						better payment solution
					</h1>

					<div className="md:px-24 lg:px-0">
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
					<div className="flex justify-center lg:justify-normal mt-10 lg:mt-0">
						<Link
							href="#"
							className="bg-primary text-secondary rounded-md w-1/3 py-3 text-center text-base"
						>
							Contact us
						</Link>
						<Link
							href="#"
							className="text-primary w-1/3 py-3 text-center text-base"
						>
							Enquire Now
						</Link>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4 xl:col-span-6 md:hidden lg:flex justify-center my-10 lg:my-0 xl:items-center">
					<Image src={HeroSection} alt="hero-section" />
				</div>
			</div>
			<div className="lg:grid grid-cols-12 w-full max-w-[1440px] xl:mb-5 lg:pl-10 xl:pl-0 mt-10 lg:mt-0 hidden">
				<div className="col-span-3 w-full">
					<div className="w-full flex xl:mb-5 justify-between">
						<div className="flex items-end">
							<h3 className="text-2xl font-mono font-bold text-primary">
								Cookies
							</h3>
						</div>
						<Image src={Cookie} alt="Cookie" />
					</div>
					<div className="flex xl:mb-5">
						<span className="text-sm font-normal text-primary">
							We use cookies to make your experience better!
						</span>
					</div>
					<div className="flex items-center xl:mt-5">
						<Link href="#" className="text-sm text-primary pr-12">
							Privacy Policy
						</Link>
						<button className="bg-primary text-secondary text-base rounded-md w-1/3 py-2">
							Agree
						</button>
					</div>
				</div>
			</div>

			<div className="col-span-12 border-y-2 border-y-primary py-2 w-full hidden xl:flex">
				<ImageSlider />
			</div>
		</div>
	);
}

export default Hero;
