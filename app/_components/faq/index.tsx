import { type FC } from "react";
import Stack from "../stack";
import Grid from "../grid";
import Accordion from "./Accordion";

interface FaqProps {}

const Faq: FC<FaqProps> = ({}) => {
	return (
		<Stack
			containerClassName="w-full h-full px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			underClassName="px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl"
			className="h-full flex flex-col justify-center gap-3"
			underLayer={<Grid black />}
		>
			<h3 className="font-lato font-extrabold text-3xl text-primary">FAQ</h3>
			<p className="font-lato text-base text-gray-100 font-medium">
				Welcome to the Selected Payments FAQ, your source for clear, insightful
				answers.
			</p>
			<div>
				<Accordion title="How do I open an account with Selected Payments, and is there a fee?">
					<p className="font-lato text-base text-gray-100 font-medium">
						How do I open an account with Selected Payments, and is there a fee?
					</p>
				</Accordion>
				<Accordion title="What should I do if I need customer support or assistance?">
					<p className="font-lato text-base text-gray-100 font-medium">
						What should I do if I need customer support or assistance?
					</p>
				</Accordion>
			</div>
		</Stack>
	);
};

export default Faq;

// TODO map faqs
