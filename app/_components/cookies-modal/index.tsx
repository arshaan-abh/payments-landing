"use client";
import Link from "next/link";
import { useState, type FC, useCallback } from "react";
import Button from "../button";
import Stack from "../stack";
import Image from "next/image";
import cookies from "public/cookies.svg";

interface CookiesModalProps {}

const CookiesModal: FC<CookiesModalProps> = ({}) => {
	const [opened, setOpened] = useState<boolean>(true);

	const open = useCallback(() => {
		setOpened(true);
	}, []);

	const close = useCallback(() => {
		setOpened(false);
	}, []);

	if (opened)
		return (
			<div className="w-72 fixed bottom-12 left-10 z-10 bg-gray-700 rounded-xl p-5 pt-6 flex flex-col gap-2">
				<Stack
					underClassName="flex justify-end items-start -translate-y-6 translate-x-5"
					underLayer={
						<Image
							src={cookies}
							alt="Cookies"
							className="pointer-events-none select-none -mt-10 -mr-6 animate-wiggle w-[7.8125rem]"
						/>
					}
				>
					<div className="text-primary font-bold text-2xl">Cookies</div>
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
