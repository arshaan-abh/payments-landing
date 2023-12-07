import {
	useState,
	type FC,
	type ReactNode,
	useCallback,
	useEffect,
	useRef,
	MouseEventHandler,
	CSSProperties,
} from "react";
import {
	CallUsIcon,
	EnquireIcon,
	LinkedinIcon,
	HamburgerMenu,
	TwitterIcon,
} from "../icons";

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
	const [bgColor, setBgColorMobile] = useState("#ffffff1a");
	const [primaryColor, setPrimaryColorMobile] = useState("#66fecbff");
	const [secondaryColor, setSecondaryColorMobile] = useState("#013334ff");

	const scrollHandler = useCallback(() => {
		if (window) {
			const scrollY = window.pageYOffset || window.scrollY;
			if (scrollY < 16) {
				setBgColorMobile("#ffffff1a");
				setPrimaryColorMobile("#66fecbff");
				setSecondaryColorMobile("#013334ff");
			} else {
				setBgColorMobile("#1616161a");
				setPrimaryColorMobile("#013334ff");
				setSecondaryColorMobile("#66fecbff");
			}
		}
	}, []);

	useEffect(() => {
		scrollHandler;
		addEventListener("scroll", scrollHandler);
		return () => removeEventListener("scroll", scrollHandler);
	}, [scrollHandler]);

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
				<a href="#enquire-form">
					<MenuItem
						primaryColor={primaryColor}
						secondaryColor={secondaryColor}
						bgColor={bgColor}
					>
						<EnquireIcon />
					</MenuItem>
				</a>
				<a href="#contact-us">
					<MenuItem
						primaryColor={primaryColor}
						secondaryColor={secondaryColor}
						bgColor={bgColor}
					>
						<CallUsIcon />
					</MenuItem>
				</a>
				<MenuItem
					primaryColor={primaryColor}
					secondaryColor={secondaryColor}
					bgColor={bgColor}
					primary
					onClick={openDetail}
				>
					<HamburgerMenu />
				</MenuItem>
				<a href="">
					<MenuItem
						primaryColor={primaryColor}
						secondaryColor={secondaryColor}
						bgColor={bgColor}
					>
						<LinkedinIcon />
					</MenuItem>
				</a>
				<a href="">
					<MenuItem
						primaryColor={primaryColor}
						secondaryColor={secondaryColor}
						bgColor={bgColor}
					>
						<TwitterIcon />
					</MenuItem>
				</a>
			</div>
			<div
				ref={detailRef}
				onTransitionEnd={transitionEndHandler}
				className="fixed inset-x-0 bottom-12 mx-auto flex h-16 w-fit max-w-fit items-center justify-center overflow-hidden rounded-rectangle-full p-2 backdrop-blur-sm transition-opacity-w-bg duration-300"
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
				<a href="#hero" className="h-full">
					<MenuDetailItem primaryColor={primaryColor} bgColor={bgColor}>
						Home
					</MenuDetailItem>
				</a>
				<a href="#feature-two" className="h-full">
					<MenuDetailItem primaryColor={primaryColor} bgColor={bgColor}>
						ePOS
					</MenuDetailItem>
				</a>
				<a href="#terminal" className="h-full">
					<MenuDetailItem primaryColor={primaryColor} bgColor={bgColor}>
						Products
					</MenuDetailItem>
				</a>
				<a href="#enquire-form" className="h-full">
					<MenuDetailItem primaryColor={primaryColor} bgColor={bgColor} primary>
						Enquire
					</MenuDetailItem>
				</a>
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
			className={`${w} flex aspect-square items-center justify-center rounded-full backdrop-blur-sm transition-all`}
			style={{
				backgroundColor: bgColor,
				color: primaryColor,
			}}
		>
			{primary ? (
				<div
					className={`flex aspect-square w-[48px] items-center justify-center rounded-full transition-all`}
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
}

const MenuDetailItem: FC<MenuDetailItemProps> = ({
	children,
	primary,
	bgColor,
	primaryColor,
}) => {
	return (
		<button
			className={`flex h-full items-center rounded-rectangle-full px-4 text-base font-bold transition-all`}
			style={{
				backgroundColor: primary ? bgColor : "transparent",
				color: primaryColor,
			}}
		>
			{children}
		</button>
	);
};
