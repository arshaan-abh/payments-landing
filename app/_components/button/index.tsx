"use client";
import type { FC, MouseEventHandler, ReactNode, RefObject } from "react";

interface ButtonProps {
	customRef?: RefObject<HTMLButtonElement>;
	children?: ReactNode;
	dark?: boolean;
	clickHandler?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
	long?: boolean;
}

const Button: FC<ButtonProps> = ({
	children,
	dark,
	clickHandler,
	customRef,
	className = "",
	long,
}) => {
	const darkClassNames = dark
		? "text-secondary-300 bg-primary-950"
		: "text-primary-950 bg-secondary-300";
	const longClassNames = long ? "px-16" : "px-8";
	return (
		<button
			ref={customRef}
			onClick={clickHandler}
			className={`${darkClassNames} ${longClassNames} whitespace-nowrap rounded-md py-3 text-base font-bold ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
