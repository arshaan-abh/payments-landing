import type { FC } from "react";
import Advance from "public/terminal.jpg";
import Billing from "public/invoicing.jpg";
import Image from "next/image";
import { Card } from "../features-five";
import Stack from "../stack";
import Grid from "../grid";

interface FeatureFiveProps {}

const FeatureFive: FC<FeatureFiveProps> = ({}) => {
	return (
		<Stack
			containerClassName="w-full h-full px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			underClassName="px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			className="h-full flex flex-col justify-evenly"
			underLayer={<Grid black />}
		>
			<div className="flex items-center h-2/4 gap-24">
				<Image src={Advance} alt="Advance" className="h-full object-contain" />
				<Card
					title="Advanced Terminal Services"
					supportingText="Businesses seeking the pinnacle of terminal technology need look no further than our solutions, which are designed to elevate in-person transactions. Our commitment to security, speed, and reliability means that you can trust your payment processes to be both efficient and dependable. In a world where customers prioritize a smooth and secure payment experience, our solutions deliver, ensuring that your business remains competitive, efficient, and trusted by your clientele."
				/>
			</div>
			<div className="flex items-center h-1/4 gap-24">
				<Card
					title="Billing & Invoicing"
					supportingText="One of the key features of our Automated Billing solutions is the ability to craft professional invoices."
				/>
				<Image src={Billing} alt="Billing" className="h-full object-contain" />
			</div>
		</Stack>
	);
};

export default FeatureFive;
