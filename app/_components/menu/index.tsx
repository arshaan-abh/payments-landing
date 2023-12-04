"use client";
import {
	useState,
	type FC,
	type ReactNode,
	useCallback,
	useEffect,
	useRef,
	MouseEventHandler,
	CSSProperties,
	useContext,
} from "react";
import {
	CallUsIcon,
	EnquireIcon,
	LinkedinIcon,
	HamburgerMenu,
	TwitterIcon,
} from "../icons";
import { IsIntersectingContext } from "@/app/_contexts/contexts";
import interpolateColors from "@/app/_utilities/interpolate-colors";

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
	const detailRef = useRef<HTMLDivElement>(null);
	const maxWidthRef = useRef<number | null>(null);
	const [open, setOpen] = useState<boolean>(true); // need to get the max width at first, so it's open initially
	const [delayedStyle, setDelayedStyle] = useState<CSSProperties>({
		zIndex: -20,
	});

	const openDetail = useCallback(
		(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			setOpen(true);
			setDelayedStyle({ zIndex: 20 });
			event.stopPropagation();
		},
		[]
	);

	const closeDetail = useCallback(() => {
		setOpen(false);
		setDelayedStyle({ zIndex: -20 });
	}, []);

	const transitionEndHandler = useCallback(() => {
		if (!open) setDelayedStyle({ zIndex: -20 });
	}, [open]);

	useEffect(() => {
		maxWidthRef.current = detailRef.current?.getBoundingClientRect().width ?? 0;
	}, []);

	useEffect(() => {
		const detailElement = detailRef.current;

		addEventListener("click", closeDetail, false);
		detailElement?.addEventListener(
			"click",
			function (event) {
				event.stopPropagation();
			},
			false
		);

		closeDetail();

		return () => {
			removeEventListener("click", closeDetail, false);
			detailElement?.removeEventListener(
				"click",
				function (event) {
					event.stopPropagation();
				},
				false
			);
		};
	}, [closeDetail]);

	return (
		<>
			<div
				className="fixed inset-x-0 bottom-12 z-10 mx-auto flex w-fit items-center justify-center gap-2.5 transition-opacity duration-300"
				style={{ opacity: open ? 0 : 1 }}
			>
				<MenuItem>
					<EnquireIcon />
				</MenuItem>
				<MenuItem>
					<CallUsIcon />
				</MenuItem>
				<MenuItem primary onClick={openDetail}>
					<HamburgerMenu />
				</MenuItem>
				<MenuItem>
					<LinkedinIcon />
				</MenuItem>
				<MenuItem>
					<TwitterIcon />
				</MenuItem>
			</div>
			<div
				ref={detailRef}
				onTransitionEnd={transitionEndHandler}
				className="fixed inset-x-0 bottom-12 mx-auto flex h-16 w-fit max-w-fit items-center justify-center overflow-hidden rounded-rectangle-full bg-[#1616161a] p-2 backdrop-blur-sm transition-all duration-300"
				style={{
					opacity: open ? (maxWidthRef.current ? 1 : 0) : 0,
					...(maxWidthRef.current && {
						width: `${open ? maxWidthRef.current : 0}px`,
					}),
					...delayedStyle,
				}}
			>
				<MenuDetailItem>Home</MenuDetailItem>
				<MenuDetailItem>Benefits</MenuDetailItem>
				<MenuDetailItem>ePOS</MenuDetailItem>
				<MenuDetailItem>Marketplace</MenuDetailItem>
				<MenuDetailItem>Products</MenuDetailItem>
				<MenuDetailItem primary>Enquire</MenuDetailItem>
			</div>
		</>
	);
};

export default Menu;

interface MenuItemProps {
	children?: ReactNode;
	primary?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const MenuItem: FC<MenuItemProps> = ({ primary, children, onClick }) => {
	const isIntersecting = useContext(IsIntersectingContext)[1];

	const bgColor = interpolateColors("#ffffff1a", "#1616161a", isIntersecting);

	const primaryColor = interpolateColors(
		"#66fecbff",
		"#013334ff",
		isIntersecting
	);

	const secondaryColor = interpolateColors(
		"#013334ff",
		"#66fecbff",
		isIntersecting
	);

	const w = primary ? "w-[60px]" : "w-[44px]";
	return (
		<button
			onClick={onClick}
			className={`${w} flex aspect-square items-center justify-center rounded-full backdrop-blur-sm transition-colors`}
			style={{
				backgroundColor: bgColor,
				color: primaryColor,
			}}
		>
			{primary ? (
				<div
					className={`flex aspect-square w-[48px] items-center justify-center rounded-full transition-colors`}
					style={{ backgroundColor: primaryColor, color: secondaryColor }}
				>
					{children}
				</div>
			) : (
				children
			)}
		</button>
	);
};

interface MenuDetailItemProps {
	children?: ReactNode;
	primary?: boolean;
}

const MenuDetailItem: FC<MenuDetailItemProps> = ({ children, primary }) => {
	const variablePrimaryClasses = primary ? "bg-[#16161633]" : "";
	return (
		<button
			className={`flex h-full items-center rounded-rectangle-full px-4 text-base font-bold text-primary-950 transition-colors hover:bg-primary-950 hover:text-secondary-950 ${variablePrimaryClasses}`}
		>
			{children}
		</button>
	);
};
