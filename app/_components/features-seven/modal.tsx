import { ModalData } from "@/app/staticData/staticModalData";
import Image from "next/image";
import React, { useRef } from "react";
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";

interface ModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
	closeModal: () => void;
	contentLabel: string;
	selectedImage: any;
}

function ModalSection(props: ModalProps) {
	const nodeRef = useRef(null);
	const { isOpen, onRequestClose, contentLabel, selectedImage } = props;

	return (
		<Modal
			ariaHideApp={false}
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel={contentLabel}
			style={{
				content: {
					maxWidth: "80%",
					maxHeight: "70%",
					margin: "auto",
					overflow: "hidden",
					backgroundColor: "white",
				},
				overlay: { zIndex: 999 },
			}}
		>
			<div className="grid h-full grid-cols-12">
				<div className="col-span-4 flex h-full items-center object-contain">
					{ModalData[selectedImage]?.image && (
						<Image src={ModalData[selectedImage]?.image} alt={selectedImage} />
					)}
				</div>
				<div className="col-span-7 col-end-13 flex flex-col justify-evenly">
					<div>
						<div>
							<span className="text-[32px] font-black text-primary-950">
								{ModalData[selectedImage]?.description[0].title}
							</span>
						</div>
						<div>
							<span className="text-lg font-normal text-gray-100">
								{ModalData[selectedImage]?.description[0].subTitle}
							</span>
						</div>
					</div>
					<div className="space-y-2">
						<div>
							<span className="text-2xl font-bold text-primary-950">
								{ModalData[selectedImage]?.description[0].information.name}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-end text-base font-normal text-primary-950">
								{ModalData[selectedImage]?.description[0].information.inf1}
							</span>
							<span className="text-base font-normal text-gray-300">
								{ModalData[selectedImage]?.description[0].information.inf1des}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-base font-normal text-primary-950">
								{ModalData[selectedImage]?.description[0].information.inf2}
							</span>
							<span className="text-base font-normal text-gray-300">
								{ModalData[selectedImage]?.description[0].information.inf2des}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-base font-normal text-primary-950">
								{ModalData[selectedImage]?.description[0].information.inf3}
							</span>
							<span className="text-base font-normal text-gray-300">
								{ModalData[selectedImage]?.description[0].information.inf3des}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-base font-normal text-primary-950">
								{ModalData[selectedImage]?.description[0].information.inf4}
							</span>
							<span className="text-base font-normal text-gray-300">
								{ModalData[selectedImage]?.description[0].information.inf4des}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-base font-normal text-primary-950">
								{ModalData[selectedImage]?.description[0].information.inf5}
							</span>
							<span className="text-base font-normal text-gray-300">
								{ModalData[selectedImage]?.description[0].information.inf5des}
							</span>
						</div>
					</div>
					<div className="space-y-2">
						<div>
							<span className="text-2xl font-bold text-primary-950">
								{ModalData[selectedImage]?.description[0].connecting.name}
							</span>
						</div>
						<div>
							<span className="text-base font-normal text-primary-950">
								{ModalData[selectedImage]?.description[0].connecting.con1}
							</span>
						</div>
						<div>
							<span className="text-base font-normal text-primary-950">
								{ModalData[selectedImage]?.description[0].connecting.con2}
							</span>
						</div>
						<div>
							<span className="text-base font-normal text-primary-950">
								{ModalData[selectedImage]?.description[0].connecting.con3}
							</span>
						</div>
						<div>
							<span className="text-base font-normal text-primary-950">
								{ModalData[selectedImage]?.description[0].connecting.con4}
							</span>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}

export default ModalSection;
