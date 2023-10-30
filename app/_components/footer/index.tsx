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
function Footer() {
	return (
		<div className="h-screen flex items-end">
			<div className="grid grid-cols-12 bg-primery mt-10 pl-5 lg:pl-5 lg:px-[80px]">
				<div className="col-span-12 py-[50px]">
					<Image src={FooterLogo} alt="selected-payment" />
				</div>
				<div className="col-span-12 grid grid-cols-12">
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
					<div className="col-span-12 lg:col-span-4 mb-5 mt-10 lg:mt-0 pr-5">
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
			</div>
		</div>
	);
}

export default Footer;
