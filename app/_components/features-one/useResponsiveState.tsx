import { useCallback, useEffect, useMemo, useState } from "react";

interface Breakpoint<T> {
	breakpoint: number;
	state: T;
}

interface useResponsiveStateProps<T> {
	defaultState: T;
	breakpoints: Breakpoint<T>[];
}

const useResponsiveState = <T,>({
	defaultState,
	breakpoints,
}: useResponsiveStateProps<T>) => {
	const [state, setState] = useState<T>(defaultState);

	const resizeHandler = useCallback(() => {
		let set = false;
		for (let i = 0; i < breakpoints.length; i++) {
			if (window.innerWidth >= breakpoints[i].breakpoint) {
				setState(breakpoints[i].state);
				set = "true";
			}
		}
		if (!set) setState(defaultState);
	}, [breakpoints, defaultState]);

	const debouncedResizeHandler = useMemo(() => {
		const delay = 200; // Adjust the delay as needed
		let timeoutId: NodeJS.Timeout;

		return () => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(resizeHandler, delay);
		};
	}, [resizeHandler]);

	useEffect(() => {
		debouncedResizeHandler(); // Initial setup

		window.addEventListener("resize", debouncedResizeHandler);
		return () => {
			window.removeEventListener("resize", debouncedResizeHandler);
		};
	}, [debouncedResizeHandler]);

	return state;
};

export default useResponsiveState;
