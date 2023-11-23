import type { FC } from "react";
import Advance from "public/terminal.jpg";
import Billing from "public/invoicing.jpg";
import { Card } from "../features-five";
import { HoverableImage } from "../hoverable";

interface FeatureFiveProps {}

const FeatureFive: FC<FeatureFiveProps> = ({}) => {
	return (
		<div className="w-full h-[calc(100vh_-_4rem)] px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl flex flex-col">
			<div className="grow-2 min-h-[1rem]" />
			<div className="flex items-center h-2/4 gap-16 justify-between">
				<HoverableImage
					src={Advance}
					alt="Advance"
					className="h-full object-cover aspect-square w-max"
					round
				/>
				<Card
					title="Advanced Terminal Services"
					supportingText="For businesses in search of the pinnacle of terminal technology, our solutions stand out as the optimal choice.
					It is meticulously crafted to elevate in-person transactions to the highest standard of sophistication. With an unwavering commitment to security, speed, and reliability, you can rest assured that your payment processes are not only smooth but also held in the highest regard for trustworthiness. In an era where customers prioritise a secure payment experience, our solutions go above and beyond, guaranteeing that your business maintains its competitive edge and continues to be trusted by your valued clientele for unparalleled excellence and innovation."
				/>
			</div>
			<div className="grow min-h-[1rem]" />
			<div className="flex items-center h-1/4 gap-16 justify-between">
				<Card
					title="Billing & Invoicing"
					supportingText="One of the key features of our Automated Billing solutions is the ability to craft professional invoices."
				/>
				<HoverableImage
					src={Billing}
					alt="Billing"
					className="h-full object-cover aspect-square w-max"
					round
					locate
				/>
			</div>
			<div className="grow-2 min-h-[1rem]" />
		</div>
	);
};

export default FeatureFive;
