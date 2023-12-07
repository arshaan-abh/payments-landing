import { Control, Controller, FieldErrors, RefCallBack } from "react-hook-form";

import { EnquireRequest } from "@/app/@types/enquireRequest";
import { DetailedHTMLProps, FC } from "react";

interface FormSectionProps {
	control: Control<EnquireRequest, any>;
	errors: FieldErrors<EnquireRequest>;
}

const FormSection: FC<FormSectionProps> = ({ control, errors }) => {
	return (
		<div className="flex basis-1/2 flex-col">
			<p className="mb-4 text-center text-xl font-extrabold text-white">
				Begin your next chapter now!
			</p>
			<form className="flex w-full flex-col justify-center rounded-md">
				<div>
					<Controller
						name="name"
						control={control}
						render={({ field: { ref, ...otherFields } }) => (
							<div className="w-full">
								<CustomTextField
									customRef={ref}
									{...otherFields}
									type="text"
									id="name"
									placeholder="Full name"
									error={!!errors.name}
									helperText={errors.name?.message ?? " "}
									className="w-full"
								/>
							</div>
						)}
					/>
				</div>
				<div>
					<Controller
						name="companyName"
						control={control}
						render={({ field: { ref, ...otherFields } }) => (
							<div className="w-full">
								<CustomTextField
									{...otherFields}
									customRef={ref}
									type="text"
									id="companyName"
									placeholder="Company name"
									error={!!errors.companyName}
									helperText={errors.companyName?.message ?? " "}
									className="w-full"
								/>
							</div>
						)}
					/>
				</div>
				<div>
					<Controller
						name="email"
						control={control}
						render={({ field: { ref, ...otherFields } }) => (
							<div className="w-full">
								<CustomTextField
									{...otherFields}
									customRef={ref}
									type="email"
									id="email"
									placeholder="Email"
									error={!!errors.email}
									helperText={errors.email?.message ?? " "}
									className="w-full"
								/>
							</div>
						)}
					/>
				</div>
				<div>
					<Controller
						name="phone"
						control={control}
						render={({ field: { ref, ...otherFields } }) => (
							<div className="w-full">
								<CustomTextField
									{...otherFields}
									customRef={ref}
									type="number"
									id="phone"
									placeholder="Phone"
									error={!!errors.phone}
									helperText={errors.phone?.message ?? " "}
									className="w-full"
								/>
							</div>
						)}
					/>
				</div>
				<div>
					<Controller
						name="webUrl"
						control={control}
						render={({ field: { ref, ...otherFields } }) => (
							<div className="w-full ">
								<CustomTextField
									{...otherFields}
									customRef={ref}
									type="text"
									id="webUrl"
									placeholder="Website url"
									error={!!errors.webUrl}
									helperText={errors.webUrl?.message ?? " "}
									className="w-full"
								/>
							</div>
						)}
					/>
				</div>
				<div>
					<Controller
						name="description"
						control={control}
						render={({ field: { ref, ...otherFields } }) => (
							<div className="flex w-full flex-col">
								<CustomTextArea
									{...otherFields}
									customRef={ref}
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
	customRef: RefCallBack;
}

const CustomTextField: FC<CustomTextFieldProps> = (props) => {
	const { error, helperText, className, customRef, ref, ...otherProps } = props;

	const inputErrorClasses = error
		? "border-red-500 placeholder:text-red-500"
		: "border-white placeholder:text-[#fafafa]";
	const helperErrorClasses = error
		? "text-red-500 h-8 leading-8 opacity-100"
		: "text-white h-4 leading-4 opacity-0";

	return (
		<>
			<input
				ref={customRef}
				className={`rounded-md border-2 bg-white/10 p-4 text-base font-normal text-[#fafafa] outline-none ${inputErrorClasses} ${className}`}
				{...otherProps}
			/>
			<div
				title={helperText}
				className={`${helperErrorClasses} transition-opacity-h line-clamp-1 text-base font-normal`}
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
	customRef: RefCallBack;
}

const CustomTextArea: FC<CustomTextAreaProps> = (props) => {
	const { error, helperText, className, customRef, ref, ...otherProps } = props;

	const inputErrorClasses = error
		? "border-red-500 placeholder:text-red-500"
		: "border-white placeholder:text-[#fafafa]";
	const helperErrorClasses = error
		? "text-red-500 h-8 leading-8 opacity-100"
		: "text-white h-4 leading-4 opacity-0";

	return (
		<>
			<textarea
				ref={customRef}
				className={`rounded-md border-2 bg-white/10 p-4 text-base font-normal text-[#fafafa] outline-none ${inputErrorClasses} ${className}`}
				{...otherProps}
			/>
			<div
				title={helperText}
				className={`${helperErrorClasses} transition-opacity-h line-clamp-1 text-base font-normal`}
			>
				{helperText}
			</div>
		</>
	);
};
