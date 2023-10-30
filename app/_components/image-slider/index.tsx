import React, { CSSProperties } from "react";
import Calc from "../../../public/vardan-papikyan-3Q4H1BQAvVo-unsplash1 2.svg";
import Cache from "../../../public/euro-banknotes-white-one-hundred-background-monetary-denominationa 1.svg";
import Coin from "../../../public/decreasing-piles-coin-money-with-arrow44 2.svg";
import Image from "next/image";
const images = [Calc].map((image) => ({
	id: crypto.randomUUID(),
	image,
}));
const images2 = [Cache].map((image) => ({
	id: crypto.randomUUID(),
	image,
}));
const images3 = [Coin].map((image) => ({
	id: crypto.randomUUID(),
	image,
}));

const speed: string = "10000";

const ImageSlider = () => {
	return (
		<div className="inner">
			<div className="wrapper">
				<section
					style={{ "--speed": `${speed}ms` } as CSSProperties}
					className="w-[500px]"
				>
					{images.map(({ id, image }) => (
						<div className="image flex" key={id}>
							<div>
								<Image src={image} alt={id} />
							</div>
							<div className="h-full pt-5 pl-3">
								<span className="text-primery text-xl font-bold">
									Marketing Banner
								</span>
							</div>
						</div>
					))}
				</section>
				<section
					style={{ "--speed": `${speed}ms` } as CSSProperties}
					className="w-[500px]"
				>
					{images2.map(({ id, image }) => (
						<div className="image flex" key={id}>
							<div>
								<Image src={image} alt={id} />
							</div>
							<div className="h-full pt-5 pl-3">
								<span className="text-primery text-xl font-bold">
									Marketing Banner
								</span>
							</div>
						</div>
					))}
				</section>
				<section
					style={{ "--speed": `${speed}ms` } as CSSProperties}
					className="w-[500px]"
				>
					{images3.map(({ id, image }) => (
						<div className="image flex" key={id}>
							<div>
								<Image src={image} alt={id} />
							</div>
							<div className="h-full pt-5 pl-3">
								<span className="text-primery text-xl font-bold">
									Marketing Banner
								</span>
							</div>
						</div>
					))}
				</section>
				<section
					style={{ "--speed": `${speed}ms` } as CSSProperties}
					className="w-[500px]"
				>
					{images.map(({ id, image }) => (
						<div className="image flex" key={id}>
							<div>
								<Image src={image} alt={id} />
							</div>
							<div className="h-full pt-5 pl-3">
								<span className="text-primery text-xl font-bold">
									Marketing Banner
								</span>
							</div>
						</div>
					))}
				</section>
				<section
					style={{ "--speed": `${speed}ms` } as CSSProperties}
					className="w-[500px]"
				>
					{images2.map(({ id, image }) => (
						<div className="image flex" key={id}>
							<div>
								<Image src={image} alt={id} />
							</div>
							<div className="h-full pt-5 pl-3">
								<span className="text-primery text-xl font-bold">
									Marketing Banner
								</span>
							</div>
						</div>
					))}
				</section>
				<section
					style={{ "--speed": `${speed}ms` } as CSSProperties}
					className="w-[500px]"
				>
					{images3.map(({ id, image }) => (
						<div className="flex" key={id}>
							<div>
								<Image src={image} alt={id} />
							</div>
							<div className="h-full pt-5 pl-3">
								<span className="text-primery text-xl font-bold">
									Marketing Banner
								</span>
							</div>
						</div>
					))}
				</section>
			</div>
		</div>
	);
};

export default ImageSlider;
