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
import CookiesModal from "./_components/cookies-modal";
import Menu from "./_components/menu";
import { darkMarqueeData, marqueeData } from "./staticData/marqueesData";
import { EnquireNowIcon } from "./_components/icons";
import useIntersectionObserver from "./_hooks/use-intersection-observer";
import useRefs from "./_hooks/use-refs";
import Grid from "./_components/grid";
import useResponsiveState from "./_components/features-one/useResponsiveState";
import { IsIntersectingContext, IsMobileContext } from "./_contexts/contexts";
import { motion } from "framer-motion";

export default function Home() {
	const isMobile = useResponsiveState<boolean>({
		defaultState: true,
		breakpoints: [{ breakpoint: 640, state: false }],
	});

	const sectionRefs = useRefs<HTMLDivElement | null>({
		initialValue: null,
		length: 11,
	});

	const isIntersecting = useIntersectionObserver<HTMLDivElement>({
		elementRefs: sectionRefs,
	});

	return (
		<IsIntersectingContext.Provider value={isIntersecting}>
			<IsMobileContext.Provider value={isMobile}>
				<div className="flex flex-col">
					<HeroBackground />
					{/* <Grid /> */}
					<motion.section
						style={{
							opacity: isMobile ? 1 : isIntersecting[0],
						}}
						id="hero"
						className={`relative flex min-h-screen flex-col items-center overflow-hidden bg-transparent bg-gradient-to-r from-[#00191a] to-transparent ${
							isMobile ? "" : isIntersecting[0] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<MarketingBanner data={darkMarqueeData} dark />
						<Navbar />
						<div className="flex min-h-[1rem] grow sm:hidden" />
						<Hero />
						<div className="flex min-h-[1rem] grow-2 sm:hidden" />
					</motion.section>
					<motion.section
						style={{ opacity: isMobile ? 1 : isIntersecting[1] }}
						id="feature-one"
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[1] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<MarketingBanner data={marqueeData} />
						<FeatureOne />
					</motion.section>
					<motion.section
						style={{ opacity: isMobile ? 1 : isIntersecting[2] }}
						id="feature-two"
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[2] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<FeatureTwo />
					</motion.section>
					<motion.section
						style={{ opacity: isMobile ? 1 : isIntersecting[3] }}
						id="feature-three"
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[3] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<FeatureThree />
					</motion.section>
					<motion.section
						style={{ opacity: isMobile ? 1 : isIntersecting[4] }}
						id="feature-four"
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[4] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<FeatureFour />
					</motion.section>
					<motion.section
						style={{ opacity: isMobile ? 1 : isIntersecting[5] }}
						id="feature-five"
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[5] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<MarketingBanner data={marqueeData} />
						<FeatureFive />
					</motion.section>
					<motion.section
						style={{ opacity: isMobile ? 1 : isIntersecting[6] }}
						id="feature-six"
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[6] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<FeatureSix />
					</motion.section>

					<motion.section
						style={{ opacity: isMobile ? 1 : isIntersecting[7] }}
						id="feature-seven"
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[7] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<FeatureSeven />
					</motion.section>
					<motion.section
						style={{ opacity: isMobile ? 1 : isIntersecting[8] }}
						id="feature-eight"
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[8] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<MarketingBanner data={marqueeData} />
						<FaqSection />
					</motion.section>
					<motion.section
						style={{ opacity: isMobile ? 1 : isIntersecting[9] }}
						id="feature-nine"
						className={`flex flex-col items-center overflow-hidden bg-primary-950 text-secondary-950 ${
							isMobile ? "" : isIntersecting[9] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<Form />
					</motion.section>
					<motion.section
						style={{ opacity: isMobile ? 1 : isIntersecting[10] }}
						id="feature-ten"
						className={`flex flex-col items-center overflow-hidden bg-primary-950 text-secondary-950 ${
							isMobile
								? ""
								: isIntersecting[10] > 0
								? ""
								: "pointer-events-none"
						}`}
					>
						<Footer />
					</motion.section>
					<Menu />
					<CookiesModal />
					<EnquireNowIcon className="fixed bottom-12 right-10 z-10 hidden sm:flex" />
					{Array.from(Array(11), (_, index) => (
						<div
							key={index}
							className="section-shadow pointer-events-none"
							ref={sectionRefs[index]}
						></div>
					))}
				</div>
			</IsMobileContext.Provider>
		</IsIntersectingContext.Provider>
	);
}

// TODO use proper html tags
