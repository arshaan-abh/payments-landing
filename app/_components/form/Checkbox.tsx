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
				className={`flex w-full items-center gap-2.5 rounded-md border-2 p-2.5 text-base font-semibold text-secondary-950 ${
					checked ? "border-secondary-950" : "border-gray-100"
				}`}
			>
				<div
					className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full ${
						checked ? "bg-secondary-950" : "bg-gray-500"
					}`}
				>
					{checked && <PlaneCheckIcon className="text-primary-950" />}
				</div>
				{children}
			</div>
		</label>
	);
};

export default Checkbox;
