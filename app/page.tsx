import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Feature1 from "./_components/features1";
import Form from "./_components/form";
import Footer from "./_components/footer";
import Feature2 from "./_components/features2";
import Feature3 from "./_components/features3";
import Feature4 from "./_components/features4";
import Feature5 from "./_components/features5";
import Feature6 from "./_components/features6";
import Feature7 from "./_components/features7";
import FaqSection from "./_components/faq";
import MarketingBanner from "./_components/marketing-banner";
import Stack from "./_components/stack";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Stack
				underLayer={
					<video
						className="w-full h-full object-cover grayscale"
						autoPlay
						loop
						muted
					>
						<source src="hero-background.mp4" type="video/mp4" />
					</video>
				}
			>
				<section
					id="hero"
					className="h-screen min-h-fit flex flex-col items-center relative bg-gradient-to-r from-primary to-transparent"
				>
					<MarketingBanner />
					<Navbar />
					<Hero />
				</section>
			</Stack>
			{/* <section className="h-screen min-h-fit">
				<Feature1 />
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
			</section> */}
		</div>
	);
}
