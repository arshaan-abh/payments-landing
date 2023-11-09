import Navbar from "./_components/navbar";
import Hero, { HeroBackground } from "./_components/hero";
import FeatureOne from "./_components/features-one";
import Form from "./_components/form";
import Footer from "./_components/footer";
import Feature2 from "./_components/features2";
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
					className="h-screen min-h-fit flex flex-col items-center relative bg-gradient-to-r from-primary to-transparent"
				>
					<MarketingBanner data={firstMarqueeData} />
					<Navbar />
					<Hero />
				</section>
			</Stack>
			<section
				id="feature-one"
				className="h-screen min-h-fit flex flex-col items-center"
			>
				<MarketingBanner data={secondMarqueeData} white />
				<FeatureOne />
			</section>
			<section className="h-screen min-h-fit">
				<Feature2 />
			</section>
			<section className="h-screen min-h-fit">
				<Feature3 />
			</section>
			<section className="h-screen min-h-fit">
				<Feature4 />
			</section>
			<section className="h-screen min-h-fit">
				<Feature5 />
			</section>
			<section className="h-screen min-h-fit">
				<Feature6 />
			</section>
			<section className="h-screen min-h-fit">
				<Feature7 />
			</section>
			<section className="h-screen min-h-fit">
				<FaqSection />
			</section>
			<section className="h-screen min-h-fit">
				<Form />
			</section>
			<section className="h-screen min-h-fit">
				<Footer />
			</section>
			<Menu />
			<CookiesModal />
			<EnquireNowIcon className="fixed bottom-12 right-10 z-10" />
		</div>
	);
}

// TODO use proper html tags
