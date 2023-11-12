import Navbar from "./_components/navbar";
import Hero, { HeroBackground } from "./_components/hero";
import FeatureOne from "./_components/features-one";
import Form from "./_components/form";
import Footer from "./_components/footer";
import FeatureTwo from "./_components/features-two";
import FeatureThree from "./_components/features-three";
import FeatureFour from "./_components/features-four";
import FeatureFive from "./_components/features-five";
import Feature6 from "./_components/features6";
import Feature7 from "./_components/features7";
import FaqSection from "./_components/faq";
import MarketingBanner from "./_components/marquee";
import Stack from "./_components/stack";
import CookiesModal from "./_components/cookies-modal";
import Menu from "./_components/menu";
import { firstMarqueeData, secondMarqueeData } from "./staticData/marqueesData";
import { EnquireNowIcon } from "./_components/icons";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Stack underLayer={<HeroBackground />}>
				<section
					id="hero"
					className="h-screen min-h-fit flex flex-col items-center relative bg-gradient-to-r from-primary to-transparent overflow-hidden"
				>
					<MarketingBanner data={firstMarqueeData} />
					<Navbar />
					<Hero />
				</section>
			</Stack>
			<section
				id="feature-one"
				className="h-screen min-h-fit flex flex-col items-center overflow-hidden"
			>
				<MarketingBanner data={secondMarqueeData} white />
				<FeatureOne />
			</section>
			<section
				id="feature-two"
				className="h-screen min-h-fit flex flex-col items-center overflow-hidden"
			>
				<FeatureTwo />
			</section>
			<section
				id="feature-three"
				className="h-screen min-h-fit flex flex-col items-center overflow-hidden"
			>
				<FeatureThree />
			</section>
			<section
				id="feature-four"
				className="h-screen min-h-fit flex flex-col items-center overflow-hidden"
			>
				<FeatureFour />
			</section>
			<section
				id="feature-five"
				className="h-screen min-h-fit flex flex-col items-center overflow-hidden"
			>
				<MarketingBanner data={secondMarqueeData} white />
				<FeatureFive />
			</section>
			<section
				id="feature-six"
				className="h-screen min-h-fit flex flex-col items-center overflow-hidden"
			>
				<Feature6 />
			</section>
			<section
				id="feature-seven"
				className="h-screen min-h-fit flex flex-col items-center overflow-hidden"
			>
				<Feature7 />
			</section>
			<section
				id="feature-eight"
				className="h-screen min-h-fit flex flex-col items-center overflow-hidden"
			>
				<FaqSection />
			</section>
			<section
				id="feature-nine"
				className="h-screen min-h-fit flex flex-col items-center overflow-hidden"
			>
				<Form />
			</section>
			<section
				id="feature-ten"
				className="h-screen min-h-fit flex flex-col items-center overflow-hidden"
			>
				<Footer />
			</section>
			<Menu />
			<CookiesModal />
			<EnquireNowIcon className="fixed bottom-12 right-10 z-10" />
		</div>
	);
}

// TODO use proper html tags
