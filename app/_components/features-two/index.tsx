import React, { FC, useContext } from "react";
import bigPicture from "public/epos.jpg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import smallPictureOne from "public/flexible-pay.svg";
import smallPictureTwo from "public/pos.svg";
import smallPictureThree from "public/pomo.svg";
import smallPictureFour from "public/qr-code.svg";
import Hoverable from "../hoverable";
import {
	IsIntersectingContext,
	IsMobileContext,
} from "@/app/_contexts/contexts";
import { motion } from "framer-motion";

function FeatureTwo() {
	const isMobile = useContext(IsMobileContext);
	const isIntersecting = useContext(IsIntersectingContext)[2];

	return (
		<div className="flex h-full w-full flex-col items-center px-10 py-4 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="min-h-[1rem] grow-2" />
			<div className="flex flex-col items-center gap-x-16 gap-y-4 sm:w-2/3 lg:w-auto xl:flex-row">
				<div className="relative flex flex-col gap-2 text-center xl:w-1/2 xl:text-start">
					<div className="text-4xl font-extrabold text-primary">
						ePOS All-In-One Solutions
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
					<motion.div
						className="absolute inset-0 bg-white"
						style={{
							left: `calc(${isMobile ? 1 : isIntersecting} * 100%)`,
						}}
					/>
				</div>
				<div className="relative text-center text-base font-medium text-gray-200 xl:w-1/2 xl:text-start">
					<p className="inline">
						Unlock the potential of retail with our ePOS All-In-One Solutions.
					</p>
					<p className="hidden sm:inline">
						Tailor your in-store payments, simplify transactions without extra
						hardware, enable on-the-go mobile payments, and embrace secure,
						contactless QR payments.
					</p>
					<motion.div
						className="absolute inset-0 bg-white"
						style={{
							left: `calc(${isMobile ? 1 : isIntersecting} * 100%)`,
						}}
					/>
				</div>
			</div>
			<div className="min-h-[1rem] grow" />
			<div className="flex flex-col items-center gap-x-16 gap-y-8 sm:w-2/3 lg:w-auto lg:flex-row">
				<motion.div
					style={{
						transform: `translateX(calc(${
							1 - (isMobile ? 1 : isIntersecting)
						} * -100%))`,
					}}
					className="flex w-2/3 items-center sm:w-full lg:w-1/2"
				>
					<Hoverable className="w-full" round>
						<Image
							src={bigPicture}
							alt="Big picture"
							className="h-full object-cover"
						/>
					</Hoverable>
				</motion.div>
				<motion.div
					style={{
						transform: `translateX(calc(${
							1 - (isMobile ? 1 : isIntersecting)
						} * 100%))`,
					}}
					className="flex flex-col justify-between gap-6 lg:w-1/2"
				>
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
				</motion.div>
			</div>
			<div className="min-h-[1rem] grow-2" />
		</div>
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
		<div className="flex flex-col items-center gap-6 sm:flex-row">
			<Hoverable className="h-max w-max ">
				<Image src={image} alt="Small picture" />
			</Hoverable>
			<div className="flex flex-col gap-2">
				<div className="text-center text-2xl font-extrabold text-primary sm:text-start">
					{title}
				</div>
				<div className="text-center text-base font-medium text-gray-200 sm:text-start">
					{supportingText}
				</div>
			</div>
		</div>
	);
};
