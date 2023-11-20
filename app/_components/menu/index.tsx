import { type FC, type ReactNode } from "react";
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
	const w = primary ? "w-[64px]" : "w-[44px]";
	return (
		<div
			className={`${w} text-white aspect-square bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center`}
		>
			{primary ? (
				<div className="w-[48px] aspect-square bg-white rounded-full text-primary flex justify-center items-center">
					{children}
				</div>
			) : (
				children
			)}
		</div>
	);
};
