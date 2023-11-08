import Image from "next/image";
import React from "react";
import Payment from "../../../public/WhatsApp Image 2023-10-20 at 14.03 3.webp";
import Flexible from "../../../public/hand-holding-100-dollar-bill-concept-receiving-salary-income-concept-counting4 1.webp";
import POS from "../../../public/decreasing-piles-coin-money-with-arrow44 1.webp";
import Phone from "../../../public/pexels-antoni-shkraba-production-88375101 2.webp";
import Qr from "../../../public/vardan-papikyan-3Q4H1BQAvVo-unsplash1 1.webp";

function Feature3() {
	return (
		<div className="flex justify-center h-full">
			<div className="grid grid-cols-12 max-w-[1440px] px-[120px]">
				<div className="col-span-12 grid grid-cols-12 pt-20 pb-10">
					<div className="col-span-6">
						<h2 className="text-primary font-mono font-extrabold text-[40px]">
							Marketplace & Platforms
						</h2>
						<div className="flex">
							<h3 className="text-gray-100 text-xl font-bold">INTEGRATED</h3>
							<h3 className="text-gray-100 text-xl font-bold mx-10">
								MOBILE FRIENDLY
							</h3>
							<h3 className="text-gray-100 text-xl font-bold">
								MOBILE FRIENDLY
							</h3>
						</div>
					</div>
					<div className="col-span-6 pt-4">
						<p className="text-gray-200 font-normal text-base">
							Establish a thriving ecosystem for sellers on your platform.
							Cultivate an environment where sellers not only succeed but
							thrive. Instant Payouts, Commission Alignment, Effortless
							Automation, and Multi-Party.
						</p>
					</div>
				</div>

				<div className="col-span-6 flex flex-col justify-evenly">
					<div className="grid grid-cols-6">
						<div className="col-span-1">
							<Image src={Flexible} alt="flexible" />
						</div>
						<div className="col-span-5 flex flex-col justify-center">
							<h3 className="text-2xl text-primary font-black">
								Instant Payouts
							</h3>
							<p className="font-normal text-base text-gray-200">
								Sellers receive payments instantly, greatly enhancing their
								overall experience with rapid, hassle-free transactions.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-6">
						<div className="col-span-1">
							<Image src={POS} alt="POS" />
						</div>
						<div className="col-span-5 flex flex-col justify-center">
							<h3 className="text-2xl text-primary font-black">
								Commission Alignment
							</h3>
							<p className="font-normal text-base text-gray-200">
								Customise payments to perfectly align with your unique
								commission model, ensuring a tailored and efficient payment
								process.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-6">
						<div className="col-span-1">
							<Image src={Phone} alt="Phone" />
						</div>
						<div className="col-span-5 flex flex-col justify-center">
							<h3 className="text-2xl text-primary font-black">
								Instant Settlements
							</h3>
							<p className="font-normal text-base text-gray-200">
								Simplify the process with automation, ensuring swift and
								efficient settlement procedures that save you time and effort.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-6">
						<div className="col-span-1">
							<Image src={Qr} alt="Qr" />
						</div>
						<div className="col-span-5 flex flex-col justify-center">
							<h3 className="text-2xl text-primary font-black">
								Multiparty Split Payments and Payouts
							</h3>
							<p className="font-normal text-base text-gray-200">
								Effortlessly pay multiple parties in local currencies, making
								financial transactions more accessible and efficient for
								everyone involved.
							</p>
						</div>
					</div>
				</div>
				<div className="col-span-6 mb-10">
					<Image src={Payment} alt="payment" />
				</div>
			</div>
		</div>
	);
}

export default Feature3;
