import type { FC } from "react";
import Image from "next/image";
import logo from "public/logo.svg";
import Facebook from "../../../public/facebook.svg";
import Twitter from "../../../public/twitter-x-fill.svg";
import Youtube from "../../../public/youtube-line.svg";
import Linkedin from "../../../public/linkedin-fill.svg";
import InstagramIcon from "../../../public/instagram-fill.svg";
import Phone from "../../../public/phone.svg";
import Email from "../../../public/email.svg";
import Location from "../../../public/location.svg";
import Link from "next/link";
import Button from "../button";
const solutionsLinks = [
	{ text: "Online Payment", link: "" },
	{ text: "In-App Payments", link: "" },
	{ text: "Marketplace & Platform", link: "" },
	{ text: "eCommerce", link: "" },
	{ text: "Billing and Invoicing", link: "" },
	{ text: "In-Person Payment", link: "" },
	{ text: "Terminal-less Payments ( Mobile App )", link: "" },
	{ text: "ePOS All-In-One ( Terminal + eposense mobile ) ", link: "" },
	{ text: "Pre- Paid Debit Card with Bank Account issuing ", link: "" },
	{ text: "Business’s Credit adn Bank Account Issuing ", link: "" },
];
const featuresLinks = [
	{ text: "Instant Settlement", link: "" },
	{ text: "Instant Payout", link: "" },
	{ text: "Flexible split payments and multiparty payouts", link: "" },
	{ text: "Multicurrency Payout", link: "" },
	{ text: "Flexible Payment Methods", link: "" },
	{ text: "Multicurrency Payments", link: "" },
	{ text: "One-Click checkout with Payment link", link: "" },
	{ text: "Competitive Merchant Fees", link: "" },
	{ text: "Highest industry Rate", link: "" },
];

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
	return (
		<div className="w-full h-full flex flex-col">
			<div className="grow"></div>
			<div className="text-secondary bg-primary flex justify-center">
				<div className="px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl flex flex-col pt-11 gap-11">
					<Image src={logo} alt="Logo" />
					<div className="flex gap-4">
						<div className="basis-1/3 flex flex-col gap-3">
							<h5 className="font-lato font-extrabold text-base mb-1">
								Solutions
							</h5>
							{solutionsLinks.map((link, index) => (
								<Link
									key={index}
									href={link.link}
									className="font-lato font-medium text-sm text-secondary"
								>
									{link.text}
								</Link>
							))}
						</div>
						<div className="basis-1/3 flex flex-col gap-3">
							<h5 className="font-lato font-extrabold text-base mb-1">
								Features
							</h5>
							{featuresLinks.map((link, index) => (
								<Link
									key={index}
									href={link.link}
									className="font-lato font-medium text-sm text-secondary"
								>
									{link.text}
								</Link>
							))}
						</div>
						<div className="basis-1/3 flex flex-col gap-3">
							<h5 className="font-lato font-extrabold text-base mb-1">
								We&apos;re social
							</h5>
							<p className="font-lato font-medium text-sm text-secondary">
								Follow us on social media and scroll through the latest scoop
								effortlessly in your feed
							</p>
							<div className="flex gap-4 items-center h-11 my-2">
								<Image src={Facebook} alt="facebook" />
								<Image src={Twitter} alt="twitter" />
								<Image src={Youtube} alt="youtube" />
								<Image src={Linkedin} alt="linkedin" />
								<Image src={InstagramIcon} alt="instagram" />
							</div>
							<h5 className="font-lato font-extrabold text-base mb-1">
								Join us and stay ahead of the curve
							</h5>
							<p className="font-lato font-medium text-sm text-secondary mb-2">
								Get the latest news and exclusive promotions conveniently in
								your inbox.
							</p>
							<div className="flex gap-1">
								<input
									type="email"
									placeholder="Email"
									className="grow bg-[#ffffff0a] text-secondary font-lato font-normal text-base px-4 py-2 border border-secondary outline-none rounded-md"
								/>
								<Button white>Sign up</Button>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="flex border-t border-gray-100 py-5 justify-between items-center">
							<div className="basis-1/3 text-sm font-medium font-lato">
								At Selected Payments, We&apos;re More Than Just a Payment
								Solution - We&apos;re Your Trustworthy Partner. Our Innovative
								Approach Combines with Dedication to Ensure Your Payments Are
								Effortless and Secure, Paving the Way for a Smooth Financial
								Future.
							</div>
							<div className="basis-1/3 flex flex-col gap-1">
								<div className="flex gap-1 font-lato text-sm font-normal justify-end items-center">
									<p>+44 1273 705050</p>
									<Image src={Phone} alt="Phone" />
								</div>
								<div className="flex gap-1 font-lato text-sm font-normal justify-end items-center">
									<p>hello@selectedpayment.com</p>
									<Image src={Email} alt="Email" />
								</div>
								<div className="flex gap-1 font-lato text-sm font-normal justify-end items-center">
									<p>4 Gordon Mews, Gordon Close, BN41 1HU, Brighton</p>
									<Image src={Location} alt="Location" />
								</div>
							</div>
						</div>
						<div className="flex border-t border-gray-100 py-3 justify-between items-center">
							<p className="font-lato text-xs text-gray-400 font-normal">
								Copyright © 2023 Powered by{" "}
								<span className="font-bold text-secondary">Selected</span>
							</p>
							<p className="font-lato text-xs font-bold text-secondary">
								Privacy Policy | Terms of Use
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
