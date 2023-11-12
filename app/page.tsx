import Navbar from "./_components/navbar";
import Hero, { HeroBackground } from "./_components/hero";
import FeatureOne from "./_components/features-one";
import Form from "./_components/form";
import Footer from "./_components/footer";
import FeatureTwo from "./_components/features-two";
import Feature3 from "./_components/features3";
import Feature4 from "./_components/features4";
import Feature5 from "./_components/features5";
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
			<section className="h-screen min-h-fit overflow-hidden">
				<Feature3 />
			</section>
			<section className="h-screen min-h-fit overflow-hidden">
				<Feature4 />
			</section>
			<section className="h-screen min-h-fit overflow-hidden">
				<Feature5 />
			</section>
			<section className="h-screen min-h-fit overflow-hidden">
				<Feature6 />
			</section>
			<section className="h-screen min-h-fit overflow-hidden">
				<Feature7 />
			</section>
			<section className="h-screen min-h-fit overflow-hidden">
				<FaqSection />
			</section>
			<section className="h-screen min-h-fit overflow-hidden">
				<Form />
			</section>
			<section className="h-screen min-h-fit overflow-hidden">
				<Footer />
			</section>
			<Menu />
			<CookiesModal />
			<EnquireNowIcon className="fixed bottom-12 right-10 z-10" />
		</div>
	);
}

// TODO use proper html tags
