"use client";

interface props {
	checkedList: any;
	labels: string[];
	handleCheckBox: (index: any) => void;
}

const Options = (props: props) => {
	const { checkedList, handleCheckBox, labels } = props;

	return (
		<div>
			<div className="flex items-center justify-center py-5">
				<p className="text-xl text-secondary font-bold">
					Select your favorite solutions
				</p>
			</div>
			<div className="grid grid-cols-12 gap-2">
				<div className="col-span-10 col-start-2 lg:col-span-11 lg:col-start-2 xl:col-start-3 grid grid-cols-12 gap-2 lg:gap-3">
					{labels.map((label, index) => (
						<div
							key={index}
							className={`flex items-center lg:pl-1 border ${
								checkedList[index] ? "border-[#FAFAFA]" : "border-gray_1"
							} rounded-md  dark:border-gray-700 h-[100px] lg:h-10 ${
								index === 0
									? "col-span-6 lg:col-span-5"
									: index === 1
									? "col-span-6 lg:col-span-7"
									: index === 2
									? "col-span-6 lg:col-span-7"
									: index === 3
									? "col-span-6 lg:col-span-5"
									: index === 4
									? "col-span-6 lg:col-span-6"
									: index === 5
									? "col-span-6 lg:col-span-6"
									: "col-span-6 lg:col-span-12"
							}`}
						>
							<input
								id={`bordered-checkbox-${index}`}
								type="checkbox"
								onChange={() => handleCheckBox(index)}
								name={`bordered-checkbox-${index}`}
								className="checkbox-round"
							/>
							<label
								htmlFor={`bordered-checkbox-${index}`}
								className="w-full py-4 ml-2 text-sm font-medium text-[#FAFAFA] dark:text-gray-300"
							>
								{label}
							</label>
						</div>
					))}
					<div className="col-span-12">
						<textarea
							id="message"
							rows={1}
							disabled={checkedList[11] ? false : true}
							className="block p-2.5 w-full text-sm text-gray-900 bg-primary rounded-lg border "
							placeholder="Other description"
						></textarea>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Options;
