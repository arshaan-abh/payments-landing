import { RefObject, useCallback, useEffect, useState, useMemo } from "react";

interface UseIntersectionObserverProps<T> {
	elementRefs: RefObject<T>[];
}

const useIntersectionObserver = <T,>({
	elementRefs,
}: UseIntersectionObserverProps<T>) => {
	const [topValues, setTopValues] = useState<number[]>(
		Array(elementRefs.length).fill(0)
	);

	const handleScroll = useCallback(() => {
		requestAnimationFrame(() => {
			const newTopValues = elementRefs.map((elementRef) => {
				const boundingBox = (
					elementRef.current as HTMLElement
				).getBoundingClientRect();
				const top = boundingBox ? boundingBox.top : 0;
				return Math.min(Math.max(1 - top / window.innerHeight, 0), 1);
			});
			if (elementRefs.every((ref) => ref.current)) {
				setTopValues(newTopValues);
			}
		});
	}, [elementRefs]);

	const debounceDelay = 16;
	const debouncedHandleScroll = useMemo(
		() => debounce(handleScroll, debounceDelay),
		[handleScroll]
	);

	useEffect(() => {
		handleScroll();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", debouncedHandleScroll);
		return () => {
			window.removeEventListener("scroll", debouncedHandleScroll);
		};
	}, [debouncedHandleScroll]);

	return topValues;
};

const debounce = <T extends (...args: any[]) => void>(
	func: T,
	delay: number
) => {
	let timeoutId: number;
	return (...args: any[]) => {
		clearTimeout(timeoutId);
		timeoutId = window.setTimeout(() => {
			func(...args);
		}, delay);
	};
};

export default useIntersectionObserver;
