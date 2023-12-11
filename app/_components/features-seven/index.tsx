import React, { FC, ReactNode, RefObject, useContext, useState } from "react";
import Mobile1 from "public/terminal-1.jpg";
import Mobile2 from "public/terminal-2.jpg";
import Mobile3 from "public/terminal-3.jpg";
import Mobile4 from "public/terminal-4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Modal from "react-modal";
import ModalSection from "./modal";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	CheckIcon,
	FullScreenIcon,
} from "../icons";
import useSlider from "./Slider";
import { GridBorderComponent } from "../features-two";
import { ResponsiveContext } from "@/app/_contexts/contexts";
const terminals = [
	{
		image: Mobile1,
		title: "SPF2",
		subtitle: "An all-in-one Android device with printing power.",
		items: ["Cellular", "Wi-Fi", "Bluetooth"],
	},
	{
		image: Mobile2,
		title: "SPL2",
		subtitle: "Sleek, durable, and mobile all-in-one Android device.",
		items: ["Cellular", "Wi-Fi", "Bluetooth"],
	},
	{
		image: Mobile4,
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

	const responsiveContext = useContext(ResponsiveContext);

	const visibleSlidesNumber =
		responsiveContext === "md" ||
		responsiveContext === "lg" ||
		responsiveContext === "xl"
			? 4
			: responsiveContext === "sm"
			? 2
			: 1;

	const [slider, previousButtonRef, nextButtonRef] = useSlider({
		children: terminals.map((t, index) => (
			<button
				key={index}
				className="m-auto flex w-full flex-col gap-4 xs:w-2/3 sm:w-full"
				onClick={() => openModal(index)}
			>
				<div className="relative w-full">
					<GridBorderComponent
						className="flex items-center justify-center border-gray-100"
						overflowVisible
						noRotate
					>
						<Image
							placeholder="blur"
							src={t.image}
							alt={t.title}
							className="h-64 object-contain"
						/>
					</GridBorderComponent>
					<div className="pointer-events-none absolute right-2 top-2 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-gray-100 bg-white">
						<FullScreenIcon />
					</div>
				</div>
				<h4 className="text-2xl font-extrabold text-primary-950">{t.title}</h4>
				<p className="text-start text-lg font-medium text-gray-600">
					{t.subtitle}
				</p>
				<div className="flex flex-col gap-1">
					{t.items ? (
						t.items.map((item, index) => (
							<div className="flex items-center gap-2" key={index}>
								<CheckIcon className="text-primary-950" />
								<div className="text-sm font-medium text-gray-600">{item}</div>
							</div>
						))
					) : (
						<p className="text-start text-lg font-normal text-gray-600">
							* no extra terminals or hardware needed.
						</p>
					)}
				</div>
			</button>
		)),
		visibleSlidesNumber,
		gapInRem: 2.5,
	});

	return (
		<>
			<div className="flex h-full w-full flex-col px-10 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
				<div className="min-h-[1rem] grow" />
				<div className="mb-8 flex items-start justify-between gap-16">
					<div className="flex flex-col gap-1">
						<h3 className="text-3xl font-extrabold text-primary-950">
							Terminals
						</h3>
						<p className="text-base font-normal text-gray-600">
							Check out our terminals and choose your preferred one for
							ordering.
						</p>
					</div>
					<div className="flex flex-col items-end gap-1">
						<div className="text-2xl font-light uppercase text-gray-300">
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
						placeholder="blur"
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
			className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-primary-950 text-primary-950 transition-colors disabled:border-gray-300 disabled:text-gray-300"
		>
			{children}
		</button>
	);
};
