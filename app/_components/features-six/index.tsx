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
						For businesses in search of the pinnacle of terminal technology, our
						solutions stand out as the optimal choice.
					</p>
					<p className="hidden xl:inline">
						It is meticulously crafted to elevate in-person transactions to the
						highest standard of sophistication. With an unwavering commitment to
						security, speed, and reliability, you can rest assured that your
						payment processes are not only smooth but also held in the highest
						regard for trustworthiness. In an era where customers prioritise a
						secure payment experience, our solutions go above and beyond,
						guaranteeing that your business maintains its competitive edge and
						continues to be trusted by your valued clientele for unparalleled
						excellence and innovation.
					</p>
				</Card>
			</div>
			<div className="h-16 sm:h-8" />
			<div className="m-auto flex h-2/5 w-full flex-col-reverse items-center justify-between gap-x-16 gap-y-8 xs:w-2/3 sm:w-full sm:flex-row">
				<Card title="Billing & Invoicing">
					<p className="inline">
						One of the key features of our Automated Billing solutions is the
						ability to craft professional invoices.
					</p>
					<p className="hidden xl:inline">
						These invoices not only reflect positively on your business&apos;s
						image but also ensure that your clients receive clear and detailed
						documentation for the services or products you provide. Professional
						invoices can enhance your credibility and professionalism,
						potentially fostering stronger client relationships and increasing
						your chances of getting paid promptly. Efficiency in tracking
						payments is another critical aspect of our Automated Billing
						solutions. By automating the payment tracking process, you gain
						real-time insights into your receivables, allowing you to monitor
						outstanding payments, set reminders, and take proactive measures to
						ensure your cash flow remains healthy.
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
