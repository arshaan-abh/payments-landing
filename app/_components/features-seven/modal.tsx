import { ModalData } from "@/app/staticData/staticModalData";
import Image from "next/image";
import React, { useRef } from "react";
import Modal from "react-modal";
import { CloseIcon } from "../icons";

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
					padding: "0",
					borderRadius: "12px",
					borderColor: "#E0E7E4",
				},
				overlay: {
					zIndex: 999,
					backgroundColor: "#F2F2F280",
					backdropFilter: "blur(4px)",
					WebkitBackdropFilter: "blur(4px)",
				},
			}}
		>
			<div className="flex h-full">
				<div className="h-full w-2/5 basis-2/5">
					{ModalData[selectedImage]?.bg && (
						<Image
							src={ModalData[selectedImage]?.bg}
							alt={selectedImage}
							className="h-full w-full object-cover"
						/>
					)}
				</div>
				<div className="relative h-full w-3/5 basis-3/5 p-12 pl-16">
					<div className="absolute right-2.5 top-2.5 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-gray-100 bg-white text-primary-950">
						<CloseIcon />
					</div>
					<div className="mb-1">
						<span className="text-3xl font-extrabold text-primary-950">
							{ModalData[selectedImage]?.description[0].title}
						</span>
					</div>
					<div className="mb-4">
						<span className="text-lg font-medium text-gray-600">
							{ModalData[selectedImage]?.description[0].subTitle}
						</span>
					</div>
					<div className="mb-8 h-px w-full bg-gray-200" />
					<div className="mb-2">
						<span className="text-2xl font-bold text-primary-950">
							{ModalData[selectedImage]?.description[0].information.name}
						</span>
					</div>
					<div className="mb-1 flex items-center justify-between">
						<span className="text-end text-base font-medium text-primary-950">
							{ModalData[selectedImage]?.description[0].information.inf1}
						</span>
						<span className="text-base font-normal text-gray-400">
							{ModalData[selectedImage]?.description[0].information.inf1des}
						</span>
					</div>
					<div className="mb-1 flex items-center justify-between">
						<span className="text-base font-medium text-primary-950">
							{ModalData[selectedImage]?.description[0].information.inf2}
						</span>
						<span className="text-base font-normal text-gray-400">
							{ModalData[selectedImage]?.description[0].information.inf2des}
						</span>
					</div>
					<div className="mb-1 flex items-center justify-between">
						<span className="text-base font-medium text-primary-950">
							{ModalData[selectedImage]?.description[0].information.inf3}
						</span>
						<span className="text-base font-normal text-gray-400">
							{ModalData[selectedImage]?.description[0].information.inf3des}
						</span>
					</div>
					<div className="mb-1 flex items-center justify-between">
						<span className="text-base font-medium text-primary-950">
							{ModalData[selectedImage]?.description[0].information.inf4}
						</span>
						<span className="text-base font-normal text-gray-400">
							{ModalData[selectedImage]?.description[0].information.inf4des}
						</span>
					</div>
					<div className="mb-10 flex items-center justify-between">
						<span className="text-base font-medium text-primary-950">
							{ModalData[selectedImage]?.description[0].information.inf5}
						</span>
						<span className="text-base font-normal text-gray-400">
							{ModalData[selectedImage]?.description[0].information.inf5des}
						</span>
					</div>
					<div className="mb-2">
						<span className="text-2xl font-bold text-primary-950">
							{ModalData[selectedImage]?.description[0].connecting.name}
						</span>
					</div>
					<div className="mb-1 flex items-center justify-between">
						<span className="text-base font-medium text-primary-950">
							{ModalData[selectedImage]?.description[0].connecting.con1}
						</span>
					</div>
					<div className="mb-1 flex items-center justify-between">
						<span className="text-base font-medium text-primary-950">
							{ModalData[selectedImage]?.description[0].connecting.con2}
						</span>
					</div>
					<div className="mb-1 flex items-center justify-between">
						<span className="text-base font-medium text-primary-950">
							{ModalData[selectedImage]?.description[0].connecting.con3}
						</span>
					</div>
					<div className="mb-1 flex items-center justify-between">
						<span className="text-base font-medium text-primary-950">
							{ModalData[selectedImage]?.description[0].connecting.con4}
						</span>
					</div>
				</div>
			</div>
		</Modal>
	);
}

export default ModalSection;
