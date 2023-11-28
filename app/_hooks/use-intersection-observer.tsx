import { RefObject, useCallback, useEffect, useState } from "react";

interface useIntersectionObserverProps<T> {
	elementRef: RefObject<T>;
}

export default function useIntersectionObserver<T>({
	elementRef,
}: useIntersectionObserverProps<T>) {
	const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

	const callback = useCallback(([entries]: IntersectionObserverEntry[]) => {
		setIsIntersecting(entries.isIntersecting);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(callback, {
			threshold: 1.0,
		});
		observer.observe(elementRef.current as Element);
		return () => observer.disconnect();
	}, [callback, elementRef]);

	return isIntersecting;
}
