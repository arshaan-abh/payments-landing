"use client";
import Navbar from "./_components/navbar";
import Hero, { HeroBackground } from "./_components/hero";
import FeatureOne from "./_components/features-one";
import Form from "./_components/form";
import Footer from "./_components/footer";
import FeatureTwo from "./_components/features-two";
import FeatureThree from "./_components/features-three";
import FeatureFour from "./_components/features-four";
import FeatureFive from "./_components/features-five";
import FeatureSix from "./_components/features-six";
import FeatureSeven from "./_components/features-seven";
import FaqSection from "./_components/faq";
import MarketingBanner from "./_components/marquee";
import Stack from "./_components/stack";
import CookiesModal from "./_components/cookies-modal";
import Menu from "./_components/menu";
import { firstMarqueeData, secondMarqueeData } from "./staticData/marqueesData";
import { EnquireNowIcon } from "./_components/icons";
import useIntersectionObserver from "./_hooks/use-intersection-observer";
import useRefs from "./_hooks/use-refs";
import { useEffect, useRef } from "react";

export default function Home() {
	const sectionRefs = useRefs<HTMLDivElement | null>({
		initialValue: null,
		length: 11,
	});

	const isIntersecting = [
		useIntersectionObserver({
			elementRef: sectionRefs[0],
		}),
		useIntersectionObserver({
			elementRef: sectionRefs[1],
		}),
		useIntersectionObserver({
			elementRef: sectionRefs[2],
		}),
		useIntersectionObserver({
			elementRef: sectionRefs[3],
		}),
		useIntersectionObserver({
			elementRef: sectionRefs[4],
		}),
		useIntersectionObserver({
			elementRef: sectionRefs[5],
		}),
		useIntersectionObserver({
			elementRef: sectionRefs[6],
		}),
		useIntersectionObserver({
			elementRef: sectionRefs[7],
		}),
		useIntersectionObserver({
			elementRef: sectionRefs[8],
		}),
		useIntersectionObserver({
			elementRef: sectionRefs[9],
		}),
		 useIntersectionObserver({
			 elementRef: sectionRefs[10],
		 }),
	];

	const intersectingClassNames = "opacity-100";

	return (
		<div className="flex flex-col">
			<Stack underLayer={<HeroBackground />}>
				<section
					style={{
						opacity: isIntersecting[0] === false ? "0" : "1",
					}}
					id="hero"
					className={`relative flex flex-col items-center overflow-hidden bg-gradient-to-r from-primary to-transparent ${
						isIntersecting[0] && intersectingClassNames
					}`}
				>
					<MarketingBanner data={firstMarqueeData} />
					<Navbar />
					<Hero />
				</section>
			</Stack>
			<section
				style={{ opacity: isIntersecting[1] ? "1" : "0" }}
				id="feature-one"
				className="flex flex-col items-center overflow-hidden"
			>
				<MarketingBanner data={secondMarqueeData} white />
				<FeatureOne />
			</section>
			<section
				style={{ opacity: isIntersecting[2] ? "1" : "0" }}
				id="feature-two"
				className="flex flex-col items-center overflow-hidden"
			>
				<FeatureTwo />
			</section>
			<section
				style={{ opacity: isIntersecting[3] ? "1" : "0" }}
				id="feature-three"
				className="flex flex-col items-center overflow-hidden"
			>
				<FeatureThree />
			</section>
			<section
				style={{ opacity: isIntersecting[4] ? "1" : "0" }}
				id="feature-four"
				className="flex flex-col items-center overflow-hidden"
			>
				<FeatureFour />
			</section>
			<section
				style={{ opacity: isIntersecting[5] ? "1" : "0" }}
				id="feature-five"
				className="flex flex-col items-center overflow-hidden"
			>
				<MarketingBanner data={secondMarqueeData} white />
				<FeatureFive />
			</section>
			<section
				style={{ opacity: isIntersecting[6] ? "1" : "0" }}
				id="feature-six"
				className="flex flex-col items-center overflow-hidden"
			>
				<FeatureSix />
			</section>

			<section
				style={{ opacity: isIntersecting[7] ? "1" : "0" }}
				id="feature-seven"
				className="flex flex-col items-center overflow-hidden"
			>
				<FeatureSeven />
			</section>
			<section
				style={{ opacity: isIntersecting[8] ? "1" : "0" }}
				id="feature-eight"
				className="flex flex-col items-center overflow-hidden"
			>
				<MarketingBanner data={secondMarqueeData} white />
				<FaqSection />
			</section>
			<section
				style={{ opacity: isIntersecting[9] ? "1" : "0" }}
				id="feature-nine"
				className="flex flex-col items-center overflow-hidden bg-primary text-secondary"
			>
				<Form />
			</section>
			<section
				style={{ opacity: isIntersecting[10] ? "1" : "0" }}
				id="feature-ten"
				className="flex flex-col items-center overflow-hidden bg-primary text-secondary"
			>
				<Footer />
			</section>
			<Menu />
			<CookiesModal />
			<EnquireNowIcon className="fixed bottom-12 right-10 z-10 hidden sm:flex" />
			{Array.from(Array(11), (_, index) => (
				<div
					key={index}
					className="section-shadow"
					ref={sectionRefs[index]}
				></div>
			))}
		</div>
	);
}

// TODO use proper html tags
