import React from "react";
import Empowering from "../../../public/WhatsApp Image 2023-10-20 at 14.03 4.webp";
import Calc from "../../../public/vardan-papikyan-3Q4H1BQAvVo-unsplash1 2.svg";
import Cache from "../../../public/euro-banknotes-white-one-hundred-background-monetary-denominationa 1.svg";
import Coin from "../../../public/decreasing-piles-coin-money-with-arrow44 2.svg";
import Image from "next/image";
import ImageSlider from "../image-slider";

function Feature4() {
	return (
		<div className="w-full flex flex-col items-center justify-between h-full">
			<div className="max-w-[1440px] px-[120px] flex-1 flex items-center">
				<div className="grid grid-cols-12 ">
					<div className="col-span-6 grid grid-cols-12">
						<div className="col-span-6 space-y-[76px]">
							<div>
								<h3 className="text-[53px] font-black text-primary">245M+</h3>
								<p className="text-base font-normal text-gray_2">
									API request per day, peaking at 13,000 requests a second.
								</p>
							</div>
							<div>
								<h3 className="text-[53px] font-black text-primary">90%</h3>
								<p className="text-base font-normal text-gray_2">
									Of U.K. adults have bought from businesses using Selected
									payment
								</p>
							</div>
							<div>
								<h3 className="text-[53px] font-black text-primary">130+</h3>
								<p className="text-base font-normal text-gray_2">
									currencies and payment methods supported.
								</p>
							</div>
							<div>
								<h3 className="text-[53px] font-black text-primary">99.99%</h3>
								<p className="text-base font-normal text-gray_2">
									historical uptime for Selected payment.
								</p>
							</div>
						</div>
					</div>
					<div className="col-span-6 space-y-5">
						<div>
							<h2 className="text-[36px] font-mono font-extrabold text-primary">
								Empowering Effortless Money Transfers
							</h2>
						</div>
						<div>
							<span className="font-normal text-gray_2 text-base">
								Our platform is your gateway to effortless financial
								transactions. We provide user-friendly, secure, and hassle-free
								money transfer solutions, so you can effortlessly manage your
								finances. Join us today and discover a new level of financial
								convenience.
							</span>
						</div>
						<div>
							<Image src={Empowering} alt="Empowering" />
						</div>
					</div>
				</div>
			</div>
			<div className="col-span-12 flex justify-between border-y-2 border-y-primary py-2 mt-10 w-full">
				<ImageSlider />
			</div>
		</div>
	);
}

export default Feature4;
