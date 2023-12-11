import { ResponsiveContext } from "@/app/_contexts/contexts";
import { useContext, type FC } from "react";

interface GridProps {
	black?: boolean;
}

const Grid: FC<GridProps> = ({ black }) => {
	const responsiveContext = useContext(ResponsiveContext);

	const x =
		responsiveContext === "lg" || responsiveContext === "xl"
			? 12
			: responsiveContext === "md"
			? 8
			: 5;
	const y = 6;
	const variableClassNames = black ? "" : "opacity-10";
	return (
		<div className="pointer-events-none absolute inset-0 top-[9.0625rem] flex h-full w-full select-none flex-col justify-evenly px-10 sm:fixed lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
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
