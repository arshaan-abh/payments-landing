import Image from "next/image";
import React, { FC, ReactNode, useContext } from "react";
import featureImageOne from "../../../public/one-click.jpg";
import featureImageTwo from "../../../public/pay-method.jpg";
import featureImageThree from "../../../public/currency.jpg";
import useSlider from "../features-seven/Slider";
import useResponsiveState from "./useResponsiveState";
import { SlideButton } from "../features-seven";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";
import {
	IsIntersectingContext,
	IsMobileContext,
} from "@/app/_contexts/contexts";

const FeatureOne: FC<CardProps> = ({}) => {
	const isMobile = useContext(IsMobileContext);
	const isIntersecting = useContext(IsIntersectingContext)[1];

	const visibleSlidesNumber = useResponsiveState<number>({
		defaultState: 1,
		breakpoints: [{ breakpoint: 768, state: 3 }],
	});

	const [slider, prevButtonRef, nextButtonRef] = useSlider({
		children: [
			<Card
				key={0}
				media={
					<Image
						className="h-full w-full object-cover"
						src={featureImageOne}
						alt="One-Click checkout with Pay link"
					/>
				}
				supportingText="Your customers will love the simplicity of one-click checkout through our seamless pay link."
			>
				One-Click Pay Link
			</Card>,
			<Card
				key={1}
				media={
					<Image
						className="h-full w-full object-cover"
						src={featureImageTwo}
						alt="Flexible Payment Methods"
					/>
				}
				supportingText="Users will enjoy the convenience of flexible payout methods tailored to their needs."
			>
				Flexible Payment Methods
			</Card>,
			<Card
				key={2}
				media={
					<Image
						className="h-full w-full object-cover"
						src={featureImageThree}
						alt="Multicurrency Payments"
					/>
				}
				supportingText="Clients will recognise the benefits of adaptable multi-currency payment options."
			>
				Multicurrency Payments
			</Card>,
		],
		visibleSlidesNumber,
		gapInRem: 2,
	});

	return (
		<div className="flex h-full w-full grow flex-col px-10 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="min-h-[1rem] grow" />
			<div className="flex flex-col items-center gap-x-16 gap-y-8 md:flex-row">
				<div className="relative text-center text-3xl font-extrabold text-primary-950 md:w-1/2 md:text-left">
					Simplified Customer Payment Processing!
					<div
						className="absolute inset-0 bg-white"
						style={{
							left: `calc(${isMobile ? 1 : isIntersecting} * 100%)`,
						}}
					/>
				</div>
				<div className="relative text-center text-base font-medium leading-tight text-gray-600 md:w-1/2 md:text-justify">
					<p className="inline">
						In a rapidly evolving marketplace, staying ahead means embracing
						efficient solutions.
					</p>
					<p className="hidden md:inline">
						{" "}
						Our streamlined customer payment processing is your gateway to a new
						era in payment convenience. We&apos;ve reimagined the payment
						journey to be effortless and user-friendly.
					</p>
					<div
						className="absolute inset-0 bg-white"
						style={{
							left: `calc(${isMobile ? 1 : isIntersecting} * 100%)`,
						}}
					/>
				</div>
			</div>
			<div className="min-h-[1rem] grow" />
			<div
				className="flex flex-col gap-8"
				style={{
					transform: `translateY(calc(${
						1 - (isMobile ? 1 : isIntersecting)
					} * 100%))`,
				}}
			>
				{slider}
				{visibleSlidesNumber < 3 && (
					<div className="flex items-center justify-between">
						<SlideButton buttonRef={prevButtonRef}>
							<ArrowLeftIcon />
						</SlideButton>
						<div className="text-2xl font-light uppercase text-gray-300">
							Scroll
						</div>
						<SlideButton buttonRef={nextButtonRef}>
							<ArrowRightIcon />
						</SlideButton>
					</div>
				)}
			</div>
			<div className="min-h-[1rem] grow-2" />
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
		<div className="flex flex-col items-center hover:[--border:50%] hover:[--transform:scale(1.1)_rotate(4deg)]">
			<div className="relative w-full grow p-6 xs:w-2/3 sm:w-1/2 md:w-full">
				<div className="overflow-hidden">
					<div className="transition-transform duration-300 [transform:var(--transform)]">
						{media}
					</div>
				</div>
				<GridBorder />
			</div>
			<div className="relative w-full grow p-6 pb-5 pt-4 xs:w-2/3 sm:w-1/2 md:w-full">
				<div className="mb-1 text-center text-lg font-extrabold text-primary-950 sm:text-start">
					{children}
				</div>
				<div className="text-center text-sm font-medium text-gray-600 sm:text-start">
					{supportingText}
				</div>
				<GridBorder noBorderTop />
			</div>
		</div>
	);
};

// TODO inspect image component's props

interface GridBorderProps {
	noBorderTop?: boolean;
}

export const GridBorder: FC<GridBorderProps> = ({ noBorderTop }) => {
	return (
		<>
			{noBorderTop ?? (
				<>
					<div
						className="absolute right-0 top-0 h-0.5 bg-gray-200 transition-all duration-300"
						style={{ width: "var(--border, 0.5rem)" }}
					/>
					<div
						className="absolute left-0 top-0 h-0.5 bg-gray-200 transition-all duration-300"
						style={{ width: "var(--border, 0.5rem)" }}
					/>
				</>
			)}
			<div
				className="absolute left-0 top-0 w-0.5 bg-gray-200 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute right-0 top-0 w-0.5 bg-gray-200 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute bottom-0 right-0 h-0.5 bg-gray-200 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute bottom-0 right-0 w-0.5 bg-gray-200 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute bottom-0 left-0 h-0.5 bg-gray-200 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute bottom-0 left-0 w-0.5 bg-gray-200 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>
		</>
	);
};
