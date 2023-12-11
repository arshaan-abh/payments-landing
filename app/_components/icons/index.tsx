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
			width="80"
			height="80"
			viewBox="0 0 80 80"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<g id="Fab">
				<g clipPath="url(#clip0_2287_5169)">
					<rect width="80" height="80" rx="40" fill="white" />
					<circle
						id="Ellipse 1968"
						cx="40"
						cy="40"
						r="35.6"
						fill="#F5F8F6"
						stroke="#E0E7E4"
						strokeWidth="0.8"
					/>
					<g>
						<animateTransform
							attributeName="transform"
							type="rotate"
							from="0 40 40"
							to="180 40 40"
							dur="8s"
							repeatCount="indefinite"
						/>
						<g id="Group 625376">
							<ellipse
								id="Ellipse 1954"
								cx="68.3633"
								cy="39.7661"
								rx="1.12116"
								ry="1.10591"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1955"
								cx="1.11632"
								cy="0.2777"
								rx="1.11632"
								ry="0.2777"
								transform="matrix(0.828667 -0.559742 0.570282 0.821449 69.4844 38.25)"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1966"
								cx="1.11632"
								cy="0.2777"
								rx="1.11632"
								ry="0.2777"
								transform="matrix(-0.828667 -0.559742 -0.570282 0.821449 67.1641 38.25)"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1965"
								cx="1.11632"
								cy="0.2777"
								rx="1.11632"
								ry="0.2777"
								transform="matrix(0.828667 0.559742 0.570282 -0.821449 69.4844 41.3242)"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1967"
								cx="1.11632"
								cy="0.2777"
								rx="1.11632"
								ry="0.2777"
								transform="matrix(-0.828667 0.559742 -0.570282 -0.821449 67.1641 41.3242)"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1956"
								cx="70.6075"
								cy="39.7649"
								rx="0.560582"
								ry="0.552954"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1959"
								cx="68.3575"
								cy="41.9787"
								rx="0.560582"
								ry="0.552954"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1962"
								cx="66.1309"
								cy="39.7649"
								rx="0.560582"
								ry="0.552954"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1964"
								cx="68.3575"
								cy="37.553"
								rx="0.560582"
								ry="0.552954"
								fill="#013334"
							/>
						</g>
						<g id="Group 625378">
							<ellipse
								id="Ellipse 1954_2"
								cx="11.3634"
								cy="39.7661"
								rx="1.12116"
								ry="1.10591"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1955_2"
								cx="1.11632"
								cy="0.2777"
								rx="1.11632"
								ry="0.2777"
								transform="matrix(0.828667 -0.559742 0.570282 0.821449 12.4844 38.25)"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1966_2"
								cx="1.11632"
								cy="0.2777"
								rx="1.11632"
								ry="0.2777"
								transform="matrix(-0.828667 -0.559742 -0.570282 0.821449 10.1641 38.25)"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1965_2"
								cx="1.11632"
								cy="0.2777"
								rx="1.11632"
								ry="0.2777"
								transform="matrix(0.828667 0.559742 0.570282 -0.821449 12.4844 41.3242)"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1967_2"
								cx="1.11632"
								cy="0.2777"
								rx="1.11632"
								ry="0.2777"
								transform="matrix(-0.828667 0.559742 -0.570282 -0.821449 10.1641 41.3242)"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1956_2"
								cx="13.6075"
								cy="39.7649"
								rx="0.560582"
								ry="0.552954"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1959_2"
								cx="11.3575"
								cy="41.9787"
								rx="0.560582"
								ry="0.552954"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1962_2"
								cx="9.13089"
								cy="39.7649"
								rx="0.560582"
								ry="0.552954"
								fill="#013334"
							/>
							<ellipse
								id="Ellipse 1964_2"
								cx="11.3575"
								cy="37.553"
								rx="0.560582"
								ry="0.552954"
								fill="#013334"
							/>
						</g>
						<g id="Vector">
							<path
								d="M12.7227 23.4109L13.7546 23.8589L12.5678 26.6065L13.8996 27.2314L15.0624 24.59L16.0943 25.038L14.9315 27.6794L16.1793 28.1746L17.474 25.4507L18.5059 25.8987L16.7077 29.849L10.9245 27.3613L12.7227 23.4109Z"
								fill="#013334"
							/>
							<path
								d="M14.7878 20.298L19.7426 20.9345L16.3468 18.4112L17.1502 17.3617L22.19 21.1348L21.2307 22.373L16.4918 21.7837L19.7797 24.2834L18.9763 25.3329L13.9365 21.5598L14.7878 20.298Z"
								fill="#013334"
							/>
							<path
								d="M23.4614 19.519C22.8736 19.6133 22.4417 19.519 21.9258 19.295C21.4098 19.071 20.9179 18.7408 20.5818 18.222C20.2457 17.7032 19.9096 17.1844 19.7895 16.7127C19.6694 16.241 19.6812 15.6868 19.909 15.1798C20.1368 14.6727 20.4485 14.2953 20.8923 13.8354C21.336 13.3755 21.9238 13.2812 22.4036 13.1632C22.9914 13.0689 23.4233 13.1632 23.9392 13.3872C24.4552 13.6112 24.9232 14.0475 25.2832 14.4602C25.6432 14.8729 25.8713 15.3681 25.9915 15.8398C26.1116 16.3115 26.1237 16.7595 26.0279 17.1841L27.3236 17.467L26.4841 18.1745L25.7282 18.0095C25.5484 18.3043 25.2606 18.5755 24.9727 18.8468C24.529 19.3067 23.9173 19.5072 23.4614 19.519ZM22.4292 18.0686C22.7292 18.2455 23.0531 18.3162 23.377 18.387C23.7249 18.3516 23.9648 18.2926 24.2527 18.0214C24.3846 17.9388 24.4086 17.8327 24.5405 17.7501L23.2448 17.4672L24.0604 16.8658L24.8162 17.0308C24.8641 16.8186 24.828 16.4766 24.7679 16.2408C24.7079 16.0049 24.5398 15.7455 24.2638 15.4625C23.9878 15.1795 23.7118 14.8966 23.4118 14.7197C23.1119 14.5428 22.7879 14.4721 22.464 14.4014C22.1161 14.4368 21.8762 14.4957 21.5884 14.767C21.3005 15.0382 21.1446 15.2269 21.0728 15.5452C21.0009 15.8636 21.037 16.2056 21.0971 16.4414C21.2411 16.807 21.4092 17.0664 21.5772 17.3258C21.8532 17.6088 22.1292 17.8918 22.4292 18.0686Z"
								fill="#013334"
							/>
							<path
								d="M31.7611 13.8708C31.6653 14.2953 31.5934 14.6137 31.2816 14.991C30.9699 15.3684 30.5741 15.616 30.2022 15.7576C29.6984 15.9816 29.2186 16.0996 28.7867 16.0053C28.3548 15.911 27.9229 15.8166 27.6229 15.6398C27.2389 15.3332 26.9629 15.0502 26.8428 14.5786L25.1621 10.9821L26.4096 10.475L28.0903 14.0714C28.2343 14.437 28.5103 14.72 28.7263 14.7671C29.0502 14.8379 29.3742 14.9086 29.662 14.6374C30.0338 14.4958 30.1897 14.3072 30.3696 14.0124C30.4415 13.694 30.5133 13.3756 30.2613 12.9865L28.5806 9.39006L29.8281 8.88295L31.5928 12.6091C31.7129 13.0807 31.857 13.4463 31.7611 13.8708Z"
								fill="#013334"
							/>
							<path
								d="M33.157 8.16283L34.6345 14.1648L33.327 14.4361L31.8494 8.43411L33.157 8.16283Z"
								fill="#013334"
							/>
							<path
								d="M39.152 7.69059C39.4759 7.76133 39.7519 8.04432 40.0279 8.32731C40.3039 8.6103 40.34 8.95226 40.3761 9.29422C40.4362 9.53005 40.3643 9.84843 40.3164 10.0607C40.2685 10.2729 40.1126 10.4616 39.8487 10.6267C39.6928 10.8154 39.4529 10.8744 39.105 10.9098L38.9971 10.8862C39.4529 10.8744 39.7769 10.9451 40.1008 11.0158C40.4247 11.0866 40.4608 11.4285 40.6049 11.7941L40.7854 13.5039L39.3938 13.6455L39.1654 12.1479C39.1054 11.9121 39.0453 11.6762 38.8293 11.6291C38.6374 11.4758 38.3974 11.5348 38.0495 11.5702L36.9219 11.5466L37.0906 13.8107L35.699 13.9522L35.1572 7.82051L37.9163 7.6435C38.3961 7.52555 38.852 7.51373 39.152 7.69059ZM38.7329 10.049C38.8887 9.86031 38.9367 9.64805 38.9846 9.43579C38.9245 9.19996 38.8645 8.96412 38.6725 8.81084C38.4805 8.65756 38.2645 8.6104 37.9166 8.64579L36.765 8.7284L36.8375 10.4146L37.9892 10.332C38.3371 10.2966 38.577 10.2377 38.7329 10.049Z"
								fill="#013334"
							/>
							<path
								d="M46.7648 8.12696L46.6332 9.21182L43.6699 8.78747L43.4664 10.1907L46.3217 10.5915L46.1901 11.6763L43.3348 11.2756L43.1313 12.6788L46.2026 13.1267L46.071 14.2116L41.68 13.5868L42.6138 7.44325L46.7648 8.12696Z"
								fill="#013334"
							/>
							<path
								d="M52.5542 10.0602L52.9277 14.9302L54.8099 11.1096L56.0338 11.7109L53.3124 17.2414L51.8726 16.5929L51.5831 11.8526L49.7488 15.461L48.525 14.8597L51.2464 9.32918L52.5542 10.0602Z"
								fill="#013334"
							/>
							<path
								d="M55.1149 18.3025C54.8868 17.8073 54.8986 17.2531 55.0184 16.7224C55.1382 16.1918 55.4739 15.7083 55.9176 15.2484C56.3614 14.7885 56.8051 14.3286 57.2849 14.2107C57.7887 13.9866 58.2445 13.9748 58.8084 13.9865C59.3483 14.1044 59.8642 14.3284 60.3322 14.7647C60.8002 15.201 61.1602 15.6137 61.2804 16.0853C61.5085 16.5806 61.4966 17.1348 61.3769 17.6654C61.2571 18.1961 60.9213 18.6796 60.4536 19.2456C60.0099 19.7055 59.5901 20.0593 59.0864 20.2833C58.5826 20.5074 58.1267 20.5192 57.5868 20.4013C57.0469 20.2835 56.531 20.0594 56.063 19.6232C55.595 19.1869 55.235 18.7742 55.1149 18.3025ZM57.6344 19.1868C57.9584 19.2575 58.1983 19.1985 58.5701 19.057C58.834 18.8919 59.2298 18.6443 59.4096 18.3495C59.7214 17.9721 59.9013 17.6773 59.9732 17.3589C60.045 17.0405 60.1169 16.7222 60.0568 16.4863C59.9968 16.2505 59.8287 15.9911 59.5527 15.7081C59.4087 15.3426 59.0847 15.2718 58.7608 15.2011C58.4369 15.1304 58.197 15.1893 57.8251 15.3308C57.4533 15.4724 57.1654 15.7436 56.8776 16.0148C56.5658 16.3922 56.386 16.687 56.3141 17.0054C56.2422 17.3237 56.1703 17.6421 56.2304 17.878C56.2905 18.1138 56.4585 18.3732 56.7345 18.6562C57.0945 19.0689 57.3105 19.116 57.6344 19.1868Z"
								fill="#013334"
							/>
							<path
								d="M64.7206 19.3982L61.6145 22.6175L65.8968 21.214L66.461 22.2281L63.3549 25.4474L67.6373 24.044L68.4174 25.1052L62.2158 26.9804L61.4596 25.8131L64.2539 22.9711L60.3674 24.1269L59.6112 22.9596L64.0724 18.2544L64.7206 19.3982Z"
								fill="#013334"
							/>
							<path
								d="M64.6598 29.7407L63.4363 30.1416L62.944 28.8092L64.1675 28.4082L64.6598 29.7407ZM69.3379 28.0896L67.6106 28.7146C67.3707 28.7736 67.1308 28.8326 66.8909 28.8915C66.651 28.9505 66.3031 28.9859 66.0392 29.151C65.7993 29.21 65.5594 29.2689 65.3195 29.3279L65.0553 28.4907C65.3192 28.3256 65.5591 28.2666 65.691 28.1841C65.9549 28.019 66.2187 27.8539 66.4587 27.7949C66.6986 27.7359 66.9624 27.5708 67.2024 27.5119L68.9297 26.8868L69.3379 28.0896Z"
								fill="#013334"
							/>
						</g>
						<g id="Vector_2">
							<path
								d="M67.4389 56.1821L66.3974 55.7299L67.5952 52.9568L66.251 52.3261L65.0774 54.9921L64.036 54.5399L65.2096 51.8739L63.9502 51.3741L62.6434 54.1234L61.602 53.6712L63.4169 49.6841L69.2538 52.195L67.4389 56.1821Z"
								fill="#013334"
							/>
							<path
								d="M65.3546 59.3239L60.3537 58.6815L63.7811 61.2282L62.9702 62.2875L57.8836 58.4793L58.8519 57.2296L63.6347 57.8244L60.3163 55.3015L61.1272 54.2423L66.2138 58.0504L65.3546 59.3239Z"
								fill="#013334"
							/>
							<path
								d="M56.6004 60.1102C57.1937 60.0149 57.6296 60.1101 58.1503 60.3362C58.671 60.5623 59.1676 60.8955 59.5068 61.4192C59.846 61.9428 60.1852 62.4665 60.3064 62.9425C60.4276 63.4186 60.4157 63.9779 60.1858 64.4897C59.9559 65.0015 59.6412 65.3823 59.1934 65.8465C58.7456 66.3107 58.1523 66.4059 57.668 66.525C57.0747 66.6202 56.6388 66.525 56.1181 66.2989C55.5974 66.0728 55.125 65.6325 54.7617 65.216C54.3983 64.7995 54.1681 64.2996 54.0468 63.8236C53.9256 63.3475 53.9133 62.8953 54.0101 62.4668L52.7023 62.1812L53.5496 61.4671L54.3125 61.6337C54.494 61.3361 54.7845 61.0624 55.075 60.7886C55.5229 60.3245 56.1403 60.1221 56.6004 60.1102ZM57.6422 61.574C57.3394 61.3955 57.0125 61.3241 56.6855 61.2527C56.3344 61.2884 56.0923 61.348 55.8018 61.6217C55.6686 61.705 55.6444 61.8121 55.5113 61.8955L56.819 62.181L55.9959 62.788L55.233 62.6215C55.1847 62.8357 55.2211 63.1808 55.2817 63.4188C55.3423 63.6569 55.5119 63.9187 55.7905 64.2043C56.0691 64.4899 56.3477 64.7756 56.6504 64.9541C56.9532 65.1326 57.2801 65.2039 57.6071 65.2753C57.9582 65.2396 58.2003 65.1801 58.4908 64.9064C58.7813 64.6326 58.9387 64.4422 59.0112 64.1208C59.0838 63.7995 59.0473 63.4544 58.9867 63.2163C58.8413 62.8474 58.6717 62.5856 58.5021 62.3237C58.2235 62.0381 57.9449 61.7525 57.6422 61.574Z"
								fill="#013334"
							/>
							<path
								d="M48.2235 65.8109C48.3203 65.3824 48.3928 65.0611 48.7075 64.6802C49.0222 64.2993 49.4217 64.0494 49.797 63.9065C50.3054 63.6804 50.7897 63.5614 51.2256 63.6565C51.6615 63.7517 52.0975 63.8469 52.4002 64.0254C52.7878 64.3348 53.0664 64.6205 53.1876 65.0965L54.8839 68.7263L53.6248 69.2382L51.9285 65.6083C51.7831 65.2394 51.5045 64.9538 51.2866 64.9062C50.9596 64.8348 50.6327 64.7634 50.3422 65.0371C49.9669 65.18 49.8095 65.3704 49.628 65.668C49.5555 65.9893 49.4829 66.3106 49.7373 66.7034L51.4336 70.3332L50.1746 70.845L48.3935 67.0843C48.2722 66.6082 48.1268 66.2393 48.2235 65.8109Z"
								fill="#013334"
							/>
							<path
								d="M46.8147 71.5719L45.3235 65.5141L46.6431 65.2403L48.1344 71.2981L46.8147 71.5719Z"
								fill="#013334"
							/>
							<path
								d="M40.764 72.0485C40.4371 71.9771 40.1585 71.6915 39.8799 71.4058C39.6014 71.1202 39.5649 70.7751 39.5285 70.4299C39.4679 70.1919 39.5404 69.8706 39.5888 69.6564C39.6371 69.4421 39.7945 69.2517 40.0608 69.0851C40.2181 68.8946 40.4603 68.8351 40.8114 68.7994L40.9204 68.8232C40.4603 68.8351 40.1333 68.7637 39.8064 68.6923C39.4795 68.6209 39.443 68.2758 39.2976 67.9069L39.1154 66.1812L40.5199 66.0383L40.7505 67.5498C40.8111 67.7878 40.8717 68.0258 41.0896 68.0734C41.2834 68.2281 41.5256 68.1686 41.8767 68.1329L43.0149 68.1566L42.8446 65.8715L44.2491 65.7286L44.796 71.9173L42.0112 72.096C41.5269 72.2151 41.0668 72.227 40.764 72.0485ZM41.187 69.6682C41.0297 69.8586 40.9813 70.0728 40.933 70.2871C40.9936 70.5251 41.0542 70.7631 41.248 70.9178C41.4418 71.0725 41.6597 71.1201 42.0108 71.0844L43.1732 71.001L43.1 69.2991L41.9376 69.3825C41.5865 69.4182 41.3444 69.4777 41.187 69.6682Z"
								fill="#013334"
							/>
							<path
								d="M33.0805 71.6081L33.2133 70.5131L36.2041 70.9414L36.4095 69.5251L33.5276 69.1206L33.6605 68.0257L36.5423 68.4302L36.7477 67.0139L33.6479 66.5618L33.7807 65.4669L38.2125 66.0974L37.2701 72.2981L33.0805 71.6081Z"
								fill="#013334"
							/>
							<path
								d="M27.2372 69.6568L26.8603 64.7416L24.9606 68.5977L23.7253 67.9908L26.4721 62.4089L27.9252 63.0634L28.2174 67.8478L30.0687 64.2059L31.3039 64.8128L28.5572 70.3947L27.2372 69.6568Z"
								fill="#013334"
							/>
							<path
								d="M24.6528 61.3379C24.883 61.8378 24.8711 62.3971 24.7502 62.9327C24.6293 63.4683 24.2904 63.9563 23.8426 64.4204C23.3947 64.8846 22.9469 65.3488 22.4626 65.4678C21.9541 65.694 21.494 65.7059 20.925 65.694C20.3801 65.5751 19.8593 65.349 19.387 64.9086C18.9146 64.4683 18.5512 64.0518 18.43 63.5757C18.1998 63.0759 18.2117 62.5165 18.3326 61.9809C18.4535 61.4454 18.7924 60.9574 19.2644 60.3861C19.7123 59.9219 20.1359 59.5649 20.6444 59.3387C21.1529 59.1126 21.613 59.1006 22.1579 59.2196C22.7028 59.3386 23.2235 59.5647 23.6958 60.005C24.1682 60.4454 24.5316 60.8619 24.6528 61.3379ZM22.1098 60.4455C21.7829 60.3741 21.5407 60.4336 21.1654 60.5764C20.8991 60.7431 20.4996 60.993 20.3181 61.2906C20.0034 61.6714 19.8219 61.969 19.7494 62.2903C19.6768 62.6116 19.6043 62.933 19.6649 63.171C19.7255 63.409 19.8951 63.6709 20.1737 63.9565C20.3191 64.3254 20.646 64.3968 20.973 64.4682C21.2999 64.5396 21.5421 64.4801 21.9174 64.3372C22.2927 64.1944 22.5832 63.9206 22.8737 63.6469C23.1884 63.266 23.3699 62.9685 23.4424 62.6472C23.515 62.3258 23.5875 62.0045 23.5269 61.7664C23.4663 61.5284 23.2967 61.2666 23.0181 60.981C22.6547 60.5644 22.4368 60.5169 22.1098 60.4455Z"
								fill="#013334"
							/>
							<path
								d="M14.9578 60.2321L18.0927 56.9829L13.7706 58.3994L13.2012 57.3759L16.3361 54.1266L12.014 55.5431L11.2267 54.472L17.4859 52.5794L18.2491 53.7576L15.4289 56.626L19.3515 55.4594L20.1147 56.6376L15.612 61.3865L14.9578 60.2321Z"
								fill="#013334"
							/>
							<path
								d="M15.0192 49.7935L16.254 49.3888L16.7509 50.7336L15.516 51.1384L15.0192 49.7935ZM10.2976 51.46L12.0409 50.8291C12.2831 50.7696 12.5252 50.7101 12.7673 50.6505C13.0095 50.591 13.3606 50.5553 13.6269 50.3887C13.8691 50.3291 14.1112 50.2696 14.3534 50.2101L14.62 51.0551C14.3537 51.2217 14.1115 51.2812 13.9784 51.3646C13.7121 51.5312 13.4457 51.6978 13.2036 51.7573C12.9615 51.8169 12.6951 51.9835 12.453 52.043L10.7096 52.6739L10.2976 51.46Z"
								fill="#013334"
							/>
						</g>
					</g>
					<circle
						id="Ellipse 1970"
						cx="39.9948"
						cy="39.9997"
						r="22.2667"
						stroke="#E0E7E4"
						strokeWidth="0.8"
					/>
					<g id="mandat" className="animate-hide">
						<path
							id="Union"
							fillRule="evenodd"
							clipRule="evenodd"
							d="M38.5943 29.6705L32.5361 29.667C32.4256 29.6669 32.3359 29.7565 32.3359 29.867V50.8029C32.3359 50.9133 32.4255 51.0029 32.5359 51.0029H48.7306C48.8411 51.0029 48.9306 50.9133 48.9306 50.8029L48.9296 40.005C48.9296 39.7433 48.9069 39.4821 48.8638 39.224C48.4325 36.6412 47.1744 34.8971 44.5916 35.3284L43.2803 35.5474C43.1449 35.57 43.0275 35.4526 43.0501 35.3172L43.2691 34.0059C43.3122 33.7478 43.3338 33.4866 43.3338 33.2249C43.3338 30.6063 41.2129 29.6705 38.5943 29.6705ZM35.9846 34.4082C35.9846 34.1321 36.2085 33.9082 36.4846 33.9082H39.4479C39.7241 33.9082 39.9479 34.1321 39.9479 34.4082C39.9479 34.6844 39.7241 34.9082 39.4479 34.9082H36.4846C36.2085 34.9082 35.9846 34.6844 35.9846 34.4082ZM35.9846 39.1495C35.9846 38.8734 36.2085 38.6495 36.4846 38.6495H44.7819C45.0581 38.6495 45.2819 38.8734 45.2819 39.1495C45.2819 39.4257 45.0581 39.6495 44.7819 39.6495H36.4846C36.2085 39.6495 35.9846 39.4257 35.9846 39.1495ZM35.9846 42.7055C35.9846 42.4294 36.2085 42.2055 36.4846 42.2055H44.7819C45.0581 42.2055 45.2819 42.4294 45.2819 42.7055C45.2819 42.9817 45.0581 43.2055 44.7819 43.2055H36.4846C36.2085 43.2055 35.9846 42.9817 35.9846 42.7055ZM35.9846 46.2615C35.9846 45.9854 36.2085 45.7615 36.4846 45.7615H44.7819C45.0581 45.7615 45.2819 45.9854 45.2819 46.2615C45.2819 46.5377 45.0581 46.7615 44.7819 46.7615H36.4846C36.2085 46.7615 35.9846 46.5377 35.9846 46.2615ZM42.4572 29.7229C45.9201 30.5573 48.207 32.989 48.8545 36.5545C48.6083 36.0026 48.2845 35.4901 47.8594 35.0566C47.0064 34.1867 45.8863 33.7762 44.6072 33.8419C44.6121 33.7455 44.6146 33.6489 44.6146 33.5522C44.6146 31.9276 43.9175 30.6663 42.7223 29.884C42.6356 29.8273 42.5472 29.7736 42.4572 29.7229Z"
							fill="#013334"
						/>
					</g>
					<g id="Group" className="animate-show">
						<path
							id="Vector_3"
							d="M47.4916 46.1644C46.9816 46.6754 46.7266 47.2948 46.7266 48.038C46.7266 48.7813 46.9816 49.4007 47.4916 49.9117C48.0017 50.4226 48.62 50.6782 49.3619 50.6782C50.1038 50.6782 50.722 50.4226 51.2321 49.9117C51.7421 49.4007 51.9972 48.7813 51.9972 48.038C51.9972 47.2948 51.7421 46.6754 51.2321 46.1644C50.722 45.6534 50.1038 45.3979 49.3619 45.3979C48.62 45.3979 48.0017 45.6534 47.4916 46.1644Z"
							fill="#013334"
						/>
						<path
							id="Vector_4"
							d="M40.0513 45.9865C39.5644 46.3582 38.8921 46.5439 38.0342 46.5439C36.1176 46.5439 34.0388 45.5529 31.7821 43.5786L29 46.993C31.6508 49.4473 34.6338 50.6783 37.9492 50.6783C40.2445 50.6783 42.0916 50.0977 43.4981 48.9286C44.9046 47.7595 45.6079 46.2343 45.6079 44.3606C45.6079 42.487 45.0592 41.0547 43.9618 40.0714C42.8644 39.0959 41.3265 38.3604 39.3403 37.8649C37.3542 37.3771 36.0867 36.9513 35.538 36.5874C34.9893 36.2313 34.7188 35.7435 34.7188 35.1319C34.7188 34.5202 34.943 34.0324 35.3912 33.6608C35.8395 33.2892 36.4576 33.1034 37.2305 33.1034C39.1625 33.1034 41.0405 33.7924 42.8566 35.1706L45.2215 31.7562C44.1859 30.8814 42.9649 30.2 41.5738 29.72C40.175 29.24 38.7839 29 37.3851 29C35.2521 29 33.4746 29.5419 32.0449 30.6181C30.6151 31.6943 29.9041 33.2273 29.9041 35.217C29.9041 37.2068 30.4683 38.6623 31.5967 39.5914C32.725 40.5205 34.5025 41.2715 36.9369 41.8521C38.4748 42.2315 39.5026 42.6031 40.0204 42.9748C40.5382 43.3464 40.801 43.8419 40.801 44.4768C40.801 45.1116 40.5536 45.6071 40.0667 45.9788L40.0513 45.9865Z"
							fill="#013334"
						/>
					</g>
				</g>
			</g>
			<defs>
				<clipPath id="clip0_2287_5169">
					<rect width="80" height="80" rx="40" fill="white" />
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

export const CloseIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="currentColor"
			className={className}
		>
			<path d="M5.002 5.875L5.876 5 19 18.123l-.875.875L5.002 5.875z" />
			<path d="M18.999 5.877l-.875-.875L5 18.125l.875.875L18.999 5.877z" />
		</svg>
	);
};

export const UncheckedIcon: FC<IconProps> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="none"
			className={className}
		>
			<g clipPath="url(#A)" fill="currentColor">
				<path d="M4.001 4.5l.5-.5L12 11.499l-.5.5L4.001 4.5z" />
				<path d="M11.999 4.501l-.5-.5L4 11.5l.5.5 7.499-7.499z" />
			</g>
			<rect
				x=".5"
				y=".5"
				width="15"
				height="15"
				rx="7.5"
				stroke="currentColor"
			/>
			<defs>
				<clipPath id="A">
					<rect width="16" height="16" rx="8" fill="#fff" />
				</clipPath>
			</defs>
		</svg>
	);
};
