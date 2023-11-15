"use client";

interface props {
	checkedList: any;
	labels: string[];
	handleCheckBox: (index: any) => void;
}

const Options = (props: props) => {
	const { checkedList, handleCheckBox, labels } = props;

	return (
		<div className="flex flex-col basis-1/2">
			<p className="font-lato text-xl text-secondary font-extrabold text-center mb-4">
				Select your favorite solutions
			</p>
			<div className="flex flex-wrap gap-3 mb-3">
				{labels.map((label, index) => (
					<div
						key={index}
						className={`flex items-center border pr-4 ${
							checkedList[index] ? "border-white" : "border-gray-100"
						} rounded-md dark:border-gray-700 h-[100px] lg:h-10 `}
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
			</div>
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
	);
};

export default Options;
