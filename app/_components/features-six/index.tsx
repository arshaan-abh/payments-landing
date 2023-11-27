import type { FC } from "react";
import Advance from "public/terminal.jpg";
import Billing from "public/invoicing.jpg";
import { Card } from "../features-five";
import { HoverableImage } from "../hoverable";

interface FeatureFiveProps {}

const FeatureFive: FC<FeatureFiveProps> = ({}) => {
	return (
		<div className="flex w-full flex-col px-10 sm:h-[calc(100vh_-_4rem)] lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="min-h-[1rem] grow-2" />
			<div className="flex flex-col items-center gap-8 xl:h-1/2 xl:flex-row xl:justify-between xl:gap-16">
				<HoverableImage
					src={Advance}
					alt="Advance"
					className="w-1/2 object-cover xl:aspect-square xl:h-full xl:w-max"
					round
				/>
				<Card title="Advanced Terminal Services">
					<p className="inline">
						For businesses in search of the pinnacle of terminal technology, our
						solutions stand out as the optimal choice.
					</p>
					<p className="hidden xl:inline">
						&nbsp;It is meticulously crafted to elevate in-person transactions
						to the highest standard of sophistication. With an unwavering
						commitment to security, speed, and reliability, you can rest assured
						that your payment processes are not only smooth but also held in the
						highest regard for trustworthiness. In an era where customers
						prioritise a secure payment experience, our solutions go above and
						beyond, guaranteeing that your business maintains its competitive
						edge and continues to be trusted by your valued clientele for
						unparalleled excellence and innovation.
					</p>
				</Card>
			</div>
			<div className="min-h-[1rem] grow" />
			<div className="flex flex-col-reverse items-center gap-8 xl:h-1/4 xl:flex-row xl:justify-between xl:gap-16">
				<Card title="Billing & Invoicing">
					One of the key features of our Automated Billing solutions is the
					ability to craft professional invoices.
				</Card>
				<HoverableImage
					src={Billing}
					alt="Billing"
					className="w-1/2 object-cover xl:aspect-square xl:h-full xl:w-max"
					round
					locate
				/>
			</div>
			<div className="min-h-[1rem] grow-2" />
		</div>
	);
};

export default FeatureFive;
