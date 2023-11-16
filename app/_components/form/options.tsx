"use client";
import Checkbox from "./Checkbox";

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
					<Checkbox key={index}>{label}</Checkbox>
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
