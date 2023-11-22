import type { FC, ReactNode } from "react";
import Stack from "../stack";

interface HoverableProps {
	children: ReactNode;
}

const Hoverable: FC<HoverableProps> = ({ children }) => {
	return (
		<Stack
			containerClassName="w-full hover:[--border:50%] hover:[--rounded:0]"
			overLayer={
				<>
					<div
						className="bg-gray-600 h-0.5 absolute top-0 right-0 transition-all"
						style={{ width: "var(--border, 0.5rem)" }}
					/>
					<div
						className="bg-gray-600 w-0.5 absolute top-0 right-0 transition-all"
						style={{ height: "var(--border, 0.5rem)" }}
					/>

					<div
						className="bg-gray-600 h-0.5 absolute bottom-0 right-0 transition-all"
						style={{ width: "var(--border, 0.5rem)" }}
					/>
					<div
						className="bg-gray-600 w-0.5 absolute bottom-0 right-0 transition-all"
						style={{ height: "var(--border, 0.5rem)" }}
					/>

					<div
						className="bg-gray-600 h-0.5 absolute bottom-0 left-0 transition-all"
						style={{ width: "var(--border, 0.5rem)" }}
					/>
					<div
						className="bg-gray-600 w-0.5 absolute bottom-0 left-0 transition-all"
						style={{ height: "var(--border, 0.5rem)" }}
					/>

					<div
						className="bg-gray-600 h-0.5 absolute top-0 left-0 transition-all"
						style={{ width: "var(--border, 0.5rem)" }}
					/>
					<div
						className="bg-gray-600 w-0.5 absolute top-0 left-0 transition-all"
						style={{ height: "var(--border, 0.5rem)" }}
					/>
				</>
			}
		>
			<div
				className="overflow-hidden transition-all"
				style={{ borderRadius: "var(--rounded, 2.5rem)" }}
			>
				{children}
			</div>
		</Stack>
	);
};

export default Hoverable;
