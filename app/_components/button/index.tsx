"use client";
import type { FC, MouseEventHandler, ReactNode, RefObject } from "react";

interface ButtonProps {
	customRef?: RefObject<HTMLButtonElement>;
	children?: ReactNode;
	white?: boolean;
	clickHandler?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
	children,
	white,
	clickHandler,
	customRef,
}) => {
	const variableClassNames = white
		? "text-primary bg-white"
		: "text-white bg-primary";
	return (
		<button
			ref={customRef}
			onClick={clickHandler}
			className={`${variableClassNames} py-3 px-8 rounded-md text-base font-bold whitespace-nowrap`}
		>
			{children}
		</button>
	);
};

export default Button;
