import type { FC } from "react";
import Empowering from "../../../public/WhatsApp Image 2023-10-20 at 14.03 4.webp";
import Image from "next/image";

interface FeatureFourProps {}

const FeatureFour: FC<FeatureFourProps> = ({}) => {
	return (
		<div className="w-full h-full px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl flex gap-10 items-center">
			<div className="w-1/2 flex flex-col gap-5">
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
			<div className="w-1/2 flex flex-col gap-5">
				<h3 className="text-primary text-4xl font-extrabold font-montserrat">
					Empowering Effortless Money Transfers
				</h3>
				<p className="font-lato font-medium text-base text-gray-200">
					Our platform is your gateway to effortless financial transactions. We
					provide user-friendly, secure, and hassle-free money transfer
					solutions, so you can efficiently manage your finances. Join us today
					and discover a new level of financial convenience.
				</p>
				<Image src={Empowering} alt="Empowering" />
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
		<div className="flex flex-col gap-2 w-1/2">
			<div className="font-lato font-extrabold text-primary text-7xl">
				{title}
			</div>
			<div className="h-5 bg-gray-700" style={{ width: `${percent}%` }} />
			<p className="font-lato font-medium text-base text-gray-100">
				{supportingText}
			</p>
		</div>
	);
};
