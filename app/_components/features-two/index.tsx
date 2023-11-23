import React, { FC } from "react";
import bigPicture from "public/epos.jpg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import smallPictureOne from "public/flexible-pay.svg";
import smallPictureTwo from "public/pos.svg";
import smallPictureThree from "public/pomo.svg";
import smallPictureFour from "public/qr-code.svg";
import Stack from "../stack";
import Grid from "../grid";
import Hoverable from "../hoverable";

function FeatureTwo() {
	return (
		<Stack
			containerClassName="w-full h-full px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			// underClassName="px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			className="h-full flex flex-col py-4"
			// underLayer={<Grid black />}
		>
			<div className="grow-2 min-h-[1rem]" />
			<div className="flex items-center gap-x-16 gap-y-4 flex-col xl:flex-row">
				<div className="text-center xl:text-start xl:w-1/2 flex flex-col gap-2">
					<div className="text-primary text-4xl font-extrabold">
						ePOS All-In-One Solutions
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
						Unlock the potential of retail with our ePOS All-In-One Solutions.
					</p>
					<p className="hidden sm:inline">
						Tailor your in-store payments, simplify transactions without extra
						hardware, enable on-the-go mobile payments, and embrace secure,
						contactless QR payments.
					</p>
				</div>
			</div>
			<div className="grow min-h-[1rem]" />
			<div className="flex gap-16 flex-col sm:flex-row items-center">
				<div className="w-1/2 flex items-center">
					<Hoverable className="w-full" round>
						<Image
							src={bigPicture}
							alt="Big picture"
							className="w-full object-cover"
						/>
					</Hoverable>
				</div>
				<div className="w-1/2 flex flex-col justify-between gap-6">
					<Card
						image={smallPictureOne}
						title="Flexible in-store payments"
						supportingText="Customise your payment method for the ultimate convenience and experience a new level of financial flexibility."
					/>
					<Card
						image={smallPictureTwo}
						title="POS Payments without device"
						supportingText="Witness optimised transactions without the need for any hardware, making your point-of-sale payments straightforward."
					/>
					<Card
						image={smallPictureThree}
						title="Phone  payments using MO/TO"
						supportingText="Empower mobile transactions for fluid flexibility and elevate your payment experience with the convenience of MO/TO payments."
					/>
					<Card
						image={smallPictureFour}
						title="QR payment codes"
						supportingText="Enjoy quick, secure, and contactless payments with a simple scan, providing you with a seamless and efficient way to pay."
					/>
				</div>
			</div>
			<div className="grow-2 min-h-[1rem]" />
		</Stack>
	);
}

export default FeatureTwo;

interface CardProps {
	image: string | StaticImport;
	title: string;
	supportingText: string;
}

export const Card: FC<CardProps> = ({ image, title, supportingText }) => {
	return (
		<div className="flex gap-6 items-center">
			<Hoverable className="w-max h-max ">
				<Image src={image} alt="Small picture" />
			</Hoverable>
			<div className="flex flex-col gap-2">
				<div className="font-extrabold text-2xl text-primary">{title}</div>
				<div className="font-medium text-base text-gray-200">
					{supportingText}
				</div>
			</div>
		</div>
	);
};
