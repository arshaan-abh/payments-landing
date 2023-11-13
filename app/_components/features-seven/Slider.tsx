import {
	useState,
	type ReactNode,
	useCallback,
	useRef,
	useEffect,
	RefObject,
} from "react";

const useSlider = (
	children: ReactNode[],
	visibleSlidesNumber: number,
	gapInRem: number
): [ReactNode, RefObject<HTMLButtonElement>, RefObject<HTMLButtonElement>] => {
	const [index, setIndex] = useState<number>(0);
	const prevButtonRef = useRef<HTMLButtonElement>(null);
	const nextButtonRef = useRef<HTMLButtonElement>(null);

	const prevHandler = useCallback(() => {
		setIndex((prevIndex) => prevIndex - 1);
	}, []);

	const nextHandler = useCallback(() => {
		setIndex((prevIndex) => prevIndex + 1);
	}, []);

	useEffect(() => {
		const prevButton = prevButtonRef.current;
		const nextButton = nextButtonRef.current;

		if (prevButton)
			if (index === 0) prevButton.disabled = true;
			else prevButton.disabled = false;
		if (nextButton)
			if (index === Math.floor(children.length / visibleSlidesNumber))
				nextButton.disabled = true;
			else nextButton.disabled = false;

		prevButton?.addEventListener("click", prevHandler);
		nextButton?.addEventListener("click", nextHandler);
		return () => {
			prevButton?.removeEventListener("click", prevHandler);
			nextButton?.removeEventListener("click", nextHandler);
		};
	}, [children, index, nextHandler, prevHandler, visibleSlidesNumber]);

	return [
		<div key="slider" className="overflow-hidden">
			<div
				className="flex w-fit transition-transform"
				style={{
					transform: `translateX(calc(-100% * ${index}))`,
					gap: `${gapInRem}rem`,
				}}
			>
				{children.map((child, index) => (
					<div
						className="shrink-0"
						key={index}
						style={{
							flexBasis: `calc((100% / ${visibleSlidesNumber} - ${gapInRem}rem))`,
						}}
					>
						{child}
					</div>
				))}
			</div>
		</div>,
		prevButtonRef,
		nextButtonRef,
	];
};

export default useSlider;
