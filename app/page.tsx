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
import useResponsiveState from "./_components/features-one/useResponsiveState";
import { IsIntersectingContext, IsMobileContext } from "./_contexts/contexts";
import Slogan from "./_components/footer/Slogan";

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
					<section
						style={{
							opacity: isMobile ? 1 : isIntersecting[0],
						}}
						{...(isMobile === true ? { id: "hero" } : null)}
						className={`relative flex min-h-screen flex-col items-center overflow-hidden bg-transparent bg-gradient-to-r from-[#00191a] to-transparent ${
							isMobile ? "" : isIntersecting[0] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<MarketingBanner data={darkMarqueeData} dark />
						<Navbar />
						<Hero />
					</section>
					<section
						style={{ opacity: isMobile ? 1 : isIntersecting[1] }}
						{...(isMobile === true ? { id: "feature-one" } : null)}
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[1] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<MarketingBanner data={marqueeData} />
						<div className="h-32 sm:hidden" />
						<FeatureOne />
					</section>
					<section
						style={{ opacity: isMobile ? 1 : isIntersecting[2] }}
						{...(isMobile === true ? { id: "feature-two" } : null)}
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[2] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<FeatureTwo />
					</section>
					<section
						style={{ opacity: isMobile ? 1 : isIntersecting[3] }}
						{...(isMobile === true ? { id: "feature-three" } : null)}
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[3] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<FeatureThree />
					</section>
					<section
						style={{ opacity: isMobile ? 1 : isIntersecting[4] }}
						{...(isMobile === true ? { id: "feature-four" } : null)}
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[4] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<div className="min-h-[1rem] grow" />
						<FeatureFour />
						<div className="min-h-[1rem] grow-2" />
					</section>
					<section
						style={{ opacity: isMobile ? 1 : isIntersecting[5] }}
						{...(isMobile === true ? { id: "feature-five" } : null)}
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[5] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<FeatureFive />
					</section>
					<section
						style={{ opacity: isMobile ? 1 : isIntersecting[6] }}
						{...(isMobile === true ? { id: "feature-six" } : null)}
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[6] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<FeatureSix />
					</section>

					<section
						style={{ opacity: isMobile ? 1 : isIntersecting[7] }}
						{...(isMobile === true ? { id: "terminal" } : null)}
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[7] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<FeatureSeven />
					</section>
					<section
						style={{ opacity: isMobile ? 1 : isIntersecting[8] }}
						{...(isMobile === true ? { id: "faq" } : null)}
						className={`flex flex-col items-center overflow-hidden ${
							isMobile ? "" : isIntersecting[8] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<FaqSection />
					</section>
					<section
						style={{ opacity: isMobile ? 1 : isIntersecting[9] }}
						{...(isMobile === true ? { id: "enquire-form" } : null)}
						className={`relative flex min-h-screen flex-col items-center overflow-hidden bg-primary-950 text-secondary-950 ${
							isMobile ? "" : isIntersecting[9] > 0 ? "" : "pointer-events-none"
						}`}
					>
						<div className="h-28 sm:hidden" />
						<Form />
					</section>
					<section
						style={{ opacity: isMobile ? 1 : isIntersecting[10] }}
						{...(isMobile === true ? { id: "contact-us" } : null)}
						className={`relative flex flex-col items-center overflow-hidden bg-primary-950 pb-0 text-secondary-950 ${
							isMobile
								? ""
								: isIntersecting[10] > 0
								  ? ""
								  : "pointer-events-none"
						}`}
					>
						<Slogan />
						<div className="h-28 sm:hidden" />
						<Footer />
					</section>
					<Menu />
					<CookiesModal />
					<EnquireNowIcon className="fixed bottom-12 right-10 z-10 hidden sm:flex" />
					{Array.from(Array(11), (_, index) => (
						<div
							{...(isMobile === false
								? {
										id:
											index === 0
												? "hero"
												: index === 1
												  ? "feature-one"
												  : index === 2
												    ? "feature-two"
												    : index === 3
												      ? "feature-three"
												      : index === 4
												        ? "feature-four"
												        : index === 5
												          ? "feature-five"
												          : index === 6
												            ? "feature-six"
												            : index === 7
												              ? "terminal"
												              : index === 8
												                ? "faq"
												                : index === 9
												                  ? "enquire-form"
												                  : "contact-us",
								  }
								: null)}
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
