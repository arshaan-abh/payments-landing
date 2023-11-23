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
		<div className="w-full h-full px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl flex flex-col py-4 items-center">
			<div className="grow-2 min-h-[1rem]" />
			<div className="flex items-center gap-x-16 gap-y-4 flex-col xl:flex-row sm:w-2/3 lg:w-auto">
				<div className="text-center xl:text-start xl:w-1/2 flex flex-col gap-2">
					<div className="text-primary text-4xl font-extrabold">
						Marketplace & Platforms
					</div>
					<div className="hidden sm:flex gap-2 items-center justify-between">
						<div className="text-gray-100 text-lg font-semibold uppercase whitespace-nowrap">
							Integrated
						</div>
						<div className="w-2 h-2 shrink-0 border border-gray-200 rounded-full"></div>
						<div className="text-gray-100 text-lg font-semibold uppercase whitespace-nowrap">
							Mobile Friendly
						</div>
						<div className="w-2 h-2 shrink-0 border border-gray-200 rounded-full"></div>
						<div className="text-gray-100 text-lg font-semibold uppercase whitespace-nowrap">
							Innovative
						</div>
					</div>
				</div>
				<div className="text-center xl:text-start xl:w-1/2 text-gray-200 text-base font-medium">
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
			<div className="grow min-h-[1rem]" />
			<div className="flex gap-x-16 gap-y-8 flex-col-reverse lg:flex-row items-center sm:w-2/3 lg:w-auto">
				<div className="lg:w-1/2 flex flex-col justify-between gap-6">
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
				<div className="flex items-center w-2/3 sm:w-full lg:w-1/2">
					<Hoverable className="w-full" round>
						<Image
							src={bigPicture}
							alt="Big picture"
							className="h-full w-full object-cover"
						/>
					</Hoverable>
				</div>
			</div>
			<div className="grow-2 min-h-[1rem]" />
		</div>
	);
}

export default FeatureThree;
