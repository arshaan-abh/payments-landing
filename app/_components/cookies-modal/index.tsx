import Link from "next/link";
import { useState, type FC, useCallback, useEffect } from "react";
import Button from "../button";

interface CookiesModalProps {}

const CookiesModal: FC<CookiesModalProps> = ({}) => {
	const [opened, setOpened] = useState<boolean>(false);

	const open = useCallback(() => {
		setOpened(true);
	}, []);

	const close = useCallback(() => {
		setOpened(false);
		document.cookie =
			"consent_cookie=consent=true; SameSite=Lax; Path=/; Expires=Fri, 31 Dec 9999 23:59:59 GMT";
	}, []);

	useEffect(() => {
		if (!document.cookie.includes("consent=true")) {
			setOpened(true);
		}
	}, []);

	if (opened)
		return (
			<div className="fixed bottom-6 left-6 z-10 flex w-72 flex-col gap-1 rounded-xl bg-white p-4 pl-6">
				<div className="text-2xl font-bold text-primary-950">Cookies</div>
				<p className="mb-3 text-sm font-normal text-primary-950">
					We use cookies to ensure you get the best experience on our website!
				</p>
				<div className="flex items-center justify-between gap-2">
					<Link
						className="text-sm font-bold text-primary-950 underline"
						href="#privacy-policy"
					>
						Privacy Policy
					</Link>
					<Button dark clickHandler={close}>
						Agree
					</Button>
				</div>
			</div>
		);
};

export default CookiesModal;
