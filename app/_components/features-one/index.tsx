"use client";
import Image from "next/image";
import React, { FC, ReactNode } from "react";
import featureImageOne from "../../../public/one-click.jpg";
import featureImageTwo from "../../../public/pay-method.jpg";
import featureImageThree from "../../../public/currency.jpg";
import Stack from "../stack";
import Grid from "../grid";
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
				One-Click checkout with Pay link
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
				supportingText="Clients will recognise the benefits of adaptable multi-currency payment options designed to meet their international requirements."
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
			className="h-full flex flex-col py-4"
			// underLayer={<Grid black />}
		>
			<div className="grow-2 min-h-[1rem]" />
			<div className="flex items-center gap-x-16 gap-y-2 flex-col md:flex-row">
				<div className="md:w-1/2 text-primary text-4xl font-extrabold font-montserrat text-center md:text-left">
					Simplified Customer Payment Processing!
				</div>
				<div className="md:w-1/2 text-gray-200 text-base font-medium font-lato text-center md:text-left">
					<p className="inline">
						In a rapidly evolving marketplace, staying ahead means embracing
						efficient solutions.
					</p>
					<p className="hidden md:inline">
						&nbsp;Our Streamlined customer payment processing is your gateway to
						a new era in payment convenience. We&apos;ve reimagined the payment
						journey to be effortless and user-friendly.
					</p>
				</div>
			</div>
			<div className="grow min-h-[1rem]" />
			<div className="flex flex-col gap-8">
				{slider}
				{visibleSlidesNumber < 3 && (
					<div className="flex items-center justify-between">
						<SlideButton buttonRef={prevButtonRef}>
							<ArrowLeftIcon />
						</SlideButton>
						<div className="uppercase font-lato font-light text-2xl text-gray-400">
							Scroll
						</div>
						<SlideButton buttonRef={nextButtonRef}>
							<ArrowRightIcon />
						</SlideButton>
					</div>
				)}
			</div>
			<div className="grow-2 min-h-[1rem]" />
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
		<div className="flex flex-col basis-1/3 items-center">
			<div className="w-2/3 xs:w-auto mb-4">{media}</div>
			<div className="text-primary text-2xl font-extrabold font-lato text-center sm:text-start w-full mb-2">
				{children}
			</div>
			<div className="text-gray-200 text-base font-medium font-lato text-center sm:text-start w-full">
				{supportingText}
			</div>
		</div>
	);
};

// TODO inspect image component's props
