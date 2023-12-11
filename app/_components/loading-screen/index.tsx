import { useEffect, type FC, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../../public/loading.json";

interface LoadingScreenProps {}

const LoadingScreen: FC<LoadingScreenProps> = ({}) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const handleLoad = () => {
			setLoading(false);
		};

		window.addEventListener("load", handleLoad);

		return () => {
			window.removeEventListener("load", handleLoad);
		};
	}, []);

	const variableClassName = loading ? "flex" : "hidden";

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center bg-white ${variableClassName}`}
		>
			<Lottie className="w-32" animationData={loadingAnimation} />
		</div>
	);
};

export default LoadingScreen;
