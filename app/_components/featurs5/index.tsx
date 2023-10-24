import React from "react";
import Pre from "../../../public/Group 625265.svg";
import Business from "../../../public/Digital gift card.svg";
import Advance from "../../../public/Frame 26085948 (1).svg";
import Billing from "../../../public/Frame 26085949 (1).svg";
import Image from "next/image";

function Feature5() {
	return (
		<div className="grid grid-cols-12 gap-24">
			<div className="col-span-6">
				<Image src={Pre} alt="pre" />
				<h3 className="font-black text-[32px] text-primery">
					Pre-Paid Debit Card Issuing with Bank Account
				</h3>
				<p className="font-normal text-gray_2 text-base">
					Easily issue Prepaid Debit Cards, tailor them to your brand, and boost
					customer engagement. These versatile solutions unlock new revenue
					opportunities, expanding your business horizons.
				</p>
			</div>
			<div className="col-span-6">
				<Image src={Business} alt="pre" />
				<h3 className="font-black text-[32px] text-primery">
					Business’s Credit Issuing with Bank Account
				</h3>
				<p className="font-normal text-gray_2 text-base">
					With our services, you can seamlessly manage your business's credit
					lines and bank accounts, ensuring financial agility and access to
					capital when you need it..
				</p>
			</div>
			<div className="col-span-6">
				<Image src={Advance} alt="pre" />
				<h3 className="font-black text-[32px] text-primery">
					Advanced Terminal Services
				</h3>
				<p className="font-normal text-gray_2 text-base">
					Our solutions offer businesses the latest in terminal technology,
					providing enhanced security, speed, and reliability for in-person
					transactions.
				</p>
			</div>
			<div className="col-span-6">
				<Image src={Billing} alt="pre" />
				<h3 className="font-black text-[32px] text-primery">
					Billing & Invoicing
				</h3>
				<p className="font-normal text-gray_2 text-base">
					Simplify your financial processes with our Automated Billing
					solutions. Eliminate manual tasks, craft professional invoices for
					your clients and track payments efficiently.
				</p>
			</div>
		</div>
	);
}

export default Feature5;
