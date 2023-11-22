import { type FC } from "react";
import Stack from "../stack";
import Grid from "../grid";
import Accordion from "./Accordion";

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
	/* {
		title: "What is Selected Payments Flow, and how does it work?",
		answer: "Answer",
	}, */
];

interface FaqProps {}

const Faq: FC<FaqProps> = ({}) => {
	return (
		<Stack
			containerClassName="w-full h-full px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			// underClassName="px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			className="h-full flex flex-col justify-center gap-3"
			// underLayer={<Grid black />}
		>
			<h3 className="font-extrabold text-3xl text-primary">FAQ</h3>
			<p className="text-base text-gray-100 font-medium">
				Welcome to the Selected Payments FAQ, your source for clear, insightful
				answers.
			</p>
			<div>
				{faqs.map((faq, index) => (
					<Accordion key={index} title={faq.title}>
						<p className="text-base text-gray-100 font-medium">{faq.answer}</p>
					</Accordion>
				))}
			</div>
		</Stack>
	);
};

export default Faq;
