import { type FC } from "react";
import GroupAccordion from "./AccordionGroup";
import { FaqData } from "@/app/staticData/faq";

interface FaqProps {}

const Faq: FC<FaqProps> = ({}) => {
	return (
		<div className="flex h-full w-full flex-col justify-center px-10 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="min-h-[1rem] grow" />
			<h3 className="mb-2 text-3xl font-extrabold text-primary-950">FAQ</h3>
			<p className="mb-2 text-base font-medium text-gray-600">
				Welcome to the Selected Payments FAQ, your source for clear and
				insightful answers.
			</p>
			<div>
				<GroupAccordion accordionData={FaqData} />
			</div>
			<div className="min-h-[1rem] grow-2" />
		</div>
	);
};

export default Faq;
