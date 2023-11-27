"use client";
import { useState, type FC, useRef, ReactNode } from "react";
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
		<div className="flex h-[calc(100vh_-_4rem)] w-full flex-col px-10 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="min-h-[1rem] grow-2" />
			<div
				className="flex flex-col items-center gap-8 transition-all xl:h-1/2 xl:flex-row xl:justify-between xl:gap-16"
				ref={biggerElementRef}
			>
				<HoverableImage
					src={Pre}
					alt="Pre"
					className="w-1/2 object-cover xl:aspect-square xl:h-full xl:w-max"
					round
				/>

				<Card title="Pre-Paid Debit Card Issuing with Bank Account">
					<p className="inline">
						By easily issuing Prepaid Debit Cards tailored to your brand, you
						create a distinct competitive edge in the market.
					</p>
					<p className="hidden xl:inline">
						&nbsp;These adaptable solutions not only optimise payments but also
						empower your business to provide a unique payment experience
						that&apos;s both user-friendly and reflective of your brand&apos;s
						values. This uniqueness resonates with customers, enhancing their
						engagement and loyalty. Moreover, the introduction of these cards
						can open up new revenue streams, as satisfied customers are more
						likely to increase their spending and recommend your business to
						others. As you align your payment options with your brand identity,
						you&apos;re poised for business growth and long-term success.
					</p>
				</Card>
			</div>
			<div className="min-h-[1rem] grow" />
			<div
				className="flex flex-col-reverse items-center gap-8 transition-all xl:h-1/4 xl:flex-row xl:justify-between xl:gap-16"
				ref={smallerElementRef}
			>
				<Card title="Business Finance Service with Bank Account">
					We&apos;ve tailored our services to provide you with a seamless
					experience in managing your business&apos;s credit lines and bank
					accounts.
				</Card>

				<HoverableImage
					src={Business}
					alt="Business"
					className="w-1/2 object-cover xl:aspect-square xl:h-full xl:w-max"
					round
					locate
				/>
			</div>
			<div className="min-h-[1rem] grow-2" />
		</div>
	);
};

export default FeatureFive;

interface CardProps {
	title: string;
	children?: ReactNode;
}

export const Card: FC<CardProps> = ({ title, children }) => {
	return (
		<div className="flex flex-col gap-4">
			<h4 className="text-center text-3xl font-extrabold text-primary xl:text-start">
				{title}
			</h4>
			<div className="text-center text-base font-normal text-gray-200 xl:text-start">
				{children}
			</div>
		</div>
	);
};
