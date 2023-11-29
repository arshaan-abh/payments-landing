import Image from "next/image";
import { type FC } from "react";
import logo from "public/logo.svg";
import Button from "../button";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<nav className="flex w-full shrink-0 flex-col px-10 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="flex items-center justify-center gap-10 py-6 md:justify-between">
				<Image src={logo} alt="Logo" />
				<div className="hidden md:flex">
					<Button white>Enquire Now</Button> {/* test */}
				</div>
			</div>
			<div className="h-px w-full border-b border-gray-700 opacity-10" />
		</nav>
	);
};

export default Navbar;
