"use client";
import MarketingBanners from "@/app/staticData/marketingBanners";
import { useState, type FC, useEffect, useCallback, useRef } from "react";

interface MarketingBannerProps {}

const MarketingBanner: FC<MarketingBannerProps> = ({}) => {
	const marketingBannerRef = useRef<HTMLElement>(null);
	const [paused, setPaused] = useState<boolean>(false);

	const pause = useCallback(() => {
		setPaused(true);
	}, []);
	const play = useCallback(() => {
		setPaused(false);
	}, []);

	const handleScroll = useCallback(() => {
		pause();
		const scrollY = window.scrollY || window.pageYOffset;
		if (scrollY === 0) play();
	}, [pause, play]);

	useEffect(() => {
		const marketingBanner = marketingBannerRef.current;
		addEventListener("scroll", handleScroll);
		marketingBanner?.addEventListener("mousemove", pause);
		marketingBanner?.addEventListener("mouseleave", play);
		return () => {
			removeEventListener("scroll", handleScroll);
			marketingBanner?.removeEventListener("mousemove", pause);
			marketingBanner?.removeEventListener("mouseleave", play);
		};
	}, [play, pause, handleScroll]);

	return (
		<header
			ref={marketingBannerRef}
			className="bg-primary flex w-full overflow-hidden"
		>
			{MarketingBanners.length !== 0 && (
				<>
					<MarketingBannerItems className="animate-marquee" paused={paused} />
					<MarketingBannerItems
						className="animate-marquee-after"
						paused={paused}
					/>
				</>
			)}
		</header>
	);
};

export default MarketingBanner;

interface MarketingBannerItemsProps {
	className?: string;
	paused?: boolean;
}

const MarketingBannerItems: FC<MarketingBannerItemsProps> = ({
	className = "",
	paused,
}) => {
	return (
		<div
			className={`gap-5 py-2 pl-5 flex min-w-max w-screen shrink-0 ${className} ${
				paused && "animation-play-state-paused"
			}`}
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
// https://stackoverflow.com/questions/70785150/css-scroll-snap-choppy-laggy-on-chrome-desktop
