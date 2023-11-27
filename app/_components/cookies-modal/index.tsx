"use client";
import Link from "next/link";
import { useState, type FC, useCallback, useEffect } from "react";
import Button from "../button";
import Stack from "../stack";
import Image from "next/image";
import cookies from "public/cookies.svg";

interface CookiesModalProps {}

const CookiesModal: FC<CookiesModalProps> = ({}) => {
	const [opened, setOpened] = useState<boolean>(false);

	const open = useCallback(() => {
		setOpened(true);
	}, []);

	const close = useCallback(() => {
		setOpened(false);
		document.cookie = "consent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
	}, []);

	useEffect(() => {
		if (!document.cookie.includes("consent=true")) {
			setOpened(true);
		}
	}, []);

	if (opened)
		return (
			<div className="fixed bottom-12 left-10 z-10 flex w-72 flex-col gap-2 rounded-xl bg-gray-700 p-5 pt-6">
				<Stack
					underClassName="flex justify-end items-start -translate-y-6 translate-x-5"
					underLayer={
						<Image
							src={cookies}
							alt="Cookies"
							className="pointer-events-none -mr-6 -mt-10 w-[7.8125rem] animate-wiggle select-none"
						/>
					}
				>
					<div className="text-2xl font-bold text-primary">Cookies</div>
					<p className="text-sm font-normal text-primary">
						We use cookies to make your experience better!
					</p>
					<div className="flex items-center justify-between gap-2">
						<Link
							className="text-sm font-bold text-primary underline"
							href="#privacy-policy"
						>
							Privacy Policy
						</Link>
						<Button clickHandler={close}>Agree</Button>
					</div>
				</Stack>
			</div>
		);
};

export default CookiesModal;
