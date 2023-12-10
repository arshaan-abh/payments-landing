import {
	useRef,
	type FC,
	type ReactNode,
	useEffect,
	useState,
	useCallback,
	CSSProperties,
} from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface HoverableProps {
	children: ReactNode;
	round?: boolean;
	className?: string;
	style?: CSSProperties;
}

const Hoverable: FC<HoverableProps> = ({
	children,
	round,
	className = "",
	style,
}) => {
	return (
		<div
			className={`relative hover:[--border:50%] hover:[--rounded:0] ${className}`}
		>
			<div
				className={`overflow-hidden transition-all duration-300 ${className}`}
				style={{
					borderRadius: round ? "var(--rounded, 2.5rem)" : "0",
					...style,
				}}
			>
				{children}
			</div>
			<div
				className="absolute right-0 top-0 h-0.5 bg-gray-200 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute right-0 top-0 w-0.5 bg-gray-200 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>

			<div
				className="absolute bottom-0 right-0 h-0.5 bg-gray-200 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute bottom-0 right-0 w-0.5 bg-gray-200 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>

			<div
				className="absolute bottom-0 left-0 h-0.5 bg-gray-200 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute bottom-0 left-0 w-0.5 bg-gray-200 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>

			<div
				className="absolute left-0 top-0 h-0.5 bg-gray-200 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute left-0 top-0 w-0.5 bg-gray-200 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>
		</div>
	);
};

export default Hoverable;
