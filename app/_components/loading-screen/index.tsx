import { type FC } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../../public/loading.json";

interface LoadingScreenProps {}

const LoadingScreen: FC<LoadingScreenProps> = ({}) => {
	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center bg-white`}
		>
			<Lottie className="w-32" animationData={loadingAnimation} />
		</div>
	);
};

export default LoadingScreen;
