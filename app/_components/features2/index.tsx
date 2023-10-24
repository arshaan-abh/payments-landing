import Image from "next/image";
import React, { useRef } from "react";
import Payment from "../../../public/Payment 7 1.svg";
import Flexible from "../../../public/Frame 26085949 (2).svg";
import POS from "../../../public/Frame 26085950.svg";
import Phone from "../../../public/Frame 26085950 (1).svg";
import Qr from "../../../public/Frame 26085950 (2).svg";

function Feature2() {
	return (
		<div className="grid grid-cols-12" id="section3">
			<div className="col-span-12 grid grid-cols-12 py-20">
				<div className="col-span-6">
					<h2 className="text-primery font-mono font-extrabold text-[40px]">
						ePOS All-In-One Solutions
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
						Unlock the potential of retail with our ePOS All-In-One Solutions.
						Tailor your in-store payments, simplify transactions without extra
						hardware, enable on-the-go mobile payments, and embrace secure,
						contactless QR payments. Improve your business operations with our
						versatile ePOS solutions.
					</p>
				</div>
			</div>
			<div className="col-span-6 mb-10">
				<Image src={Payment} alt="payment" />
			</div>
			<div className="col-span-6 flex flex-col justify-between mb-10">
				<div className="grid grid-cols-6">
					<div className="col-span-1">
						<Image src={Flexible} alt="flexible" />
					</div>
					<div className="col-span-5 flex flex-col justify-center">
						<h3 className="text-2xl text-primery font-black">
							Flexible in-store payments
						</h3>
						<p className="font-medium text-base text-gray_2">
							Customise your payment method for ultimate convenience.
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
						<p className="font-medium text-base text-gray_2">
							Streamlined transactions without hardware hassle.
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
						<p className="font-medium text-base text-gray_2">
							Empower mobile transactions for on-the-go ease.
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
						<p className="font-medium text-base text-gray_2">
							Quick, secure, and contactless payments with a scan.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Feature2;
