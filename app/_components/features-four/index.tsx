import type { FC } from "react";
import Empowering from "public/transfer.jpg";
import Image from "next/image";
import Hoverable from "../hoverable";

interface FeatureFourProps {}

const FeatureFour: FC<FeatureFourProps> = ({}) => {
	return (
		<div className="w-full h-full px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl flex gap-10 items-center justify-center flex-col-reverse lg:flex-row">
			<div className="md:w-2/3 lg:w-1/2 flex flex-row lg:flex-col gap-y-4 lg:gap-5 flex-wrap justify-between">
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
			<div className="md:w-2/3 lg:w-1/2 flex flex-col gap-5">
				<h3 className="text-primary text-4xl font-extrabold text-center lg:text-start">
					Empowering Effortless Money Transfers
				</h3>
				<div className="font-medium text-base text-gray-200 text-center lg:text-start">
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
		<div className="flex flex-col gap-2 w-full sm:w-[48%]">
			<div className="font-extrabold text-primary text-6xl lg:text-7xl text-center sm:text-start">
				{title}
			</div>
			<div className="h-5 bg-gray-700" style={{ width: `${percent}%` }} />
			<p className="font-medium text-base text-gray-100 text-center sm:text-start">
				{supportingText}
			</p>
		</div>
	);
};
