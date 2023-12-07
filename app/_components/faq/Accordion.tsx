import React, {
	FC,
	ReactNode,
	useCallback,
	useRef,
	useState,
	useEffect,
	MouseEventHandler,
} from "react";
import { PlaneMinusIcon, PlanePlusIcon } from "../icons";

interface AccordionProps {
	title: string;
	children: ReactNode;
	open: boolean;
	onClick: () => void;
}

const Accordion: FC<AccordionProps> = ({ title, children, open, onClick }) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const childrenRef = useRef<HTMLDivElement>(null);
	const [contentHeight, setContentHeight] = useState<number>(0);

	useEffect(() => {
		if (childrenRef.current) {
			setContentHeight(open ? childrenRef.current.scrollHeight : 0);
		}
	}, [open]);

	const clickHandler: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
		onClick();
	}, [onClick]);

	return (
		<div className="border-b-2 border-primary-950">
			<button
				className="flex w-full items-center justify-between gap-5 py-5 pr-5"
				ref={buttonRef}
				onClick={clickHandler}
			>
				<h4 className="text-start text-xl font-semibold text-primary-950">
					{title}
				</h4>
				{open ? (
					<PlaneMinusIcon className="shrink-0 text-primary-950" />
				) : (
					<PlanePlusIcon className="shrink-0 text-primary-950" />
				)}
			</button>
			<div
				className="overflow-hidden text-base font-normal text-gray-600 transition-all"
				ref={childrenRef}
				style={{
					height: open ? `calc(${contentHeight}px + 1.25rem)` : 0,
					...(open && { transitionDelay: "0.15s" }),
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Accordion;
