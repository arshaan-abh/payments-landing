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
						src={Pre}
						alt="Pre"
						className="aspect-square h-full w-full object-cover"
					/>
				</GridBorderComponent>

				<Card title="Pre-Paid Debit Card Issuing with Bank Account">
					<p className="inline">
						By easily issuing Prepaid Debit Cards tailored to your brand, you
						create a distinct competitive edge in the market.
					</p>
					<p className="hidden xl:inline">
						&nbsp;These adaptable solutions not only optimise payments but also
						empower your business to provide a unique payment experience
						that&apos;s both user-friendly and reflective of your brand&apos;s
						values. This uniqueness resonates with customers, enhancing their
						engagement and loyalty. Moreover, the introduction of these cards
						can open up new revenue streams, as satisfied customers are more
						likely to increase their spending and recommend your business to
						others. As you align your payment options with your brand identity,
						you&apos;re poised for business growth and long-term success.
					</p>
				</Card>
			</div>
			<div className="h-16 sm:h-8" />
			<div className="m-auto flex h-2/5 w-full flex-col-reverse items-center justify-between gap-x-16 gap-y-8 xs:w-2/3 sm:w-full sm:flex-row">
				<Card title="Business Finance Service with Bank Account">
					<p className="inline">
						We&apos;ve tailored our services to provide you with a seamless
						experience in managing your business&apos;s credit lines and bank
						accounts.
					</p>
					<p className="hidden xl:inline">
						The true value lies in the financial agility and timely access to
						capital that these services offer. Your business can remain agile
						and responsive, ready to meet evolving financial demands. This
						capability ensures that you can make the most of opportunities while
						effectively mitigating risks. By entrusting us with your financial
						management, you&apos;re better equipped to thrive in a business
						landscape that requires adaptability and control.
					</p>
				</Card>

				<GridBorderComponent className="basis-1/2 md:basis-1/3">
					<Image
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
