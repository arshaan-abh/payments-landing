"use client";
import {
	useState,
	type FC,
	type ReactNode,
	useCallback,
	useEffect,
} from "react";
import {
	CallUsIcon,
	EnquireIcon,
	LinkedinIcon,
	ThreeDotsIcon,
	TwitterIcon,
} from "../icons";

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
	return (
		<div className="fixed inset-x-0 bottom-12 z-10 mx-auto flex w-fit items-center justify-center gap-2.5">
			<MenuItem>
				<EnquireIcon />
			</MenuItem>
			<MenuItem>
				<CallUsIcon />
			</MenuItem>
			<MenuItem primary>
				<ThreeDotsIcon />
			</MenuItem>
			<MenuItem>
				<LinkedinIcon />
			</MenuItem>
			<MenuItem>
				<TwitterIcon />
			</MenuItem>
		</div>
	);
};

export default Menu;

interface MenuItemProps {
	children?: ReactNode;
	primary?: boolean;
}

const MenuItem: FC<MenuItemProps> = ({ primary, children }) => {
	const [darkMode, setDarkMode] = useState<boolean>(false);

	const handleScroll = useCallback(() => {
		const scrollY = window.scrollY || window.pageYOffset;
		if (scrollY === 0) setDarkMode(false);
		else if (scrollY > window.innerHeight * 8) setDarkMode(false);
		else setDarkMode(true);
	}, []);

	useEffect(() => {
		addEventListener("scroll", handleScroll);
		return () => {
			removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	const variableContainerClasses = darkMode
		? "text-primary bg-primary/10"
		: "text-white bg-white/10";
	const variablePrimaryClasses = darkMode
		? "text-white bg-primary"
		: "text-primary bg-white";
	const w = primary ? "w-[64px]" : "w-[44px]";
	return (
		<div
			className={`${w} flex aspect-square items-center justify-center rounded-full backdrop-blur-sm transition-colors ${variableContainerClasses}`}
		>
			{primary ? (
				<div
					className={`flex aspect-square w-[48px] items-center justify-center rounded-full transition-colors ${variablePrimaryClasses}`}
				>
					{children}
				</div>
			) : (
				children
			)}
		</div>
	);
};
