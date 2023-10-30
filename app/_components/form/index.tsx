"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { array, number, object, ObjectSchema, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EnquireRequest } from "@/app/@types/enquireRequest";
import FormSection from "./form";
import Options from "./options";
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
		"Business’s Credit adn Bank Account Issuing ",
		"Others",
	];
	const [labels] = useState<string[]>(initialLabels);
	const [checkedList, setCheckedList] = useState<boolean[]>(
		new Array(initialLabels.length).fill(false)
	);

	// Function to update the checkedList state
	const handleCheckBox = (index: any) => {
		const updatedList = [...checkedList];
		updatedList[index] = !checkedList[index];
		setCheckedList(updatedList);
	};
	const handleFormSubmit = () => {
		// Access the form data using getValues()
		const formData = getValues();
		formData.checkedList = checkedList;
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

	return (
		<div className="grid grid-cols-12 bg-primery rounded-xl xl:mx-[120px]">
			<div className="col-span-12 flex flex-col items-center justify-center my-14 lg:my-20 px-5 lg:px-0">
				<h2 className="text-secondary text-2xl lg:text-[40px] font-mono font-extrabold text-center lg:text-start">
					Begin Your Next Chapter Now!
				</h2>
				<p className="text-base lg:text-lg font-normal lg:font-medium text-gray_4 text-center lg:text-start mt-3 lg:mt-0">
					Elevate your business with our convenient in-app payment solutions.
				</p>
			</div>
			<div className="col-span-12 lg:col-span-6">
				<Options
					checkedList={checkedList}
					handleCheckBox={handleCheckBox}
					labels={labels}
				/>
			</div>
			<div className="col-span-10 col-start-2 col-end-12 lg:col-span-5 lg:col-end-13 lg:pr-5">
				<FormSection control={control} errors={errors} />
			</div>
			<div className="col-span-12 grid grid-cols-12">
				<button
					className="col-span-10 col-start-2 lg:col-span-4 lg:col-start-5 bg-secondary my-10 rounded-md p-4"
					onClick={handleFormSubmit}
				>
					Enquire Now
				</button>
			</div>
		</div>
	);
}

export default Form;
