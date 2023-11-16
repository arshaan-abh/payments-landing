"use client";
import { useId, type FC, type ReactNode, useState, useCallback } from "react";
import { PlaneCheckIcon } from "../icons";

interface checkboxProps {
	children?: ReactNode;
}

const checkbox: FC<checkboxProps> = ({ children }) => {
	const id = useId();
	const [checked, setChecked] = useState<boolean>(false);

	const checkHandler = useCallback(() => {
		setChecked((state) => !state);
	}, [setChecked]);

	return (
		<label htmlFor={id} className="flex select-none cursor-pointer grow">
			<input
				id={id}
				type="checkbox"
				name={id}
				className="hidden"
				onChange={checkHandler}
			/>
			<div
				className={`text-base font-semibold text-secondary border-2 pr-4 rounded-md p-2.5 flex items-center gap-2.5 w-full ${
					checked ? "border-secondary" : "border-gray-100"
				}`}
			>
				<div
					className={`w-6 h-6 rounded-full flex items-center justify-center ${
						checked ? "bg-secondary" : "bg-gray-500"
					}`}
				>
					{checked && <PlaneCheckIcon className="text-primary" />}
				</div>
				{children}
			</div>
		</label>
	);
};

export default checkbox;
