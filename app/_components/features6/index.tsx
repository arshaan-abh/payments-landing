import React from "react";
import Advance from "../../../public/advance.webp";
import Billing from "../../../public/billing.webp";

import Image from "next/image";

function Feature5() {
	return (
		<div className="grid grid-cols-12 space-y-24 xl:px-[120px] max-w-[1440px] h-full">
			<div className="col-span-12 grid grid-cols-12 mt-10">
				<div className="col-span-5">
					<Image src={Advance} alt="Pre" />
				</div>
				<div className="col-span-6 col-end-13 flex flex-col justify-center">
					<h3 className="text-[32px] font-black text-primary pr-24">
						Advanced Terminal Services
					</h3>
					<span className="text-base font-normal text-gray_2 mt-5">
						Businesses seeking the pinnacle of terminal technology need look no
						further than our solutions, which are designed to elevate in-person
						transactions.
					</span>
					<span className="text-base font-normal text-gray_2">
						Our commitment to security, speed, and reliability means that you
						can trust your payment processes to be both efficient and
						dependable. In a world where customers prioritise a smooth and
						secure payment experience, our solutions deliver, ensuring that your
						business remains competitive, efficient, and trusted by your
						clientele.
					</span>
				</div>
			</div>
			<div className="col-span-12 grid grid-cols-12">
				<div className="col-span-6 flex flex-col justify-center">
					<h3 className="text-[32px] font-black text-primary">
						Billing & Invoicing
					</h3>
					<span className="text-base font-normal text-gray_2 mt-5">
						One of the key features of our Automated Billing solutions is the
						ability to craft professional invoices.
					</span>
				</div>
				<div className="col-span-5 col-start-8">
					<Image src={Billing} alt="Pre" />
				</div>
			</div>
		</div>
	);
}

export default Feature5;
