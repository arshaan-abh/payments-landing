import React from "react";
import bigPicture from "public/marketplace.jpg";
import Image from "next/image";
import smallPictureOne from "public/handing-money.svg";
import smallPictureTwo from "public/money.svg";
import smallPictureThree from "public/shaking-hands.svg";
import smallPictureFour from "public/split.svg";
import { Card } from "../features-two";
import Stack from "../stack";
import Grid from "../grid";
import Hoverable from "../hoverable";

function FeatureThree() {
	return (
		<Stack
			containerClassName="w-full h-full px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			// underClassName="px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			className="h-full flex flex-col justify-evenly"
			// underLayer={<Grid black />}
		>
			<div className="flex justify-between items-center gap-10">
				<div className="w-1/2 flex flex-col gap-1">
					<div className="text-primary text-4xl font-extrabold">
						Marketplace & Platforms
					</div>
					<div className="flex gap-4 items-center">
						<div className="text-gray-100 text-lg font-semibold uppercase">
							Integrated
						</div>
						<div className="w-2 h-2 shrink-0 border border-gray-200 rounded-full"></div>
						<div className="text-gray-100 text-lg font-semibold uppercase">
							Mobile Friendly
						</div>
						<div className="w-2 h-2 shrink-0 border border-gray-200 rounded-full"></div>
						<div className="text-gray-100 text-lg font-semibold uppercase">
							Mobile Friendly
						</div>
					</div>
				</div>
				<div className="w-1/2 text-gray-200 text-base font-medium">
					Establish a thriving ecosystem for sellers on your platform. Cultivate
					an environment where sellers not only succeed but prosper. Benefit
					from Instant Payouts, Commission Alignment, Effortless Automation, and
					Multi-Party.
				</div>
			</div>
			<div className="flex gap-10">
				<div className="w-1/2 flex flex-col justify-between gap-5">
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
						supportingText="Simplify the process with automation, ensuring swift and highly efficient settlement procedures that save you time and effort."
					/>
					<Card
						image={smallPictureFour}
						title="Multiparty Split Payments and Payouts"
						supportingText="Effortlessly pay multiple parties in local currencies, making financial transactions more accessible and effective for everyone involved."
					/>
				</div>
				<div className="w-1/2 flex items-center justify-end">
					<Hoverable round>
						<Image src={bigPicture} alt="Big picture" />
					</Hoverable>
				</div>
			</div>
		</Stack>
	);
}

export default FeatureThree;
