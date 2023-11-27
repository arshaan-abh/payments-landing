import React, { FC } from "react";
import bigPicture from "public/marketplace.jpg";
import Image from "next/image";
import smallPictureOne from "public/handing-money.svg";
import smallPictureTwo from "public/money.svg";
import smallPictureThree from "public/shaking-hands.svg";
import smallPictureFour from "public/split.svg";
import Hoverable from "../hoverable";
import { Card } from "../features-two";

function FeatureThree() {
	return (
		<div className="flex h-full w-full flex-col items-center px-10 py-4 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="min-h-[1rem] grow-2" />
			<div className="flex flex-col items-center gap-x-16 gap-y-4 sm:w-2/3 lg:w-auto xl:flex-row">
				<div className="flex flex-col gap-2 text-center xl:w-1/2 xl:text-start">
					<div className="text-4xl font-extrabold text-primary">
						Marketplace & Platforms
					</div>
					<div className="hidden items-center justify-between gap-2 sm:flex">
						<div className="whitespace-nowrap text-lg font-semibold uppercase text-gray-100">
							Integrated
						</div>
						<div className="h-2 w-2 shrink-0 rounded-full border border-gray-200"></div>
						<div className="whitespace-nowrap text-lg font-semibold uppercase text-gray-100">
							Mobile Friendly
						</div>
						<div className="h-2 w-2 shrink-0 rounded-full border border-gray-200"></div>
						<div className="whitespace-nowrap text-lg font-semibold uppercase text-gray-100">
							Innovative
						</div>
					</div>
				</div>
				<div className="text-center text-base font-medium text-gray-200 xl:w-1/2 xl:text-start">
					<p className="inline">
						Establish a thriving ecosystem for sellers on your platform.
					</p>
					<p className="hidden sm:inline">
						Cultivate an environment where sellers not only succeed but prosper.
						Benefit from instant payouts, commission alignment, effortless
						automation, and multi-party.
					</p>
				</div>
			</div>
			<div className="min-h-[1rem] grow" />
			<div className="flex flex-col-reverse items-center gap-x-16 gap-y-8 sm:w-2/3 lg:w-auto lg:flex-row">
				<div className="flex flex-col justify-between gap-6 lg:w-1/2">
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
				<div className="flex w-2/3 items-center sm:w-full lg:w-1/2">
					<Hoverable className="w-full" round>
						<Image
							src={bigPicture}
							alt="Big picture"
							className="h-full w-full object-cover"
						/>
					</Hoverable>
				</div>
			</div>
			<div className="min-h-[1rem] grow-2" />
		</div>
	);
}

export default FeatureThree;
