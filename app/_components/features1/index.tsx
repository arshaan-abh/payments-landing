import React from "react";
import FeatureImage1 from "../../../public/Frame1.svg";
import FeatureImage2 from "../../../public/Frame 26085946 (2).svg";
import FeatureImage3 from "../../../public/Frame3.svg";
import Image from "next/image";

function Feature1() {
	return (
		<div className="grid grid-cols-12 my-28" id="section2">
			<div className="col-span-12 grid grid-cols-12">
				<div className="col-span-12 lg:col-span-5">
					<h2 className="text-4xl font-mono font-extrabold text-primery">
						Simplified Customer Payment Processing!
					</h2>
				</div>
				<div className="lg:col-end-13 col-span-12 lg:col-span-6 mt-5 lg:mt-0">
					<p className="font-normal text-base text-gray_2">
						In a rapidly evolving marketplace, staying ahead means embracing
						efficient solutions. Our Streamlined Customer Payment Processing is
						your gateway to a new era in payment convenience. We've reimagined
						the payment journey to be effortless and user-friendly.
					</p>
				</div>
			</div>
			<div className="col-span-12 grid grid-cols-12 mt-20">
				<div className="col-span-12 lg:col-span-4 my-10 lg:my-0">
					<div className="flex justify-center mb-7">
						<Image src={FeatureImage1} alt="FeatureImage1" />
					</div>
					<h3 className="font-bold text-primery text-2xl mb-2 text-center lg:text-start">
						One-Click checkout with Pay link
					</h3>
					<p className="font-normal text-base text-gray_2 text-center lg:text-start">
						Your customers will love the simplicity of one-click checkout
						through our seamless pay link.
					</p>
				</div>
				<div className="col-span-12 lg:col-span-4 my-10 lg:my-0">
					<div className="flex justify-center mb-7">
						<Image src={FeatureImage2} alt="FeatureImage2" />
					</div>
					<h3 className="font-bold text-primery text-2xl mb-2 text-center lg:text-start">
						Flexible Payment Methods
					</h3>
					<p className="font-normal text-base text-gray_2 text-center lg:text-start">
						Users will enjoy the convenience of flexible payout methods tailored
						to their needs.
					</p>
				</div>
				<div className="col-span-12 lg:col-span-4 my-10 lg:my-0">
					<div className="flex justify-center mb-7">
						<Image src={FeatureImage3} alt="FeatureImage3" className="h-full" />
					</div>
					<h3 className="font-bold text-primery text-2xl mb-2 text-center lg:text-start">
						Multicurrency Payments
					</h3>
					<p className="font-normal text-base text-gray_2 text-center lg:text-start">
						They will appreciate the value of flexible multicurrency payments,
						tailored to their global needs.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Feature1;
