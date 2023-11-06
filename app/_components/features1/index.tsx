import React from "react";
import FeatureImage1 from "../../../public/One click.webp";
import FeatureImage2 from "../../../public/Pay Method.webp";
import FeatureImage3 from "../../../public/Currency.webp";
import Image from "next/image";

function Feature1() {
	return (
		<div className="grid grid-cols-12">
			<div className="w-full col-span-12 flex justify-center">
				<div className="grid col-span-12 grid-cols-12 my-28 md:px-[40px] lg:px-[80px] xl:px-[120px] max-w-[1440px]">
					<div className="col-span-12 grid grid-cols-12">
						<div className="md:col-span-12 lg:col-span-5 md:px-10 lg:px-0">
							<h2 className="md:text-[34px] xl:text-4xl font-mono font-extrabold text-primery md:text-center lg:text-start">
								Simplified Customer Payment Processing!
							</h2>
						</div>
						<div className="md:col-span-12  lg:col-end-13 lg:col-span-6 mt-5 lg:mt-0 md:px-10 lg:px-0 md:text-center lg:text-start">
							<p className="font-normal text-base text-gray_2">
								In a rapidly evolving marketplace, staying ahead means embracing
								efficient solutions. Our Streamlined Customer Payment Processing
								is your gateway to a new era in payment convenience. Weve
								reimagined the payment journey to be effortless and
								user-friendly.
							</p>
						</div>
					</div>
					<div className="col-span-12 lg:grid grid-cols-12 mt-20 md:hidden">
						<div className="col-span-12 lg:col-span-4 my-10 lg:my-0">
							<div className="flex justify-center mb-7">
								<Image src={FeatureImage1} alt="FeatureImage1" />
							</div>
							<h3 className="font-bold text-primery text-2xl mb-2 text-center lg:text-start">
								One-Click checkout with Pay link
							</h3>
							<p className="font-normal text-base text-gray_2 text-center lg:text-start">
								Your customers will love the simplicity of one-click checkout
								through our seamless pay link.
							</p>
						</div>
						<div className="col-span-12 lg:col-span-4 my-10 lg:my-0">
							<div className="flex justify-center mb-7">
								<Image src={FeatureImage2} alt="FeatureImage2" />
							</div>
							<h3 className="font-bold text-primery text-2xl mb-2 text-center lg:text-start">
								Flexible Payment Methods
							</h3>
							<p className="font-normal text-base text-gray_2 text-center lg:text-start">
								Users will enjoy the convenience of flexible payout methods
								tailored to their needs.
							</p>
						</div>
						<div className="col-span-12 lg:col-span-4 my-10 lg:my-0">
							<div className="flex justify-center mb-7">
								<Image
									src={FeatureImage3}
									alt="FeatureImage3"
									className="h-full"
								/>
							</div>
							<h3 className="font-bold text-primery text-2xl mb-2 text-center lg:text-start">
								Multicurrency Payments
							</h3>
							<p className="font-normal text-base text-gray_2 text-center lg:text-start">
								They will appreciate the value of flexible multicurrency
								payments, tailored to their global needs.
							</p>
						</div>
					</div>

					<div className="lg:hidden col-span-12 flex items-center">
						<div className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth">
							<div className="col-span-12 lg:col-span-4 my-10 lg:my-0 inline-block p-2 w-2/3">
								<div>
									<Image src={FeatureImage1} alt="FeatureImage1" />
								</div>
								<h3 className="font-bold text-primery text-2xl mb-2 text-center">
									One-Click checkout with Pay link
								</h3>
								<div>
									<p className="font-normal text-base text-gray_2 text-center">
										Your customers will love the simplicity of
										<br /> one-click checkout through our seamless pay link.
									</p>
								</div>
							</div>
							<div className="col-span-12 lg:col-span-4 my-10 lg:my-0 inline-block p-2 w-2/3">
								<div>
									<Image src={FeatureImage2} alt="FeatureImage2" />
								</div>
								<h3 className="font-bold text-primery text-2xl mb-2 text-center lg:text-start">
									Flexible Payment Methods
								</h3>
								<div>
									<p className="font-normal text-base text-gray_2 text-center ">
										Users will enjoy the convenience of <br />
										flexible payout methods tailored to their needs.
									</p>
								</div>
							</div>
							<div className="col-span-12 my-10 inline-block p-2 w-2/3">
								<div className="justify-center flex">
									<Image src={FeatureImage3} alt="FeatureImage3" />
								</div>
								<h3 className="font-bold text-primery text-2xl mb-2 text-center lg:text-start">
									Multicurrency Payments
								</h3>

								<p className="font-normal text-base text-gray_2 text-center h-24 ">
									They will appreciate the value of flexible multicurrency
									payments, <br />
									tailored to their global needs.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Feature1;
