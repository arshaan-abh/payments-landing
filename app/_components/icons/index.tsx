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
			fill="none"
			className={className}
		>
			<path
				fillRule="evenodd"
				d="M4.471 2.469a.75.75 0 0 1 .53-.22h5.278l.043.001a8.13 8.13 0 0 1 1.407.121c2.221.31 4.09 1.205 5.47 2.627 1.534 1.581 2.403 3.751 2.532 6.323l.016.343.002.056V21a.75.75 0 0 1-.75.75h-14a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 .22-.53zm13.78 9.581L18.25 12l-.013-.573-.031-.241c-.171-1.021-.488-1.758-.917-2.195-.389-.397-.942-.622-1.824-.475l-1.339.224a.75.75 0 0 1-.863-.863l.224-1.339c.03-.177.044-.356.044-.535 0-.865-.331-1.373-.832-1.701-.315-.206-.723-.357-1.209-.447-.392-.053-.8-.086-1.223-.098l-.275-.004-.032-.001H5.752v16.5h12.5v-8.199zm-3.323-6.984c.067.29.101.601.101.935a4.75 4.75 0 0 1-.065.782l-.051.303.303-.051c.641-.107 1.225-.081 1.746.068-.248-.386-.528-.739-.839-1.059a6.79 6.79 0 0 0-1.196-.978zM7.752 7a.75.75 0 0 1 .75-.75h2.5a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75zm0 4a.75.75 0 0 1 .75-.75h6.5a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75zm0 3a.75.75 0 0 1 .75-.75h6.5a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75zm0 3a.75.75 0 0 1 .75-.75h6.5a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75z"
				fill="currentColor"
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
			width="86"
			height="86"
			fill="none"
			className={className}
		>
			<g filter="url(#A)">
				<g clipPath="url(#B)">
					<rect x="3" y="3" width="80" height="80" rx="40" fill="#fff" />
					<circle
						cx="43"
						cy="43"
						r="35.6"
						fill="#f5f8f6"
						stroke="#e0e7e4"
						strokeWidth=".8"
					/>
					<g>
						<animateTransform
							attributeName="transform"
							type="rotate"
							from="0 43 43"
							to="180 43 43"
							dur="8s"
							repeatCount="indefinite"
						/>
						<path
							d="M15.299 56.7l-1.086.406-1.728-4.429 5.847-2.184 1.687 4.322-1.086.406-1.172-3.007-1.27.474 1.037 2.656-1.052.393-1.037-2.656-1.353.505L15.3 56.7h-.002zm8.418 3.584l-5.103 3.542-.688-.949 1.293-4.64-3.099 2.151-.828-1.142 5.105-3.542.693.956-1.298 4.634 3.099-2.151.828 1.142h-.002zm1.482 10.332c-.316.058-.627.045-.933-.039s-.59-.236-.853-.456c-.355-.294-.61-.634-.767-1.021s-.256-.922-.298-1.605c-.385-.411-.653-.867-.804-1.365a2.92 2.92 0 0 1-.059-1.499 3.1 3.1 0 0 1 .708-1.378c.397-.458.867-.776 1.411-.958a3.19 3.19 0 0 1 1.683-.089c.579.121 1.116.387 1.612.797s.85.885 1.065 1.422.276 1.084.185 1.638-.334 1.063-.731 1.52c-.47.542-1.038.89-1.705 1.04s-1.325.094-1.978-.173c.013.21.051.385.114.524s.155.26.278.362c.296.244.655.344 1.078.298l-.007.98zm-1.887-6.437a2.01 2.01 0 0 0-.476.935c-.068.335-.041.658.076.974s.317.59.599.823a1.99 1.99 0 0 0 .929.443c.337.061.67.032.995-.086s.615-.323.865-.613a2.01 2.01 0 0 0 .476-.935c.068-.335.041-.658-.076-.974s-.317-.59-.599-.823a2 2 0 0 0-.929-.443c-.337-.061-.668-.032-.995.086s-.615.324-.865.613zm6.67 8.082c-.82-.349-1.359-.844-1.617-1.482s-.203-1.368.162-2.192l1.401-3.143 1.328.566-1.379 3.094c-.448 1.004-.246 1.689.607 2.053.415.176.785.191 1.113.04s.605-.484.837-1.003l1.379-3.094 1.311.56-1.402 3.143c-.367.823-.878 1.359-1.531 1.608s-1.391.199-2.211-.15h.003zm9.164 2.447l-.89-1.883-.071-.011-1.242-.212-.299 1.681-1.427-.243 1.075-6.032 2.669.455c.546.094 1.004.264 1.374.51s.635.551.794.917.198.77.119 1.218-.258.815-.537 1.103-.635.482-1.072.586l1.037 2.174-1.533-.262h.003zm.658-3.848c.061-.338-.005-.618-.195-.836s-.501-.365-.929-.438l-1.162-.199-.375 2.103 1.163.199c.428.073.77.037 1.027-.108s.413-.385.473-.718v-.002zm7.944 2.69l.079 1.134-4.835.322-.425-6.108 4.719-.314.079 1.134-3.282.218.093 1.326 2.899-.192.076 1.1-2.899.192.098 1.414 3.398-.226zm8.848-8.223l2.523 5.603-1.088.469-4.387-2.171 1.531 3.401-1.31.564-2.522-5.603 1.096-.472 4.379 2.175-1.531-3.402 1.31-.564-.002-.002zm7.241 2.282c-.489.417-1.022.692-1.599.82a3.18 3.18 0 0 1-1.685-.065c-.546-.173-1.02-.485-1.424-.936s-.657-.954-.757-1.506-.048-1.1.16-1.642.557-1.022 1.047-1.44 1.022-.691 1.596-.819 1.136-.105 1.683.065 1.024.482 1.427.935a3.05 3.05 0 0 1 .754 1.509 3.04 3.04 0 0 1-.16 1.642c-.207.54-.554 1.019-1.043 1.438l.002-.002zm-.812-.909c.278-.238.475-.514.587-.831a1.76 1.76 0 0 0 .061-.975c-.073-.333-.235-.642-.491-.928s-.546-.485-.875-.6a1.87 1.87 0 0 0-.997-.073c-.336.066-.643.218-.921.456s-.474.516-.587.831-.132.642-.061.975.235.642.491.928.546.485.875.6.66.139.995.073.643-.218.921-.456h.002zm4.582-13.963l4.235 4.933-.822 1.292-4.326-1.045 2.849 3.369-.817 1.284-6.401-1.524.792-1.247 4.481 1.098-2.957-3.497.708-1.114 4.521 1.101-2.996-3.5.731-1.152h.002zm-.27-.7l.516-1.546 3.798 1.498-.344 1.03-3.97-.983v.002zm6.275 1.148c-.076.228-.215.393-.415.498a.78.78 0 0 1-.625.053.74.74 0 0 1-.465-.396c-.094-.196-.103-.409-.025-.642s.213-.401.408-.505a.76.76 0 0 1 .615-.052c.215.07.372.204.471.404s.111.414.035.642v-.003z"
							fill="#013334"
						/>
						<path
							d="M70.85 29.306l1.086-.406 1.728 4.429-5.847 2.184-1.687-4.322 1.086-.406 1.172 3.007 1.27-.474-1.037-2.656 1.052-.393 1.037 2.656 1.353-.505-1.215-3.114h.002zm-8.418-3.584l5.103-3.542.688.949-1.293 4.64 3.099-2.151.828 1.142-5.105 3.542-.693-.956 1.298-4.634-3.099 2.151-.829-1.142h.002zM60.95 15.39c.316-.058.627-.045.933.039s.59.236.853.456c.355.294.61.634.767 1.021s.256.922.298 1.604c.385.411.653.867.804 1.365s.17.998.059 1.499-.346.961-.708 1.378c-.397.458-.867.776-1.411.957a3.19 3.19 0 0 1-1.683.089c-.579-.121-1.116-.387-1.612-.797s-.85-.885-1.065-1.422A3.02 3.02 0 0 1 58 19.941c.091-.555.334-1.063.731-1.52.47-.542 1.038-.89 1.705-1.04a3.23 3.23 0 0 1 1.978.173c-.013-.21-.051-.385-.114-.524a1.01 1.01 0 0 0-.278-.362c-.296-.244-.655-.344-1.078-.298l.007-.98zm1.887 6.438a2.01 2.01 0 0 0 .476-.935c.068-.335.041-.658-.076-.974s-.318-.59-.599-.823-.592-.382-.929-.443-.67-.032-.995.086-.615.323-.865.613-.41.6-.476.935-.041.658.076.974.317.59.599.823.592.382.929.443.668.032.995-.086.615-.323.865-.613zm-6.671-8.082c.82.349 1.359.844 1.617 1.482s.203 1.368-.162 2.192l-1.401 3.143-1.328-.566 1.379-3.094c.448-1.004.246-1.689-.607-2.053-.415-.176-.785-.191-1.113-.04s-.605.484-.837 1.003l-1.379 3.094-1.311-.56 1.402-3.143c.367-.823.878-1.359 1.531-1.608s1.391-.199 2.211.15h-.003zm-9.164-2.447l.89 1.883.071.011 1.242.212.299-1.68 1.427.243-1.075 6.031-2.669-.454c-.546-.094-1.004-.264-1.374-.509s-.635-.552-.794-.917-.198-.77-.119-1.218.258-.815.537-1.103.635-.482 1.071-.585l-1.037-2.174 1.533.262h-.003zm-.658 3.848c-.061.338.005.618.195.836s.501.366.929.438l1.162.199.375-2.103-1.162-.199c-.428-.073-.771-.037-1.027.108s-.413.385-.473.718v.002zm-7.944-2.69l-.079-1.134L43.156 11l.425 6.108-4.719.314-.079-1.134 3.282-.218-.093-1.326-2.899.192-.076-1.1 2.899-.193-.098-1.414-3.398.226zm-8.848 8.223l-2.523-5.603 1.088-.469 4.387 2.171-1.531-3.402 1.31-.564 2.522 5.603-1.096.472-4.379-2.175 1.531 3.401-1.31.564.002.002zm-7.241-2.282c.489-.417 1.022-.692 1.599-.82a3.18 3.18 0 0 1 1.685.065c.546.173 1.02.485 1.424.936s.657.954.757 1.506.048 1.1-.16 1.642-.557 1.022-1.047 1.439-1.022.691-1.596.818-1.136.105-1.683-.065-1.023-.482-1.427-.935a3.05 3.05 0 0 1-.754-1.509 3.04 3.04 0 0 1 .16-1.642c.207-.54.554-1.019 1.043-1.438l-.002.002zm.812.909c-.278.238-.475.514-.587.831s-.132.642-.061.975a2.03 2.03 0 0 0 .491.928c.255.285.546.485.875.6a1.87 1.87 0 0 0 .997.073c.336-.066.643-.218.921-.456a1.95 1.95 0 0 0 .587-.831c.112-.317.132-.642.061-.975s-.235-.642-.491-.928-.546-.485-.875-.6-.66-.139-.995-.073-.643.218-.921.456h-.002zm-4.582 13.963l-4.235-4.933.822-1.292 4.326 1.045-2.849-3.369.817-1.284 6.401 1.524-.792 1.247-4.481-1.098 2.957 3.497-.708 1.114-4.521-1.101 2.996 3.5-.731 1.152h-.002zm.269.7l-.516 1.546-3.798-1.498.344-1.03 3.97.983v-.002zm-6.275-1.148c.076-.228.215-.393.415-.498a.78.78 0 0 1 .625-.053.74.74 0 0 1 .465.396c.094.196.103.409.025.642s-.213.401-.409.505a.76.76 0 0 1-.615.052c-.215-.069-.372-.204-.471-.404s-.111-.414-.035-.642v.003z"
							fill="#013334"
						/>
						<ellipse
							cx="14.367"
							cy="43.077"
							rx="1.121"
							ry="1.106"
							fill="#013334"
						/>
						<ellipse
							cx="1.116"
							cy=".278"
							rx="1.116"
							ry=".278"
							transform="matrix(.828667 -.559742 .570282 .821449 15.4844 41.5605)"
							fill="#013334"
						/>
						<ellipse
							cx="1.116"
							cy=".278"
							rx="1.116"
							ry=".278"
							transform="matrix(-.828667 -.559742 -.570282 .821449 13.168 41.5605)"
							fill="#013334"
						/>
						<ellipse
							cx="1.116"
							cy=".278"
							rx="1.116"
							ry=".278"
							transform="matrix(.828667 .559742 .570282 -.821449 15.4844 44.6348)"
							fill="#013334"
						/>
						<ellipse
							cx="1.116"
							cy=".278"
							rx="1.116"
							ry=".278"
							transform="matrix(-.828667 .559742 -.570282 -.821449 13.168 44.6348)"
							fill="#013334"
						/>
						<ellipse
							cx="16.611"
							cy="43.075"
							rx=".561"
							ry=".553"
							fill="#013334"
						/>
						<ellipse
							cx="14.361"
							cy="45.288"
							rx=".561"
							ry=".553"
							fill="#013334"
						/>
						<ellipse
							cx="12.135"
							cy="43.075"
							rx=".561"
							ry=".553"
							fill="#013334"
						/>
						<ellipse
							cx="14.361"
							cy="40.864"
							rx=".561"
							ry=".553"
							fill="#013334"
						/>
						<ellipse
							cx="71.719"
							cy="43.079"
							rx="1.121"
							ry="1.106"
							fill="#013334"
						/>
						<ellipse
							cx="1.116"
							cy=".278"
							rx="1.116"
							ry=".278"
							transform="matrix(.828667 -.559742 .570282 .821449 72.8359 41.5625)"
							fill="#013334"
						/>
						<ellipse
							cx="1.116"
							cy=".278"
							rx="1.116"
							ry=".278"
							transform="matrix(-.828667 -.559742 -.570282 .821449 70.5195 41.5625)"
							fill="#013334"
						/>
						<ellipse
							cx="1.116"
							cy=".278"
							rx="1.116"
							ry=".278"
							transform="matrix(.828667 .559742 .570282 -.821449 72.8359 44.6367)"
							fill="#013334"
						/>
						<ellipse
							cx="1.116"
							cy=".278"
							rx="1.116"
							ry=".278"
							transform="matrix(-.828667 .559742 -.570282 -.821449 70.5195 44.6367)"
							fill="#013334"
						/>
						<ellipse
							cx="73.963"
							cy="43.077"
							rx=".561"
							ry=".553"
							fill="#013334"
						/>
						<ellipse
							cx="71.713"
							cy="45.291"
							rx=".561"
							ry=".553"
							fill="#013334"
						/>
						<ellipse
							cx="69.486"
							cy="43.077"
							rx=".561"
							ry=".553"
							fill="#013334"
						/>
						<ellipse
							cx="71.713"
							cy="40.866"
							rx=".561"
							ry=".553"
							fill="#013334"
						/>
					</g>
					<circle
						cx="42.999"
						cy="43"
						r="22.267"
						fill="#fff"
						stroke="#e0e7e4"
						strokeWidth=".8"
					/>
					<g className="animate-hide">
						<path
							fillRule="evenodd"
							d="M41.594 32.67l-6.058-.003a.2.2 0 0 0-.2.2v20.936a.2.2 0 0 0 .2.2h16.195a.2.2 0 0 0 .2-.2l-.001-10.798c0-.262-.023-.523-.066-.781-.431-2.583-1.689-4.327-4.272-3.896l-1.311.219a.2.2 0 0 1-.23-.23l.219-1.311a4.74 4.74 0 0 0 .065-.781c0-2.619-2.121-3.554-4.739-3.554zm-2.61 4.738a.5.5 0 0 1 .5-.5h2.963a.5.5 0 1 1 0 1h-2.963a.5.5 0 0 1-.5-.5zm0 4.741a.5.5 0 0 1 .5-.5h8.297a.5.5 0 1 1 0 1h-8.297a.5.5 0 0 1-.5-.5zm0 3.556a.5.5 0 0 1 .5-.5h8.297a.5.5 0 1 1 0 1h-8.297a.5.5 0 0 1-.5-.5zm0 3.556a.5.5 0 0 1 .5-.5h8.297a.5.5 0 1 1 0 1h-8.297a.5.5 0 0 1-.5-.5zm6.473-16.539c3.463.834 5.75 3.266 6.397 6.832-.246-.552-.57-1.064-.995-1.498-.853-.87-1.973-1.28-3.252-1.215l.007-.29c0-1.625-.697-2.886-1.892-3.668l-.265-.161z"
							fill="#013334"
						/>
					</g>
					<g className="animate-show">
						<path
							d="M46.173 50.824c1.211-1.005 1.817-2.317 1.817-3.934s-.474-2.849-1.417-3.694-2.276-1.477-3.988-1.897-2.803-.785-3.275-1.098-.713-.725-.713-1.252.194-.946.579-1.265.919-.48 1.59-.48c1.671 0 3.289.593 4.853 1.784l2.037-2.943c-.892-.758-1.944-1.345-3.149-1.757s-2.41-.62-3.615-.62c-1.844 0-3.374.466-4.606 1.391-1.232.933-1.844 2.25-1.844 3.961s.486 2.968 1.458 3.768 2.509 1.452 4.606 1.951c1.325.326 2.21.653 2.657.966.447.319.672.746.672 1.292s-.212.972-.632 1.291l.013.006c-.42.319-1.005.48-1.745.48-1.652 0-3.448-.851-5.399-2.556l-2.404 2.942c2.29 2.117 4.859 3.176 7.716 3.176 1.977 0 3.574-.507 4.786-1.512l.003.002z"
							fill="#013334"
							fillRule="evenodd"
						/>
						<path
							d="M49.647 48.448c-.439.439-.659.978-.659 1.611s.22 1.172.659 1.611.979.659 1.611.659 1.172-.22 1.611-.659.659-.979.659-1.611-.22-1.172-.659-1.611-.978-.659-1.611-.659-1.172.22-1.611.659z"
							fill="#013334"
							fillRule="evenodd"
						/>
					</g>
				</g>
			</g>
			<defs>
				<filter
					id="A"
					x=".333"
					y=".333"
					width="85.333"
					height="85.333"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="A" />
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="B"
					/>
					<feOffset />
					<feGaussianBlur stdDeviation="1.333" />
					<feComposite in2="B" operator="out" />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
					<feBlend in2="A" />
					<feBlend in="SourceGraphic" />
				</filter>
				<clipPath id="B">
					<rect x="3" y="3" width="80" height="80" rx="40" fill="#fff" />
				</clipPath>
			</defs>
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

export const HamburgerMenu: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			className={className}
		>
			<g fillRule="evenodd" fill="currentColor">
				<use href="#B" />
				<use href="#B" y="5" />
				<use href="#B" y="10" />
			</g>
			<defs>
				<path
					id="B"
					d="M20.75 7a.75.75 0 0 1-.75.75H4a.75.75 0 1 1 0-1.5h16a.75.75 0 0 1 .75.75z"
				/>
			</defs>
		</svg>
	);
};

export const FullScreenIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="none"
			className={className}
		>
			<path
				d="M15 15v-5h1v6h-6v-1h5zM10 0h6v6h-1V1h-5V0zM0 6V0h6v1H1v5H0zm1 4v5h5v1H0v-6h1z"
				fill="currentColor"
			/>
		</svg>
	);
};
