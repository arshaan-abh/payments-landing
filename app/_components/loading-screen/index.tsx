import { useEffect, type FC, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../../public/loading.json";

interface LoadingScreenProps {}

const LoadingScreen: FC<LoadingScreenProps> = ({}) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const handleLoad = () => {
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		};

		document.body.style.overflow = loading ? "hidden" : "auto";

		window.addEventListener("load", handleLoad);

		return () => {
			window.removeEventListener("load", handleLoad);
		};
	}, [loading]);

	const variableClassName = loading ? "" : "pointer-event-none opacity-0";

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300 ${variableClassName}`}
		>
			<Lottie className="w-32" animationData={loadingAnimation} />
		</div>
	);
};

export default LoadingScreen;
