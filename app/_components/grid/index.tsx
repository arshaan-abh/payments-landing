"use client";
import type { FC } from "react";
import useResponsiveState from "../features-one/useResponsiveState";

interface GridProps {
	black?: boolean;
}

const Grid: FC<GridProps> = ({ black }) => {
	const x = useResponsiveState({
		defaultState: 3,
		breakpoints: [
			{ breakpoint: 376, state: 5 },
			{ breakpoint: 768, state: 8 },
			{ breakpoint: 1024, state: 12 },
		],
	});
	const y = 6;
	const variableClassNames = black ? "" : "opacity-10";
	return (
		<div className="pointer-events-none flex h-full w-full select-none flex-col justify-evenly">
			{Array.from(Array(y), (_, yIndex) => (
				<div key={yIndex} className="flex justify-between">
					{Array.from(Array(x), (_, xIndex) => (
						<span
							key={`${yIndex} ${xIndex}`}
							className={`text-base font-normal text-[#e6e6e6] ${variableClassNames}`}
						>
							+
						</span>
					))}
				</div>
			))}
		</div>
	);
};

export default Grid;
