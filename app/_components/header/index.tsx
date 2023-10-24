import Image from "next/image";
import React from "react";
import Logo from "../../../public/Frame 26085919.svg";
import Link from "next/link";

function Header() {
	return (
		<div className="grid grid-cols-12 pt-5 my-12 lg:my-0 sticky">
			<div className="col-span-12 col-start-4 lg:col-span-2">
				<Image src={Logo} alt="logo" />
			</div>
			<div className="col-end-13 col-span-2 justify-end  hidden lg:flex">
				<Link
					href="#"
					className="w-2/3 h-10 text-white bg-primery rounded-md text-base font-normal flex items-center justify-center"
				>
					Contact us
				</Link>
			</div>
		</div>
	);
}

export default Header;
