import Image from "next/image";
import React, { useRef } from "react";
import Payment from "../../../public/WhatsApp Image 2023-10-20 at 14.03 1.webp";
import Flexible from "../../../public/hands-using-phone-credit-card-online-payment 2 1.webp";
import POS from "../../../public/Frame 26085950.webp";
import Phone from "../../../public/Frame 26085950 (1).webp";
import Qr from "../../../public/Frame 26085950 (2).webp";

function Feature2() {
	return (
		<div className="w-full flex justify-center h-full">
			<div className="grid grid-cols-12 max-w-[1440px] md:px-[40px] lg:px-[80px] xl:px-[120px]">
				<div className="col-span-12 grid grid-cols-12 py-20">
					<div className="md:col-span-12 lg:col-span-6 flex flex-col items-center">
						<h2 className="text-primery font-mono font-extrabold lg:text-[30px] xl:text-[40px]">
							ePOS All-In-One Solutions
						</h2>
						<div className="flex lg:justify-evenly xl:justify-normal">
							<h3 className="text-gray_1 lg:text-lg xl:text-xl lg:font-normal xl:font-bold">
								INTEGRATED
							</h3>
							<h3 className="text-gray_1 lg:text-lg xl:text-xl lg:font-normal xl:font-boldmx-10">
								MOBILE FRIENDLY
							</h3>
							<h3 className="text-gray_1 lg:text-lg xl:text-xl lg:font-normal xl:font-bold">
								MOBILE FRIENDLY
							</h3>
						</div>
					</div>
					<div className="md:col-span-12 lg:col-span-6 flex md:justify-center lg:justify-normal md:px-10">
						<p className="text-gray_2 font-normal text-base text-center">
							Unlock the potential of retail with our ePOS All-In-One Solutions.
							Tailor your in-store payments, simplify transactions without extra
							hardware, enable on-the-go mobile payments, and embrace secure,
							contactless QR payments.
						</p>
					</div>
				</div>
				<div className="md:col-span-12 lg:col-span-6 mb-10 flex md:justify-center lg:justify-normal lg:hidden">
					<Image
						src={Payment}
						alt="payment"
						className="md:w-[276px] md:h-[279px]"
					/>
				</div>
				<div className="md:col-span-12 lg:col-span-6 mb-10 lg:flex md:justify-center lg:justify-normal hidden">
					<Image src={Payment} alt="payment" />
				</div>
				<div className="md:col-span-12 lg:col-span-6 flex flex-col justify-between mb-10">
					<div className="grid grid-cols-6">
						<div className="col-span-1">
							<Image src={Flexible} alt="flexible" />
						</div>
						<div className="col-span-5 flex flex-col justify-center">
							<h3 className="text-2xl text-primery font-black">
								Flexible in-store payments
							</h3>
							<p className="font-normal text-base text-gray_2">
								Customise your payment method for the ultimate convenience and
								experience a new level of financial flexibility.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-6">
						<div className="col-span-1">
							<Image src={POS} alt="POS" />
						</div>
						<div className="col-span-5 flex flex-col justify-center">
							<h3 className="text-2xl text-primery font-black">
								POS Payments without device
							</h3>
							<p className="font-normal text-base text-gray_2">
								Witness optimised transactions without the need for any
								hardware, making your point-of-sale payments straightforward
							</p>
						</div>
					</div>
					<div className="grid grid-cols-6">
						<div className="col-span-1">
							<Image src={Phone} alt="Phone" />
						</div>
						<div className="col-span-5 flex flex-col justify-center">
							<h3 className="text-2xl text-primery font-black">
								Phone payments using MO/TO
							</h3>
							<p className="font-normal text-base text-gray_2">
								Empower mobile transactions for on-the-go ease and elevate your
								payment experience with the convenience of MO/TO payments.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-6">
						<div className="col-span-1">
							<Image src={Qr} alt="Qr" />
						</div>
						<div className="col-span-5 flex flex-col justify-center">
							<h3 className="text-2xl text-primery font-black">
								QR payment codes
							</h3>
							<p className="font-normal text-base text-gray_2">
								Enjoy quick, secure, and contactless payments with a simple
								scan, providing you with a seamless and efficient way to pay.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Feature2;
