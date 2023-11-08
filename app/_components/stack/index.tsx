import type { FC, ReactNode } from "react";

interface StackProps {
	children?: ReactNode;
	underLayer?: ReactNode;
	overLayer?: ReactNode;
	className?: string;
}

const Stack: FC<StackProps> = ({
	children,
	overLayer,
	underLayer,
	className = "",
}) => {
	return (
		<div className="relative">
			<div className="absolute z-0 inset-0">{underLayer}</div>
			<div className={`relative z-10 ${className}`}>{children}</div>
			<div className="absolute z-20 inset-0 pointer-events-none">
				{overLayer}
			</div>
		</div>
	);
};

export default Stack;
