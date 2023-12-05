import { useContext, type FC } from "react";
import Empowering from "public/transfer.jpg";
import Image from "next/image";
import {
	IsIntersectingContext,
	IsMobileContext,
} from "@/app/_contexts/contexts";
import { GridBorderComponent } from "../features-two";

interface FeatureFourProps {}

const FeatureFour: FC<FeatureFourProps> = ({}) => {
	const isMobile = useContext(IsMobileContext);
	const isIntersecting = useContext(IsIntersectingContext)[4];

	return (
		<div className="flex h-fit w-full flex-col-reverse items-center justify-center gap-16 px-10 sm:flex-row lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="relative flex flex-row flex-wrap justify-between gap-16 sm:w-1/3 sm:gap-4 md:w-1/2">
				<Card
					title="245M+"
					percent={100}
					supportingText="API request per day, peaking at 13,000 requests a second."
				/>
				<Card
					title="90%"
					percent={90}
					supportingText="Of U.K. adults have bought from businesses using Selected payment"
				/>
				<Card
					title="99.99%"
					percent={99.99}
					supportingText="historical uptime for Selected payment."
				/>
				<Card
					title="130+"
					percent={50}
					supportingText="currencies and payment methods supported."
				/>
				<div
					className="absolute inset-0 bg-white"
					style={{
						left: `calc(${isMobile ? 1 : isIntersecting} * 100%)`,
					}}
				/>
			</div>
			<div className="flex flex-col gap-4 sm:w-2/3 md:w-1/2">
				<h3 className="relative text-center text-3xl font-extrabold text-primary-950 lg:text-start">
					Empowering Effortless Money Transfers
					<div
						className="absolute inset-0 bg-white"
						style={{
							left: `calc(${isMobile ? 1 : isIntersecting} * 100%)`,
						}}
					/>
				</h3>
				<div className="relative text-center text-base font-normal text-gray-600 lg:text-start">
					<p className="inline">
						Our platform is your gateway to effortless financial transactions.
					</p>
					<p className="hidden sm:inline">
						&nbsp;We provide user-friendly, secure, and hassle-free money
						transfer solutions, so you can efficiently manage your finances.
						Join us today and discover a new level of financial convenience.
					</p>
					<div
						className="absolute inset-0 bg-white"
						style={{
							left: `calc(${isMobile ? 1 : isIntersecting} * 100%)`,
						}}
					/>
				</div>
				<div
					style={{
						transform: `translateX(calc(${
							1 - (isMobile ? 1 : isIntersecting)
						} * 100%))`,
					}}
				>
					<GridBorderComponent className="m-auto xs:w-2/3 sm:w-full">
						<Image src={Empowering} alt="Empowering" />
					</GridBorderComponent>
				</div>
			</div>
		</div>
	);
};

export default FeatureFour;

interface CardProps {
	title: string;
	supportingText: string;
	percent: number;
}

const Card: FC<CardProps> = ({ title, supportingText, percent }) => {
	return (
		<div className="m-auto flex w-full flex-col gap-1 xs:w-2/3 sm:m-0 sm:w-full lg:w-2/3">
			<div className="text-center text-6xl font-extrabold text-primary-950 sm:text-start">
				{title}
			</div>
			<div className="h-5 bg-gray-100" style={{ width: `${percent}%` }} />
			<p className="text-center text-base font-medium text-gray-600 sm:text-start">
				{supportingText}
			</p>
		</div>
	);
};
