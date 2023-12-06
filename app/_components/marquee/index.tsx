import { type FC, ReactNode } from "react";
import { ThunderIcon } from "../icons";

export interface marqueeItemModel {
	reactNode: ReactNode;
}

interface MarketingBannerProps {
	dark?: boolean;
	data: marqueeItemModel[];
}

const MarketingBanner: FC<MarketingBannerProps> = ({ dark, data }) => {
	const variableClassNames = dark
		? "bg-primary-950 text-white"
		: "bg-white text-primary-950 border-b-2 border-primary-950";

	return (
		<header
			className={`${variableClassNames} flex w-full shrink-0 overflow-hidden hover:[--animation-play-state:paused]`}
		>
			{data.length !== 0 && (
				<>
					<MarqueeItems
						data={data}
						className="animate-marquee"
						iconClassName={dark ? "text-secondary-950" : ""}
					/>
					<MarqueeItems
						data={data}
						className="animate-marquee"
						iconClassName={dark ? "text-secondary-950" : ""}
					/>
				</>
			)}
		</header>
	);
};

export default MarketingBanner;

interface MarqueeItemsProps {
	className?: string;
	paused?: boolean;
	data: marqueeItemModel[];
	iconClassName?: string;
}

const MarqueeItems: FC<MarqueeItemsProps> = ({ className = "", data }) => {
	return (
		<div
			className={`flex w-screen min-w-max shrink-0 gap-7 pl-7 ${className} animation-play-state`}
		>
			{data.map((marqueeItem, index) => (
				<div key={index} className="flex items-center gap-7 py-2.5">
					<ThunderIcon />
					<div className="text-xl font-bold">{marqueeItem.reactNode}</div>
				</div>
			))}
		</div>
	);
};
