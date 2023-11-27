"use client";
import Image from "next/image";
import React, { FC, ReactNode } from "react";
import featureImageOne from "../../../public/one-click.jpg";
import featureImageTwo from "../../../public/pay-method.jpg";
import featureImageThree from "../../../public/currency.jpg";
import Stack from "../stack";
import useSlider from "../features-seven/Slider";
import useResponsiveState from "./useResponsiveState";
import { SlideButton } from "../features-seven";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";
import Hoverable from "../hoverable";

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
					<Hoverable round>
						<Image
							src={featureImageOne}
							alt="One-Click checkout with Pay link"
						/>
					</Hoverable>
				}
				supportingText="Your customers will love the simplicity of one-click checkout through our seamless pay link."
			>
				One-Click Pay Link
			</Card>,
			<Card
				key={1}
				media={
					<Hoverable round>
						<Image src={featureImageTwo} alt="Flexible Payment Methods" />
					</Hoverable>
				}
				supportingText="Users will enjoy the convenience of flexible payout methods tailored to their needs."
			>
				Flexible Payment Methods
			</Card>,
			<Card
				key={2}
				media={
					<Hoverable round>
						<Image src={featureImageThree} alt="Multicurrency Payments" />
					</Hoverable>
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
		<Stack
			containerClassName="w-full h-full px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			// underClassName="px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			className="flex h-full flex-col py-4"
			// underLayer={<Grid black />}
		>
			<div className="min-h-[1rem] grow-2" />
			<div className="flex flex-col items-center gap-x-16 gap-y-2 md:flex-row">
				<div className="text-center text-4xl font-extrabold text-primary md:w-1/2 md:text-left">
					Simplified Customer Payment Processing!
				</div>
				<div className="text-center text-base font-medium text-gray-200 md:w-1/2 md:text-left">
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
			<div className="min-h-[1rem] grow" />
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
		</Stack>
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
		<div className="flex basis-1/3 flex-col items-center">
			<div className="mb-4 w-2/3 xs:w-auto">{media}</div>
			<div className="mb-2 w-full text-center text-2xl font-extrabold text-primary sm:text-start">
				{children}
			</div>
			<div className="w-full text-center text-base font-medium text-gray-200 sm:text-start">
				{supportingText}
			</div>
		</div>
	);
};

// TODO inspect image component's props
