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
						ref={sectionRefs[0]}
						id="hero"
						className={`relative flex min-h-screen flex-col items-center overflow-hidden bg-transparent bg-gradient-to-r from-[#00191a] to-transparent`}
					>
						<MarketingBanner data={darkMarqueeData} dark />
						<Navbar />
						<Hero />
					</section>
					<section
						ref={sectionRefs[1]}
						id="feature-one"
						className={`flex flex-col items-center overflow-hidden`}
					>
						<MarketingBanner data={marqueeData} />
						<div className="h-32 sm:hidden" />
						<FeatureOne />
					</section>
					<section
						ref={sectionRefs[2]}
						id="feature-two"
						className={`flex flex-col items-center overflow-hidden`}
					>
						<FeatureTwo />
					</section>
					<section
						ref={sectionRefs[3]}
						id="feature-three"
						className={`flex flex-col items-center overflow-hidden`}
					>
						<FeatureThree />
					</section>
					<section
						ref={sectionRefs[4]}
						id="feature-four"
						className={`flex flex-col items-center overflow-hidden`}
					>
						<div className="min-h-[1rem] grow" />
						<FeatureFour />
						<div className="min-h-[1rem] grow-2" />
					</section>
					<section
						ref={sectionRefs[5]}
						id="feature-five"
						className={`flex flex-col items-center overflow-hidden`}
					>
						<FeatureFive />
					</section>
					<section
						ref={sectionRefs[6]}
						id="feature-six"
						className={`flex flex-col items-center overflow-hidden`}
					>
						<FeatureSix />
					</section>

					<section
						ref={sectionRefs[7]}
						id="terminal"
						className={`flex flex-col items-center overflow-hidden`}
					>
						<FeatureSeven />
					</section>
					<section
						ref={sectionRefs[8]}
						id="faq"
						className={`flex flex-col items-center overflow-hidden`}
					>
						<FaqSection />
					</section>
					<section
						ref={sectionRefs[9]}
						id="enquire-form"
						className={`relative flex min-h-screen flex-col items-center overflow-hidden bg-primary-950 text-secondary-950`}
					>
						<div className="h-28 sm:hidden" />
						<Form />
					</section>
					<section
						ref={sectionRefs[10]}
						id="contact-us"
						className={`relative flex flex-col items-center overflow-hidden bg-primary-950 pb-0 text-secondary-950`}
					>
						<Slogan />
						<div className="h-28 sm:hidden" />
						<Footer />
					</section>
					<Menu />
					<CookiesModal />
					<EnquireNowIcon className="fixed bottom-12 right-10 z-10 hidden sm:flex" />
				</div>
			</IsMobileContext.Provider>
		</IsIntersectingContext.Provider>
	);
}

// TODO use proper html tags
