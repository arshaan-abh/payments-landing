import React from "react";
import Image from "next/image";
import bigPicture from "public/marketplace.jpg";
import smallPictureOne from "public/handing-money.svg";
import smallPictureTwo from "public/money.svg";
import smallPictureThree from "public/shaking-hands.svg";
import smallPictureFour from "public/split.svg";
import { ThunderIcon } from "../icons";
import { Card, GridBorderComponent } from "../features-two";

function FeatureTwo() {
	return (
		<div className="flex h-full w-full flex-col items-center px-10 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="min-h-[1rem] grow" />
			<div className="flex flex-col items-center gap-x-16 gap-y-4 xl:flex-row">
				<div className="relative flex flex-col text-center xl:w-2/5 xl:text-start">
					<div className="text-3xl font-extrabold text-primary-950">
						Marketplace & Platforms
					</div>
					<div className="hidden items-center gap-3 sm:flex">
						<div className="whitespace-nowrap text-base font-medium uppercase text-gray-600">
							Integrated
						</div>
						<ThunderIcon className="scale-75 text-primary-950" />
						<div className="whitespace-nowrap text-base font-medium uppercase text-gray-600">
							Mobile Friendly
						</div>
						<ThunderIcon className="scale-75 text-primary-950" />
						<div className="whitespace-nowrap text-base font-medium uppercase text-gray-600">
							Innovative
						</div>
					</div>
					<div
						className="absolute inset-0 bg-white"
						style={{
							left: `calc(100%)`,
						}}
					/>
				</div>
				<div className="relative text-center text-base font-medium leading-tight text-gray-600 md:text-start xl:w-3/5">
					<p className="inline">
						Establish a thriving ecosystem for sellers on your platform.{" "}
					</p>
					<p className="hidden sm:inline">
						Cultivate an environment where sellers not only succeed but prosper.
						Benefit from instant payouts, commission alignment, effortless
						automation, and multi-party.
					</p>
					<div
						className="absolute inset-0 bg-white"
						style={{
							left: `calc(100%)`,
						}}
					/>
				</div>
			</div>
			<div className="min-h-[1rem] grow" />
			<div className="flex w-auto flex-col items-center gap-16 sm:flex-row-reverse">
				<div
					style={{
						transform: `translateX(calc(0 * -100%))`,
					}}
					className="flex items-center xs:w-2/3 sm:hidden lg:flex lg:w-1/2 xl:w-2/5"
				>
					<GridBorderComponent>
						<Image
							placeholder="blur"
							src={bigPicture}
							alt="Big picture"
							className="h-full object-cover"
						/>
					</GridBorderComponent>
				</div>
				<div
					style={{
						transform: `translateX(calc(0 * 100%))`,
					}}
					className="flex flex-col justify-between gap-x-6 gap-y-16 xs:w-1/2 sm:w-full lg:w-1/2 lg:gap-y-9 xl:w-3/5"
				>
					<Card
						image={smallPictureOne}
						title="Instant Payouts"
						supportingText="Sellers receive payments instantly, significantly enhancing and refining their overall experience with rapid, hassle-free transactions."
					/>
					<Card
						image={smallPictureTwo}
						title="Commission Alignment"
						supportingText="Customise payments to perfectly align with your unique commission model, ensuring a tailored and efficient payment process."
					/>
					<Card
						image={smallPictureThree}
						title="Instant Settlements"
						supportingText="Simplify the process with automation, ensuring swift and highly time-saving settlement procedures that save you time and effort."
					/>
					<Card
						image={smallPictureFour}
						title="Multiparty Split Payments and Payouts"
						supportingText="Effortlessly pay multiple parties in local currencies, making financial transactions more accessible and effective for everyone involved."
					/>
				</div>
			</div>
			<div className="min-h-[1rem] grow-2" />
		</div>
	);
}

export default FeatureTwo;
