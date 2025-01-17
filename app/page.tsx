import Image from "next/image";
import { Container } from "./ui/container";
import { Caption, Headline, Hero } from "./ui/hero";
import { Button } from "./ui/button";
import { ArrowRight } from "./ui/icons/arrow-right";

export default function Home() {
	return (
		<main>
			<Container className="bg-page-main pt-[calc(var(--header-height)+24px)] border-x border-dashed border-[#fff]/[.1] ">
				<Hero>
					<div className="flex flex-col items-center max-w-[80rem] mx-auto">
						<Button
							href="#"
							variant={"secondary"}
							size={"sm"}
							className="group"
						>
							Acme v1.0.0 soon{" "}
							<ArrowRight className="ml-3 h-3 group-hover:translate-x-1 w-3" />
						</Button>
						<Headline className="mb-4">
							Headline wraps a minimum of 2 lines
						</Headline>
						<Caption className="mb-8">
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</Caption>
						<Button href={"#"} size={"lg"}>
							Get started
						</Button>
					</div>
				</Hero>
			</Container>
		</main>
	);
}
