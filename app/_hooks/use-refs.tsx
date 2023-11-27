import { useRef, MutableRefObject } from "react";

interface useRefsProps<T> {
	length: number;
	initialValue: T;
}

function useRefs<T = unknown>({
	length,
	initialValue,
}: useRefsProps<T>): MutableRefObject<T>[] {
	const useSingleRef = () => useRef<T>(initialValue);
	return Array.from({ length }, useSingleRef);
}

export default useRefs;
