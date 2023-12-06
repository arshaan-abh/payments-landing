import useRefs from "@/app/_hooks/use-refs";
import {
	useState,
	type ReactNode,
	useCallback,
	useRef,
	useEffect,
	RefObject,
} from "react";

interface useSliderProps {
	children: ReactNode[];
	visibleSlidesNumber: number;
	gapInRem: number;
	dynamicHeight?: boolean;
}

const useSlider = ({
	children,
	gapInRem,
	visibleSlidesNumber,
}: useSliderProps): [
	ReactNode,
	RefObject<HTMLButtonElement>,
	RefObject<HTMLButtonElement>,
	number,
] => {
	const [index, setIndex] = useState<number>(1);
	const prevButtonRef = useRef<HTMLButtonElement>(null);
	const nextButtonRef = useRef<HTMLButtonElement>(null);
	const [height, setHeight] = useState<number>(0);
	const heightRef = useRefs<HTMLDivElement | null>({
		length: children.length,
		initialValue: null,
	});

	const heightHandler = useCallback(() => {
		const heightRefElement = heightRef[index - 1].current;
		setHeight(heightRefElement?.clientHeight ?? 0);
	}, [heightRef, index]);

	const prevHandler = useCallback(() => {
		setIndex((prevIndex) => prevIndex - 1);
	}, []);

	const nextHandler = useCallback(() => {
		setIndex((prevIndex) => prevIndex + 1);
	}, []);

	useEffect(() => {
		setIndex((currentState) =>
			Math.min(currentState, Math.ceil(children.length / visibleSlidesNumber))
		);

		heightHandler();

		const prevButton = prevButtonRef.current;
		const nextButton = nextButtonRef.current;

		if (prevButton)
			if (index === 1) prevButton.disabled = true;
			else prevButton.disabled = false;
		if (nextButton)
			if (index === Math.ceil(children.length / visibleSlidesNumber))
				nextButton.disabled = true;
			else nextButton.disabled = false;

		prevButton?.addEventListener("click", prevHandler);
		nextButton?.addEventListener("click", nextHandler);
		return () => {
			prevButton?.removeEventListener("click", prevHandler);
			nextButton?.removeEventListener("click", nextHandler);
		};
	}, [
		children,
		heightHandler,
		index,
		nextHandler,
		prevHandler,
		visibleSlidesNumber,
	]);

	return [
		<div className="overflow-hidden" key="slider">
			<div
				className="flex flex-nowrap transition-all"
				style={{
					height: `${height}px`,
					transform: `translateX(calc(-100% * ${index - 1}))`,
				}}
			>
				{Array.from(
					Array(Math.ceil(children.length / visibleSlidesNumber)),
					(_, indexI) => (
						<div
							key={indexI}
							ref={heightRef[indexI]}
							className="flex h-min shrink-0 basis-full"
							style={{
								gap: `${gapInRem}rem`,
							}}
						>
							{Array.from(
								Array(visibleSlidesNumber),
								(_, indexJ) =>
									children[indexI * visibleSlidesNumber + indexJ] && (
										<div className="grow basis-0" key={`${indexI} ${indexJ}`}>
											{children[indexI * visibleSlidesNumber + indexJ]}
										</div>
									)
							)}
						</div>
					)
				)}
			</div>
		</div>,
		prevButtonRef,
		nextButtonRef,
		index,
	];
};

export default useSlider;
