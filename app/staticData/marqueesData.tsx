import Image from "next/image";
import calculator from "public/calculator.webp";
import money from "public/money.webp";
import coinPiles from "public/coin-piles.webp";
import { marqueeItemData } from "../_components/marquee";

export const firstMarqueeData: marqueeItemData[] = [
	{ body: "Marketing Banner" },
	{ body: "Marketing Banner" },
	{ body: "Marketing Banner" },
];

export const secondMarqueeData: marqueeItemData[] = [
	{
		head: <Image src={calculator} alt="Calculator" className="h-full w-auto" />,
		body: "Marketing Banner",
	},
	{
		head: <Image src={money} alt="Money" className="h-full w-auto" />,
		body: "Marketing Banner",
	},
	{
		head: <Image src={coinPiles} alt="Coin Piles" className="h-full w-auto" />,
		body: "Marketing Banner",
	},
];
