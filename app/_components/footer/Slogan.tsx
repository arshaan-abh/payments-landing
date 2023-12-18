import { type FC, type ReactNode } from "react";

interface SloganProps {}

const Slogan: FC<SloganProps> = ({}) => {
	return (
		<div className="flex h-full w-full flex-col justify-start">
			<MarqueeBase>
				<StrokedText className="whitespace-nowrap">
					<h2 className="text-9xl font-extrabold uppercase tracking-widest text-primary-950">
						Grow Sales with better payment solutions&nbsp;
					</h2>
				</StrokedText>
			</MarqueeBase>
			<MarqueeBase reverse small>
				<h3 className="whitespace-nowrap text-5xl font-extrabold uppercase tracking-widest text-primary-900">
					Grow Sales with better payment solutions&nbsp;
				</h3>
			</MarqueeBase>
		</div>
	);
};

export default Slogan;

interface StrokedTextProps {
	children?: ReactNode;
	className?: string;
}

const StrokedText: FC<StrokedTextProps> = ({ children, className = "" }) => {
	return (
		<>
			<div className={`relative ${className}`}>
				<div className="pointer-events-none absolute select-none [-webkit-text-stroke:8px_#0f5251]">
					{children}
				</div>
				<div className="absolute">{children}</div>
			</div>
			<div className={`pointer-events-none select-none opacity-0 ${className}`}>
				{children}
			</div>
		</>
	);
};

interface MarqueeBaseProps {
	children?: ReactNode;
	reverse?: boolean;
	small?: boolean;
}

export const MarqueeBase: FC<MarqueeBaseProps> = ({
	children,
	reverse,
	small,
}) => {
	const child = (
		<div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
			{children}
		</div>
	);

	return (
		<div className="flex flex-nowrap">
			{child}
			{child}
			{small && child}
		</div>
	);
};
