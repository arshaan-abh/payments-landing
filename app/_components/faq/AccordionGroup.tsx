import React, { useState } from "react";
import Accordion from "./Accordion";

interface GroupAccordionProps {
	accordionData: { title: string; answer: React.ReactNode }[];
}

const GroupAccordion: React.FC<GroupAccordionProps> = ({ accordionData }) => {
	const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
		null
	);

	const handleAccordionClick = (index: number) => {
		setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<div>
			{accordionData.map((accordion, index) => (
				<Accordion
					key={index}
					title={accordion.title}
					open={index === openAccordionIndex}
					onClick={() => handleAccordionClick(index)}
				>
					{accordion.answer}
				</Accordion>
			))}
		</div>
	);
};

export default GroupAccordion;
