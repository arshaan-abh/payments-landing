import { useCallback, useEffect, useState } from "react";

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
		let set: boolean = false;
		for (let i = 0; i < breakpoints.length; i++) {
			if (window.innerWidth >= breakpoints[i].breakpoint) {
				setState(breakpoints[i].state);
				set = true;
			}
		}
		if (!set) setState(defaultState);
	}, [breakpoints, defaultState]);

	useEffect(() => {
		resizeHandler();
		addEventListener("resize", resizeHandler);
		return () => removeEventListener("resize", resizeHandler);
	}, [resizeHandler]);

	return state;
};

export default useResponsiveState;

// TODO enhance performance
