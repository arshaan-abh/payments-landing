"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { number, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EnquireRequest } from "@/app/@types/enquireRequest";
import FormSection from "./form";
import Checkbox from "./Checkbox";
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

	return (
		<div className="w-full h-full px-10 lg:px-20 xl:px-30 xl:max-w-screen-1.5xl flex items-center">
			<div className="bg-primary rounded-xl flex flex-col items-center p-16">
				<h3 className="text-secondary text-4xl font-montserrat font-extrabold mb-2">
					Begin Your Next Chapter Now!
				</h3>
				<p className="font-lato text-lg font-medium text-gray-400 mb-8">
					Elevate your business with our convenient in-app payment solutions.
				</p>
				<div className="flex w-full justify-evenly">
					<div className="flex flex-col basis-1/2">
						<p className="font-lato text-xl text-secondary font-extrabold text-center mb-4">
							Select your favorite solutions
						</p>
						<div className="flex flex-wrap gap-3 mb-3">
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
						<div className="col-span-12">
							<textarea
								id="message"
								rows={1}
								disabled={checkableList[11] ? false : true}
								className="block p-2.5 w-full text-sm text-gray-900 bg-primary rounded-lg border "
								placeholder="Other description"
							></textarea>
						</div>
					</div>
					<FormSection control={control} errors={errors} />
				</div>
				{/* <div className="col-span-12 grid grid-cols-12">
					<button
						className="col-span-10 col-start-2 lg:col-span-4 lg:col-start-5 bg-secondary my-10 rounded-md p-4"
						onClick={handleFormSubmit}
					>
						Enquire Now
					</button>
				</div> */}
			</div>
		</div>
	);
}

export default Form;
