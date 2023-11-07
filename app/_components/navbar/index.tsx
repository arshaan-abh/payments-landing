import Link from "next/link";
import Image from "next/image";
import type { FC } from "react";
import Logo from "public/Frame 26085919.svg";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<nav className="grid grid-cols-12 col-span-12">
			<div className="col-span-4 lg:col-span-2">
				<Image src={Logo} alt="logo" />
			</div>
			<div className="col-span-3 lg:col-span-2 col-end-13 justify-end flex">
				<Link
					href="#"
					className="w-2/3 h-10 text-white bg-primary rounded-md text-base font-normal flex items-center justify-center"
				>
					Contact us
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
