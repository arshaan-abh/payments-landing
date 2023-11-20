"use client";
import type { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
	children?: ReactNode;
	white?: boolean;
	clickHandler?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ children, white, clickHandler }) => {
	const variableClassNames = white
		? "text-primary bg-white"
		: "text-white bg-primary";
	return (
		<button
			onClick={clickHandler}
			className={`${variableClassNames} py-3 px-8 rounded-md text-base font-bold font-lato whitespace-nowrap`}
		>
			{children}
		</button>
	);
};

export default Button;
