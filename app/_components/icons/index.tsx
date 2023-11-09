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
			fill="currentColor"
		>
			<path d="M6.381 22.518v-3.469h6.935l-6.204 3.878a.48.48 0 0 1-.73-.409z" />
			<path d="M1 11.389h22v4.891l-2.87 2.889H3.87L1 16.28v-4.891zm0-3.167h22V6.889L20.13 4H3.87L1 6.889v1.333z" />
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
			<g stroke="currentColor">
				<path
					d="M8.552 10.09l.398-.398-.398-.398L4.86 5.602l-.398-.398-.398.398-2.462 2.462-.165.165v.233 4.513.233l.165.165 9.027 9.026.165.165h.233 4.826.243l.167-.177 2.147-2.282.365-.388-.367-.386-3.515-3.692-.402-.422-.408.416-2.227 2.273-5.381-5.738 2.077-2.076z"
					fill="currentColor"
					stroke-width="1.125"
				/>
				<path
					d="M14.444 1h6.111L23 3.444v6.111L20.556 12h-6.111L12 9.556V3.444L14.444 1z"
					stroke-width="2"
				/>
			</g>
			<g fill="currentColor">
				<path d="M16.277 4.056h1.833v3.056h-1.833V4.056z" />
				<path d="M16.277 8.333V6.5h3.667v1.833h-3.667z" />
			</g>
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
