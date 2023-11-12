import Image from "next/image";
import React, { FC, ReactNode } from "react";
import featureImageOne from "../../../public/One click.webp";
import featureImageTwo from "../../../public/Pay Method.webp";
import featureImageThree from "../../../public/Currency.webp";

const FeatureOne: FC<CardProps> = ({}) => {
	return (
		<div className="w-full h-full justify-evenly px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl flex flex-col">
			<div className="flex justify-between items-center gap-10">
				<div className="w-1/2 text-primary text-4xl font-extrabold font-montserrat">
					Simplified Customer Payment Processing!
				</div>
				<div className="w-1/2 text-gray-200 text-base font-medium font-lato">
					In a rapidly evolving marketplace, staying ahead means embracing
					efficient solutions. Our Streamlined customer payment processing is
					your gateway to a new era in payment convenience. We&apos;ve
					reimagined the payment journey to be effortless and user-friendly.
				</div>
			</div>
			<div className="flex gap-10">
				<Card
					media={
						<Image
							src={featureImageOne}
							alt="One-Click checkout with Pay link"
						/>
					}
					supportingText="Your customers will love the simplicity of one-click checkout through our seamless pay link."
				>
					One-Click checkout with Pay link
				</Card>
				<Card
					media={<Image src={featureImageTwo} alt="Flexible Payment Methods" />}
					supportingText="Users will enjoy the convenience of flexible payout methods tailored to their needs."
				>
					Flexible Payment Methods
				</Card>
				<Card
					media={<Image src={featureImageThree} alt="Multicurrency Payments" />}
					supportingText="Clients will recognize the benefits of adaptable multi-currency payment options designed to meet their international requirements."
				>
					Multicurrency Payments
				</Card>
			</div>
		</div>
	);
};

export default FeatureOne;

interface CardProps {
	media?: ReactNode;
	children?: ReactNode;
	supportingText?: ReactNode;
}

const Card: FC<CardProps> = ({ media, children, supportingText }) => {
	return (
		<div className="flex flex-col gap-7 basis-1/3">
			{media}
			<div className="text-primary text-2xl font-extrabold font-lato">
				{children}
			</div>
			<div className="text-gray-200 text-base font-medium font-lato">
				{supportingText}
			</div>
		</div>
	);
};
