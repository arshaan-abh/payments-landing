import type { FC } from "react";
import Image from "next/image";
import logo from "public/logo-white.svg";
import Facebook from "../../../public/facebook.svg";
import Twitter from "../../../public/twitter.svg";
import Youtube from "../../../public/youtube.svg";
import Linkedin from "../../../public/linkedin.svg";
import InstagramIcon from "../../../public/instagram.svg";
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
	{ text: "Pre-Paid Debit Card with Bank Account issuing ", link: "" },
	{ text: "Business's Credit adn Bank Account Issuing ", link: "" },
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
		<div className="flex h-full w-full flex-col">
			<div className="grow"></div>
			<div className="flex justify-center bg-primary-950 text-white">
				<div className="flex flex-col gap-9 px-10 pt-11 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
					<Image src={logo} alt="Logo" />
					<div className="flex flex-wrap justify-center gap-4 sm:flex-nowrap">
						<div className="flex basis-full flex-col gap-2 text-start xs:basis-2/5 xs:text-center sm:basis-1/3 sm:text-start">
							<h5 className="mb-1 text-base font-extrabold">Solutions</h5>
							{solutionsLinks.map((link, index) => (
								<Link
									key={index}
									href={link.link}
									className="text-sm font-medium text-white"
								>
									{link.text}
								</Link>
							))}
						</div>
						<div className="flex basis-full flex-col gap-2 text-start xs:basis-2/5 xs:text-center sm:basis-1/3 sm:text-start">
							<h5 className="mb-1 text-base font-extrabold">Features</h5>
							{featuresLinks.map((link, index) => (
								<Link
									key={index}
									href={link.link}
									className="text-sm font-medium text-white"
								>
									{link.text}
								</Link>
							))}
						</div>
						<div className="flex basis-full flex-col gap-2 text-start xs:basis-3/5 xs:text-center sm:basis-1/3 sm:text-start">
							<h5 className="mb-1 text-base font-extrabold">
								We&apos;re social
							</h5>
							<p className="text-sm font-medium text-white">
								Follow us on social media and scroll through the latest scoop
								effortlessly in your feed
							</p>
							<div className="my-2 flex h-11 items-center gap-4">
								<Image src={Facebook} alt="facebook" />
								<Image src={Twitter} alt="twitter" />
								<Image src={Youtube} alt="youtube" />
								<Image src={Linkedin} alt="linkedin" />
								<Image src={InstagramIcon} alt="instagram" />
							</div>
							<h5 className="mb-1 text-base font-extrabold">
								Join us and stay ahead of the curve
							</h5>
							<p className="mb-2 text-sm font-medium text-white">
								Get the latest news and exclusive promotions conveniently in
								your inbox.
							</p>
							<div className="flex flex-row gap-3 sm:flex-col lg:flex-row">
								<input
									type="email"
									placeholder="Email"
									className="w-full rounded-md border border-white bg-white/10 px-4 py-2 text-base font-normal text-white outline-none placeholder:text-white"
								/>
								<Button className="w-1/2 sm:w-full lg:w-1/2">Sign up</Button>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="flex flex-col items-center justify-between border-t border-gray-100 py-5 text-center md:flex-row md:text-start">
							<div className="basis-1/2 text-sm font-medium lg:basis-1/3">
								At Selected Payments, We&apos;re More Than Just a Payment
								Solution - We&apos;re Your Trustworthy Partner. Our Innovative
								Approach Combines with Dedication to Ensure Your Payments Are
								Effortless and Secure, Paving the Way for a Smooth Financial
								Future.
							</div>
							<div className="hidden min-h-[1rem] min-w-[1rem] xs:flex" />
							<div className="hidden basis-1/2 flex-col gap-1 xs:flex lg:basis-1/3">
								<div className="flex items-center justify-center gap-1 text-sm font-normal md:justify-end">
									<p className="text-right">+44 1273 705050</p>
									<Image src={Phone} alt="Phone" />
								</div>
								<div className="flex items-center justify-center gap-1 text-sm font-normal md:justify-end">
									<p className="text-right">hello@selectedpayment.com</p>
									<Image src={Email} alt="Email" />
								</div>
								<div className="flex items-center justify-center gap-1 text-sm font-normal md:justify-end">
									<p className="text-right">
										4 Gordon Mews, Gordon Close, BN41 1HU, Brighton
									</p>
									<Image src={Location} alt="Location" />
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center justify-between gap-y-4 border-t border-gray-100 py-3 pt-6 md:flex-row md:pt-3">
							<p className="text-xs font-normal text-gray-400">
								Copyright © 2023 Powered by{" "}
								<span className="font-bold text-white">Selected</span>
							</p>
							<p className="text-xs font-bold text-white">
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
