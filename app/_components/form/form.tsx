"use client";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import { TextField } from "@mui/material";
import { EnquireRequest } from "@/app/@types/enquireRequest";
import { FC } from "react";

interface FormSectionProps {
	control: Control<EnquireRequest, any>;
	errors: FieldErrors<EnquireRequest>;
}

const FormSection: FC<FormSectionProps> = ({ control, errors }) => {
	const CustomTextField = styled(TextField)({
		"& .MuiOutlinedInput-notchedOutline": {
			borderColor: "white",
			borderRadius: "0.375rem /* 6px */",
		},
		"& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
			borderColor: "white", // Change the border color on hover
		},
		"& .MuiFormLabel-root": {
			color: "#fafafa", // Change the placeholder text color
		},
		"& .MuiInputBase-input": {
			color: "white", // Change the text color
			fontFamily: "var(--font-lato)",
			fontWeight: 400 /* font-normal */,
			fontSize: "1rem" /* 16px */,
		},
		"& .MuiOutlinedInput-root": {
			"&.Mui-error fieldset": {
				borderColor: "CE7272", // Change the outline color when there's an error
			},
			"& fieldset": {
				backgroundColor: "#ffffff0a",
				borderColor: "white", // Change the outline color when not focused
			},
			"&.Mui-focused fieldset": {
				borderColor: "white", // Change the outline color when focused
			},
		},
		"& .MuiFormHelperText-root": {
			color: "CE7272", // Change the color of the helper text
			marginBottom: "0.125rem" /* 2px */,
			marginTop: "0.125rem" /* 2px */,
		},
	});

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
										label="Full name"
										error={!!errors.name}
										helperText={errors.name?.message ?? " "}
										variant="outlined"
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
										label="Company name"
										error={!!errors.companyName}
										helperText={errors.companyName?.message ?? " "}
										variant="outlined"
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
										label="Email"
										error={!!errors.email}
										helperText={errors.email?.message ?? " "}
										variant="outlined"
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
										label="Phone"
										error={!!errors.phone}
										helperText={errors.phone?.message ?? " "}
										variant="outlined"
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
										label="Website url"
										error={!!errors.webUrl}
										helperText={errors.webUrl?.message ?? " "}
										variant="outlined"
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
								<CustomTextField
									{...field}
									type="text"
									id="description"
									label="Description"
									error={!!errors.description}
									helperText={errors.description?.message ?? " "}
									variant="outlined"
									className="w-full"
									multiline
									rows={3}
									FormHelperTextProps={{ style: { display: "none" } }}
								></CustomTextField>
							</div>
						)}
					/>
				</div>
			</form>
		</div>
	);
};

export default FormSection;
