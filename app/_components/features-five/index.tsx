"use client";
import { useState, type FC, useRef, useEffect, useCallback } from "react";
import Pre from "public/credit-card.jpg";
import Business from "public/business-finance.jpg";
import { HoverableImage } from "../hoverable";

interface FeatureFiveProps {}

const FeatureFive: FC<FeatureFiveProps> = ({}) => {
	const biggerHeightValue = 50;
	const smallerHeightValue = 25;

	const [biggerHeight, setBiggerHeight] = useState<number>(biggerHeightValue);
	const [smallerHeight, setSmallerHeight] =
		useState<number>(smallerHeightValue);

	const biggerElementRef = useRef<HTMLDivElement>(null);
	const smallerElementRef = useRef<HTMLDivElement>(null);

	/* const mouseMoveHandler = useCallback(() => {
		setBiggerHeight(smallerHeightValue);
		setSmallerHeight(biggerHeightValue);
	}, []);
	const mouseLeaveHandler = useCallback(() => {
		setBiggerHeight(biggerHeightValue);
		setSmallerHeight(smallerHeightValue);
	}, []);

	useEffect(() => {
		const smallerElement = smallerElementRef.current;

		smallerElement?.addEventListener("mousemove", mouseMoveHandler);
		smallerElement?.addEventListener("mouseleave", mouseLeaveHandler);
		return () => {
			smallerElement?.removeEventListener("mousemove", mouseMoveHandler);
			smallerElement?.removeEventListener("mouseleave", mouseLeaveHandler);
		};
	}, [mouseLeaveHandler, mouseMoveHandler]); */

	return (
		<div className="w-full h-[calc(100vh_-_4rem)] px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl flex flex-col">
			<div className="grow-2 min-h-[1rem]" />
			<div
				className="flex items-center gap-16 transition-all justify-between"
				style={{ height: `${biggerHeight}%` }}
				ref={biggerElementRef}
			>
				<HoverableImage
					src={Pre}
					alt="Pre"
					className="h-full w-max aspect-square object-cover"
					round
				/>

				<Card
					title="Pre-Paid Debit Card Issuing with Bank Account"
					supportingText="By easily issuing Prepaid Debit Cards tailored to your brand, you create a distinct competitive edge in the market. These adaptable solutions not only optimise payments but also empower your business to provide a unique payment experience that's both user-friendly and reflective of your brand's values. This uniqueness resonates with customers, enhancing their engagement and loyalty. Moreover, the introduction of these cards can open up new revenue streams, as satisfied customers are more likely to increase their spending and recommend your business to others. As you align your payment options with your brand identity, you're poised for business growth and long-term success."
				/>
			</div>
			<div className="grow min-h-[1rem]" />
			<div
				className="flex items-center gap-16 transition-all justify-between"
				style={{ height: `${smallerHeight}%` }}
				ref={smallerElementRef}
			>
				<Card
					title="Business Finance Service with Bank Account"
					supportingText="We've tailored our services to provide you with a seamless experience in managing your business's credit lines and bank accounts."
				/>

				<HoverableImage
					src={Business}
					alt="Business"
					className="h-full w-max aspect-square object-cover"
					round
					locate
				/>
			</div>
			<div className="grow-2 min-h-[1rem]" />
		</div>
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
			<h4 className="font-extrabold text-3xl text-primary">{title}</h4>
			<p className="font-normal text-base text-gray-200">{supportingText}</p>
		</div>
	);
};
