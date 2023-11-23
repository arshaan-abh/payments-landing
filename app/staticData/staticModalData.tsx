import { ModalDataType } from "../@types/modal";
import Mobile1 from "../../public/Terminal 1.webp";
import Mobile2 from "../../public/Terminal 2.webp";
import Mobile3 from "../../public/Terminal 3.webp";
import Mobile4 from "../../public/Terminal 4.webp";
import Mobile5 from "../../public/Terminal 5.webp";

export const ModalData: ModalDataType[] = [
	{
		image: Mobile1,
		description: [
			{
				title: "SPF2",
				subTitle: "An all-in-one Android device with printing power",
				information: {
					name: "Hardware",
					inf1: "Printer Availability",
					inf1des: "Yes",
					inf2: "User interface",
					inf2des: "5.5”Touch display",
					inf3: "Memory",
					inf3des: "16GB flash & 2GB RAM",
					inf4: "Operation system",
					inf4des: "Android 9.0",
					inf5: "Camera/Barcode scanner",
					inf5des: "Camera & optional barcode scanner",
				},
				connecting: {
					name: "Connectivity",
					con1: "Ethernet",
					con2: "Cellular",
					con3: "Wi-Fi",
					con4: "Bluetooth",
				},
			},
		],
	},
	{
		image: Mobile4,
		description: [
			{
				title: "SPL2",
				subTitle: "An all-in-one Android device with printing power",
				information: {
					name: "Hardware",
					inf1: "Printer Availability",
					inf1des: "No",
					inf2: "User interface",
					inf2des: "5” Touch display",
					inf3: "Memory",
					inf3des: "16GB flash & 2GB RAM",
					inf4: "Operation system",
					inf4des: "Android 10",
					inf5: "Camera/Barcode scanner",
					inf5des: "Both available",
				},
				connecting: {
					name: "Connectivity",
					con1: "Ethernet",
					con2: "Cellular",
					con3: "Wi-Fi",
					con4: "Bluetooth",
				},
			},
		],
	},
	{
		image: Mobile2,
		description: [
			{
				title: "Tap to Pay iPhone",
				subTitle:
					"Accept contactless payments right on an iPhone with Tap to Pay on iPhone* no extra terminals or hardware needed. ",
				information: {
					name: "Hardware",
					inf1: "Printer Availability",
					inf1des: "Not available",
					inf2: "User interface",
					inf2des: "Varying per device",
					inf3: "Memory",
					inf3des: "Not applicable",
					inf4: "Operation system",
					inf4des: "iOS 16.4 or later",
					inf5: "Camera/Barcode scanner",
					inf5des: "Not applicable",
				},
				connecting: {
					name: "Connectivity",
					con1: "Ethernet",
					con2: "Cellular",
					con3: "Wi-Fi",
					con4: "Bluetooth",
				},
			},
		],
	},
	{
		image: Mobile3,
		description: [
			{
				title: "SPS1",
				subTitle: "Your all-in-one terminal running on Android.",
				information: {
					name: "Hardware",
					inf1: "Printer Availability",
					inf1des: "No",
					inf2: "User interface",
					inf2des: "4 touch display",
					inf3: "Memory",
					inf3des: "16GB flash & 2GB RAM",
					inf4: "Operation system",
					inf4des: "Android 10",
					inf5: "Camera/Barcode scanner",
					inf5des: "Camera",
				},
				connecting: {
					name: "Connectivity",
					con1: "Ethernet",
					con2: "Cellular",
					con3: "Wi-Fi",
					con4: "Bluetooth",
				},
			},
		],
	},
];
