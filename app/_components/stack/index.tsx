import type { FC, ReactNode } from "react";

interface StackProps {
	children?: ReactNode;
	underLayer?: ReactNode;
	overLayer?: ReactNode;
	className?: string;
	containerClassName?: string;
	overClassName?: string;
	underClassName?: string;
}

const Stack: FC<StackProps> = ({
	children,
	overLayer,
	underLayer,
	overClassName = "",
	underClassName = "",
	className = "",
	containerClassName = "",
}) => {
	return (
		<div className={`relative ${containerClassName}`}>
			<div className={`absolute inset-0 z-0 ${underClassName}`}>
				{underLayer}
			</div>
			<div className={`relative z-10 ${className}`}>{children}</div>
			<div
				className={`pointer-events-none absolute inset-0 z-20 ${overClassName}`}
			>
				{overLayer}
			</div>
		</div>
	);
};

export default Stack;
