"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { number, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EnquireRequest } from "@/app/@types/enquireRequest";
import FormSection from "./form";
import Checkbox from "./Checkbox";
import Button from "../button";
import useSlider from "../features-seven/Slider";
import useResponsiveState from "../features-one/useResponsiveState";
const schema = object({
	name: string().required("This field is required."),
	companyName: string().required("This field is required."),
	email: string().email().required("This field is required."),
	phone: number().required("This field is required."),
	webUrl: string().required("This field is required."),
}).required();

function Form() {
	const {
		control,
		formState: { errors },
		getValues,
	} = useForm<EnquireRequest>({
		mode: "onBlur",
		defaultValues: {
			name: "",
			companyName: "",
			email: "",
			phone: 0,
			webUrl: "",
			description: "",
			checkedList: [],
		},
		resolver: yupResolver(schema),
	});
	const initialLabels = [
		"Online Payment",
		"In-App Payments ",
		"Marketplace & Platform",
		"In-App Payments",
		"Billing and Invoicing",
		"In-person Payments ",
		"Terminal-less Payments ( Mobile App )",
		"eCommerce",
		"ePOS All-In-One ( Terminal + eposense mobile ) ",
		"Pre- Paid Debit Card with Bank Account issuing ",
		"Business's Credit adn Bank Account Issuing ",
		"Others",
	];
	const [options] = useState<string[]>(initialLabels);
	const [checkableList, setCheckableList] = useState<boolean[]>(
		new Array(initialLabels.length).fill(false)
	);

	// Function to update the checkedList state
	const checkHandler = (index: number) => {
		const updatedList = [...checkableList];
		updatedList[index] = !checkableList[index];
		setCheckableList(updatedList);
	};
	const handleFormSubmit = () => {
		// Access the form data using getValues()
		const formData = getValues();
		formData.checkedList = checkableList;
		console.log(formData);
		// Validate the form data against the schema

		schema
			.validate(formData)
			.then(() => {
				// Validation succeeded, handle the form data here (e.g., send it to an API)
				console.log("Form Data:", formData);
			})
			.catch((errors) => {
				// Validation failed, you can display the errors or take appropriate action
				errors;
			});
	};

	const responsiveState = useResponsiveState({
		defaultState: { visibleSlidesNumber: 1, isPhone: true },
		breakpoints: [
			{
				breakpoint: 768,
				state: { visibleSlidesNumber: 2, isPhone: false },
			},
		],
	});

	const [slider, prevButtonRef, nextButtonRef, index] = useSlider({
		children: [
			<div className="flex basis-1/2 flex-col" key={0}>
				<p className="mb-4 text-center text-xl font-extrabold text-secondary">
					Select your favorite solutions
				</p>
				<div className="mb-3 flex flex-wrap gap-3">
					{options.map((option, index) => {
						const handler = () => {
							checkHandler(index);
						};
						return (
							<Checkbox checkHandler={handler} key={index}>
								{option}
							</Checkbox>
						);
					})}
				</div>
				{checkableList[11] && (
					<textarea
						id="message"
						rows={3}
						disabled={checkableList[11] ? false : true}
						className="w-full rounded-md border-2 border-gray-100 bg-transparent p-2.5 text-base font-semibold text-secondary focus:border-secondary"
						placeholder="Others"
						style={{ resize: "none" }}
					></textarea>
				)}
			</div>,
			<FormSection control={control} errors={errors} key={1} />,
		],
		gapInRem: 2.5,
		visibleSlidesNumber: responsiveState.visibleSlidesNumber,
	});

	return (
		<div className="flex h-full w-full flex-col items-center px-10 lg:px-20 xl:max-w-screen-1.5xl xl:px-30">
			<div className="min-h-[1rem] grow" />
			<h3 className="mb-2 text-4xl font-extrabold">
				Begin Your Next Chapter Now!
			</h3>
			<p className="mb-8 text-lg font-medium text-gray-400">
				Elevate your business with our convenient in-app payment solutions.
			</p>
			<div className="mb-2.5 flex">{slider}</div>
			<div className="flex gap-4">
				{!responsiveState.isPhone ? (
					<Button
						clickHandler={() => {
							handleFormSubmit();
						}}
						white
					>
						Enquire Now
					</Button>
				) : (
					<>
						{index === 1 ? (
							<Button white className="f-full" customRef={nextButtonRef}>
								Next
							</Button>
						) : (
							<Button customRef={prevButtonRef}>Back</Button>
						)}
						{index === 2 && (
							<Button
								clickHandler={() => {
									handleFormSubmit();
								}}
								white
							>
								Enquire Now
							</Button>
						)}
					</>
				)}
			</div>
			<div className="min-h-[1rem] grow-2" />
		</div>
	);
}

export default Form;
