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
			<div className={`absolute z-0 inset-0 ${underClassName}`}>
				{underLayer}
			</div>
			<div className={`relative z-10 ${className}`}>{children}</div>
			<div
				className={`absolute z-20 inset-0 pointer-events-none ${overClassName}`}
			>
				{overLayer}
			</div>
		</div>
	);
};

export default Stack;
