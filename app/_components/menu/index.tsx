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
		<div className="fixed bottom-12 inset-x-0 mx-auto w-fit z-10 flex items-center justify-center gap-2.5">
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
			className={`${w} aspect-square rounded-full backdrop-blur-sm flex items-center justify-center transition-colors ${variableContainerClasses}`}
		>
			{primary ? (
				<div
					className={`w-[48px] aspect-square rounded-full flex justify-center items-center transition-colors ${variablePrimaryClasses}`}
				>
					{children}
				</div>
			) : (
				children
			)}
		</div>
	);
};
