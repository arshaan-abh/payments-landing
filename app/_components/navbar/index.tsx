import Image from "next/image";
import { type FC } from "react";
import logo from "public/logo.svg";
import Button from "../button";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<nav className="shrink-0 w-full flex flex-col px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl">
			<div className="flex gap-10 items-center py-6 justify-center md:justify-between">
				<Image src={logo} alt="Logo" />
				<div className="hidden md:flex">
					<Button white>Enquire Now</Button>
				</div>
			</div>
			<div className="border-b border-gray-700 w-full h-px opacity-10" />
		</nav>
	);
};

export default Navbar;
