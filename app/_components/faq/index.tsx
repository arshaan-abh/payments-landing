"use client";
import React, { useState } from "react";
import { FaqData } from "@/app/staticData/faq";
import Image from "next/image";
import Pluse from "../../../public/Vector.svg";
import Negative from "../../../public/Negative.svg";

function FaqSection() {
	const [openFaq, setOpenFaq] = useState<boolean[]>(
		Array(FaqData.length).fill(false)
	);

	const handleFaqClick = (faqIndex: number) => {
		// Create a copy of the openFaq array and toggle the value for the clicked FAQ
		const updatedOpenFaq = [...openFaq];
		updatedOpenFaq[faqIndex] = !updatedOpenFaq[faqIndex];
		setOpenFaq(updatedOpenFaq);
	};

	return (
		<div className="xl:mx-[120px] flex flex-col h-full">
			<div className="pt-10">
				<h2 className="font-black text-[32px] text-primary">FAQ</h2>
				<span className="text-base font-normal text-gray_2">
					Welcome to the Selected Payments FAQ, your source for clear,
					insightful answers.
				</span>
			</div>
			<div className="flex-1 flex flex-col justify-center">
				{FaqData.map((faq, index) => (
					<div key={index} className="flex justify-between border-b">
						<div className="my-2">
							<p className="text-[30px] font-bold text-primary">{faq.title}</p>
							{openFaq[index] && <p className="text-gray_2">{faq.subtitle}</p>}
						</div>
						<div className="w-40 flex justify-end">
							<Image
								className="mt-6"
								src={openFaq[index] ? Negative : Pluse}
								alt="Pluse"
								onClick={() => handleFaqClick(index)}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default FaqSection;
