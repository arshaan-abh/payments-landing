import { type FC, useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "@/public/loading.json";

interface LoadingScreenProps {}

const LoadingScreen: FC<LoadingScreenProps> = ({}) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>;

		document.body.style.overflow = loading ? "hidden" : "auto";

		timeoutId = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [loading]);

	const variableClassName = loading ? "" : "pointer-events-none opacity-0";

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300 ${variableClassName}`}
		>
			<Player className="w-32" src={loadingAnimation} loop autoplay />
		</div>
	);
};

export default LoadingScreen;
