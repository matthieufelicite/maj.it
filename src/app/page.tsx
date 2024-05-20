import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Features from '@/components/Features'
import Team from '@/components/Team'
import Hero from '@/components/Hero'

export default function Page() {

	return (

		<div className="bg-white">

			<Header />

			<main className="isolate">

				<Hero />

				<Features />

				<Team />
			</main>

			<Footer />
		</div >
	);
}
