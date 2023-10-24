import Image from "next/image";
import React from "react";
import Payment from "../../../public/Payment 7 1 (1).svg";
import Flexible from "../../../public/Frame 26085949 (2).svg";
import POS from "../../../public/Frame 26085950.svg";
import Phone from "../../../public/Frame 26085950 (1).svg";
import Qr from "../../../public/Frame 26085950 (2).svg";

function Feature3() {
	return (
		<div className="grid grid-cols-12" id="section4">
			<div className="col-span-12 grid grid-cols-12 pt-20 pb-10">
				<div className="col-span-6">
					<h2 className="text-primery font-mono font-extrabold text-[40px]">
						Marketplace & Platforms
					</h2>
					<div className="flex">
						<h3 className="text-gray_1 text-xl font-bold">Integrated</h3>
						<h3 className="text-gray_1 text-xl font-bold mx-10">
							Mobile Friendly
						</h3>
						<h3 className="text-gray_1 text-xl font-bold">Mobile Friendly</h3>
					</div>
				</div>
				<div className="col-span-6">
					<p className="text-gray_2 font-normal text-base">
						Establish a thriving ecosystem for sellers on your platform.
						Cultivate an environment where sellers not only succeed but thrive.
						Instant Payouts, Commission Alignment, Effortless Automation, and
						Multi-Party Payouts are the cornerstones of this commitment,
						ensuring that every seller's journey with your marketplace.
					</p>
				</div>
			</div>

			<div className="col-span-6 flex flex-col justify-between mb-10">
				<div className="grid grid-cols-6">
					<div className="col-span-1">
						<Image src={Flexible} alt="flexible" />
					</div>
					<div className="col-span-5 flex flex-col justify-center">
						<h3 className="text-2xl text-primery font-black">
							Instant Payouts
						</h3>
						<p className="font-medium text-base text-gray_2">
							Sellers receive payments instantly, enhancing their experience.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-6">
					<div className="col-span-1">
						<Image src={POS} alt="POS" />
					</div>
					<div className="col-span-5 flex flex-col justify-center">
						<h3 className="text-2xl text-primery font-black">
							Commission Alignment
						</h3>
						<p className="font-medium text-base text-gray_2">
							Customise payments to your commission model.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-6">
					<div className="col-span-1">
						<Image src={Phone} alt="Phone" />
					</div>
					<div className="col-span-5 flex flex-col justify-center">
						<h3 className="text-2xl text-primery font-black">
							Instant Settlements
						</h3>
						<p className="font-medium text-base text-gray_2">
							Streamline the process with automation.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-6">
					<div className="col-span-1">
						<Image src={Qr} alt="Qr" />
					</div>
					<div className="col-span-5 flex flex-col justify-center">
						<h3 className="text-2xl text-primery font-black">
							Multiparty Split Payments and Payouts
						</h3>
						<p className="font-medium text-base text-gray_2">
							Pay multiple parties in local currencies easily.
						</p>
					</div>
				</div>
			</div>
			<div className="col-span-6 mb-10">
				<Image src={Payment} alt="payment" />
			</div>
		</div>
	);
}

export default Feature3;
