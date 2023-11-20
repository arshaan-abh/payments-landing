import { FC } from "react";

interface IconProps {
	className?: string;
}

export const PlusIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24"
			width="24"
			className={className}
			fill="currentColor"
		>
			<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
		</svg>
	);
};

export const EnquireIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			className={className}
			fill="none"
		>
			<path
				d="M3 4.2a.2.2 0 0 1 .2-.2h17.6a.2.2 0 0 1 .2.2v13.2a.2.2 0 0 1-.2.2h-6.61a.2.2 0 0 0-.089.021l-6.526 3.236a.2.2 0 0 1-.289-.179V17.8a.2.2 0 0 0-.2-.2H3.2a.2.2 0 0 1-.2-.2V4.2zM7.286 11a.2.2 0 0 1 .2-.2h.457a.2.2 0 0 1 .2.2v.45a.2.2 0 0 1-.2.2h-.457a.2.2 0 0 1-.2-.2V11zm4.286 0a.2.2 0 0 1 .2-.2h.457a.2.2 0 0 1 .2.2v.45a.2.2 0 0 1-.2.2h-.457a.2.2 0 0 1-.2-.2V11zm4.286 0a.2.2 0 0 1 .2-.2h.457a.2.2 0 0 1 .2.2v.45a.2.2 0 0 1-.2.2h-.457a.2.2 0 0 1-.2-.2V11z"
				stroke="currentColor"
				stroke-width="2"
			/>
		</svg>
	);
};

export const CallUsIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			className={className}
		>
			<path
				d="M2 2h8.171l1.416 6.371-1.771 1.771a13.41 13.41 0 0 0 4.041 4.04l1.771-1.77L22 13.829V22h-.952a18.96 18.96 0 0 1-10.333-3.044c-2.269-1.469-4.202-3.401-5.67-5.67A18.96 18.96 0 0 1 2 2.952V2zm1.93 1.905a17.04 17.04 0 0 0 2.713 8.347 17.24 17.24 0 0 0 5.105 5.105 17.04 17.04 0 0 0 8.347 2.713v-4.713l-3.86-.857-2.07 2.071-.631-.359c-2.397-1.363-4.382-3.347-5.745-5.745l-.359-.631 2.071-2.07-.857-3.86H3.931z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const ThreeDotsIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="currentColor"
			className={className}
		>
			<circle cx="6" cy="12" r="2" />
			<circle cx="12" cy="12" r="2" />
			<circle cx="18" cy="12" r="2" />
		</svg>
	);
};

export const LinkedinIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			className={className}
		>
			<path
				d="M6.938 4.999a2 2 0 0 1-2.001 1.999 2 2 0 0 1-1.999-2.001 2 2 0 0 1 2.001-1.999 2 2 0 0 1 1.999 2.001zm.06 3.48h-4v12.52h4V8.479zm6.32 0h-3.98v12.52h3.94v-6.57c0-3.66 4.77-4 4.77 0v6.57h3.95v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const TwitterIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			className={className}
		>
			<path
				d="M17.751 3h3.067l-6.7 7.658L22 21.078h-6.172l-4.834-6.32-5.531 6.32H2.394l7.166-8.191L2 3h6.327l4.369 5.777L17.749 3h.002zm-1.076 16.243h1.699L7.405 4.739H5.581l11.093 14.503z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const EnquireNowIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="97"
			height="96"
			fill="none"
			className={className}
		>
			<g fillRule="evenodd" fill="currentColor">
				<path d="M52.046 56.24c1.347-1.117 2.02-2.576 2.02-4.374s-.526-3.167-1.576-4.106-2.531-1.642-4.433-2.109-3.116-.873-3.641-1.221-.792-.806-.792-1.392.215-1.051.644-1.406 1.021-.533 1.768-.533c1.857 0 3.657.659 5.395 1.983l2.265-3.272c-.992-.843-2.161-1.495-3.501-1.953a12.36 12.36 0 0 0-4.019-.689c-2.05 0-3.751.518-5.12 1.546-1.369 1.037-2.05 2.501-2.05 4.404s.54 3.3 1.621 4.188 2.789 1.614 5.121 2.169c1.472.362 2.457.726 2.954 1.074a1.67 1.67 0 0 1 .747 1.436c0 .607-.236 1.081-.703 1.436l.014.007c-.467.355-1.117.533-1.939.533-1.836 0-3.833-.946-6.002-2.842l-2.672 3.27c2.546 2.354 5.402 3.531 8.578 3.531 2.198 0 3.973-.563 5.32-1.681l.004.002zm3.863-2.64a2.44 2.44 0 0 0-.733 1.791 2.44 2.44 0 0 0 2.523 2.523 2.44 2.44 0 0 0 2.523-2.523 2.44 2.44 0 0 0-2.523-2.524 2.44 2.44 0 0 0-1.791.733z" />
			</g>
			<path
				d="M23.691 26.385l-.87-.869 3.623-3.625 4.682 4.679-3.535 3.538-.87-.869 2.46-2.46-1.017-1.016-2.173 2.175-.842-.841 2.172-2.175-1.083-1.082-2.547 2.549-.001-.002zm.103 9.709l-5.701-3.36.639-1.084 5.138-.803-3.462-2.04.769-1.304 5.702 3.361-.644 1.091-5.134.795 3.462 2.04-.769 1.304v-.002zm-9.555 5.997c-.194-.279-.316-.585-.365-.917s-.022-.674.081-1.025c.137-.473.362-.869.675-1.192s.799-.655 1.455-.997c.239-.553.573-1.014 1-1.379s.911-.605 1.454-.72a3.38 3.38 0 0 1 1.666.074c.623.181 1.141.493 1.555.938a3.29 3.29 0 0 1 .816 1.586c.131.613.101 1.248-.09 1.908s-.506 1.211-.942 1.656a3.33 3.33 0 0 1-1.537.903c-.587.157-1.193.147-1.816-.033a3.29 3.29 0 0 1-1.763-1.186 3.35 3.35 0 0 1-.684-1.985c-.202.106-.358.22-.468.342a1.08 1.08 0 0 0-.237.428c-.113.394-.057.784.172 1.172l-.97.427zm5.537-4.666c-.394-.115-.769-.131-1.128-.046a1.95 1.95 0 0 0-.928.504 2.1 2.1 0 0 0-.554.942 2.1 2.1 0 0 0-.036 1.093 1.95 1.95 0 0 0 .515.923 2.21 2.21 0 0 0 .979.564c.394.113.77.131 1.128.046a1.95 1.95 0 0 0 .928-.504 2.1 2.1 0 0 0 .553-.942 2.1 2.1 0 0 0 .036-1.093 1.95 1.95 0 0 0-.515-.923c-.258-.264-.585-.451-.979-.564zm-5.092 10.011c-.01-.946.245-1.685.763-2.216s1.262-.801 2.233-.812l3.707-.037.015 1.532-3.649.036c-1.185.011-1.773.508-1.763 1.493.006.479.151.843.441 1.092s.739.37 1.351.364l3.649-.036.015 1.513-3.707.036c-.971.009-1.72-.247-2.248-.767s-.797-1.254-.807-2.2l.001.003zm1.547 9.927l1.473-1.691-.02-.074-.328-1.292-1.788.454-.378-1.485 6.416-1.628.705 2.777c.143.568.174 1.085.091 1.551s-.27.857-.562 1.172-.674.532-1.15.653-.916.111-1.321-.031-.75-.4-1.041-.776l-1.697 1.962-.404-1.595.002.003zm4.081-1.065c.36-.09.608-.278.741-.558s.144-.645.031-1.091l-.306-1.21-2.237.567.306 1.21c.113.446.296.76.551.943s.558.229.913.139l.002-.001zm.78 8.856l-1.084.578-2.408-4.524 5.843-3.109 2.35 4.416-1.085.578-1.634-3.072-1.269.675 1.443 2.713-1.052.559-1.443-2.713-1.353.719 1.692 3.18zm11.939 4.906l-4.438 4.912-.933-.843.245-5.194-2.694 2.981-1.123-1.014 4.439-4.91.94.849-.254 5.188 2.694-2.981 1.123 1.015.001-.002zm.878 7.998c-.623-.288-1.125-.68-1.501-1.181a3.31 3.31 0 0 1-.665-1.655 3.34 3.34 0 0 1 .309-1.788c.271-.589.658-1.055 1.158-1.397s1.065-.532 1.689-.571 1.25.086 1.873.374 1.123.681 1.497 1.178a3.34 3.34 0 0 1 .664 1.653c.069.603-.033 1.201-.306 1.791s-.66 1.054-1.163 1.395a3.35 3.35 0 0 1-1.689.571c-.621.041-1.245-.084-1.87-.372l.002.001zm.546-1.185a2.1 2.1 0 0 0 1.074.199 1.94 1.94 0 0 0 .989-.372c.298-.216.532-.51.704-.884a2.21 2.21 0 0 0 .214-1.109 1.94 1.94 0 0 0-.359-.995 2.08 2.08 0 0 0-.848-.687 2.11 2.11 0 0 0-1.074-.199 1.95 1.95 0 0 0-.989.372c-.298.216-.532.51-.704.884s-.243.741-.214 1.109a1.93 1.93 0 0 0 .359.993c.21.295.493.524.848.687l.001.002zm15.759-1.749l-3.037 6.268-1.63-.222-.839-4.637-2.093 4.239-1.62-.221-1.264-6.852 1.573.213.854 4.811 2.172-4.399 1.406.191.868 4.85 2.158-4.439 1.452.196v.002zm.575-.57l1.749-.185.164 4.328-1.165.123-.746-4.267-.002.001zm1.58 6.565a.9.9 0 0 1-.671-.18.81.81 0 0 1-.323-.58.79.79 0 0 1 .19-.624c.152-.177.359-.28.623-.308a.91.91 0 0 1 .675.171.79.79 0 0 1 .317.571.82.82 0 0 1-.195.634c-.155.185-.361.29-.619.317l.003-.001zm-.104-66.227l.026-1.23-5.124-.107-.139 6.618 5.001.105.026-1.23-3.479-.072.03-1.437 3.073.065.025-1.19-3.073-.065.032-1.531 3.603.076-.001-.002zm6.648 7.077l1.788-6.372-1.212-.339-4.263 2.978 1.086-3.869-1.458-.409-1.787 6.373 1.22.342 4.255-2.981-1.086 3.869 1.458.409v-.002zM69.96 19.68c-.053-.336-.177-.64-.372-.915s-.451-.502-.768-.683c-.426-.247-.863-.377-1.312-.392s-1.03.081-1.74.288c-.555-.234-1.115-.335-1.676-.303a3.23 3.23 0 0 0-1.548.487 3.38 3.38 0 0 0-1.151 1.207c-.325.562-.481 1.146-.472 1.753a3.3 3.3 0 0 0 .509 1.709c.33.532.791.971 1.386 1.315s1.203.524 1.827.543a3.33 3.33 0 0 0 1.734-.413c.532-.293.963-.72 1.287-1.282.384-.665.536-1.358.451-2.076s-.376-1.353-.881-1.906c.219-.064.41-.089.574-.077a1.09 1.09 0 0 1 .468.145c.354.206.584.526.687.965l.995-.364zm-7.226.466a2.19 2.19 0 0 1 .782-.815 1.92 1.92 0 0 1 1.018-.279c.363.002.714.101 1.051.296s.599.45.782.764a1.95 1.95 0 0 1 .267 1.022c-.006.368-.11.73-.316 1.084s-.465.627-.782.815-.655.281-1.018.279-.714-.101-1.051-.296-.6-.45-.782-.764-.271-.653-.267-1.022a2.18 2.18 0 0 1 .316-1.084zm10.605 3.698c-.648-.689-1.344-1.046-2.085-1.071s-1.465.296-2.173.96l-2.7 2.54 1.049 1.116 2.659-2.5c.863-.812 1.631-.861 2.306-.143.327.349.474.713.438 1.093s-.277.779-.723 1.198l-2.659 2.5 1.037 1.102 2.7-2.541c.707-.665 1.07-1.369 1.091-2.11s-.293-1.457-.941-2.147l.001.003zm5.757 8.234l-2.234-.2-.037-.067-.658-1.159 1.604-.91-.755-1.333-5.757 3.267 1.414 2.492c.29.509.626.903 1.008 1.183s.788.431 1.216.456.854-.083 1.282-.325.738-.554.931-.937.264-.808.214-1.28l2.582.24-.813-1.431.001.003zm-3.683 2.057c-.322.184-.631.22-.921.11s-.551-.366-.777-.766l-.617-1.085 2.007-1.14.617 1.085c.227.4.313.754.256 1.062s-.245.552-.562.733h-.002zm5.569 6.93l1.183-.334-1.395-4.932-6.369 1.802 1.362 4.814 1.182-.334-.947-3.348 1.383-.391.837 2.956 1.147-.325-.837-2.956 1.474-.418.98 3.466zm-5.218 11.806l6.603.472.09-1.254-3.773-3.578 4.008.286.108-1.51-6.602-.47-.09 1.264 3.775 3.568-4.008-.286-.108 1.51-.002-.001zm4.903 6.379c.25-.639.341-1.27.265-1.891s-.295-1.172-.666-1.654-.858-.839-1.461-1.076-1.205-.306-1.803-.206-1.137.353-1.614.758a3.85 3.85 0 0 0-1.092 1.567c-.25.64-.339 1.269-.265 1.887a3.34 3.34 0 0 0 .666 1.653 3.3 3.3 0 0 0 1.46 1.08c.605.236 1.206.304 1.805.201s1.137-.357 1.614-.758.84-.923 1.092-1.563l-.001.002zm-1.215-.477a2.1 2.1 0 0 1-.637.887c-.283.227-.606.366-.971.416s-.737 0-1.12-.151a2.22 2.22 0 0 1-.923-.652 1.94 1.94 0 0 1-.429-.966c-.052-.358-.007-.72.136-1.083a2.11 2.11 0 0 1 .637-.887 1.95 1.95 0 0 1 .971-.416c.364-.05.737 0 1.12.151a2.22 2.22 0 0 1 .923.652 1.93 1.93 0 0 1 .429.965c.052.358.007.72-.136 1.083l.001.002zM66.87 68.422l6.531 2.42 1.023-1.289-2.605-3.927 4.445 1.61 1.016-1.281-3.832-5.819-.987 1.243 2.715 4.062-4.613-1.67-.882 1.111 2.732 4.1-4.631-1.709-.912 1.147.001.002zm-.809-.013l-1.39 1.077 2.878 3.236.926-.718-2.416-3.595.002-.001zm3.405 5.83a.9.9 0 0 0 .359-.595.81.81 0 0 0-.168-.642.79.79 0 0 0-.569-.318.91.91 0 0 0-1.03.799.79.79 0 0 0 .166.631c.147.189.34.296.579.322s.461-.04.666-.199l-.003.001z"
				fill="currentColor"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 48.5 48"
					to="360 48.5 48"
					dur="8s"
					repeatCount="indefinite"
				/>
			</path>
		</svg>
	);
};

export const ArrowRightIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			fill="none"
			className={className}
		>
			<path
				d="M0 7.538h12.112l-5.191 5.654.653.808L14 7 7.573 0l-.653.808 5.191 5.654H0v1.077z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const ArrowLeftIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			fill="none"
			className={className}
		>
			<path
				d="M14 7.538H1.888l5.191 5.654-.653.808L0 7l6.427-7 .653.808-5.191 5.654H14v1.077z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const CheckIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="none"
			className={className}
		>
			<g clipPath="url(#A)">
				<rect width="16" height="16" rx="8" fill="currentColor" />
				<path
					d="M6.665 10.39L4.47 8.195l-.943.943 3.138 3.138 6.471-6.471-.943-.943-5.529 5.529z"
					fill="#fff"
				/>
			</g>
			<defs>
				<clipPath id="A">
					<rect width="16" height="16" rx="8" fill="#fff" />
				</clipPath>
			</defs>
		</svg>
	);
};

export const PlanePlusIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="currentColor"
			className={className}
		>
			<path d="M10 0h4v24h-4V0z" />
			<path d="M0 14v-4h24v4H0z" />
		</svg>
	);
};

export const PlaneMinusIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="currentColor"
			className={className}
		>
			<path d="M0 14v-4h24v4H0z" />
		</svg>
	);
};

export const PlaneCheckIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="none"
			className={className}
		>
			<path
				d="M12.82 2l-1.38 1.44L5.88 9 4.26 7.44 2.82 6 0 8.82l1.44 1.44 3 3 1.38 1.44 1.44-1.44 7-7 1.44-1.44L12.82 2z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const ThunderIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="19"
			fill="none"
			className={className}
		>
			<path
				d="M12.902.5H5.379a.2.2 0 0 0-.182.118l-4.32 9.6a.2.2 0 0 0 .182.282h3.913a.2.2 0 0 1 .19.263l-2.644 7.933c-.067.2.182.354.331.205l12.06-12.059a.2.2 0 0 0-.141-.341h-4.669a.2.2 0 0 1-.173-.301L13.075.801A.2.2 0 0 0 12.902.5z"
				fill="currentColor"
			/>
		</svg>
	);
};
