import React from "react";
import Pre from "../../../public/Frame 26085948.webp";
import Business from "../../../public/Frame 26085949.webp";

import Image from "next/image";

function Feature5() {
	return (
		<div className="grid grid-cols-12 space-y-24 xl:px-[120px] max-w-[1440px] h-full">
			<div className="col-span-12 grid grid-cols-12 mt-10">
				<div className="col-span-5">
					<Image src={Pre} alt="Pre" />
				</div>
				<div className="col-span-6 col-end-13 flex flex-col justify-center">
					<h3 className="text-[32px] font-black text-primery pr-24">
						Pre-Paid Debit Card Issuing with Bank Account
					</h3>
					<span className="text-base font-normal text-gray_2 mt-5">
						By easily issuing Prepaid Debit Cards tailored to your brand, you
						create a distinct competitive edge in the market.{" "}
					</span>
					<span className="text-base font-normal text-gray_2">
						These adaptable solutions not only streamline payments but also
						empower your business to provide a unique payment experience that is
						both user-friendly and reflective of your brands values. This
						uniqueness resonates with customers, enhancing their engagement and
						loyalty. Moreover, the introduction of these cards can open up new
						revenue streams as satisfied customers are more likely to increase
						their spending and recommend your business to others. As you align
						your payment options with your brand identity, youre poised for
						business growth and long-term success.
					</span>
				</div>
			</div>
			<div className="col-span-12 grid grid-cols-12">
				<div className="col-span-6 flex flex-col justify-center">
					<h3 className="text-[32px] font-black text-primery">
						Business Finance Service with Bank Account
					</h3>
					<span className="text-base font-normal text-gray_2 mt-5">
						Weve tailored our services to provide you with a seamless experience
						in managing your business credit lines and bank accounts.
					</span>
				</div>
				<div className="col-span-5 col-start-8">
					<Image src={Business} alt="Pre" />
				</div>
			</div>
		</div>
	);
}

export default Feature5;
