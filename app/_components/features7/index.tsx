import React, { useState } from "react";
import Mobile1 from "../../../public/Terminal 1.webp";
import Mobile2 from "../../../public/Terminal 2.webp";
import Mobile3 from "../../../public/Terminal 3.webp";
import Mobile4 from "../../../public/Terminal 4.webp";
import Mobile5 from "../../../public/Terminal 5.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Calc from "../../../public/vardan-papikyan-3Q4H1BQAvVo-unsplash1 2.svg";
import Cache from "../../../public/euro-banknotes-white-one-hundred-background-monetary-denominationa 1.svg";
import Coin from "../../../public/decreasing-piles-coin-money-with-arrow44 2.svg";
import Image from "next/image";
import Modal from "react-modal";
import ModalSection from "./modal";
import ImageSlider from "../image-slider";
const terminals = [
	{
		image: Mobile1,
		title: "S1F2",
		subtitle: "An all-in-one Android device with printing power",
	},
	{
		image: Mobile2,
		title: "S1EL2",
		subtitle: "Sleek, durable, and mobile all-in-one Android device",
	},
	{
		image: Mobile3,
		title: "Tap to Pay iPhone",
		subtitle:
			"Accept contactless payments right on an iPhone with Tap to Pay on iPhone",
	},
	{
		image: Mobile4,
		title: "AMS1",
		subtitle: "Designed by Adyen; your all-in-one terminal running on Android.",
	},
	{
		image: Mobile5,
		title: "NYC1",
		subtitle:
			"Designed by us, inspired by you; a card reader for businesses on the move.",
	},
];

function Feature7() {
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

	const sliderSettings = {
		className: "center",
		centerPadding: "100px",
		infinite: true, // Enable infinite scrolling
		speed: 500, // Transition speed
		slidesToShow: 3, // Number of slides to show at a time
		slidesToScroll: 1, // Number of slides to scroll at a time
	};

	return (
		<div className=" flex-col justify-between h-full hidden xl:flex">
			<div className="flex justify-center items-center flex-1">
				<div className="flex flex-col flex-1 xl:px-[120px] max-w-[1440px] h-full">
					<div className="flex flex-col">
						<h2 className="text-[32px] font-black text-primery">Terminals</h2>
						<span className="font-normal text-gray_2 text-base mt-3">
							Here you can see our terminals and order anyone do you want.
						</span>
					</div>
					<div className="h-full flex flex-col justify-center">
						<Slider {...sliderSettings}>
							{terminals.map((t, index) => (
								<div
									key={index}
									className="space-y-5 px-5 flex items-center"
									onClick={() => openModal(index)}
									style={{ cursor: "pointer" }}
								>
									<div>
										<Image src={t.image} alt={t.title} />
									</div>
									<div>
										<h3 className="text-2xl text-primery font-black">
											{t.title}
										</h3>
									</div>
									<div>
										<span className="text-lg text-gray_2 font-normal">
											{t.subtitle}
										</span>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
			<div className="col-span-12 flex justify-between border-y-2 border-y-primery py-2 mt-10">
				<ImageSlider />
			</div>
			{/* <Modal
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
						className="object-contain h-full"
					/>
				)}
				<button onClick={closeModal}>Close Modal</button>
			</Modal> */}
			<ModalSection
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Image Modal"
				closeModal={closeModal}
				selectedImage={selectedImage}
			/>
		</div>
	);
}

export default Feature7;
