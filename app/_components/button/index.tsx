"use client";
import type { FC, MouseEventHandler, ReactNode, RefObject } from "react";

interface ButtonProps {
	customRef?: RefObject<HTMLButtonElement>;
	children?: ReactNode;
	white?: boolean;
	clickHandler?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
}

const Button: FC<ButtonProps> = ({
	children,
	white,
	clickHandler,
	customRef,
	className = "",
}) => {
	const variableClassNames = white
		? "text-primary bg-white"
		: "text-white bg-primary";
	return (
		<button
			ref={customRef}
			onClick={clickHandler}
			className={`${variableClassNames} whitespace-nowrap rounded-md px-8 py-3 text-base font-bold ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
