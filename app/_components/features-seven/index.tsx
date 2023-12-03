"use client";
import React, { FC, ReactNode, RefObject, useState } from "react";
import Mobile1 from "../../../public/Terminal 1.webp";
import Mobile2 from "../../../public/Terminal 2.webp";
import Mobile3 from "../../../public/Terminal 3.webp";
import Mobile4 from "../../../public/Terminal 4.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Modal from "react-modal";
import ModalSection from "./modal";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "../icons";
import useSlider from "./Slider";
import { HoverableImage } from "../hoverable";
import useResponsiveState from "../features-one/useResponsiveState";
const terminals = [
	{
		image: Mobile1,
		title: "SPF2",
		subtitle: "An all-in-one Android device with printing power.",
		items: ["Cellular", "Wi-Fi", "Bluetooth"],
	},
	{
		image: Mobile4,
		title: "SPL2",
		subtitle: "Sleek, durable, and mobile all-in-one Android device.",
		items: ["Cellular", "Wi-Fi", "Bluetooth"],
	},
	{
		image: Mobile2,
		title: "Tap to Pay iPhone",
		subtitle:
			"Accept contactless payments right on an iPhone with Tap to Pay on iPhone.",
	},
	{
		image: Mobile3,
		title: "SPS1",
		subtitle: "Your all-in-one terminal running on Android.",
		items: ["Cellular", "Wi-Fi", "Bluetooth"],
	},
];

function FeatureEight() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const openModal = (index: any) => {
		setSelectedImage(index);
		setModalIsOpen(true);
	};
	const closeModal = () => {
		setSelectedImage(null);
		setModalIsOpen(false);
	};

	const visibleSlidesNumber = useResponsiveState<number>({
		defaultState: 1,
		breakpoints: [
			{ breakpoint: 376, state: 2 },
			{ breakpoint: 640, state: 3 },
			{ breakpoint: 1024, state: 4 },
		],
	});

	const [slider, previousButtonRef, nextButtonRef] = useSlider({
		children: terminals.map((t, index) => (
			<div
				key={index}
				className="flex flex-col gap-5"
				onClick={() => openModal(index)}
				style={{ cursor: "pointer" }}
			>
				<HoverableImage src={t.image} alt={t.title} />
				<h4 className="text-2xl font-extrabold text-primary-950">{t.title}</h4>
				<p className="text-lg font-medium text-gray-100">{t.subtitle}</p>
				<div className="flex flex-col gap-1">
					{t.items ? (
						t.items.map((item, index) => (
							<div className="flex items-center gap-2" key={index}>
								<CheckIcon className="text-primary-950" />
								<div className="text-sm font-medium text-gray-200">{item}</div>
							</div>
						))
					) : (
						<p className="text-lg font-normal italic text-gray-100">
							* no extra terminals or hardware needed.
						</p>
					)}
				</div>
			</div>
		)),
		visibleSlidesNumber,
		gapInRem: 2.5,
	});

	return (
		<>
			<div className="flex h-full w-full flex-col px-10 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
				<div className="min-h-[1rem] grow-2" />
				<div className="flex items-center justify-between gap-4">
					<div className="flex flex-col gap-2">
						<h3 className="text-4xl font-extrabold text-primary-950">
							Terminals
						</h3>
						<p className="text-base font-normal text-gray-200">
							Here you can see our terminals and order anyone do you want.
						</p>
					</div>
					<div className="flex flex-col items-end gap-1">
						<div className="text-2xl font-light uppercase text-gray-400">
							Scroll
						</div>
						<div className="flex gap-2.5">
							<SlideButton buttonRef={previousButtonRef}>
								<ArrowLeftIcon />
							</SlideButton>
							<SlideButton buttonRef={nextButtonRef}>
								<ArrowRightIcon />
							</SlideButton>
						</div>
					</div>
				</div>
				<div className="min-h-[1rem] grow" />
				{slider}
				<div className="min-h-[1rem] grow-2" />
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Image Modal"
				style={{
					content: {
						maxWidth: "50%",
						maxHeight: "50%",
						margin: "auto",
					},
				}}
			>
				{selectedImage && (
					<Image
						src={selectedImage}
						alt="Selected Image"
						className="h-full object-cover"
					/>
				)}
				<button onClick={closeModal}>Close Modal</button>
			</Modal>
			<ModalSection
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Image Modal"
				closeModal={closeModal}
				selectedImage={selectedImage}
			/>
		</>
	);
}

export default FeatureEight;

interface SlideButtonProps {
	children?: ReactNode;
	buttonRef: RefObject<HTMLButtonElement>;
}

export const SlideButton: FC<SlideButtonProps> = ({ children, buttonRef }) => {
	return (
		<button
			ref={buttonRef}
			className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-primary-950 text-primary-950 transition-colors disabled:border-gray-400 disabled:text-gray-400"
		>
			{children}
		</button>
	);
};
