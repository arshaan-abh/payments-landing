import { type FC, ReactNode } from "react";
import Image from "next/image";
import Advance from "public/terminal.jpg";
import Billing from "public/invoicing.jpg";
import { GridBorderComponent } from "../features-two";

interface FeatureFiveProps {}

const FeatureFive: FC<FeatureFiveProps> = ({}) => {
	return (
		<div className="flex w-full flex-col px-10 sm:h-screen lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="min-h-[1rem] grow" />
			<div className="m-auto flex h-2/5 w-full flex-col items-center justify-between gap-x-16 gap-y-8 xs:w-2/3 sm:w-full sm:flex-row">
				<GridBorderComponent className="basis-1/2 md:basis-1/3">
					<Image
						src={Advance}
						alt="Pre"
						className="aspect-square h-full w-full object-cover"
					/>
				</GridBorderComponent>

				<Card title="Advanced Terminal Services">
					<p className="inline">
						Our comprehensive array of solutions stands as the epitome for
						businesses seeking state-of-the-art terminal technology.{" "}
					</p>
					<p className="hidden xl:inline">
						Crafted with precision for sophistication and security, they ensure
						seamless and dependable payments. Our solutions secure your
						business&apos;s competitive edge, earning trust for excellence and
						innovation from valued clientele.
					</p>
				</Card>
			</div>
			<div className="h-16 sm:h-8" />
			<div className="m-auto flex h-2/5 w-full flex-col-reverse items-center justify-between gap-x-16 gap-y-8 xs:w-2/3 sm:w-full sm:flex-row">
				<Card title="Billing & Invoicing">
					<p className="inline">
						Our automated billing solutions excel in crafting professional
						invoices, elevating your business image.
					</p>
					<p className="hidden xl:inline">
						{" "}
						Alongside this, automated payment tracking provides real-time
						insights, enabling proactive cash flow management. This dual
						functionality positions our solutions as indispensable for enhancing
						operational efficiency.
					</p>
				</Card>

				<GridBorderComponent className="basis-1/2 md:basis-1/3">
					<Image
						src={Billing}
						alt="Business"
						className="aspect-square h-full w-full object-cover"
					/>
				</GridBorderComponent>
			</div>
			<div className="min-h-[1rem] grow-2" />
		</div>
	);
};

export default FeatureFive;

interface CardProps {
	title: string;
	children?: ReactNode;
}

export const Card: FC<CardProps> = ({ title, children }) => {
	return (
		<div className="flex basis-1/2 flex-col gap-4 md:basis-2/3">
			<h4 className="text-center text-3xl font-extrabold text-primary-950 sm:text-start">
				{title}
			</h4>
			<div className="text-center text-base font-normal text-gray-600 sm:text-start">
				{children}
			</div>
		</div>
	);
};
