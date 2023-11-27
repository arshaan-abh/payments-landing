"use client";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { EnquireRequest } from "@/app/@types/enquireRequest";
import { DetailedHTMLProps, FC } from "react";

interface FormSectionProps {
	control: Control<EnquireRequest, any>;
	errors: FieldErrors<EnquireRequest>;
}

const FormSection: FC<FormSectionProps> = ({ control, errors }) => {
	const theme = createTheme();
	return (
		<div className="flex basis-1/2 flex-col">
			<p className="mb-4 text-center text-xl font-extrabold text-secondary">
				Begin your next chapter now!
			</p>
			<form className="flex w-full flex-col justify-center rounded-md">
				<div>
					<Controller
						name="name"
						control={control}
						render={({ field }) => (
							<div className="w-full">
								<ThemeProvider theme={theme}>
									<CustomTextField
										{...field}
										type="text"
										id="name"
										placeholder="Full name"
										error={!!errors.name}
										helperText={errors.name?.message ?? " "}
										className="w-full"
									/>
								</ThemeProvider>
							</div>
						)}
					/>
				</div>
				<div>
					<Controller
						name="companyName"
						control={control}
						render={({ field }) => (
							<div className="w-full">
								<ThemeProvider theme={theme}>
									<CustomTextField
										{...field}
										type="text"
										id="companyName"
										placeholder="Company name"
										error={!!errors.companyName}
										helperText={errors.companyName?.message ?? " "}
										className="w-full"
									/>
								</ThemeProvider>
							</div>
						)}
					/>
				</div>
				<div>
					<Controller
						name="email"
						control={control}
						render={({ field }) => (
							<div className="w-full">
								<ThemeProvider theme={theme}>
									<CustomTextField
										{...field}
										type="email"
										id="email"
										placeholder="Email"
										error={!!errors.email}
										helperText={errors.email?.message ?? " "}
										className="w-full"
									/>
								</ThemeProvider>
							</div>
						)}
					/>
				</div>
				<div>
					<Controller
						name="phone"
						control={control}
						render={({ field }) => (
							<div className="w-full">
								<ThemeProvider theme={theme}>
									<CustomTextField
										{...field}
										type="number"
										id="phone"
										placeholder="Phone"
										error={!!errors.phone}
										helperText={errors.phone?.message ?? " "}
										className="w-full"
									/>
								</ThemeProvider>
							</div>
						)}
					/>
				</div>
				<div>
					<Controller
						name="webUrl"
						control={control}
						render={({ field }) => (
							<div className="w-full ">
								<ThemeProvider theme={theme}>
									<CustomTextField
										{...field}
										type="text"
										id="webUrl"
										placeholder="Website url"
										error={!!errors.webUrl}
										helperText={errors.webUrl?.message ?? " "}
										className="w-full"
									/>
								</ThemeProvider>
							</div>
						)}
					/>
				</div>
				<div>
					<Controller
						name="description"
						control={control}
						render={({ field }) => (
							<div className="w-full ">
								<CustomTextArea
									{...field}
									id="description"
									placeholder="Description"
									error={!!errors.description}
									helperText={errors.description?.message ?? " "}
									className="w-full"
									rows={3}
								/>
							</div>
						)}
					/>
				</div>
			</form>
		</div>
	);
};

export default FormSection;

interface CustomTextFieldProps
	extends DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	error: boolean;
	helperText: string;
}

const CustomTextField: FC<CustomTextFieldProps> = (props) => {
	const { error, helperText, className, ...otherProps } = props;

	const inputErrorClasses = error
		? "border-red-500 placeholder:text-red-500"
		: "border-white placeholder:text-[#fafafa]";
	const helperErrorClasses = error ? "text-red-500" : "text-white";

	return (
		<>
			<input
				className={`rounded-md border bg-[#ffffff0a] p-4 text-base font-normal text-[#fafafa] outline-none ${inputErrorClasses} ${className}`}
				{...otherProps}
			/>
			<div
				title={helperText}
				className={`my-1 h-6 ${helperErrorClasses} line-clamp-1`}
			>
				{helperText}
			</div>
		</>
	);
};

interface CustomTextAreaProps
	extends DetailedHTMLProps<
		React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	error: boolean;
	helperText: string;
}

const CustomTextArea: FC<CustomTextAreaProps> = (props) => {
	const { error, helperText, className, ...otherProps } = props;

	const inputErrorClasses = error
		? "border-red-500 placeholder:text-red-500"
		: "border-white placeholder:text-[#fafafa]";
	const helperErrorClasses = error ? "text-red-500" : "text-white";

	return (
		<>
			<textarea
				className={`rounded-md border bg-[#ffffff0a] p-4 text-base font-normal text-[#fafafa] outline-none ${inputErrorClasses} ${className}`}
				{...otherProps}
			/>
			<div
				title={helperText}
				className={`my-1 h-6 ${helperErrorClasses} line-clamp-1`}
			>
				{helperText}
			</div>
		</>
	);
};
