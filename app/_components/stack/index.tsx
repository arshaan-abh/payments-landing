import type { FC, ReactNode } from "react";

interface StackProps {
	children?: ReactNode;
	underLayer?: ReactNode;
	overLayer?: ReactNode;
}

const Stack: FC<StackProps> = ({ children, overLayer, underLayer }) => {
	return (
		<div className="relative">
			<div className="absolute z-0 inset-0">{underLayer}</div>
			{children}
			<div className="absolute z-10 inset-0 pointer-events-none">
				{overLayer}
			</div>
		</div>
	);
};

export default Stack;
