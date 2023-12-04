import { RefObject, useCallback, useEffect, useState } from "react";

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
		requestAnimationFrame(handleScroll);
	}, [elementRefs]);

	useEffect(() => {
		requestAnimationFrame(handleScroll);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return topValues;
};

export default useIntersectionObserver;
