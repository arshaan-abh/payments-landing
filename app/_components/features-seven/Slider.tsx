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
	const containerRef = useRef<HTMLDivElement>(null);
	const [pointerSlide, setPointerSlide] = useState(0);
	const latestLocationX = useRef<number | null>(null);
	const [isDragging, setIsDragging] = useState(false);
	const canSlideRight = useRef(false);
	const canSlideLeft = useRef(false);

	const heightHandler = useCallback(() => {
		// TODO observe height
		const heightRefElement = heightRef[index - 1].current;
		setHeight(heightRefElement?.clientHeight ?? 0);
	}, [heightRef, index]);

	const prevHandler = useCallback(() => {
		setIndex((prevIndex) => prevIndex - 1);
	}, []);

	const nextHandler = useCallback(() => {
		setIndex((prevIndex) => prevIndex + 1);
	}, []);

	const pointerHandler = useCallback(
		(event: PointerEvent) => {
			if (isDragging && latestLocationX.current)
				setPointerSlide(event.clientX - latestLocationX.current);
		},
		[isDragging]
	);

	const pointerDownHandler = useCallback((event: PointerEvent) => {
		latestLocationX.current = event.clientX;
		setIsDragging(true);
	}, []);

	const pointerUpHandler = useCallback(
		(event: PointerEvent) => {
			setIsDragging(false);
			if (latestLocationX.current) {
				const value = event.clientX - latestLocationX.current;
				latestLocationX.current = null;
				if (value > 64 && canSlideLeft.current) {
					prevHandler();
				} else if (value < -64 && canSlideRight.current) {
					nextHandler();
				}
				setPointerSlide(0);
			}
		},
		[nextHandler, prevHandler]
	);

	useEffect(() => {
		const containerElement = containerRef.current;
		if (containerElement) {
			addEventListener("pointermove", pointerHandler);
			containerElement.addEventListener("pointerdown", pointerDownHandler);
			addEventListener("pointerup", pointerUpHandler);
		}

		setIndex((currentState) =>
			Math.min(currentState, Math.ceil(children.length / visibleSlidesNumber))
		);

		heightHandler();

		const prevButton = prevButtonRef.current;
		const nextButton = nextButtonRef.current;

		if (index === 1) {
			if (prevButton) prevButton.disabled = true;
			canSlideLeft.current = false;
		} else {
			if (prevButton) prevButton.disabled = false;
			canSlideLeft.current = true;
		}
		if (index === Math.ceil(children.length / visibleSlidesNumber)) {
			if (nextButton) nextButton.disabled = true;
			canSlideRight.current = false;
		} else {
			if (nextButton) nextButton.disabled = false;
			canSlideRight.current = true;
		}

		prevButton?.addEventListener("click", prevHandler);
		nextButton?.addEventListener("click", nextHandler);
		return () => {
			if (containerElement) {
				removeEventListener("pointermove", pointerHandler);
				containerElement.removeEventListener("pointerdown", pointerDownHandler);
				removeEventListener("pointerup", pointerUpHandler);
			}
			prevButton?.removeEventListener("click", prevHandler);
			nextButton?.removeEventListener("click", nextHandler);
		};
	}, [
		children.length,
		heightHandler,
		index,
		nextHandler,
		pointerDownHandler,
		pointerHandler,
		pointerUpHandler,
		prevHandler,
		visibleSlidesNumber,
	]);

	return [
		<div
			className="slider select-none overflow-hidden"
			key="slider"
			ref={containerRef}
		>
			<div
				className={`flex flex-nowrap ${!isDragging && "transition-all"}`}
				style={{
					height: `${height}px`,
					transform: `translateX(calc(-100% * ${
						index - 1
					} + ${pointerSlide}px))`,
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
