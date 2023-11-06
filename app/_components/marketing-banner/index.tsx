import MarketingBanners from "@/app/staticData/marketingBanners";
import type { FC } from "react";

interface MarketingBannerProps {}

const MarketingBanner: FC<MarketingBannerProps> = ({}) => {
	return (
		<header className="bg-primary flex">
			{MarketingBanners.length !== 0 && (
				<>
					<MarketingBannerItems className="animate-marquee" />
					<MarketingBannerItems className="animate-marquee-after" />
				</>
			)}
		</header>
	);
};

export default MarketingBanner;

interface MarketingBannerItemsProps {
	className?: string;
}

const MarketingBannerItems: FC<MarketingBannerItemsProps> = ({
	className = "",
}) => {
	return (
		<div
			className={`gap-5 py-2 pl-5 flex min-w-max w-screen shrink-0 ${className}`}
		>
			{MarketingBanners.map((marketingBanner, index) => (
				<div key={index} className="flex gap-5 items-center">
					<div className="w-3 h-3 shrink-0 border-white border rounded-full"></div>
					<div className="text-white font-light text-xl font-montserrat">
						{marketingBanner}
					</div>
				</div>
			))}
		</div>
	);
};

// TODO better performance
