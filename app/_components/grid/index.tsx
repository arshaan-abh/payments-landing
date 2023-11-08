import type { FC } from "react";
import PlusIcon from "../plus-icon";

interface GridProps {}

const Grid: FC<GridProps> = ({}) => {
	const x = 12;
	const y = 6;
	return (
		<div className="flex flex-col justify-evenly w-full h-full">
			{Array.from(Array(y), (_, yIndex) => (
				<div key={yIndex} className="flex justify-between">
					{Array.from(Array(x), (_, xIndex) => (
						<PlusIcon
							key={`${yIndex} ${xIndex}`}
							className="pointer-events-none select-none text-gray-700 opacity-10"
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default Grid;
