"use client";
import Header from "./_components/header";
import Hero from "./_components/hero";
import Feature1 from "./_components/features1";
import Form from "./_components/form";
import Footer from "./_components/footer";
import Feature2 from "./_components/features2";
import Feature3 from "./_components/features3";
import Feature4 from "./_components/features4";
import Feature5 from "./_components/featurs5";
import Feature6 from "./_components/features6";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<>
			<header></header>
			<main className="min-h-screen mx-5 lg:mx-[80px] xl:px-[120px] max-w-[1440px] flex flex-col justify-center bg-secondary">
				<Header />

				<motion.section
					className="h-screen mb-5"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 6 }}
					viewport={{ once: true }}
				>
					<Hero />
				</motion.section>
				<motion.section
					className="mb-5"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 6 }}
					viewport={{ once: true }}
				>
					<Feature1 />
				</motion.section>
				<motion.section
					className="mb-5"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 6 }}
					viewport={{ once: true }}
				>
					<Feature2 />
				</motion.section>
				<motion.section
					className="mb-5"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 6 }}
					viewport={{ once: true }}
				>
					<Feature3 />
				</motion.section>
				<motion.section
					className="mb-5"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 6 }}
					viewport={{ once: true }}
				>
					<Feature4 />
				</motion.section>
				<motion.section
					className="mb-5"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 6 }}
					viewport={{ once: true }}
				>
					<Feature5 />
				</motion.section>
				<motion.section
					className="mb-5"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 6 }}
					viewport={{ once: true }}
				>
					<Feature6 />
				</motion.section>
				<motion.section
					className="mb-5"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 6 }}
					viewport={{ once: true }}
				>
					<Form />
				</motion.section>
			</main>
		</>
	);
}
