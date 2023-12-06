import { type FC } from "react";
import GroupAccordion from "./AccordionGroup";

const faqs = [
	{
		title:
			"How do I open an account with Selected Payments, and is there a fee?",
		answer: "Answer",
	},
	{
		title: "What should I do if I need customer support or assistance?",
		answer: "Answer",
	},
	{
		title: "How can multi-currency accounts benefit my business?",
		answer: "Answer",
	},
	{
		title: "How can I process a refund with Selected Payments?",
		answer: "Answer",
	},
	{ title: "Where can I access my transaction reports?", answer: "Answer" },
	{ title: "Why might my account be blocked?", answer: "Answer" },
	{
		title: "What is Selected Payments Flow, and how does it work?",
		answer: "Answer",
	},
];

interface FaqProps {}

const Faq: FC<FaqProps> = ({}) => {
	return (
		<div className="flex h-full w-full flex-col justify-center px-10 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="min-h-[1rem] grow" />
			<h3 className="mb-2 text-3xl font-extrabold text-primary-950">FAQ</h3>
			<p className="mb-2 text-base font-medium text-gray-600">
				Welcome to the Selected Payments FAQ, your source for clear, insightful
				answers.
			</p>
			<div>
				<GroupAccordion accordionData={faqs} />
			</div>
			<div className="min-h-[1rem] grow-2" />
		</div>
	);
};

export default Faq;
