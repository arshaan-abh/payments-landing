import type { FC } from "react";
import Empowering from "public/transfer.jpg";
import Image from "next/image";
import Hoverable from "../hoverable";

interface FeatureFourProps {}

const FeatureFour: FC<FeatureFourProps> = ({}) => {
	return (
		<div className="flex h-full w-full flex-col-reverse items-center justify-center gap-10 px-10 lg:flex-row lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="flex flex-row flex-wrap justify-between gap-y-4 md:w-2/3 lg:w-1/2 lg:flex-col lg:gap-5">
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
			</div>
			<div className="flex flex-col gap-5 md:w-2/3 lg:w-1/2">
				<h3 className="text-center text-4xl font-extrabold text-primary lg:text-start">
					Empowering Effortless Money Transfers
				</h3>
				<div className="text-center text-base font-medium text-gray-200 lg:text-start">
					<p className="inline">
						Our platform is your gateway to effortless financial transactions.
					</p>
					<p className="hidden sm:inline">
						&nbsp;We provide user-friendly, secure, and hassle-free money
						transfer solutions, so you can efficiently manage your finances.
						Join us today and discover a new level of financial convenience.
					</p>
				</div>
				<Hoverable round>
					<Image src={Empowering} alt="Empowering" />
				</Hoverable>
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
		<div className="flex w-full flex-col gap-2 sm:w-[48%]">
			<div className="text-center text-6xl font-extrabold text-primary sm:text-start lg:text-7xl">
				{title}
			</div>
			<div className="h-5 bg-gray-700" style={{ width: `${percent}%` }} />
			<p className="text-center text-base font-medium text-gray-100 sm:text-start">
				{supportingText}
			</p>
		</div>
	);
};
