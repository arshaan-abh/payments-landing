"use client";
import { Controller } from "react-hook-form";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import { TextField } from "@mui/material";

interface props {
	control: any;
	errors: any;
}

function FormSection(props: props) {
	const { control, errors } = props;

	const CustomTextField = styled(TextField)({
		"& .MuiOutlinedInput-notchedOutline": {
			borderColor: "white",
		},
		"& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
			borderColor: "white", // Change the border color on hover
		},
		"& .MuiFormLabel-root": {
			color: "white", // Change the placeholder text color
		},
		"& .MuiInputBase-input": {
			color: "white", // Change the text color
		},
		"& .MuiOutlinedInput-root": {
			"&.Mui-error fieldset": {
				borderColor: "CE7272", // Change the outline color when there's an error
			},
			"& fieldset": {
				borderColor: "white", // Change the outline color when not focused
			},
			"&.Mui-focused fieldset": {
				borderColor: "white", // Change the outline color when focused
			},
		},
		"& .MuiFormHelperText-root": {
			color: "CE7272", // Change the color of the helper text
		},
	});

	const theme = createTheme();
	return (
		<div className="grid grid-cols-12 items-center">
			<div className="col-span-12 flex justify-center items-center py-5">
				<p className="text-xl text-secondary font-bold">
					Begin your next chapter now!
				</p>
			</div>
			<div className="col-span-12 flex justify-center items-center">
				<form className="rounded-md w-full max-w-md flex flex-col justify-center">
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
											label="company name"
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
											label="phone"
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
									<textarea
										{...field}
										id="description"
										rows={5}
										className="block p-2.5 w-full text-sm text-secondary bg-primery rounded-lg border "
										placeholder="Description"
									></textarea>
								</div>
							)}
						/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default FormSection;
