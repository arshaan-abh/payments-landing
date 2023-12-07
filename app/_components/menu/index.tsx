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
import {
	IsIntersectingContext,
	IsMobileContext,
} from "@/app/_contexts/contexts";
import interpolateColors from "@/app/_utilities/interpolate-colors";

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
	const isMobile = useContext(IsMobileContext);

	const isIntersecting = useContext(IsIntersectingContext)[1];

	const bgColor = interpolateColors(
		isMobile ? "#1616161a" : "#ffffff1a",
		isMobile ? "#1616161a" : "#1616161a",
		isIntersecting
	);

	const primaryColor = interpolateColors(
		isMobile ? "#013334ff" : "#66fecbff",
		isMobile ? "#013334ff" : "#013334ff",
		isIntersecting
	);

	const secondaryColor = interpolateColors(
		isMobile ? "#66fecbff" : "#013334ff",
		isMobile ? "#66fecbff" : "#66fecbff",
		isIntersecting
	);

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
				<MenuItem
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					bgColor={bgColor}
				>
					<EnquireIcon />
				</MenuItem>
				<MenuItem
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					bgColor={bgColor}
				>
					<CallUsIcon />
				</MenuItem>
				<MenuItem
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					bgColor={bgColor}
					primary
					onClick={openDetail}
				>
					<HamburgerMenu />
				</MenuItem>
				<MenuItem
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					bgColor={bgColor}
				>
					<LinkedinIcon />
				</MenuItem>
				<MenuItem
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					bgColor={bgColor}
				>
					<TwitterIcon />
				</MenuItem>
			</div>
			<div
				ref={detailRef}
				onTransitionEnd={transitionEndHandler}
				className="fixed inset-x-0 bottom-12 mx-auto flex h-16 w-fit max-w-fit items-center justify-center overflow-hidden rounded-rectangle-full p-2 backdrop-blur-sm transition-opacity-width duration-300"
				style={{
					backgroundColor: bgColor,
					opacity: open ? (maxWidthRef.current ? 1 : 0) : 0,
					...(maxWidthRef.current && {
						width: `calc(${
							open ? maxWidthRef.current : 0
						}rem / var(--font-size))`,
					}),
					...delayedStyle,
				}}
			>
				<MenuDetailItem
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					bgColor={bgColor}
				>
					Home
				</MenuDetailItem>
				<MenuDetailItem
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					bgColor={bgColor}
				>
					Benefits
				</MenuDetailItem>
				<MenuDetailItem
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					bgColor={bgColor}
				>
					ePOS
				</MenuDetailItem>
				<MenuDetailItem
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					bgColor={bgColor}
				>
					Marketplace
				</MenuDetailItem>
				<MenuDetailItem
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					bgColor={bgColor}
				>
					Products
				</MenuDetailItem>
				<MenuDetailItem
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					bgColor={bgColor}
					primary
				>
					Enquire
				</MenuDetailItem>
			</div>
		</>
	);
};

export default Menu;

interface MenuItemProps {
	children?: ReactNode;
	primary?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	bgColor?: string;
	primaryColor?: string;
	secondaryColor?: string;
}

const MenuItem: FC<MenuItemProps> = ({
	primary,
	children,
	onClick,
	primaryColor,
	secondaryColor,
	bgColor,
}) => {
	const w = primary ? "w-[60px]" : "w-[44px]";
	return (
		<button
			onClick={onClick}
			className={`${w} flex aspect-square items-center justify-center rounded-full backdrop-blur-sm`}
			style={{
				backgroundColor: bgColor,
				color: primaryColor,
			}}
		>
			{primary ? (
				<div
					className={`flex aspect-square w-[48px] items-center justify-center rounded-full`}
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
	bgColor?: string;
	primaryColor?: string;
	secondaryColor?: string;
}

const MenuDetailItem: FC<MenuDetailItemProps> = ({
	children,
	primary,
	bgColor,
	primaryColor,
	secondaryColor,
}) => {
	return (
		<button
			className={`flex h-full items-center rounded-rectangle-full px-4 text-base font-bold`}
			style={{
				backgroundColor: primary ? bgColor : "transparent",
				color: primaryColor,
			}}
		>
			{children}
		</button>
	);
};
