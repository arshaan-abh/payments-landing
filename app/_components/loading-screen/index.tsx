import { type FC, useState, useLayoutEffect } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../../public/loading.json";

interface LoadingScreenProps {}

const LoadingScreen: FC<LoadingScreenProps> = ({}) => {
	const [loading, setLoading] = useState(true);

	useLayoutEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>;

		const handleLoad = () => {
			timeoutId = setTimeout(() => {
				setLoading(false);
			}, 1000);
		};

		document.body.style.overflow = loading ? "hidden" : "auto";

		addEventListener("load", handleLoad);

		return () => {
			removeEventListener("load", handleLoad);
			clearTimeout(timeoutId);
		};
	}, [loading]);

	const variableClassName = loading ? "" : "pointer-events-none opacity-0";

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300 ${variableClassName}`}
		>
			<Lottie className="w-32" animationData={loadingAnimation} />
		</div>
	);
};

export default LoadingScreen;
