import { type FC, ReactNode } from "react";
import Image from "next/image";
import Pre from "public/credit-card.jpg";
import Business from "public/business-finance.jpg";
import { GridBorderComponent } from "../features-two";

interface FeatureFiveProps {}

const FeatureFive: FC<FeatureFiveProps> = ({}) => {
	return (
		<div className="flex w-full flex-col px-10 sm:h-screen lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="min-h-[1rem] grow" />
			<div className="m-auto flex h-2/5 w-full flex-col items-center justify-between gap-x-16 gap-y-8 xs:w-2/3 sm:w-full sm:flex-row">
				<GridBorderComponent className="basis-1/2 md:basis-1/3">
					<Image
						placeholder="blur"
						src={Pre}
						alt="Pre"
						className="aspect-square h-full w-full object-cover"
					/>
				</GridBorderComponent>

				<Card title="Pre-Paid Debit Card Issuing with Bank Account">
					<p className="inline">
						Branded prepaid debit cards optimise payments, foster loyalty, and
						align with your brand for a unique user experience.
					</p>
					<p className="hidden xl:inline">
						{" "}
						Their introduction can open new revenue streams, as satisfied
						customers tend to increase spending and recommend your business.
						This strategic alignment positions your business for sustained
						growth and long-term success.
					</p>
				</Card>
			</div>
			<div className="h-16 sm:h-8" />
			<div className="m-auto flex h-2/5 w-full flex-col-reverse items-center justify-between gap-x-16 gap-y-8 xs:w-2/3 sm:w-full sm:flex-row">
				<Card title="Business Finance Service with Bank Account">
					<p className="inline">
						We ensure seamless management of your business&apos;s credit lines
						and bank accounts, providing financial agility.
					</p>
					<p className="hidden xl:inline">
						{" "}
						This enables your business to stay responsive, seize opportunities,
						and mitigate risks. Entrusting us with your financial management
						equips you to thrive in a demanding business landscape requiring
						adaptability and control.
					</p>
				</Card>

				<GridBorderComponent className="basis-1/2 md:basis-1/3">
					<Image
						placeholder="blur"
						src={Business}
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
