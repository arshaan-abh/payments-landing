"use client";
import Image from "next/image";
import React, { FC, ReactNode } from "react";
import featureImageOne from "../../../public/one-click.jpg";
import featureImageTwo from "../../../public/pay-method.jpg";
import featureImageThree from "../../../public/currency.jpg";
import useSlider from "../features-seven/Slider";
import useResponsiveState from "./useResponsiveState";
import { SlideButton } from "../features-seven";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";

const FeatureOne: FC<CardProps> = ({}) => {
	const visibleSlidesNumber = useResponsiveState<number>({
		defaultState: 1,
		breakpoints: [
			{ breakpoint: 376, state: 2 },
			{ breakpoint: 640, state: 3 },
		],
	});

	const [slider, prevButtonRef, nextButtonRef] = useSlider({
		children: [
			<Card
				key={0}
				media={
					<Image src={featureImageOne} alt="One-Click checkout with Pay link" />
				}
				supportingText="Your customers will love the simplicity of one-click checkout through our seamless pay link."
			>
				One-Click Pay Link
			</Card>,
			<Card
				key={1}
				media={<Image src={featureImageTwo} alt="Flexible Payment Methods" />}
				supportingText="Users will enjoy the convenience of flexible payout methods tailored to their needs."
			>
				Flexible Payment Methods
			</Card>,
			<Card
				key={2}
				media={<Image src={featureImageThree} alt="Multicurrency Payments" />}
				supportingText="Clients will recognise the benefits of adaptable multi-currency payment options."
			>
				Multicurrency Payments
			</Card>,
		],
		visibleSlidesNumber,
		gapInRem: 2,
	});

	return (
		<div className="flex h-full w-full flex-col px-10 py-4 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="min-h-[1rem] grow" />
			<div className="flex flex-col items-center gap-x-8 gap-y-2 md:flex-row">
				<div className="text-center text-4xl font-extrabold leading-tight text-primary md:w-1/2 md:text-left">
					Simplified Customer Payment Processing!
				</div>
				<div className="text-center text-base font-medium leading-tight text-gray-200 md:w-1/2 md:text-left">
					<p className="inline">
						In a rapidly evolving marketplace, staying ahead means embracing
						efficient solutions.
					</p>
					<p className="hidden md:inline">
						&nbsp;Our streamlined customer payment processing is your gateway to
						a new era in payment convenience. We&apos;ve reimagined the payment
						journey to be effortless and user-friendly.
					</p>
				</div>
			</div>
			<div className="min-h-[1rem] grow-2" />
			<div className="flex flex-col gap-8">
				{slider}
				{visibleSlidesNumber < 3 && (
					<div className="flex items-center justify-between">
						<SlideButton buttonRef={prevButtonRef}>
							<ArrowLeftIcon />
						</SlideButton>
						<div className="text-2xl font-light uppercase text-gray-400">
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
		<div className="flex basis-1/3 flex-col items-center hover:[--border:50%] hover:[--transform:scale(1.1)_rotate(4deg)]">
			<div className="relative w-2/3 p-4 xs:w-auto lg:p-7">
				<div className="overflow-hidden">
					<div className="transition-transform duration-300 [transform:var(--transform)]">
						{media}
					</div>
				</div>
				<GridBorder />
			</div>
			<div className="relative p-4 lg:p-7">
				<div className="mb-2 w-full text-center text-xl font-extrabold text-primary sm:text-start">
					{children}
				</div>
				<div className="w-full text-center text-base font-medium text-gray-200 sm:text-start">
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

const GridBorder: FC<GridBorderProps> = ({ noBorderTop }) => {
	return (
		<>
			{noBorderTop ?? (
				<>
					<div
						className="absolute right-0 top-0 h-0.5 bg-gray-600 transition-all duration-300"
						style={{ width: "var(--border, 0.5rem)" }}
					/>
					<div
						className="absolute left-0 top-0 h-0.5 bg-gray-600 transition-all duration-300"
						style={{ width: "var(--border, 0.5rem)" }}
					/>
				</>
			)}
			<div
				className="absolute left-0 top-0 w-0.5 bg-gray-600 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute right-0 top-0 w-0.5 bg-gray-600 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute bottom-0 right-0 h-0.5 bg-gray-600 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute bottom-0 right-0 w-0.5 bg-gray-600 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute bottom-0 left-0 h-0.5 bg-gray-600 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute bottom-0 left-0 w-0.5 bg-gray-600 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>
		</>
	);
};
