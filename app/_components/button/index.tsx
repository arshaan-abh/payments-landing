import type { FC, ReactNode } from "react";

interface ButtonProps {
	children?: ReactNode;
	white?: boolean;
}

const Button: FC<ButtonProps> = ({ children, white }) => {
	const variableClassNames = white
		? "text-primary bg-white"
		: "text-white bg-primary";
	return (
		<button
			className={`${variableClassNames} py-3 px-8 rounded-md text-base font-bold font-lato`}
		>
			{children}
		</button>
	);
};

export default Button;
