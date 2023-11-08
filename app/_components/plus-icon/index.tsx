import { FC } from "react";

interface PlusIconProps {
	className?: string;
}

const PlusIcon: FC<PlusIconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24"
			width="24"
			className={className}
			fill="currentColor"
		>
			<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
		</svg>
	);
};

export default PlusIcon;
