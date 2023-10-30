import React from "react";
import FooterLogo from "../../../public/footerLogo.svg";
import Image from "next/image";
import { LeftSideFooter } from "@/app/staticData/staticData";
import { centerDataFooter } from "@/app/staticData/staticData2";
import Facebook from "../../../public/facebook.svg";
import Twitter from "../../../public/twitter-x-fill.svg";
import Youtube from "../../../public/youtube-line.svg";
import Linkdin from "../../../public/linkedin-fill.svg";
import InstagramIcon from "../../../public/instagram-fill.svg";
import Phone from "../../../public/phone.svg";
import Email from "../../../public/email.svg";
import Location from "../../../public/location.svg";
import Link from "next/link";

function Footer() {
	return (
		<div className="h-screen flex justify-end flex-col">
			<div className="grid grid-cols-12 bg-primery mt-10 w-full px-[120px]">
				<div className="col-span-12 py-[50px]">
					<Image src={FooterLogo} alt="selected-payment" />
				</div>
				<div className="col-span-12 grid grid-cols-12 border-b-2">
					<div className="col-span-12 lg:col-span-4 mt-10 lg:mt-0">
						{LeftSideFooter.map((l, index) => {
							return (
								<div key={index}>
									<h3 className="text-secondary font-extrabold text-base mb-5">
										{l.title}
									</h3>
									{l.list.map((i, index) => {
										return (
											<ul className="my-3" key={index}>
												<li className="text-secondary text-sm font-medium">
													{i}
												</li>
											</ul>
										);
									})}
								</div>
							);
						})}
					</div>
					<div className="col-span-12 lg:col-span-4 mt-10 lg:mt-0">
						{centerDataFooter.map((l, index) => {
							return (
								<div key={index}>
									<h3 className="text-secondary font-extrabold text-base mb-5">
										{l.title}
									</h3>
									{l.list.map((i, index) => {
										return (
											<ul className="my-3" key={index}>
												<li className="text-secondary text-sm font-medium">
													{i}
												</li>
											</ul>
										);
									})}
								</div>
							);
						})}
					</div>
					<div className="col-span-12 lg:col-span-4 mb-5 mt-10 lg:mt-0">
						<h3 className="text-secondary font-extrabold text-base mb-5">
							Were social
						</h3>

						<ul className="my-3">
							<li className="text-secondary text-sm font-medium">
								Follow us on social media and scroll through the latest scoop
								effortlessly in your feed
							</li>
						</ul>
						<div className="my-3 flex ">
							<div className="flex justify-between w-2/3">
								<Image src={Facebook} alt="facebook" />
								<Image src={Twitter} alt="twitter" />
								<Image src={Youtube} alt="youtube" />
								<Image src={Linkdin} alt="linkdin" />
								<Image src={InstagramIcon} alt="instagram" />
							</div>
						</div>
						<div className="my-5">
							<p className="text-secondary font-extrabold text-base">
								Join us and stay ahead of the curve
							</p>
						</div>
						<div className="my-3">
							<p className="text-secondary text-sm font-medium">
								Get the latest news and exclusive promotions conveniently in
								your inbox.
							</p>
						</div>
						<div className="my-3">
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Email"
								className="h-16 rounded-md bg-primery border-secondary border px-3 w-full "
							/>
						</div>
						<div className="w-full">
							<button className="h-16 w-full  rounded-md bg-secondary px-3">
								Sign up
							</button>
						</div>
					</div>
				</div>
				<div className="col-span-12 grid grid-cols-12 py-10 border-b-2">
					<div className="col-span-5">
						<span className="text-sm font-normal text-[#FAFAFA]">
							At Selected Payments, We&apos;re More Than Just a Payment Solution
							– We&apos;re Your Trustworthy Partner. Our Innovative Approach
							Combines with Dedication to Ensure Your Payments Are Effortless
							and Secure, Paving the Way for a Smooth Financial Future.
						</span>
					</div>
					<div className="col-span-4 col-end-13">
						<div className="flex justify-end">
							<span className="text-sm font-normal text-secondary">
								+44 1273 705050
							</span>
							<Image src={Phone} alt="Phone" />
						</div>
						<div className="flex justify-end">
							<span className="text-sm font-normal text-secondary">
								hello@selectedgeeks.com
							</span>
							<Image src={Email} alt="Email" />
						</div>
						<div className="flex justify-end">
							<span className="text-sm font-normal text-secondary">
								4 Gordon Mews, Gordon Close, BN41 1HU, Brighton
							</span>
							<Image src={Location} alt="Location" />
						</div>
					</div>
				</div>
				<div className="col-span-12 grid grid-cols-12 py-10">
					<div className="col-span-2 flex">
						<span className="text-xs font-normal text-gray_4">
							Copyright © 2023 Powered by
						</span>
						<span className="text-xs font-bold text-secondary ml-1">
							Selected
						</span>
					</div>
					<div className="col-span-2 col-end-13">
						<div className="w-full justify-end flex">
							<Link href="#" className="text-xs text-secondary font-bold">
								Privacy Policy
							</Link>
							<span className="text-xs text-secondary font-bold mx-1">|</span>
							<Link href="#" className="text-xs text-secondary font-bold">
								Terms of Use
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
