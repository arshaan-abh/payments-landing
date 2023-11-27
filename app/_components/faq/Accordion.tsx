"use client";
import { FC, ReactNode, useCallback, useRef, useState } from "react";
import { PlaneMinusIcon, PlanePlusIcon } from "../icons";

interface AccordionProps {
	title: string;
	children: ReactNode;
}

const Accordion: FC<AccordionProps> = ({ title, children }) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const childrenRef = useRef<HTMLDivElement>(null);
	let [open, setOpen] = useState<boolean>(false);

	const clickHandler = useCallback(() => {
		setOpen((prev) => !prev);
	}, []);

	const variableClassNames = open ? "pb-6 h-auto" : "pb-0 h-0";

	return (
		<div className="border-b-2 border-primary">
			<button
				className="flex w-full items-center justify-between gap-4 py-6"
				ref={buttonRef}
				onClick={clickHandler}
			>
				<h4 className="text-3xl font-semibold text-primary">{title}</h4>
				{open ? (
					<PlaneMinusIcon className="shrink-0 text-primary" />
				) : (
					<PlanePlusIcon className="shrink-0 text-primary" />
				)}
			</button>
			<div
				ref={childrenRef}
				className={`overflow-hidden ${variableClassNames}`}
			>
				{children}
			</div>
		</div>
	);
};

export default Accordion;

// TODO add animation
