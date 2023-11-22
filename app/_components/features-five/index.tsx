import type { FC } from "react";
import Pre from "public/credit-card.jpg";
import Business from "public/business-finance.jpg";
import Image from "next/image";
import Grid from "../grid";
import Stack from "../stack";

interface FeatureFiveProps {}

const FeatureFive: FC<FeatureFiveProps> = ({}) => {
	return (
		<Stack
			containerClassName="w-full h-full px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			// underClassName="px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			className="h-full flex flex-col justify-evenly"
			// underLayer={<Grid black />}
		>
			<div className="flex items-center h-2/4 gap-24">
				<Image src={Pre} alt="Pre" className="h-full object-contain" />
				<Card
					title="Pre-Paid Debit Card Issuing with Bank Account"
					supportingText="By easily issuing Prepaid Debit Cards tailored to your brand, you create a distinct competitive edge in the market. These adaptable solutions not only optimise payments but also empower your business to provide a unique payment experience that's both user-friendly and reflective of your brand's values. This uniqueness resonates with customers, enhancing their engagement and loyalty. Moreover, the introduction of these cards can open up new revenue streams, as satisfied customers are more likely to increase their spending and recommend your business to others. As you align your payment options with your brand identity, you're poised for business growth and long-term success."
				/>
			</div>
			<div className="flex items-center h-1/4 gap-24">
				<Card
					title="Business Finance Service with Bank Account"
					supportingText="We've tailored our services to provide you with a seamless experience in managing your business's credit lines and bank accounts."
				/>
				<Image
					src={Business}
					alt="Business"
					className="h-full object-contain"
				/>
			</div>
		</Stack>
	);
};

export default FeatureFive;

interface CardProps {
	title: string;
	supportingText: string;
}

export const Card: FC<CardProps> = ({ title, supportingText }) => {
	return (
		<div className="flex flex-col gap-4">
			<h4 className="font-lato font-extrabold text-3xl text-primary">
				{title}
			</h4>
			<p className="font-lato font-normal text-base text-gray-200">
				{supportingText}
			</p>
		</div>
	);
};

// TODO grid is not centered
