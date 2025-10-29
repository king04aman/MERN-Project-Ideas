import { Container } from "@/components/base/Container";
import HeroCard from "@/components/cards/HeroCard";
import Projects from "@/components/projects/Projects";

const page = () => {
	return (
		<div>
			<Container maxWidth="md" className="px-4 sm:px-12 lg:px-10">
				<HeroCard className="mt-8 mb-5" />

				<Projects className="mt-5 " />
			</Container>
		</div>
	);
};

export default page;
