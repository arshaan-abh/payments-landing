"use client";
import { useId, type FC, type ReactNode, useState, useCallback } from "react";
import { PlaneCheckIcon } from "../icons";

interface checkboxProps {
	children?: ReactNode;
	checkHandler: () => void;
}

const Checkbox: FC<checkboxProps> = ({ children, checkHandler }) => {
	const id = useId();
	const [checked, setChecked] = useState<boolean>(false);

	const handler = useCallback(() => {
		setChecked((state) => !state);
		checkHandler();
	}, [setChecked, checkHandler]);

	return (
		<label htmlFor={id} className="flex grow cursor-pointer select-none">
			<input
				id={id}
				type="checkbox"
				name={id}
				className="hidden"
				onChange={handler}
			/>
			<div
				className={`flex w-full items-center gap-2.5 rounded-md border-2 p-2.5 text-sm font-medium ${
					checked
						? "border-secondary-300 bg-secondary-300 text-primary-950"
						: "border-primary-800 text-white"
				}`}
			>
				<div
					className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full ${
						checked ? "bg-secondary-900" : "bg-primary-800"
					}`}
				>
					{checked && <PlaneCheckIcon className="text-secondary-300" />}
				</div>
				{children}
			</div>
		</label>
	);
};

export default Checkbox;
