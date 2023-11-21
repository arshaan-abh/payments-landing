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

function FeatureTwo() {
	return (
		<Stack
			containerClassName="w-full h-full px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			underClassName="px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			className="h-full flex flex-col justify-evenly"
			underLayer={<Grid black />}
		>
			<div className="flex justify-between items-center gap-10">
				<div className="w-1/2 flex flex-col gap-1">
					<div className="text-primary text-4xl font-extrabold font-montserrat">
						ePOS All-In-One Solutions
					</div>
					<div className="flex gap-4 items-center">
						<div className="font-lato text-gray-100 text-lg font-semibold uppercase">
							Integrated
						</div>
						<div className="w-2 h-2 shrink-0 border border-gray-200 rounded-full"></div>
						<div className="font-lato text-gray-100 text-lg font-semibold uppercase">
							Mobile Friendly
						</div>
						<div className="w-2 h-2 shrink-0 border border-gray-200 rounded-full"></div>
						<div className="font-lato text-gray-100 text-lg font-semibold uppercase">
							Mobile Friendly
						</div>
					</div>
				</div>
				<div className="w-1/2 text-gray-200 text-base font-medium font-lato">
					Unlock the potential of retail with our ePOS All-In-One Solutions.
					Tailor your in-store payments, simplify transactions without extra
					hardware, enable on-the-go mobile payments, and embrace secure,
					contactless QR payments.
				</div>
			</div>
			<div className="flex gap-10">
				<div className="w-1/2 flex items-center justify-start">
					<Image src={bigPicture} alt="Big picture" />
				</div>
				<div className="w-1/2 flex flex-col justify-between gap-5">
					<Card
						image={smallPictureOne}
						title="Flexible in-store payments"
						supportingText="Customise your payment method for the ultimate convenience and experience a new level of financial flexibility."
					/>
					<Card
						image={smallPictureTwo}
						title="POS Payments without device"
						supportingText="Witness optimized transactions without the need for any hardware, making your point-of-sale payments straightforward"
					/>
					<Card
						image={smallPictureThree}
						title="Phone  payments using MO/TO"
						supportingText="Empower mobile transactions for on-the-go ease and elevate your payment experience with the convenience of MO/TO payments."
					/>
					<Card
						image={smallPictureFour}
						title="QR payment codes"
						supportingText="Enjoy quick, secure, and contactless payments with a simple scan, providing you with a seamless and efficient way to pay."
					/>
				</div>
			</div>
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
		<div className="flex gap-5 items-center">
			<Image src={image} alt="Small picture" />
			<div className="flex flex-col gap-1">
				<div className="font-lato font-extrabold text-2xl text-primary">
					{title}
				</div>
				<div className="font-lato font-medium text-base text-gray-200">
					{supportingText}
				</div>
			</div>
		</div>
	);
};
