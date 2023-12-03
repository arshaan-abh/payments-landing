"use client";
import {
	useState,
	type FC,
	useEffect,
	useCallback,
	useRef,
	ReactNode,
} from "react";
import { ThunderIcon } from "../icons";

export interface marqueeItemData {
	body: ReactNode;
}

interface MarketingBannerProps {
	white?: boolean;
	data: marqueeItemData[];
}

const MarketingBanner: FC<MarketingBannerProps> = ({ white, data }) => {
	const marqueeRef = useRef<HTMLElement>(null);
	const [paused, setPaused] = useState<boolean>(false);

	const pause = useCallback(() => {
		setPaused(true);
	}, []);
	const play = useCallback(() => {
		setPaused(false);
	}, []);

	const handleScroll = useCallback(() => {
		pause();
		let scrollY = marqueeRef.current?.getBoundingClientRect().top;
		if (scrollY === 0) play();
	}, [pause, play]);

	useEffect(() => {
		const marquee = marqueeRef.current;
		// addEventListener("scroll", handleScroll);
		marquee?.addEventListener("mousemove", pause);
		marquee?.addEventListener("mouseleave", play);
		return () => {
			// removeEventListener("scroll", handleScroll);
			marquee?.removeEventListener("mousemove", pause);
			marquee?.removeEventListener("mouseleave", play);
		};
	}, [play, pause, handleScroll]);

	const variableClassNames = white
		? "bg-white text-primary font-semibold border-y-2 border-primary h-16"
		: "bg-primary text-white font-light h-12";

	return (
		<header
			ref={marqueeRef}
			className={`${variableClassNames} flex w-full shrink-0 overflow-hidden`}
		>
			{data.length !== 0 && (
				<>
					<MarqueeItems
						data={data}
						className="animate-marquee"
						paused={paused}
					/>
					<MarqueeItems
						data={data}
						className="animate-marquee-after"
						paused={paused}
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
	data: marqueeItemData[];
}

const MarqueeItems: FC<MarqueeItemsProps> = ({
	className = "",
	paused,
	data,
}) => {
	return (
		<div
			className={`flex w-screen min-w-max shrink-0 gap-5 pl-5 ${className} ${
				paused && "animation-play-state-paused"
			}`}
		>
			{data.map((marqueeItem, index) => (
				<div key={index} className="flex items-center gap-5 py-2.5">
					<ThunderIcon className="text-secondary" />
					<div className="text-xl font-bold">{marqueeItem.body}</div>
				</div>
			))}
		</div>
	);
};

// TODO better performance
// https://stackoverflow.com/a/77431729/21186859
