import type { FC, ReactNode } from "react";

interface HoverableProps {
	children: ReactNode;
	round?: boolean;
	className?: string;
}

const Hoverable: FC<HoverableProps> = ({ children, round, className = "" }) => {
	return (
		<div
			className={`relative hover:[--border:50%] hover:[--rounded:0] ${className}`}
		>
			<div
				className={`transition-all duration-300 overflow-hidden ${className}`}
				style={{ borderRadius: round ? "var(--rounded, 2.5rem)" : "0" }}
			>
				{children}
			</div>
			<div
				className="bg-gray-600 h-0.5 absolute top-0 right-0 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="bg-gray-600 w-0.5 absolute top-0 right-0 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>

			<div
				className="bg-gray-600 h-0.5 absolute bottom-0 right-0 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="bg-gray-600 w-0.5 absolute bottom-0 right-0 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>

			<div
				className="bg-gray-600 h-0.5 absolute bottom-0 left-0 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="bg-gray-600 w-0.5 absolute bottom-0 left-0 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>

			<div
				className="bg-gray-600 h-0.5 absolute top-0 left-0 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="bg-gray-600 w-0.5 absolute top-0 left-0 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>
		</div>
	);
};

export default Hoverable;
