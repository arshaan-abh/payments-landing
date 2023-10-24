"use client";
import React, { ReactNode, useEffect, useRef } from "react";

import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	MotionValue,
} from "framer-motion";

interface SectionObserverProps {
	children: ReactNode;
}
function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

const SectionObserver: React.FC<SectionObserverProps> = ({ children }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 300);
	return (
		<section>
			<div ref={ref}>{children}</div>
		</section>
	);
};

export default SectionObserver;
