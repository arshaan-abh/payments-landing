import {
	useState,
	FC,
	ReactNode,
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
	const [isTop, setIsTop] = useState(true);

	const scrollHandler = useCallback(() => {
		if (window) {
			const scrollY = window.pageYOffset || window.scrollY;
			setIsTop(scrollY < 32);
		}
	}, []);

	useEffect(() => {
		scrollHandler();
		addEventListener("scroll", scrollHandler);
		return () => removeEventListener("scroll", scrollHandler);
	}, [scrollHandler]);

	const detailRef = useRef<HTMLDivElement>(null);
	const detailCloneRef = useRef<HTMLDivElement>(null);
	const [maxWidth, setMaxWidth] = useState<number | null>(null);
	const [open, setOpen] = useState<boolean>(false);
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

	const checkWidth = useCallback(() => {
		const clonedDetailElement = detailCloneRef.current;

		if (clonedDetailElement) {
			setMaxWidth(clonedDetailElement.getBoundingClientRect().width || 0);
		}
	}, []);

	useEffect(() => {
		checkWidth();
		addEventListener("resize", checkWidth);
		return () => removeEventListener("resize", checkWidth);
	}, [checkWidth]);

	useEffect(() => {
		const detailElement = detailRef.current;

		addEventListener("click", closeDetail);
		detailElement?.addEventListener("click", function (event) {
			event.stopPropagation();
		});

		return () => {
			removeEventListener("click", closeDetail);
			detailElement?.removeEventListener("click", function (event) {
				event.stopPropagation();
			});
		};
	}, [closeDetail]);

	return (
		<>
			<div
				className={`fixed inset-x-0 bottom-12 z-10 mx-auto flex w-fit items-center justify-center gap-2.5 transition-opacity duration-300 ${
					open ? "opacity-0" : "opacity-1"
				}`}
			>
				<a href="#enquire-form">
					<MenuItem isTop={isTop}>
						<EnquireIcon />
					</MenuItem>
				</a>
				<a href="#contact-us">
					<MenuItem isTop={isTop}>
						<CallUsIcon />
					</MenuItem>
				</a>
				<MenuItem isTop={isTop} primary onClick={openDetail}>
					<HamburgerMenu />
				</MenuItem>
				<a href="">
					<MenuItem isTop={isTop}>
						<LinkedinIcon />
					</MenuItem>
				</a>
				<a href="">
					<MenuItem isTop={isTop}>
						<TwitterIcon />
					</MenuItem>
				</a>
			</div>
			<div
				ref={detailCloneRef}
				className="pointer-events-none invisible fixed -bottom-full -z-50 flex w-fit items-center justify-center p-2"
			>
				<MenuDetailItem isTop={isTop}>Home</MenuDetailItem>
				<MenuDetailItem isTop={isTop}>ePOS</MenuDetailItem>
				<MenuDetailItem isTop={isTop}>Products</MenuDetailItem>
				<MenuDetailItem isTop={isTop}>Enquire</MenuDetailItem>
			</div>
			<div
				ref={detailRef}
				onTransitionEnd={transitionEndHandler}
				className={`fixed inset-x-0 bottom-12 mx-auto flex h-16 w-fit items-center justify-center overflow-hidden rounded-rectangle-full p-2 backdrop-blur-sm transition-opacity-w-bg duration-300 ${
					open ? "opacity-100" : "opacity-0"
				} ${isTop ? "bg-white/10" : "bg-[#1616161a]"}`}
				style={{
					...(maxWidth && {
						width: `${open ? maxWidth : 0}px`,
					}),
					...delayedStyle,
				}}
			>
				<a href="#hero" className="h-full">
					<MenuDetailItem isTop={isTop}>Home</MenuDetailItem>
				</a>
				<a href="#feature-two" className="h-full">
					<MenuDetailItem isTop={isTop}>ePOS</MenuDetailItem>
				</a>
				<a href="#terminal" className="h-full">
					<MenuDetailItem isTop={isTop}>Products</MenuDetailItem>
				</a>
				<a href="#enquire-form" className="h-full">
					<MenuDetailItem isTop={isTop} primary>
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
	isTop: boolean;
}

const MenuItem: FC<MenuItemProps> = ({ primary, children, onClick, isTop }) => {
	const buttonClasses = `group flex aspect-square items-center justify-center rounded-full backdrop-blur-sm transition-all ${
		isTop
			? `bg-white/10 text-secondary-300 ${
					primary ?? "hover:bg-secondary-300 hover:text-primary-950"
			  }`
			: `bg-[#1616161a] text-primary-950 ${
					primary ?? "hover:bg-primary-950 hover:text-secondary-300"
			  }`
	}`;
	const innerButtonClasses = `flex aspect-square w-[48px] items-center justify-center rounded-full transition-all ${
		isTop
			? "bg-secondary-300 text-primary-950 group-hover:bg-primary-950 group-hover:text-secondary-300"
			: "bg-primary-950 text-secondary-300 group-hover:bg-secondary-300 group-hover:text-primary-950"
	}`;

	const w = primary ? "w-[60px]" : "w-[44px]";
	return (
		<button onClick={onClick} className={`${w} ${buttonClasses}`}>
			{primary ? (
				<div className={`flex aspect-square ${innerButtonClasses}`}>
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
	isTop: boolean;
}

const MenuDetailItem: FC<MenuDetailItemProps> = ({
	children,
	primary,
	isTop,
}) => {
	const buttonClasses = `flex h-full items-center rounded-rectangle-full px-4 text-base font-bold transition-all ${
		isTop
			? `text-secondary-300 hover:bg-secondary-300 hover:text-primary-950 ${
					primary && "bg-white/10"
			  }`
			: `text-primary-950 hover:bg-primary-950 hover:text-secondary-300 ${
					primary && "bg-[#1616161a]"
			  }`
	}`;

	return <button className={buttonClasses}>{children}</button>;
};
