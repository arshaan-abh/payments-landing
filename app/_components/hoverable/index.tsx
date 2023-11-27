"use client";
import {
	useRef,
	type FC,
	type ReactNode,
	useEffect,
	useState,
	useCallback,
	CSSProperties,
} from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface HoverableProps {
	children: ReactNode;
	round?: boolean;
	className?: string;
	style?: CSSProperties;
}

const Hoverable: FC<HoverableProps> = ({
	children,
	round,
	className = "",
	style,
}) => {
	return (
		<div
			className={`relative hover:[--border:50%] hover:[--rounded:0] ${className}`}
		>
			<div
				className={`overflow-hidden transition-all duration-300 ${className}`}
				style={{
					borderRadius: round ? "var(--rounded, 2.5rem)" : "0",
					...style,
				}}
			>
				{children}
			</div>
			<div
				className="absolute right-0 top-0 h-0.5 bg-gray-600 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute right-0 top-0 w-0.5 bg-gray-600 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>

			<div
				className="absolute bottom-0 right-0 h-0.5 bg-gray-600 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute bottom-0 right-0 w-0.5 bg-gray-600 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>

			<div
				className="absolute bottom-0 left-0 h-0.5 bg-gray-600 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute bottom-0 left-0 w-0.5 bg-gray-600 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>

			<div
				className="absolute left-0 top-0 h-0.5 bg-gray-600 transition-all duration-300"
				style={{ width: "var(--border, 0.5rem)" }}
			/>
			<div
				className="absolute left-0 top-0 w-0.5 bg-gray-600 transition-all duration-300"
				style={{ height: "var(--border, 0.5rem)" }}
			/>
		</div>
	);
};

export default Hoverable;

interface HoverableImageProps {
	src: StaticImport;
	alt: string;
	className?: string;
	round?: boolean;
	locate?: boolean;
}

export const HoverableImage: FC<HoverableImageProps> = ({
	alt,
	src,
	className = "",
	round,
	locate,
}) => {
	const imageRef = useRef<HTMLImageElement>(null);
	const [width, setWidth] = useState<number>(0);
	const [height, setHeight] = useState<number>(0);
	const [left, setLeft] = useState<number>(0);

	const setSize = useCallback(() => {
		setWidth(imageRef.current?.clientWidth ?? 0);
		setHeight(imageRef.current?.clientHeight ?? 0);
		setLeft(imageRef.current?.getBoundingClientRect().left ?? 0);
	}, []);

	useEffect(() => {
		setSize();
		new ResizeObserver(setSize).observe(imageRef.current as Element);
		addEventListener("resize", setSize);
		return () => removeEventListener("resize", setSize);
	}, [setSize]);

	const variableClassNames = round
		? "rounded-[2.5rem] peer-hover:rounded-none transition-all"
		: "";

	return (
		<>
			<div
				className="peer absolute hover:[--border:50%] hover:[--rounded:0] active:pointer-events-none"
				style={{ width: width, height: height, left: locate ? left : "auto" }}
			>
				<div
					className="absolute right-0 top-0 h-0.5 bg-gray-600 transition-all duration-300"
					style={{ width: "var(--border, 0.5rem)" }}
				/>
				<div
					className="absolute right-0 top-0 w-0.5 bg-gray-600 transition-all duration-300"
					style={{ height: "var(--border, 0.5rem)" }}
				/>

				<div
					className="absolute bottom-0 right-0 h-0.5 bg-gray-600 transition-all duration-300"
					style={{ width: "var(--border, 0.5rem)" }}
				/>
				<div
					className="absolute bottom-0 right-0 w-0.5 bg-gray-600 transition-all duration-300"
					style={{ height: "var(--border, 0.5rem)" }}
				/>

				<div
					className="absolute bottom-0 left-0 h-0.5 bg-gray-600 transition-all duration-300"
					style={{ width: "var(--border, 0.5rem)" }}
				/>
				<div
					className="absolute bottom-0 left-0 w-0.5 bg-gray-600 transition-all duration-300"
					style={{ height: "var(--border, 0.5rem)" }}
				/>

				<div
					className="absolute left-0 top-0 h-0.5 bg-gray-600 transition-all duration-300"
					style={{ width: "var(--border, 0.5rem)" }}
				/>
				<div
					className="absolute left-0 top-0 w-0.5 bg-gray-600 transition-all duration-300"
					style={{ height: "var(--border, 0.5rem)" }}
				/>
			</div>
			<Image
				src={src}
				alt={alt}
				className={`${variableClassNames} ${className}`}
				ref={imageRef}
			/>
		</>
	);
};
