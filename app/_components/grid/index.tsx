"use client";
import type { FC } from "react";
import { PlusIcon } from "../icons";
import useResponsiveState from "../features-one/useResponsiveState";

interface GridProps {
	black?: boolean;
}

const Grid: FC<GridProps> = ({ black }) => {
	const x = useResponsiveState({
		defaultState: 3,
		breakpoints: [
			{ breakpoint: 768, state: 6 },
			{ breakpoint: 1024, state: 12 },
		],
	});
	const y = 6;
	const variableClassNames = black
		? "text-black opacity-10"
		: "text-gray-700 opacity-10";
	return (
		<div className="flex flex-col justify-evenly w-full h-full">
			{Array.from(Array(y), (_, yIndex) => (
				<div key={yIndex} className="flex justify-between">
					{Array.from(Array(x), (_, xIndex) => (
						<PlusIcon
							key={`${yIndex} ${xIndex}`}
							className={`pointer-events-none select-none ${variableClassNames}`}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default Grid;
